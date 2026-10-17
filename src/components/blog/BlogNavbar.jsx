import { useState } from "react";
import { Link } from "react-router-dom";
import { navLinks } from "../../constants/constants";
import personalLogo from "/personalLogo.png";

const NavLink = ({ link }) => {
  if (link.id === "blog") {
    return (
      <Link to="/blog/" className="active">
        {link.title}
      </Link>
    );
  }
  // Full-page links must not route through the home-page anchors.
  if (link.isFullPage) return <a href={link.path}>{link.title}</a>;
  if (link.isExternal) return <Link to={link.path}>{link.title}</Link>;
  return <Link to={`/#${link.id}`}>{link.title}</Link>;
};

const BlogNavbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header>
      <nav className="grid-12 blog-nav">
        <Link to="/" className="blog-nav-home">
          <img src={personalLogo} alt="" width={32} height={32} />
          Samrat Jha
        </Link>
        <div className="blog-nav-links">
          {navLinks.map((link) => (
            <NavLink key={link.id} link={link} />
          ))}
        </div>
        <button
          type="button"
          className="blog-nav-toggle"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </nav>
      <div className="blog-nav-panel blog-nav" hidden={!open}>
        {navLinks.map((link) => (
          <NavLink key={link.id} link={link} />
        ))}
      </div>
    </header>
  );
};

export default BlogNavbar;
