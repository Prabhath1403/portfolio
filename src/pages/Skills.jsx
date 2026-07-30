import React from "react";
import { motion } from "framer-motion";

const SKILL_GROUPS = [
  {
    category: "🔤 Programming Languages",
    skills: ["Python 3.11", "C", "C++", "Java", "JavaScript (ES6+)"],
    span: "col-span-6",
  },
  {
    category: "🤖 AI & Machine Learning",
    skills: ["PyTorch", "TensorFlow", "OpenCV", "YOLOv8", "LightGBM", "Scikit-Learn", "Explainable AI (XAI)", "NLP"],
    span: "col-span-6",
  },
  {
    category: "🌐 Web & Mobile Stack",
    skills: ["React 18", "FastAPI", "Flutter", "HTML5", "CSS3", "REST APIs"],
    span: "col-span-6",
  },
  {
    category: "🛠️ Databases & DevOps",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Docker", "Git/GitHub", "Ubuntu Linux"],
    span: "col-span-6",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section-wrapper">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="section-tag">// TECHNICAL CAPABILITIES</span>
        <h2 className="section-title-large">
          SKILLS & <span className="pink-gradient-text">EXPERTISE</span>
        </h2>
      </motion.div>

      <div className="bento-grid">
        {SKILL_GROUPS.map((group, idx) => (
          <motion.div
            key={group.category}
            className={`bento-card ${group.span}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.3rem", marginBottom: 16, color: "var(--text-main)" }}>
              {group.category}
            </h3>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {group.skills.map((skill) => (
                <span key={skill} className="tech-chip">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
