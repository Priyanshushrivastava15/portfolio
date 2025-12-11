import { useEffect } from "react";
import Lenis from "lenis";
import "./index.css";

// Section Imports
import Hero from "./components/sections/Hero";
import Skills from "./components/sections/Skills";
import Experience from "./components/sections/Experience";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";

// UI Imports
import { FloatingNav } from "./components/ui/floating-navbar";

function App() {
  // Initialize Smooth Scroll
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <div className="relative w-full min-h-screen bg-background overflow-hidden">
      {/* Cinematic Grain Overlay */}
      <div className="grain-overlay" />

      {/* Floating Navigation */}
      <FloatingNav />

      {/* Main Content Sections */}
      <main className="relative z-10">
        
        {/* Hero Section (Home) */}
        <Hero />
        
        {/* Skills Section */}
        <div id="skills">
          <Skills />
        </div>

        {/* Experience Section */}
        <div id="experience">
          <Experience />
        </div>

        {/* Projects Section */}
        <div id="projects">
          <Projects />
        </div>

        {/* Contact Section */}
        <div id="contact">
          <Contact />
        </div>
      </main>
    </div>
  );
}

export default App;