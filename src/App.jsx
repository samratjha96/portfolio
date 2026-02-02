import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Media,
  Projects,
  Tech,
} from "./components";
import { BlogList, BlogPost } from "./components/blog";
import StarsCanvas from "./components/canvas/Stars";

const Home = () => {
  const { hash } = useLocation();

  // Scroll to hash after component mounts (DOM is ready)
  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);

  return (
    <div className="relative z-0 bg-primary">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
        <Hero />
      </div>
      <About />
      <Projects />
      <Experience />
      <Tech />
      <Media />
      <div className="relative z-0">
        <Contact />
      </div>
      <StarsCanvas />
    </div>
  );
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blog" element={<BlogList />} />
      <Route path="/blog/" element={<BlogList />} />
      <Route path="/blog/:slug" element={<BlogPost />} />
      <Route path="/blog/:slug/" element={<BlogPost />} />
    </Routes>
  );
};

export default App;
