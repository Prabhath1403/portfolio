import React from "react";

export function PowerlinePrompt({ command }) {
  return (
    <div className="powerline-prompt">
      <span className="prompt-user">prabhath</span>
      <span style={{ color: "var(--term-muted)" }}>@</span>
      <span className="prompt-host">ubuntu-zsh</span>
      <span style={{ color: "var(--term-muted)" }}>:</span>
      <span className="prompt-path">~/portfolio</span>
      <span className="prompt-symbol">$</span>
      <span style={{ color: "var(--term-text)", fontWeight: 500 }}>{command}</span>
    </div>
  );
}

export default function TerminalWindow({ children }) {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="terminal-frame">
      {/* Header bar */}
      <div className="terminal-header">
        <div className="mac-controls">
          <span className="mac-btn mac-close" title="Close" />
          <span className="mac-btn mac-minimize" title="Minimize" />
          <span className="mac-btn mac-maximize" title="Maximize" />
        </div>

        <div className="terminal-title">
          <span>⚡</span>
          <span>prabhath@ubuntu-zsh: ~/portfolio (zsh)</span>
        </div>

        <div className="terminal-nav">
          <button className="nav-anchor" onClick={() => scrollToSection("hero")}>#hero</button>
          <button className="nav-anchor" onClick={() => scrollToSection("about")}>#about</button>
          <button className="nav-anchor" onClick={() => scrollToSection("skills")}>#skills</button>
          <button className="nav-anchor" onClick={() => scrollToSection("projects")}>#projects</button>
          <button className="nav-anchor" onClick={() => scrollToSection("resume")}>#resume</button>
          <button className="nav-anchor" onClick={() => scrollToSection("contact")}>#contact</button>
        </div>
      </div>

      {/* Main Terminal Buffer */}
      <div className="terminal-body">
        {children}
      </div>
    </div>
  );
}
