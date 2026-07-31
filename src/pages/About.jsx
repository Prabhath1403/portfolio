import React from "react";
import { motion } from "framer-motion";

const EDUCATION = [
  {
    title: "B.Tech in Artificial Intelligence & Data Science",
    school: "Karunya Institute of Technology and Sciences",
    detail: "3rd Year (Pursuing) • GPA: 7.8/10",
    year: "2024 – 2028",
  },
  {
    title: "Higher Secondary (12th Grade)",
    school: "Career Point Junior College, Hyderabad",
    detail: "Percentage: 96.5%",
    year: "2024",
  },
  {
    title: "Secondary Education (10th Grade)",
    school: "Hyderabad Public School",
    detail: "State Board • Percentage: 94%",
    year: "2022",
  },
];

export default function About() {
  return (
    <section id="about" className="section-wrapper">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="section-tag">// BIOGRAPHY & BACKGROUND</span>
        <h2 className="section-title-large">
          About <span className="pink-gradient-text">Me</span>
        </h2>
      </motion.div>

      <div className="bento-grid">
        {/* Bio Card */}
        <motion.div
          className="bento-card col-span-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.3rem", marginBottom: 12, color: "var(--text-main)" }}>
            Engineering Intelligence with Technical Precision
          </h3>
          <p style={{ color: "var(--text-muted)", lineHeight: 1.8, fontSize: "0.95rem", marginBottom: 12 }}>
            I'm <strong style={{ color: "var(--text-main)" }}>Prabhath Thummala</strong>, a 3rd-year Artificial Intelligence & Data Science B.Tech student dedicated to building high-performance Deep Learning models, computer vision systems, and modern full-stack web applications.
          </p>
          <p style={{ color: "var(--text-muted)", lineHeight: 1.8, fontSize: "0.95rem" }}>
            My technical focus encompasses PyTorch, TensorFlow, Deep Learning (CNNs, Transformers), Node.js, JavaScript, FastAPI, and React — spanning medical AI diagnosis, cybersecurity tools, and self-hosted cloud infrastructure.
          </p>
        </motion.div>

        {/* Education Timeline Cards */}
        <motion.div
          className="bento-card col-span-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.3rem", marginBottom: 16, color: "var(--text-main)" }}>
            🎓 Academic Journey
          </h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
            {EDUCATION.map((edu, i) => (
              <div
                key={i}
                style={{
                  borderLeft: "3px solid var(--accent-pink)",
                  paddingLeft: 16,
                }}
              >
                <div style={{ fontWeight: 700, fontSize: "1rem", color: "var(--text-main)" }}>{edu.title}</div>
                <div style={{ color: "var(--accent-pink)", fontSize: "0.88rem", margin: "4px 0", fontWeight: 600 }}>{edu.school}</div>
                <div style={{ color: "var(--text-muted)", fontSize: "0.85rem" }}>{edu.detail} ({edu.year})</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
