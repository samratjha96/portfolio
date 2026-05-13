import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import mdx from "@mdx-js/rollup";
import rehypeHighlight from "rehype-highlight";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import remarkGfm from "remark-gfm";
import remarkFrontmatter from "remark-frontmatter";
import glob from "vite-plugin-glob";
import fs from "node:fs";
import path from "node:path";

// Serves standalone HTML pages from public/<slug>/index.html, bypassing React Router.
const staticPages = (slugs) => {
  const middleware = (root) => (req, res, next) => {
    const url = req.url || "";

    for (const slug of slugs) {
      if (url === `/${slug}`) {
        res.statusCode = 302;
        res.setHeader("Location", `/${slug}/`);
        res.end();
        return;
      }

      if (url === `/${slug}/` || url === `/${slug}/index.html`) {
        const filePath = path.resolve(root, `public/${slug}/index.html`);
        try {
          const html = fs.readFileSync(filePath, "utf8");
          res.statusCode = 200;
          res.setHeader("Content-Type", "text/html; charset=utf-8");
          res.end(html);
        } catch {
          res.statusCode = 404;
          res.setHeader("Content-Type", "text/plain; charset=utf-8");
          res.end(`Page not found: /${slug}/`);
        }
        return;
      }
    }

    next();
  };

  return {
    name: "static-pages",
    configureServer(server) {
      server.middlewares.use(middleware(server.config.root));
    },
    configurePreviewServer(server) {
      server.middlewares.use(middleware(server.config.root));
    },
  };
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    mdx({
      rehypePlugins: [rehypeHighlight, rehypeSlug, rehypeAutolinkHeadings],
      remarkPlugins: [remarkGfm, remarkFrontmatter],
    }),
    glob(),
    staticPages(["ai", "learn"]),
  ],
  build: {
    rollupOptions: {
      output: {
        // Separate Three.js and related 3D libraries into their own chunk
        manualChunks: {
          three: ["three", "@react-three/fiber", "@react-three/drei"],
          vendor: ["react", "react-dom", "react-router-dom", "framer-motion"],
        },
      },
    },
    // Target modern browsers for smaller bundle
    target: "es2020",
  },
});
