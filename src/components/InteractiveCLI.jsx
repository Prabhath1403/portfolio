import React, { useState } from "react";

export default function InteractiveCLI() {
  const [input, setInput] = useState("");
  const [outputMessage, setOutputMessage] = useState("");

  const handleCommand = (e) => {
    if (e.key === "Enter") {
      const cmd = input.trim().toLowerCase();
      setInput("");

      if (cmd === "help") {
        setOutputMessage("Available commands: about, projects, skills, resume, contact, clear, sudo hire");
      } else if (cmd.includes("about")) {
        document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
        setOutputMessage("Navigated to #about");
      } else if (cmd.includes("project")) {
        document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
        setOutputMessage("Navigated to #projects");
      } else if (cmd.includes("skill")) {
        document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" });
        setOutputMessage("Navigated to #skills");
      } else if (cmd.includes("resume")) {
        document.getElementById("resume")?.scrollIntoView({ behavior: "smooth" });
        setOutputMessage("Navigated to #resume");
      } else if (cmd.includes("contact")) {
        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
        setOutputMessage("Navigated to #contact");
      } else if (cmd.includes("clear") || cmd === "cls") {
        window.scrollTo({ top: 0, behavior: "smooth" });
        setOutputMessage("Cleared screen view");
      } else if (cmd.includes("hire") || cmd.includes("sudo")) {
        window.location.href = "mailto:prabhaththummala@gmail.com";
        setOutputMessage("Opening mail client...");
      } else if (cmd === "") {
        setOutputMessage("");
      } else {
        setOutputMessage(`zsh: command not found: ${cmd}. Type 'help' for options.`);
      }

      setTimeout(() => setOutputMessage(""), 4000);
    }
  };

  return (
    <div className="cli-sticky-bar">
      <span style={{ color: "var(--accent-green)", fontWeight: 600, fontSize: "0.85rem" }}>
        prabhath@terminal:~$
      </span>
      <input
        type="text"
        className="cli-input"
        placeholder="Type a command (e.g. 'help', 'projects', 'cat about', 'sudo hire')..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleCommand}
      />
      {outputMessage ? (
        <span style={{ color: "var(--accent-amber)", fontSize: "0.8rem", fontFamily: "var(--font-mono)" }}>
          {outputMessage}
        </span>
      ) : (
        <span className="cli-hints">Press ↵ Enter</span>
      )}
    </div>
  );
}
