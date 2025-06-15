import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import BlogPostLayout from "./BlogPostLayout";
import "highlight.js/styles/atom-one-dark.css"; // Syntax highlighting theme
import { extractFrontMatter, getSlugFromFilename } from "../../utils/mdxUtils";

const BlogPost = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    async function loadPost() {
      try {
        setLoading(true);

        // Get all MDX files
        const mdxModules = import.meta.glob("../../blog/posts/*.mdx");

        // Find the module that matches the current slug
        const mdxPaths = Object.keys(mdxModules);
        const matchingPath = mdxPaths.find((path) => getSlugFromFilename(path) === slug);

        if (!matchingPath) {
          setNotFound(true);
          setLoading(false);
          return;
        }

        // Get raw content for metadata extraction and content processing
        const rawModules = import.meta.glob("../../blog/posts/*.mdx", { as: "raw", eager: true });
        const rawContent = rawModules[matchingPath];
        const frontMatter = extractFrontMatter(rawContent);

        // Dynamically import the MDX component
        const mdxModule = await mdxModules[matchingPath]();
        const Content = mdxModule.default;

        setPost({
          title: frontMatter.title || "Untitled Post",
          date: frontMatter.date || "No date",
          tags: frontMatter.tags || [],
          component: Content,
        });

        setLoading(false);
      } catch (error) {
        console.error("Error loading blog post:", error);
        setNotFound(true);
        setLoading(false);
      }
    }

    loadPost();
  }, [slug]);

  if (loading) {
    return (
      <BlogPostLayout>
        <div className="text-center py-20">
          <h1 className="text-4xl text-white font-bold mb-4">Loading...</h1>
        </div>
      </BlogPostLayout>
    );
  }

  if (notFound || !post) {
    return (
      <BlogPostLayout>
        <div className="text-center py-20">
          <h1 className="text-4xl text-white font-bold mb-4">Post Not Found</h1>
          <p className="text-secondary">The blog post you're looking for doesn't exist.</p>
        </div>
      </BlogPostLayout>
    );
  }

  const PostContent = post.component;

  return (
    <BlogPostLayout title={post.title}>
      <div>
        <div className="mb-6">
          <p className="text-secondary">{post.date}</p>
          <div className="flex flex-wrap gap-2 mt-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs bg-[#915eff]/20 text-[#dfd9ff] px-2 py-1 rounded-full"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        <article className="prose prose-invert prose-lg max-w-none blog-post-content">
          <PostContent />
        </article>
      </div>
    </BlogPostLayout>
  );
};

export default BlogPost;
