import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import mdx from "@mdx-js/rollup";
import rehypeHighlight from "rehype-highlight";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import remarkGfm from "remark-gfm";
import glob from "vite-plugin-glob";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    mdx({
      rehypePlugins: [rehypeHighlight, rehypeSlug, rehypeAutolinkHeadings],
      remarkPlugins: [remarkGfm],
    }),
    glob(),
  ],
});
