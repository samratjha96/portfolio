// ABOUTME: Blog listing page with search functionality
// ABOUTME: Includes SEO meta tags and CollectionPage structured data

import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import BlogLayout, { PostRow } from "./BlogLayout";
import { formatDate, posts } from "../../blog/posts";

const SITE_URL = "https://www.samratjha.com";

const blogListSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Blog | Samrat Jha",
  description:
    "Technical blog posts on AI, infrastructure, web development, and software engineering by Samrat Jha.",
  url: `${SITE_URL}/blog/`,
  author: {
    "@type": "Person",
    name: "Samrat Jha",
    url: `${SITE_URL}/`,
  },
};

const matches = (post, query) =>
  post.title.toLowerCase().includes(query) ||
  post.description.toLowerCase().includes(query) ||
  post.tags.some((tag) => tag.toLowerCase().includes(query));

const FeaturedPost = ({ post }) => (
  <Link to={`/blog/${post.slug}/`} className="featured-post">
    <div className="featured-post-meta mono">
      <span>
        <span className="featured-post-tag">Latest</span>
        {post.tags[0] && <span className="featured-post-tag">{post.tags[0]}</span>}
      </span>
      <span>{formatDate(post.date)}</span>
    </div>
    <h2>{post.title}</h2>
    <p>{post.description}</p>
  </Link>
);

const BlogList = () => {
  const [query, setQuery] = useState("");
  const normalized = query.trim().toLowerCase();
  const results = normalized ? posts.filter((post) => matches(post, normalized)) : posts;
  const [featured, ...rest] = normalized ? [null, ...results] : results;

  return (
    <>
      <Helmet>
        <title>Blog | Samrat Jha</title>
        <meta
          name="description"
          content="Technical blog posts on AI, infrastructure, web development, and software engineering by Samrat Jha."
        />
        <link rel="canonical" href={`${SITE_URL}/blog/`} />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${SITE_URL}/blog/`} />
        <meta property="og:title" content="Blog | Samrat Jha" />
        <meta
          property="og:description"
          content="Technical blog posts on AI, infrastructure, web development, and software engineering."
        />
        <meta property="og:site_name" content="Samrat Jha" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Blog | Samrat Jha" />
        <meta
          name="twitter:description"
          content="Technical blog posts on AI, infrastructure, web development, and software engineering."
        />

        {/* Structured Data */}
        <script type="application/ld+json">{JSON.stringify(blogListSchema)}</script>
      </Helmet>

      <BlogLayout>
        <div className="grid-12 blog-index">
          <div className="blog-index-intro" data-reveal="">
            <h1>Blog</h1>
            <p>Notes on AI, infrastructure, and the tools I use to build things.</p>
            <input
              type="search"
              className="blog-search mono"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search posts"
              aria-label="Search posts"
            />
          </div>

          <div className="blog-index-list" data-reveal="" style={{ "--reveal-delay": ".08s" }}>
            {featured && <FeaturedPost post={featured} />}
            {rest.map((post) => (
              <PostRow key={post.slug} post={post} />
            ))}
            {results.length === 0 && <p className="blog-empty mono">{`No posts match "${query}".`}</p>}
          </div>
        </div>
      </BlogLayout>
    </>
  );
};

export default BlogList;
