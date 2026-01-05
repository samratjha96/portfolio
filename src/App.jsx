import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Media,
  Projects,
} from "./components";
import { BlogList, BlogPost } from "./components/blog";
import Loader from "./components/Loader";

// Lazy load heavy 3D components to reduce initial bundle size
const StarsCanvas = lazy(() => import("./components/canvas/Stars"));
const Tech = lazy(() => import("./components/Tech"));

const Home = () => {
  return (
    <div className="relative z-0 bg-primary">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
        <Hero />
      </div>
      <About />
      <Projects />
      <Experience />
      <Suspense fallback={<div className="h-[300px]" />}>
        <Tech />
      </Suspense>
      <Media />
      <div className="relative z-0">
        <Contact />
      </div>
      <Suspense fallback={null}>
        <StarsCanvas />
      </Suspense>
    </div>
  );
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blog" element={<BlogList />} />
      <Route path="/blog/:slug" element={<BlogPost />} />
    </Routes>
  );
};

export default App;
