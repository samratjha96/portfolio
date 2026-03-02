// ABOUTME: Pre-renders React SPA pages to static HTML for SEO
// ABOUTME: Runs after vite build, uses Puppeteer to capture rendered HTML

import puppeteer from "puppeteer";
import { createServer } from "http";
import {
  readFileSync,
  writeFileSync,
  mkdirSync,
  existsSync,
  readdirSync,
} from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST_DIR = join(__dirname, "../dist");
const PORT = 45678;

// Get blog slugs from the posts directory
function getBlogSlugs() {
  const postsDir = join(__dirname, "../src/blog/posts");
  if (!existsSync(postsDir)) return [];

  return readdirSync(postsDir)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(".mdx", ""));
}

// Routes to prerender (trailing slashes match canonical URLs and avoid Apache directory redirects)
const routes = ["/", "/blog/", ...getBlogSlugs().map((slug) => `/blog/${slug}/`)];

// Simple static file server
function startServer() {
  return new Promise((resolve) => {
    const server = createServer((req, res) => {
      let filePath = join(DIST_DIR, req.url === "/" ? "index.html" : req.url);

      // For SPA routes, serve index.html
      if (!existsSync(filePath) || !filePath.includes(".")) {
        filePath = join(DIST_DIR, "index.html");
      }

      try {
        const content = readFileSync(filePath);
        const ext = filePath.split(".").pop();
        const contentTypes = {
          html: "text/html",
          js: "application/javascript",
          css: "text/css",
          svg: "image/svg+xml",
          png: "image/png",
          jpg: "image/jpeg",
          webp: "image/webp",
          json: "application/json",
        };
        res.setHeader(
          "Content-Type",
          contentTypes[ext] || "application/octet-stream",
        );
        res.end(content);
      } catch {
        res.statusCode = 404;
        res.end("Not found");
      }
    });

    server.listen(PORT, () => resolve(server));
  });
}

async function prerender() {
  console.log("Starting prerender...");
  console.log(`Routes to prerender: ${routes.length}`);

  const server = await startServer();
  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  try {
    for (const route of routes) {
      console.log(`Prerendering: ${route}`);

      const page = await browser.newPage();

      // Block unnecessary resources for faster rendering
      await page.setRequestInterception(true);
      page.on("request", (req) => {
        const type = req.resourceType();
        if (["image", "font", "media"].includes(type)) {
          req.abort();
        } else {
          req.continue();
        }
      });

      await page.goto(`http://localhost:${PORT}${route}`, {
        waitUntil: "networkidle0",
        timeout: 30000,
      });

      // Wait a bit for React to fully render
      await page.waitForSelector("#root", { timeout: 10000 });
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Remove static index.html meta tags that react-helmet-async has overridden.
      // Helmet appends tags with data-rh="true" but doesn't remove the static ones,
      // causing duplicate description, canonical, og:url, etc. on every page.
      await page.evaluate(() => {
        const rhElements = document.querySelectorAll("[data-rh]");
        if (rhElements.length === 0) return;

        const overriddenNames = new Set();
        const overriddenProperties = new Set();
        let hasCanonical = false;

        rhElements.forEach((el) => {
          const name = el.getAttribute("name");
          const property = el.getAttribute("property");
          const rel = el.getAttribute("rel");
          if (name) overriddenNames.add(name);
          if (property) overriddenProperties.add(property);
          if (rel === "canonical") hasCanonical = true;
        });

        const toRemove = [];
        document.head.querySelectorAll("meta, link").forEach((el) => {
          if (el.hasAttribute("data-rh")) return;
          const name = el.getAttribute("name");
          const property = el.getAttribute("property");
          const rel = el.getAttribute("rel");
          if (name && overriddenNames.has(name)) toRemove.push(el);
          if (property && overriddenProperties.has(property)) toRemove.push(el);
          if (rel === "canonical" && hasCanonical) toRemove.push(el);
        });

        toRemove.forEach((el) => el.remove());
      });

      // Get the rendered HTML
      const html = await page.content();

      // Determine output path
      let outputPath;
      if (route === "/") {
        outputPath = join(DIST_DIR, "index.html");
      } else {
        const dir = join(DIST_DIR, route);
        if (!existsSync(dir)) {
          mkdirSync(dir, { recursive: true });
        }
        outputPath = join(dir, "index.html");
      }

      writeFileSync(outputPath, html);
      console.log(`  -> Written to: ${outputPath}`);

      await page.close();
    }

    console.log("\nPrerendering complete!");
  } finally {
    await browser.close();
    server.close();
  }
}

prerender().catch(console.error);
