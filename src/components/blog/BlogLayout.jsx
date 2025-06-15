import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { StarsCanvas } from "..";
import BlogNavbar from "./BlogNavbar";
import { styles } from "../../styles";
import { extractFrontMatter, getSlugFromFilename } from "../../utils/mdxUtils";

const BlogLayout = ({ children, title }) => {
  const postsPerPage = 5;
  const [allPosts, setAllPosts] = useState([]);
  const [displayPosts, setDisplayPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (pageNumber) => {
    if (pageNumber < 1 || pageNumber > Math.ceil(allPosts.length / postsPerPage)) {
      return;
    }

    setCurrentPage(pageNumber);
    const startIndex = (pageNumber - 1) * postsPerPage;
    setDisplayPosts(allPosts.slice(startIndex, startIndex + postsPerPage));
  };

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
            tags: frontMatter.tags || [],
          };
        });

        // Sort by date (newest first)
        loadedPosts.sort((a, b) => new Date(b.date) - new Date(a.date));

        setAllPosts(loadedPosts);
        // Set display posts for the first page
        setDisplayPosts(loadedPosts.slice(0, postsPerPage));
      } catch (error) {
        console.error("Error loading blog posts for sidebar:", error);
        setAllPosts([]);
        setDisplayPosts([]);
      }
    }

    loadPosts();
  }, []);

  return (
    <div className="relative z-0 bg-primary">
      <BlogNavbar />

      <div className={`${styles.padding} max-w-7xl mx-auto relative z-0 mt-20`}>
        <div className="flex flex-col md:flex-row gap-10">
          {/* Sidebar */}
          <div className="md:w-1/4">
            <div className="sticky top-24 p-5 rounded-xl bg-tertiary bg-opacity-70 backdrop-blur-lg">
              <h3 className="text-white font-bold text-xl mb-4">Recent Posts</h3>
              <ul className="divide-y divide-gray-700/30">
                {displayPosts.map((post, index) => (
                  <li key={post.slug} className={`py-4 ${index === 0 ? "pt-0" : ""}`}>
                    <Link
                      to={`/blog/${post.slug}`}
                      className="block text-secondary hover:text-white transition-colors duration-300 font-medium"
                    >
                      {post.title}
                    </Link>
                    <div className="text-xs text-gray-400 mt-1">{post.date}</div>
                    <div className="flex flex-wrap gap-1 mt-2">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs bg-[#915eff]/20 text-[#dfd9ff] px-2 py-1 rounded-full"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </li>
                ))}{" "}
              </ul>
              {allPosts.length > postsPerPage && (
                <div className="mt-4 flex justify-center pt-2 border-t border-gray-700/30 text-xs">
                  <div className="inline-flex items-center gap-2">
                    <button
                      onClick={() => handlePageChange(currentPage - 1)}
                      disabled={currentPage === 1}
                      className={`${currentPage === 1 ? "text-gray-500 cursor-not-allowed" : "text-secondary hover:text-white cursor-pointer"}`}
                    >
                      ←
                    </button>

                    <span className="text-secondary mx-1">
                      {currentPage}/{Math.ceil(allPosts.length / postsPerPage)}
                    </span>

                    <button
                      onClick={() => handlePageChange(currentPage + 1)}
                      disabled={currentPage >= Math.ceil(allPosts.length / postsPerPage)}
                      className={`${currentPage >= Math.ceil(allPosts.length / postsPerPage) ? "text-gray-500 cursor-not-allowed" : "text-secondary hover:text-white cursor-pointer"}`}
                    >
                      →
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Main Content */}
          <div className="md:w-3/4 overflow-hidden">
            {title && <h1 className={`${styles.sectionHeadText} mb-6`}>{title}</h1>}
            <div className="prose prose-invert prose-lg prose-headings:text-white prose-headings:font-bold prose-h1:text-4xl prose-h2:text-3xl prose-h2:mt-8 prose-h3:text-2xl prose-p:text-gray-300 prose-a:text-[#915eff] prose-strong:text-white prose-code:bg-tertiary prose-code:text-white prose-code:p-1 prose-code:rounded-md prose-li:text-gray-300 max-w-none">
              {children}
            </div>
          </div>
        </div>
      </div>

      <StarsCanvas />
    </div>
  );
};

export default BlogLayout;
