import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <div className="site-wrapper">
      <Navbar />
      <main className="main-container">
        <Home />
        <About />
        <Skills />
        <Projects />
        <Resume />
        <Contact />
      </main>
      <footer className="dribbble-footer">
        © {new Date().getFullYear()} Prabhath Thummala — Inspired by Dribbble • Built with React & Framer Motion
      </footer>
    </div>
  );
}
