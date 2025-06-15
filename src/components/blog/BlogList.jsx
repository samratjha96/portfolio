import React, { useState, useEffect } from "react";
import { styles } from "../../styles";
import BlogLayout from "./BlogLayout";
import BlogPostCard from "./BlogPostCard";
import { extractFrontMatter, generateExcerpt, getSlugFromFilename } from "../../utils/mdxUtils";

const BlogSearch = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSearch} className="mb-8">
      <div className="flex gap-2">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search posts..."
          className="w-full bg-tertiary py-2 px-4 rounded-lg text-white outline-none border border-secondary"
        />
        <button
          type="submit"
          className="bg-[#915eff] text-white py-2 px-4 rounded-lg hover:bg-[#7448c8] transition-colors duration-300"
        >
          Search
        </button>
      </div>
    </form>
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
        const mdxModules = import.meta.glob("../../blog/posts/*.mdx", { as: "raw", eager: true });

        // Process each MDX file
        const loadedPosts = Object.entries(mdxModules).map(([filePath, content]) => {
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
        });

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
    if (pageNumber < 1 || pageNumber > Math.ceil(searchResults.length / postsPerPage)) {
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

  return (
    <BlogLayout title="Blog">
      {/* Blog heading is in the layout title */}

      <div className="mt-12">
        <BlogSearch onSearch={handleSearch} />

        <div className="mt-10 flex flex-wrap gap-7">
          {searchResults.length > 0 ? (
            displayPosts.map((post, index) => <BlogPostCard key={post.slug} post={post} />)
          ) : (
            <p className="text-secondary">No posts found matching your search criteria.</p>
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
                  Page {currentPage} of {Math.ceil(searchResults.length / postsPerPage)}
                </span>

                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage >= Math.ceil(searchResults.length / postsPerPage)}
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
  );
};

export default BlogList;
