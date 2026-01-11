// ABOUTME: Generates sitemap.xml from MDX blog posts and static pages
// ABOUTME: Run automatically before build via npm scripts

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SITE_URL = "https://www.samratjha.com";
const POSTS_DIR = path.join(__dirname, "../src/blog/posts");
const OUTPUT_PATH = path.join(__dirname, "../public/sitemap.xml");

// Extract frontmatter from MDX content
function extractFrontMatter(content) {
  const match = content.match(/^---([\s\S]*?)---/);
  if (!match) return {};

  const frontMatter = {};
  const lines = match[1].trim().split("\n");

  for (const line of lines) {
    const kvMatch = line.match(/^(\w+):\s*(.+)/);
    if (kvMatch) {
      let [, key, value] = kvMatch;
      value = value.trim().replace(/^["']|["']$/g, "");
      frontMatter[key] = value;
    }
  }

  return frontMatter;
}

// Get slug from filename
function getSlugFromFilename(filename) {
  return path.basename(filename, ".mdx");
}

// Format date as YYYY-MM-DD
function formatDate(dateStr) {
  if (!dateStr) return null;
  const date = new Date(dateStr);
  return date.toISOString().split("T")[0];
}

// Generate sitemap XML
function generateSitemap() {
  const posts = [];

  // Read all MDX files
  const files = fs.readdirSync(POSTS_DIR).filter((f) => f.endsWith(".mdx"));

  for (const file of files) {
    const filePath = path.join(POSTS_DIR, file);
    const content = fs.readFileSync(filePath, "utf-8");
    const frontMatter = extractFrontMatter(content);
    const slug = getSlugFromFilename(file);

    posts.push({
      slug,
      date: frontMatter.date,
      lastmod: formatDate(frontMatter.date),
    });
  }

  // Sort by date (newest first)
  posts.sort((a, b) => new Date(b.date) - new Date(a.date));

  // Build XML
  const urls = [
    // Static pages
    {
      loc: `${SITE_URL}/`,
      changefreq: "monthly",
      priority: "1.0",
    },
    {
      loc: `${SITE_URL}/blog/`,
      changefreq: "weekly",
      priority: "0.9",
    },
    // Blog posts
    ...posts.map((post) => ({
      loc: `${SITE_URL}/blog/${post.slug}/`,
      lastmod: post.lastmod,
      changefreq: "monthly",
      priority: "0.8",
    })),
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (url) => `  <url>
    <loc>${url.loc}</loc>${url.lastmod ? `\n    <lastmod>${url.lastmod}</lastmod>` : ""}
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`,
  )
  .join("\n")}
</urlset>
`;

  fs.writeFileSync(OUTPUT_PATH, xml);
  console.log(`Sitemap generated with ${urls.length} URLs -> ${OUTPUT_PATH}`);
}

generateSitemap();
