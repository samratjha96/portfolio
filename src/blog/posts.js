// ABOUTME: Single source of post metadata, built synchronously from raw MDX
// ABOUTME: so prerendered pages hydrate without a loading state

import { extractFrontMatter, generateExcerpt, getSlugFromFilename } from "../utils/mdxUtils";

const WORDS_PER_MINUTE = 230;

const rawModules = import.meta.glob("./posts/*.mdx", { as: "raw", eager: true });
const contentModules = import.meta.glob("./posts/*.mdx");

export const posts = Object.entries(rawModules)
  .map(([path, raw]) => {
    const frontMatter = extractFrontMatter(raw);
    const markdown = raw.replace(/^---[\s\S]*?---\s*/, "");
    return {
      slug: getSlugFromFilename(path),
      path,
      title: frontMatter.title || "Untitled Post",
      date: frontMatter.date || "",
      description: frontMatter.description || generateExcerpt(raw, 160),
      tags: frontMatter.tags || [],
      minutes: Math.max(1, Math.round(markdown.split(/\s+/).length / WORDS_PER_MINUTE)),
      markdown,
    };
  })
  .sort((a, b) => new Date(b.date) - new Date(a.date));

export const getPost = (slug) => posts.find((post) => post.slug === slug);

// Compiled MDX modules ({ default: Component, toc: [{ id, text, depth }] }) by slug.
// main.jsx preloads the current post before hydrating so the first render matches the prerender.
const loaded = {};
export const loadPostContent = async (post) =>
  (loaded[post.slug] = await contentModules[post.path]());
export const getLoadedContent = (post) => loaded[post.slug];

// Dates are ISO calendar days; format in UTC so they don't shift a day west of GMT.
export const formatDate = (date) =>
  date
    ? new Date(date).toLocaleDateString("en-US", {
        month: "short",
        day: "2-digit",
        year: "numeric",
        timeZone: "UTC",
      })
    : "";
