import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import mdx from "@mdx-js/rollup";
import rehypeHighlight from "rehype-highlight";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import remarkGfm from "remark-gfm";
import remarkFrontmatter from "remark-frontmatter";
import glob from "vite-plugin-glob";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    mdx({
      rehypePlugins: [rehypeHighlight, rehypeSlug, rehypeAutolinkHeadings],
      remarkPlugins: [remarkGfm, remarkFrontmatter],
    }),
    glob(),
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
