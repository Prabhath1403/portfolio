import React from "react";
import { motion } from "framer-motion";

export default function Resume() {
  return (
    <section id="resume" className="section-wrapper">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="section-tag">// CURRICULUM VITAE</span>
        <h2 className="section-title-large">
          RESUME & <span className="pink-gradient-text">PROFILES</span>
        </h2>
      </motion.div>

      <div className="bento-grid">
        <motion.div
          className="bento-card col-span-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.4rem", marginBottom: 8, color: "var(--text-main)" }}>
            Prabhath Thummala
          </h3>
          <p style={{ color: "var(--accent-pink)", fontSize: "0.95rem", fontWeight: 600, marginBottom: 12 }}>
            AI & ML Engineer / Full-Stack Developer
          </p>
          <p style={{ color: "var(--text-muted)", fontSize: "0.92rem", lineHeight: 1.7, marginBottom: 20 }}>
            3rd-year B.Tech AI student focusing on Deep Learning (PyTorch, TensorFlow), Node.js, JavaScript, Computer Vision, and LLM tool calling. Proven track record of building high-performance models and web services.
          </p>

          <a href="/resume.pdf" download className="dribbble-btn-pink">
            ⬇️ Download PDF Resume
          </a>
        </motion.div>

        <motion.div
          className="bento-card col-span-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.3rem", marginBottom: 16, color: "var(--text-main)" }}>
            🏆 Competitive Profiles
          </h3>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <a
              href="https://leetcode.com/u/Prabhath1710/"
              target="_blank"
              rel="noreferrer"
              className="dribbble-btn-ghost"
              style={{ justifyContent: "center" }}
            >
              LeetCode (1000+ Solved)
            </a>
            <a
              href="https://github.com/Prabhath1403"
              target="_blank"
              rel="noreferrer"
              className="dribbble-btn-ghost"
              style={{ justifyContent: "center" }}
            >
              GitHub (@Prabhath1403)
            </a>
            <a
              href="https://www.linkedin.com/in/prabhath-thummala-3aa690326/"
              target="_blank"
              rel="noreferrer"
              className="dribbble-btn-ghost"
              style={{ justifyContent: "center" }}
            >
              LinkedIn Profile
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
