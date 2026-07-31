import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [form, setForm] = useState({ name: "", contact: "", subject: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.contact || !form.message) {
      setStatus("⚠️ Please complete all required fields.");
      return;
    }

    const emailSubject = `[Portfolio Contact] ${form.subject || "Collaboration Inquiry"}`;
    const emailBody = `Hello Prabhath,\n\nName: ${form.name}\nContact Email/Phone: ${form.contact}\n\nMessage:\n${form.message}`;

    const mailtoURL = `mailto:prabhaththummala@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

    window.location.href = mailtoURL;
    setStatus("✉️ Opening your email client with your pre-filled message...");
    setForm({ name: "", contact: "", subject: "", message: "" });
  };

  return (
    <section id="contact" className="section-wrapper">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="section-tag">// GET IN TOUCH</span>
        <h2 className="section-title-large">
          LET'S WORK <span className="pink-gradient-text">TOGETHER</span>
        </h2>
      </motion.div>

      <div className="bento-grid">
        <motion.form
          onSubmit={handleSubmit}
          className="bento-card col-span-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ display: "flex", flexDirection: "column", gap: 14 }}
        >
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
              style={{
                width: "100%",
                background: "#f8f9fa",
                border: "1px solid var(--border-light)",
                borderRadius: 12,
                padding: "12px 16px",
                color: "var(--text-main)",
                fontFamily: "var(--font-sans)",
                fontSize: "0.92rem",
                outline: "none",
              }}
            />
            <input
              type="text"
              name="contact"
              placeholder="Your Email or Phone"
              value={form.contact}
              onChange={handleChange}
              required
              style={{
                width: "100%",
                background: "#f8f9fa",
                border: "1px solid var(--border-light)",
                borderRadius: 12,
                padding: "12px 16px",
                color: "var(--text-main)",
                fontFamily: "var(--font-sans)",
                fontSize: "0.92rem",
                outline: "none",
              }}
            />
          </div>

          <input
            type="text"
            name="subject"
            placeholder="Subject (e.g. Internship, Collaboration)"
            value={form.subject}
            onChange={handleChange}
            style={{
              width: "100%",
              background: "#f8f9fa",
              border: "1px solid var(--border-light)",
              borderRadius: 12,
              padding: "12px 16px",
              color: "var(--text-main)",
              fontFamily: "var(--font-sans)",
              fontSize: "0.92rem",
              outline: "none",
            }}
          />

          <textarea
            name="message"
            placeholder="Your Message..."
            value={form.message}
            onChange={handleChange}
            rows={5}
            required
            style={{
              width: "100%",
              background: "#f8f9fa",
              border: "1px solid var(--border-light)",
              borderRadius: 12,
              padding: "12px 16px",
              color: "var(--text-main)",
              fontFamily: "var(--font-sans)",
              fontSize: "0.92rem",
              outline: "none",
              resize: "vertical",
            }}
          />

          <button type="submit" className="dribbble-btn-pink" style={{ alignSelf: "flex-start" }}>
            ✉️ Send via Email
          </button>

          {status && (
            <div style={{ color: "var(--accent-pink)", fontWeight: 600, fontSize: "0.88rem", marginTop: 4 }}>
              {status}
            </div>
          )}
        </motion.form>

        <motion.div
          className="bento-card col-span-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.3rem", marginBottom: 16, color: "var(--text-main)" }}>
            📍 Contact Info
          </h3>
          <div style={{ color: "var(--text-muted)", fontSize: "0.92rem", lineHeight: 1.8 }}>
            <p>
              <strong style={{ color: "var(--text-main)" }}>Email:</strong>{" "}
              <a href="mailto:prabhaththummala@gmail.com" style={{ color: "var(--accent-pink)", textDecoration: "none" }}>
                prabhaththummala@gmail.com
              </a>
            </p>
            <p><strong style={{ color: "var(--text-main)" }}>Phone:</strong> +91 9440073535</p>
            <p><strong style={{ color: "var(--text-main)" }}>Location:</strong> Coimbatore, Tamil Nadu / Hyderabad, Telangana</p>
            <p style={{ marginTop: 12, color: "var(--accent-pink)", fontWeight: 600 }}>
              🟢 Available for remote & hybrid AI/ML roles worldwide.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
