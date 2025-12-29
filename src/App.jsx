import { Routes, Route } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Media,
  StarsCanvas,
  Projects,
} from "./components";
import { BlogList, BlogPost } from "./components/blog";

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
      <Route path="/blog/:slug" element={<BlogPost />} />
    </Routes>
  );
};

export default App;
