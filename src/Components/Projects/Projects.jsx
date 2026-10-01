import { useEffect, useRef, useState } from "react";
import { FiGithub, FiExternalLink, FiFolder } from "react-icons/fi";
import "./Projects.css";

function Projects() {
  const [isVisible, setIsVisible] = useState(false);
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

  const projects = [
    {
      title: "CodeArena",
      description:
        "An AI-powered DSA mock interview platform where users practice company-specific coding problems, track progress, and run solutions in a sandboxed execution environment.",
      techStack: [
        "React.js",
        "Node.js",
        "Express",
        "MongoDB",
        "Docker",
        "Gemini",
      ],
      github: "#",
      live: "#",
    },

    {
      title: "LLM Cost Management",
      description:
        "An open-source TypeScript package for tracking LLM token usage, estimating request costs, and enforcing configurable spending limits across AI applications.",
      techStack: ["TypeScript", "Node.js", "LLM APIs", "Vitest", "npm"],
      github: "https://github.com/karthick-320/llm-cost-management",
      live: "https://www.npmjs.com/package/llm-cost-management",
    },

    {
      title: "Event Planner AI",
      description:
        "A serverless AI-powered event planning platform that generates intelligent event plans. It uses Amazon Bedrock with Claude 3.5 for AI-powered event suggestions and follow-up interactions.",
      techStack: [
        "React.js",
        "AWS Lambda",
        "DynamoDB",
        "Amazon Bedrock",
        "Claude 3.5",
        "GitHub Pages",
      ],
      github: "https://github.com/karthick-320/eventplanneraws",
      live: "https://karthick-320.github.io/eventplanneraws/",
    },

    {
      title: "Staff Appraisal System",
      description:
        "A full-stack employee appraisal platform for managing staff evaluations, performance data, and appraisal workflows through a structured web interface.",
      techStack: ["React.js", "Node.js", "Express.js", "MongoDB"],
      github: "https://github.com/karthick-320/Staff-Appraisal-System",
      live: "https://staff-appraisal-system.vercel.app/",
    },
  ];

  return (
    <section
      className={`projects ${isVisible ? "is-visible" : ""}`}
      id="projects"
      ref={sectionRef}
    >
      <div className="projects-container">
        <div className="projects-header reveal-item delay-1">
          <span className="projects-badge">PORTFOLIO</span>
          <h2 className="projects-title">FEATURED WORK</h2>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="project-card reveal-item"
              style={{ transitionDelay: `${0.2 + index * 0.15}s` }}
            >
              <div className="project-card-top">
                <FiFolder className="project-icon-main" />
                <div className="project-links">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub Link"
                  >
                    <FiGithub />
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Live Project Link"
                  >
                    <FiExternalLink />
                  </a>
                </div>
              </div>

              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>

              <div className="project-tech-stack">
                {project.techStack.map((tech) => (
                  <span key={tech} className="tech-pill">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
