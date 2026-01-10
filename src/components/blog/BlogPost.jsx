// ABOUTME: Renders individual blog posts with full SEO optimization
// ABOUTME: Includes Article structured data, meta tags, canonical URLs, and breadcrumbs

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import BlogPostLayout from "./BlogPostLayout";
import "highlight.js/styles/atom-one-dark.css";
import {
  extractFrontMatter,
  getSlugFromFilename,
  generateExcerpt,
} from "../../utils/mdxUtils";

const SITE_URL = "https://samratjha.com";
const AUTHOR = {
  name: "Samrat Jha",
  url: "https://samratjha.com",
  jobTitle: "Senior AI Engineer",
  employer: "NVIDIA",
};

const BlogPost = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    async function loadPost() {
      try {
        setLoading(true);

        const mdxModules = import.meta.glob("../../blog/posts/*.mdx");
        const mdxPaths = Object.keys(mdxModules);
        const matchingPath = mdxPaths.find(
          (path) => getSlugFromFilename(path) === slug,
        );

        if (!matchingPath) {
          setNotFound(true);
          setLoading(false);
          return;
        }

        const rawModules = import.meta.glob("../../blog/posts/*.mdx", {
          as: "raw",
          eager: true,
        });
        const rawContent = rawModules[matchingPath];
        const frontMatter = extractFrontMatter(rawContent);

        // Generate description from content if not provided in frontmatter
        const description =
          frontMatter.description || generateExcerpt(rawContent, 160);

        const mdxModule = await mdxModules[matchingPath]();
        const Content = mdxModule.default;

        setPost({
          title: frontMatter.title || "Untitled Post",
          date: frontMatter.date || "No date",
          description: description,
          tags: frontMatter.tags || [],
          component: Content,
          slug: slug,
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

  // Format date for structured data (ISO 8601)
  const formatDateISO = (dateStr) => {
    if (!dateStr || dateStr === "No date") return null;
    const date = new Date(dateStr);
    return date.toISOString();
  };

  // Generate Article structured data following Google's guidelines
  const generateArticleSchema = () => {
    if (!post) return null;

    const publishDate = formatDateISO(post.date);

    return {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: post.title,
      description: post.description,
      datePublished: publishDate,
      dateModified: publishDate, // Use same as published if no separate modified date
      author: {
        "@type": "Person",
        name: AUTHOR.name,
        url: AUTHOR.url,
        jobTitle: AUTHOR.jobTitle,
      },
      publisher: {
        "@type": "Person",
        name: AUTHOR.name,
        url: AUTHOR.url,
      },
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": `${SITE_URL}/blog/${post.slug}`,
      },
      keywords: post.tags.join(", "),
    };
  };

  // Generate Breadcrumb structured data
  const generateBreadcrumbSchema = () => {
    if (!post) return null;

    return {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: SITE_URL,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Blog",
          item: `${SITE_URL}/blog`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: post.title,
          item: `${SITE_URL}/blog/${post.slug}`,
        },
      ],
    };
  };

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
      <>
        <Helmet>
          <title>Post Not Found | Samrat Jha</title>
          <meta name="robots" content="noindex" />
        </Helmet>
        <BlogPostLayout>
          <div className="text-center py-20">
            <h1 className="text-4xl text-white font-bold mb-4">
              Post Not Found
            </h1>
            <p className="text-secondary">
              The blog post you're looking for doesn't exist.
            </p>
          </div>
        </BlogPostLayout>
      </>
    );
  }

  const PostContent = post.component;
  const canonicalUrl = `${SITE_URL}/blog/${post.slug}`;
  const articleSchema = generateArticleSchema();
  const breadcrumbSchema = generateBreadcrumbSchema();

  return (
    <>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>{post.title} | Samrat Jha</title>
        <meta name="title" content={`${post.title} | Samrat Jha`} />
        <meta name="description" content={post.description} />
        <meta name="author" content={AUTHOR.name} />
        <meta name="keywords" content={post.tags.join(", ")} />

        {/* Canonical URL */}
        <link rel="canonical" href={canonicalUrl} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="article" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.description} />
        <meta property="og:site_name" content="Samrat Jha" />
        <meta
          property="article:published_time"
          content={formatDateISO(post.date)}
        />
        <meta property="article:author" content={AUTHOR.url} />
        {post.tags.map((tag) => (
          <meta key={tag} property="article:tag" content={tag} />
        ))}

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:url" content={canonicalUrl} />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.description} />

        {/* Article Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(articleSchema)}
        </script>

        {/* Breadcrumb Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>

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
    </>
  );
};

export default BlogPost;
