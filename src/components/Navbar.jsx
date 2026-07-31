import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LINKS = [
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Resume", id: "resume" },
  { label: "Contact", id: "contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollTo = (id) => {
    setIsOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <>
      <nav className="dribbble-nav">
        <a href="#hero" className="nav-brand" onClick={(e) => { e.preventDefault(); scrollTo("hero"); }}>
          <div className="nav-logo-box">PT</div>
          <span className="nav-brand-text">Prabhath Thummala</span>
        </a>

        {/* Desktop Links */}
        <div className="nav-links">
          {LINKS.map((l) => (
            <button key={l.id} className="nav-link-btn" onClick={() => scrollTo(l.id)}>
              {l.label}
            </button>
          ))}
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=prabhaththummala@gmail.com&su=Collaboration%20Inquiry"
            target="_blank"
            rel="noreferrer"
            className="nav-cta-btn"
          >
            ✉️ Hire Me
          </a>

          {/* Mobile Hamburger Toggle */}
          <button
            className="nav-mobile-toggle"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="mobile-menu-overlay"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
          >
            <div className="mobile-menu-card">
              {LINKS.map((l) => (
                <button key={l.id} className="mobile-menu-btn" onClick={() => scrollTo(l.id)}>
                  {l.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
