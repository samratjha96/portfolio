// ABOUTME: Shared shell for blog pages: palette root, navigation, and the
// ABOUTME: post row used by the index and "more posts" lists
import { useEffect } from "react";
import { Link, useLocation, useNavigationType } from "react-router-dom";
import "highlight.js/styles/atom-one-dark.css";
import "./blog.css";
import BlogNavbar from "./BlogNavbar";
import { formatDate } from "../../blog/posts";

export const PostRow = ({ post }) => (
  <Link to={`/blog/${post.slug}/`} className="post-row">
    <span className="post-row-date">{formatDate(post.date)}</span>
    <span className="post-row-title">{post.title}</span>
    <span className="post-row-time">{`${post.minutes} min`}</span>
  </Link>
);

const BlogLayout = ({ children }) => {
  const { pathname } = useLocation();
  const navigationType = useNavigationType();

  // Link clicks keep the previous page's scroll position otherwise. Initial loads and
  // back/forward are POP, so hydration, scroll restoration, and #hash links are untouched.
  useEffect(() => {
    if (navigationType === "PUSH") window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname, navigationType]);

  return (
    <div className="blog">
      <div className="blog-wrap">
        <BlogNavbar />
        {children}
      </div>
    </div>
  );
};

export default BlogLayout;
