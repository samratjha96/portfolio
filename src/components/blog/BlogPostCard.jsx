import React from "react";
import { Link } from "react-router-dom";

const BlogPostCard = ({ post }) => {
  return (
    <Link
      to={`/blog/${post.slug}`}
      className="block bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full transition-all duration-300 hover:shadow-lg hover:shadow-purple-900/20 group"
    >
      <div className="mt-5">
        <h3 className="text-white font-bold text-[24px] group-hover:text-[#915eff] transition-colors duration-300">
          {post.title}
        </h3>
        <p className="mt-2 text-secondary text-[14px]">{post.date}</p>
      </div>

      <div className="mt-4 text-secondary text-[14px] leading-[24px]">{post.excerpt}</div>

      <div className="flex flex-wrap gap-2 mt-4">
        {post.tags.map((tag) => (
          <span key={tag} className="text-xs bg-[#915eff]/20 text-[#dfd9ff] px-2 py-1 rounded-full">
            #{tag}
          </span>
        ))}
      </div>
    </Link>
  );
};

export default BlogPostCard;
