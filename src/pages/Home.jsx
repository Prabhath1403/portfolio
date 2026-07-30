import React from "react";
import { motion } from "framer-motion";

const METRICS = [
  { value: "1000+", label: "LeetCode Solved 🏆" },
  { value: "5+", label: "Featured Projects 🚀" },
  { value: "3rd Yr", label: "B.Tech AI & DS @ Karunya 🎓" },
];

const SOCIALS = [
  { label: "GitHub", url: "https://github.com/Prabhath1403" },
  { label: "LinkedIn", url: "https://www.linkedin.com/in/prabhath-thummala-3aa690326/" },
  { label: "Email", url: "mailto:prabhaththummala@gmail.com" },
  { label: "WhatsApp", url: "https://wa.me/+919440073535" },
];

export default function Home() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="hero-section">
      <div className="hero-grid-container">
        {/* Left Column: Info & Headline */}
        <motion.div
          className="hero-text-content"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">// PORTFOLIO 2026</span>
          
          <h1 className="hero-name-title">
            Hi, I'm <span className="pink-gradient-text">Prabhath Thummala</span>
          </h1>

          <h2 className="hero-role-title">
            AI & Machine Learning Engineer <span style={{ fontWeight: 400, color: "var(--text-muted)" }}>/ Full-Stack Developer</span>
          </h2>

          <p className="hero-subtitle">
            Designing intelligent algorithms, computer vision pipelines, and self-hosted cloud applications with PyTorch, TensorFlow, FastAPI, and React.
          </p>

          {/* Metric Cards */}
          <div className="hero-metrics-row">
            {METRICS.map((m, i) => (
              <div key={i} className="metric-card">
                <div className="metric-number">{m.value}</div>
                <div className="metric-label">{m.label}</div>
              </div>
            ))}
          </div>

          {/* CTA Actions */}
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
            <button className="dribbble-btn-pink" onClick={() => scrollTo("projects")}>
              🚀 View Projects
            </button>
            <button className="dribbble-btn-dark" onClick={() => scrollTo("contact")}>
              ✉️ Contact Me
            </button>

            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.url}
                  target="_blank"
                  rel="noreferrer"
                  className="tech-chip"
                  style={{ textDecoration: "none" }}
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right Column: Prominent Profile Picture */}
        <motion.div
          className="hero-image-content"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="profile-img-frame">
            <img src="/photo.jpg" alt="Prabhath Thummala" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
