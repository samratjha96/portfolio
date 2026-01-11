import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BlogNavbar from "./BlogNavbar";
import { styles } from "../../styles";
import { extractFrontMatter, getSlugFromFilename } from "../../utils/mdxUtils";

const BlogPostLayout = ({ children, title }) => {
  const postsPerPage = 5;
  const [allPosts, setAllPosts] = useState([]);
  const [displayPosts, setDisplayPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isRecentPostsOpen, setIsRecentPostsOpen] = useState(false);

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
        {/* Main Content - Full Width */}
        <div className="mb-16">
          {title && <h1 className={`${styles.sectionHeadText} mb-6`}>{title}</h1>}
          <div className="prose prose-invert prose-lg prose-headings:text-white prose-headings:font-bold prose-h1:text-4xl prose-h2:text-3xl prose-h2:mt-8 prose-h3:text-2xl prose-p:text-gray-300 prose-a:text-[#915eff] prose-strong:text-white prose-code:bg-tertiary prose-code:text-white prose-code:p-1 prose-code:rounded-md prose-pre:bg-transparent prose-pre:p-0 prose-pre:overflow-x-auto prose-li:text-gray-300 max-w-none [&_code::before]:content-none [&_code::after]:content-none">
            {children}
          </div>
        </div>

        {/* Recent Posts (Collapsed by Default) */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <button
            onClick={() => setIsRecentPostsOpen(!isRecentPostsOpen)}
            className="flex items-center text-white font-medium mb-4 hover:text-[#915eff] transition-colors duration-300"
          >
            <span className="mr-2">{isRecentPostsOpen ? "▼" : "►"}</span>
            <h3 className="font-bold text-xl">Recent Posts</h3>
          </button>

          {isRecentPostsOpen && (
            <div className="p-5 rounded-xl bg-tertiary bg-opacity-70 backdrop-blur-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {displayPosts.map((post, index) => (
                  <div key={post.slug} className="border-b border-gray-700/30 pb-4 last:border-b-0">
                    <Link
                      to={`/blog/${post.slug}/`}
                      className="block text-secondary hover:text-white transition-colors duration-300 font-medium"
                    >
                      {post.title}
                    </Link>
                    <div className="text-xs text-gray-400 mt-1">{post.date}</div>
                    <div className="flex flex-wrap gap-1 mt-2">
                      {post.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="text-xs bg-[#915eff]/20 text-[#dfd9ff] px-2 py-1 rounded-full"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

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
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogPostLayout;
