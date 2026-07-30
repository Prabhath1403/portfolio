import React from "react";
import { motion } from "framer-motion";

const PROJECTS = [
  {
    title: "AuraDerm — AI Skincare Diagnosis Platform",
    emoji: "🌿",
    desc: "AI skincare diagnosis system combining a PyTorch EfficientNetV2 classifier (22 skin conditions) with Gemini LLM tool calling for custom product recommendations and safety escalation.",
    tech: ["PyTorch", "Gemini API", "FastAPI", "Supabase", "EfficientNetV2"],
    code: "https://github.com/Prabhath1403/facial-ai",
    live: "",
  },
  {
    title: "Nucleus — Omniscience & Productivity Hub",
    emoji: "🚀",
    desc: "Self-hosted task & habit ecosystem featuring a window tracking daemon, focus sessions, Gmail/Calendar integrations, and Docker deployment on Oracle Cloud.",
    tech: ["Flutter", "FastAPI", "PostgreSQL", "Redis", "Docker", "OCI Cloud"],
    code: "https://github.com/Prabhath1403/nexora",
    live: "",
  },
  {
    title: "CipherSight — Post-Quantum Cryptographic Scanner",
    emoji: "🛡️",
    desc: "Lightweight enterprise PQC auditor performing deep TLS handshake inspection, NIST FIPS 203/204/205 compliance checks, and CycloneDX 1.5 CBOM generation.",
    tech: ["React", "FastAPI", "Celery", "Redis", "PostgreSQL", "Scapy"],
    code: "https://github.com/Prabhath1403/cyphersite",
    live: "",
  },
  {
    title: "AI Fraud Controller — LightGBM Inference Engine",
    emoji: "🔍",
    desc: "Stripe Radar-style transaction risk detection engine powered by a trained LightGBM model served via FastAPI with a dark TypeScript dashboard.",
    tech: ["LightGBM", "FastAPI", "React", "TypeScript", "Docker"],
    code: "https://github.com/Prabhath1403/Fruad-controller",
    live: "",
  },
  {
    title: "EnvGuard — PyPI .env Validator CLI",
    emoji: "⚙️",
    desc: "Production-ready CLI tool for schema-based .env validation, security auditing, and one-command CI/CD setup with GitHub Actions & pre-commit hooks.",
    tech: ["Python", "Click", "Rich CLI", "PyPI", "GitHub Actions"],
    code: "https://github.com/Prabhath1403/envguard",
    live: "https://pypi.org/project/envguard/",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section-wrapper">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="section-tag">// FEATURED SHOTS & REPOS</span>
        <h2 className="section-title-large">
          SELECTED <span className="pink-gradient-text">PROJECTS</span>
        </h2>
      </motion.div>

      <div className="bento-grid">
        {PROJECTS.map((p, idx) => (
          <motion.div
            key={p.title}
            className={`bento-card dribbble-shot-card ${idx === 0 || idx === 1 ? "col-span-6" : "col-span-4"}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            <div>
              <div className="shot-icon-box">{p.emoji}</div>
              <h3 className="shot-title">{p.title}</h3>
              <p className="shot-description">{p.desc}</p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 20 }}>
                {p.tech.map((t) => (
                  <span key={t} className="tech-chip">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div style={{ display: "flex", gap: 10 }}>
              {p.code && (
                <a
                  href={p.code}
                  target="_blank"
                  rel="noreferrer"
                  className="dribbble-btn-dark"
                  style={{ padding: "8px 18px", fontSize: "0.82rem" }}
                >
                  💻 GitHub Repo
                </a>
              )}
              {p.live && (
                <a
                  href={p.live}
                  target="_blank"
                  rel="noreferrer"
                  className="dribbble-btn-pink"
                  style={{ padding: "8px 18px", fontSize: "0.82rem" }}
                >
                  🚀 PyPI Package
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
