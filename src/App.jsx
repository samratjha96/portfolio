import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Media,
  StarsCanvas,
  Projects
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Media />
        <Projects />
        <div className="relative z-0">
          <Contact />
        </div>
        <StarsCanvas />
      </div>
    </BrowserRouter>
  );
};

export default App;
