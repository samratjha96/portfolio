// ABOUTME: Blog listing page with search functionality
// ABOUTME: Includes SEO meta tags and CollectionPage structured data

import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { styles } from "../../styles";
import BlogLayout from "./BlogLayout";
import BlogPostCard from "./BlogPostCard";
import {
  extractFrontMatter,
  generateExcerpt,
  getSlugFromFilename,
} from "../../utils/mdxUtils";

const SITE_URL = "https://samratjha.com";

const BlogSearch = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  // Handle input change for real-time search
  const handleInputChange = (e) => {
    const newQuery = e.target.value;
    setQuery(newQuery);
    onSearch(newQuery);
  };

  // Clear search
  const clearSearch = () => {
    setQuery("");
    onSearch("");
  };

  return (
    <div className="mb-8">
      <div className="relative overflow-hidden">
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          placeholder="Search posts..."
          className="w-full p-3 pr-10 bg-tertiary bg-opacity-70 backdrop-blur-lg rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#915eff] border border-transparent"
        />
        {query && (
          <button
            onClick={clearSearch}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
          >
            ✕
          </button>
        )}
      </div>
    </div>
  );
};

const BlogList = () => {
  const [posts, setPosts] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;
  const [displayPosts, setDisplayPosts] = useState([]);

  // Dynamically import all MDX files from the blog/posts directory
  useEffect(() => {
    async function loadPosts() {
      try {
        // Import all MDX files in the blog/posts directory
        const mdxModules = import.meta.glob("../../blog/posts/*.mdx", {
          as: "raw",
          eager: true,
        });

        // Process each MDX file
        const loadedPosts = Object.entries(mdxModules).map(
          ([filePath, content]) => {
            const slug = getSlugFromFilename(filePath);
            const frontMatter = extractFrontMatter(content);

            return {
              slug,
              title: frontMatter.title || "Untitled Post",
              date: frontMatter.date || "No date",
              excerpt: frontMatter.excerpt || generateExcerpt(content),
              tags: frontMatter.tags || [],
              buttonText: "Read More",
            };
          },
        );

        // Sort by date (newest first)
        loadedPosts.sort((a, b) => new Date(b.date) - new Date(a.date));

        setPosts(loadedPosts);
        setSearchResults(loadedPosts);
        setDisplayPosts(loadedPosts.slice(0, postsPerPage));
      } catch (error) {
        console.error("Error loading blog posts:", error);
      }
    }

    loadPosts();
  }, []);

  const handlePageChange = (pageNumber) => {
    if (
      pageNumber < 1 ||
      pageNumber > Math.ceil(searchResults.length / postsPerPage)
    ) {
      return;
    }

    setCurrentPage(pageNumber);
    const startIndex = (pageNumber - 1) * postsPerPage;
    setDisplayPosts(searchResults.slice(startIndex, startIndex + postsPerPage));
  };

  const handleSearch = (query) => {
    if (!query.trim()) {
      setSearchResults(posts);
      return;
    }

    const filtered = posts.filter((post) => {
      const lowerQuery = query.toLowerCase();
      return (
        post.title?.toLowerCase().includes(lowerQuery) ||
        post.excerpt?.toLowerCase().includes(lowerQuery) ||
        post.tags?.some((tag) => tag.toLowerCase().includes(lowerQuery))
      );
    });

    setSearchResults(filtered);
    setCurrentPage(1);
    setDisplayPosts(filtered.slice(0, postsPerPage));
  };

  const blogListSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Blog | Samrat Jha",
    description:
      "Technical blog posts on AI, infrastructure, web development, and software engineering by Samrat Jha.",
    url: `${SITE_URL}/blog`,
    author: {
      "@type": "Person",
      name: "Samrat Jha",
      url: SITE_URL,
    },
  };

  return (
    <>
      <Helmet>
        <title>Blog | Samrat Jha</title>
        <meta
          name="description"
          content="Technical blog posts on AI, infrastructure, web development, and software engineering by Samrat Jha."
        />
        <link rel="canonical" href={`${SITE_URL}/blog`} />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${SITE_URL}/blog`} />
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
        <script type="application/ld+json">
          {JSON.stringify(blogListSchema)}
        </script>
      </Helmet>

      <BlogLayout title="Blog">
        {/* Blog heading is in the layout title */}

        <div className="mt-12">
          <BlogSearch onSearch={handleSearch} />

          <div className="mt-10 flex flex-wrap gap-7">
            {searchResults.length > 0 ? (
              displayPosts.map((post, index) => (
                <BlogPostCard key={post.slug} post={post} />
              ))
            ) : (
              <p className="text-secondary">
                No posts found matching your search criteria.
              </p>
            )}

            {searchResults.length > postsPerPage && (
              <div className="w-full mt-8 flex justify-center items-center text-sm">
                <div className="inline-flex items-center gap-3 text-secondary">
                  <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className={`${currentPage === 1 ? "opacity-50 cursor-not-allowed" : "hover:text-white cursor-pointer"}`}
                  >
                    ←
                  </button>

                  <span className="text-secondary">
                    Page {currentPage} of{" "}
                    {Math.ceil(searchResults.length / postsPerPage)}
                  </span>

                  <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={
                      currentPage >=
                      Math.ceil(searchResults.length / postsPerPage)
                    }
                    className={`${currentPage >= Math.ceil(searchResults.length / postsPerPage) ? "opacity-50 cursor-not-allowed" : "hover:text-white cursor-pointer"}`}
                  >
                    →
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </BlogLayout>
    </>
  );
};

export default BlogList;
