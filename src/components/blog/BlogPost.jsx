// ABOUTME: Renders individual blog posts with full SEO optimization
// ABOUTME: Includes Article structured data, meta tags, canonical URLs, and breadcrumbs

import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import BlogLayout, { PostRow } from "./BlogLayout";
import PostRail from "./PostRail";
import { formatDate, getLoadedContent, getPost, loadPostContent, posts } from "../../blog/posts";

const SITE_URL = "https://www.samratjha.com";
const AUTHOR = {
  name: "Samrat Jha",
  url: "https://www.samratjha.com/",
  jobTitle: "Senior AI Engineer",
  employer: "NVIDIA",
};
const MORE_POSTS = 4;

// Format date for structured data (ISO 8601)
const formatDateISO = (dateStr) => (dateStr ? new Date(dateStr).toISOString() : null);

// Article structured data following Google's guidelines
const articleSchema = (post, canonicalUrl) => {
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
      "@id": canonicalUrl,
    },
    keywords: post.tags.join(", "),
  };
};

const breadcrumbSchema = (post, canonicalUrl) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
    { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog/` },
    { "@type": "ListItem", position: 3, name: post.title, item: canonicalUrl },
  ],
});

const PostMeta = ({ post }) => (
  <div className="post-meta">
    {[
      ["Author", AUTHOR.name],
      ["Tags", post.tags.join(", ")],
      ["Published", formatDate(post.date)],
      ["Reading time", `${post.minutes} min`],
    ].map(([label, value]) => (
      <div key={label}>
        <div className="label mono">{label}</div>
        <div className="post-meta-value">{value}</div>
      </div>
    ))}
  </div>
);

const PostPage = ({ post }) => {
  const canonicalUrl = `${SITE_URL}/blog/${post.slug}/`;
  // Preloaded by main.jsx on a direct visit; fetched here after client-side navigation.
  const [content, setContent] = useState(() => getLoadedContent(post));

  useEffect(() => {
    if (!content) loadPostContent(post).then(setContent);
  }, [content, post]);

  const Content = content?.default;
  const morePosts = posts.filter((other) => other.slug !== post.slug).slice(0, MORE_POSTS);

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
        <meta property="article:published_time" content={formatDateISO(post.date)} />
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
          {JSON.stringify(articleSchema(post, canonicalUrl))}
        </script>

        {/* Breadcrumb Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema(post, canonicalUrl))}
        </script>
      </Helmet>

      <BlogLayout>
        <header className="grid-12 post-hero">
          <Link to="/blog/" className="post-hero-back mono branch" data-reveal="">
            BLOG
          </Link>
          <div className="post-hero-hd">
            <h1 id="post-title" data-reveal="" style={{ "--reveal-delay": ".06s" }}>
              {post.title}
            </h1>
            <p className="post-hero-standfirst" data-reveal="" style={{ "--reveal-delay": ".12s" }}>
              {post.description}
            </p>
            <div data-reveal="" style={{ "--reveal-delay": ".18s" }}>
              <PostMeta post={post} />
            </div>
          </div>
        </header>

        {Content && (
          <div className="grid-12 post-body" data-reveal="" style={{ "--reveal-delay": ".24s" }}>
            <PostRail
              toc={content.toc}
              title={post.title}
              minutes={post.minutes}
              url={canonicalUrl}
              markdown={post.markdown}
            />
            <div className="post-main">
              <article className="post-prose">
                <Content />
              </article>
              <section className="more-posts">
                <div className="label mono">More posts</div>
                {morePosts.map((other) => (
                  <PostRow key={other.slug} post={other} />
                ))}
              </section>
            </div>
          </div>
        )}
      </BlogLayout>
    </>
  );
};

const BlogPost = () => {
  const { slug } = useParams();
  const post = getPost(slug);
  if (!post) {
    return (
      <>
        <Helmet>
          <title>Post Not Found | Samrat Jha</title>
          <meta name="robots" content="noindex" />
        </Helmet>
        <BlogLayout>
          <div className="not-found">
            <h1 className="mono">Post not found</h1>
            <p className="label mono">
              <Link to="/blog/">└ Back to blog</Link>
            </p>
          </div>
        </BlogLayout>
      </>
    );
  }

  return <PostPage key={post.slug} post={post} />;
};

export default BlogPost;
