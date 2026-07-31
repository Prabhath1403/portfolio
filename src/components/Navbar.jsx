import React from "react";

export default function Navbar() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="dribbble-nav">
      <a href="#hero" className="nav-brand" onClick={(e) => { e.preventDefault(); scrollTo("hero"); }}>
        <div className="nav-logo-box">PT</div>
        <span className="nav-brand-text">Prabhath Thummala</span>
      </a>

      <div className="nav-links">
        <button className="nav-link-btn" onClick={() => scrollTo("about")}>About</button>
        <button className="nav-link-btn" onClick={() => scrollTo("skills")}>Skills</button>
        <button className="nav-link-btn" onClick={() => scrollTo("projects")}>Projects</button>
        <button className="nav-link-btn" onClick={() => scrollTo("resume")}>Resume</button>
        <button className="nav-link-btn" onClick={() => scrollTo("contact")}>Contact</button>
      </div>

      <a
        href="https://mail.google.com/mail/?view=cm&fs=1&to=prabhaththummala@gmail.com&su=Collaboration%20Inquiry"
        target="_blank"
        rel="noreferrer"
        className="nav-cta-btn"
      >
        ✉️ Hire Me
      </a>
    </nav>
  );
}
