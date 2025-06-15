import React, { useState } from "react";
import Fuse from "fuse.js";
import { Link } from "react-router-dom";

const BlogSearch = ({ posts = [] }) => {
  const [inputValue, setInputValue] = useState("");

  // Search posts with current input value
  const getSearchResults = () => {
    if (!inputValue.trim() || !posts.length) return [];

    // Create a fresh Fuse instance for each search
    const fuse = new Fuse(posts, {
      keys: ["title", "tags"],
      threshold: 0.4,
      includeScore: true,
    });

    return fuse.search(inputValue).map((result) => result.item);
  };

  // Get current search results
  const searchResults = getSearchResults();

  // Handler for input changes
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  // Clear search
  const clearSearch = () => {
    setInputValue("");
  };

  return (
    <div className="mb-8">
      <div className="relative">
        <input
          type="text"
          placeholder="Search posts..."
          value={inputValue}
          onChange={handleInputChange}
          className="w-full p-3 pr-10 bg-tertiary bg-opacity-70 backdrop-blur-lg rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#915eff]"
        />
        {inputValue && (
          <button
            onClick={clearSearch}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
          >
            ✕
          </button>
        )}
      </div>

      {inputValue.trim() !== "" && (
        <div className="mt-4 p-4 bg-tertiary bg-opacity-70 backdrop-blur-lg rounded-lg">
          <h3 className="text-white font-medium mb-3">
            {searchResults.length > 0
              ? `Found ${searchResults.length} result${searchResults.length > 1 ? "s" : ""}`
              : "No results found"}
          </h3>

          {searchResults.length > 0 && (
            <ul className="divide-y divide-gray-700/30">
              {searchResults.map((post) => (
                <li key={post.slug} className="py-3 first:pt-0 last:pb-0">
                  <Link
                    to={`/blog/${post.slug}`}
                    className="block text-secondary hover:text-white transition-colors duration-300 font-medium"
                  >
                    {post.title}
                  </Link>
                  <div className="text-xs text-gray-400 mt-1">{post.date}</div>
                  <div className="flex flex-wrap gap-1 mt-2">
                    {post.tags?.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs bg-[#915eff]/20 text-[#dfd9ff] px-2 py-1 rounded-full"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

export default BlogSearch;
