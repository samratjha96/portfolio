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

const aiStaticPage = () => {
  const serveAiIndex = (root, res) => {
    const filePath = path.resolve(root, "public/ai/index.html");

    try {
      const html = fs.readFileSync(filePath, "utf8");
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/html; charset=utf-8");
      res.end(html);
    } catch {
      res.statusCode = 404;
      res.setHeader("Content-Type", "text/plain; charset=utf-8");
      res.end("AI page not found");
    }
  };

  const middleware = (root) => (req, res, next) => {
    const url = req.url || "";

    if (url === "/ai") {
      res.statusCode = 302;
      res.setHeader("Location", "/ai/");
      res.end();
      return;
    }

    // Only handle the directory URL; let Vite serve /ai/* assets normally.
    if (url === "/ai/" || url === "/ai/index.html") {
      serveAiIndex(root, res);
      return;
    }

    next();
  };

  return {
    name: "ai-static-page",
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
    aiStaticPage(),
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
