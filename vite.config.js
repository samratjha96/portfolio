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

// Exports `toc` ([{ id, text, depth }]) from each MDX post so the table of
// contents is known at render time and matches rehype-slug's ids.
const rehypeExportToc = () => (tree) => {
  const text = (node) =>
    node.type === "text" ? node.value : (node.children || []).map(text).join("");
  const toc = [];
  const walk = (node) => {
    if (node.type === "element" && /^h[23]$/.test(node.tagName) && node.properties?.id) {
      toc.push({ id: node.properties.id, text: text(node).trim(), depth: Number(node.tagName[1]) });
      return;
    }
    (node.children || []).forEach(walk);
  };
  walk(tree);

  const literal = (value) => ({ type: "Literal", value });
  const entry = (item) => ({
    type: "ObjectExpression",
    properties: Object.entries(item).map(([key, value]) => ({
      type: "Property",
      kind: "init",
      method: false,
      shorthand: false,
      computed: false,
      key: { type: "Identifier", name: key },
      value: literal(value),
    })),
  });
  tree.children.unshift({
    type: "mdxjsEsm",
    value: "",
    data: {
      estree: {
        type: "Program",
        sourceType: "module",
        body: [
          {
            type: "ExportNamedDeclaration",
            specifiers: [],
            source: null,
            declaration: {
              type: "VariableDeclaration",
              kind: "const",
              declarations: [
                {
                  type: "VariableDeclarator",
                  id: { type: "Identifier", name: "toc" },
                  init: { type: "ArrayExpression", elements: toc.map(entry) },
                },
              ],
            },
          },
        ],
      },
    },
  });
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    mdx({
      rehypePlugins: [rehypeHighlight, rehypeSlug, rehypeAutolinkHeadings, rehypeExportToc],
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
