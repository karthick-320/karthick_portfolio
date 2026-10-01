import { useEffect, useRef, useState } from "react";
import { FiCode, FiServer, FiLayers, FiGitBranch } from "react-icons/fi";
import "./About.css";

function About() {
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
      {
        threshold: 0.15,
      },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const highlights = [
    {
      icon: <FiCode />,
      title: "Frontend Engineering",
      desc: "Building responsive, intuitive interfaces with React and modern CSS.",
    },
    {
      icon: <FiServer />,
      title: "Backend Development",
      desc: "Designing reliable APIs and backend systems with Node.js and Express.",
    },
    {
      icon: <FiLayers />,
      title: "Full-Stack Thinking",
      desc: "Connecting frontend, backend, databases, and deployment into complete products.",
    },
    {
      icon: <FiGitBranch />,
      title: "Open Source",
      desc: "Contributing to real-world projects and continuously learning through collaboration.",
    },
  ];

  const skillPills = [
    "JavaScript",
    "React.js",
    "Node.js",
    "Express.js",
    "Java",
    "MongoDB",
    "MySQL",
    "REST APIs",
    "Git & GitHub",
    "DSA",
  ];

  return (
    <section
      className={`about ${isVisible ? "is-visible" : ""}`}
      id="about"
      ref={sectionRef}
    >
      <div className="about-container">
        <div className="about-header reveal-item delay-1">
          <span className="about-badge">ABOUT ME</span>
<br></br>
          <span className="about-title">
            BUILDING PRODUCTS,
            <br />
            SOLVING PROBLEMS.
          </span>
        </div>

        <div className="about-grid">
          <div className="about-bio reveal-item delay-2">
            <p className="about-lead">
              I'm Karthick, a Software Engineer who enjoys turning ideas into
              useful, scalable products.
            </p>

            <p className="about-text">
              I work across the full stack, from crafting clean React interfaces
              to designing APIs, databases, and backend systems. I enjoy
              understanding how things work under the hood and solving problems
              that require more than just writing code.
            </p>

            <p className="about-text">
              Outside of building projects, I'm constantly sharpening my
              problem-solving skills through Data Structures & Algorithms and
              contributing to open-source projects.
            </p>

            <div className="about-skills-wrapper">
              <span className="about-skills-label">
                TECHNOLOGIES I WORK WITH
              </span>

              <div className="about-pill-container">
                {skillPills.map((skill, index) => (
                  <span
                    key={skill}
                    className="about-pill reveal-item"
                    style={{
                      transitionDelay: `${0.4 + index * 0.05}s`,
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="about-cards">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className="about-card reveal-item"
                style={{
                  transitionDelay: `${0.3 + index * 0.15}s`,
                }}
              >
                <div className="about-card-icon">{item.icon}</div>

                <div>
                  <h3 className="about-card-title">{item.title}</h3>

                  <p className="about-card-desc">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
