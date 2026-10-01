import { useEffect, useRef, useState } from "react";
import "./Skills.css";

function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 992 && activeTab === null) {
        setActiveTab("frontend");
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [activeTab]);

  const skillData = {
    frontend: {
      command: "skills --frontend",
      comment: "# Interfaces, interactions, and modern web development",
      skills: [
        { name: "React.js", level: 95 },
        { name: "JavaScript (ES6+)", level: 92 },
        { name: "HTML5 / CSS3", level: 90 },
        { name: "Tailwind CSS", level: 88 },
        { name: "Vite", level: 90 },
        { name: "Framer Motion", level: 78 },
      ],
    },
    backend: {
      command: "skills --backend",
      comment: "# APIs, application logic, databases, and services",
      skills: [
        { name: "Node.js", level: 92 },
        { name: "Express.js", level: 90 },
        { name: "REST APIs", level: 90 },
        { name: "Java", level: 82 },
        { name: "MongoDB", level: 88 },
        { name: "MySQL / SQL", level: 85 },
        { name: "Redis", level: 78 },
      ],
    },
    ai: {
      command: "skills --ai",
      comment: "# Building AI-powered applications and LLM systems",
      skills: [
        { name: "LLM APIs", level: 88 },
        { name: "Gemini / OpenAI", level: 88 },
        { name: "LangGraph", level: 78 },
        { name: "Qdrant / Vector Search", level: 75 },
        { name: "RAG Systems", level: 78 },
        { name: "Prompt Engineering", level: 85 },
      ],
    },
    infrastructure: {
      command: "skills --infrastructure",
      comment: "# Containers, tooling, and application infrastructure",
      skills: [
        { name: "Docker", level: 82 },
        { name: "Prisma ORM", level: 82 },
        { name: "Git & GitHub", level: 92 },
        { name: "Nginx", level: 70 },
        { name: "Terraform", level: 68 },
        { name: "CI / CD", level: 70 },
      ],
    },
    tools: {
      command: "skills --tools",
      comment: "# Engineering tools, testing, and problem solving",
      skills: [
        { name: "TypeScript", level: 82 },
        { name: "Vitest", level: 78 },
        { name: "Postman", level: 88 },
        { name: "npm / Node.js", level: 90 },
        { name: "Data Structures & Algorithms", level: 88 },
        { name: "Open Source", level: 80 },
      ],
    },
  };

  const handleTabClick = (key) => {
    if (activeTab === key && window.innerWidth <= 992) {
      setActiveTab(null);
    } else {
      setActiveTab(key);
    }
  };

  const renderTerminalContent = (data) => (
    <div className="terminal-card">
      <div className="terminal-top-bar">
        <div className="terminal-dots">
          <span className="dot red"></span>
          <span className="dot yellow"></span>
          <span className="dot green"></span>
        </div>
        <div className="terminal-title">karthick@portfolio</div>
        <div className="terminal-icon-box">□</div>
      </div>

      <div className="terminal-body">
        <div className="terminal-command-line">
          <span className="terminal-prompt">karthick@portfolio:~$</span>{" "}
          <span className="terminal-input">{data.command}</span>
        </div>

        <div className="terminal-comment">{data.comment}</div>

        <div className="terminal-skills-list">
          {data.skills.map((item, index) => (
            <div key={item.name} className="terminal-skill-row">
              <span className="t-prefix">&gt;</span>
              <span className="t-name">{item.name}</span>
              <div className="t-bar-container">
                <div
                  className="t-bar-fill"
                  style={{
                    width: `${item.level}%`,
                    animationDelay: `${index * 0.1}s`,
                  }}
                ></div>
              </div>
              <span className="t-percent">{item.level}%</span>
            </div>
          ))}
        </div>

        <div className="terminal-footer-line">
          <span className="terminal-prompt">karthick@portfolio:~$</span>{" "}
          <span className="terminal-cursor">|</span>
        </div>
      </div>
    </div>
  );

  return (
    <section
      className={`skills ${isVisible ? "is-visible" : ""}`}
      id="skills"
      ref={sectionRef}
    >
      <div className="skills-container">
        <div className="skills-header reveal-item delay-1">
          <span className="skills-badge">SKILLS</span>
          <br></br>
          <span className="skills-title ">CORE STACK & TOOLS</span>
        </div>

        <div className="skills-split-layout">
          <div className="skills-nav-list reveal-item delay-2">
            {Object.keys(skillData).map((key) => {
              const isActive = activeTab === key;
              const data = skillData[key];

              return (
                <div
                  key={key}
                  className={`skill-category-group ${isActive ? "active" : ""}`}
                >
                  <div
                    className={`skill-nav-item ${isActive ? "active" : ""}`}
                    onMouseEnter={() => {
                      if (window.innerWidth > 992) setActiveTab(key);
                    }}
                    onClick={() => handleTabClick(key)}
                  >
                    <span className="skill-nav-name">{key}</span>
                    <span className="skill-nav-arrow">→</span>
                  </div>

                  <div className="mobile-terminal-wrapper">
                    {renderTerminalContent(data)}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="skills-terminal-wrapper desktop-only reveal-item delay-2">
            {activeTab && renderTerminalContent(skillData[activeTab])}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
