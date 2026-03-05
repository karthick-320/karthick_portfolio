import React, { useState, useEffect, useRef } from "react";
import "./Home.css";
import blackImage from "../assets/black.jpeg";
import whiteImage from "../assets/white.jpeg"; 
import Navbar from "./Navbar/Navbar";
import AboutMe from "./AboutMe/AboutMe";
import Portfolio from "./Projects/Projects";

const Home = () => {
  const fullText = "Karthick Sri Ram";
  const [typedText, setTypedText] = useState("");
  const indexRef = useRef(0);
  const projectsRef = useRef(null);

  useEffect(() => {
    const typingInterval = setInterval(() => {
      const char = fullText.charAt(indexRef.current);
      if (char) {
        setTypedText((prev) => prev + char);
        indexRef.current++;
      } else {
        clearInterval(typingInterval);
      }
    }, 150);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <div>
      <div style={{ "z-index": 3000 }}>
        <Navbar />
      </div>

      <section id="profile" className="home-section">
        <div className="home-container">
          <div className="left-content">
            <h2 className="intro-heading">
              Hi, I'm
              <br />
              <span className="highlight-name">{typedText}</span>
            </h2>
            <p className="intro-text">
              A Full Stack Developer who enjoys solving backend challenges and
              shaping clean frontend experiences. I work across React, Node.js,
              Spring Boot, and SQL databases to develop performant, API-driven
              applications with clean architecture and maintainable codebases.
            </p>

            {/* Credibility Line */}
            {/* <p className="credibility-text">
              Final-Year CSE | Aspiring SDE-1 | MERN Stack • Java • SQL
            </p> */}
            <div className="header_button">
              <button
                className="download-btn"
                onClick={() => {
                  const link = document.createElement("a");
                  link.href = `${import.meta.env.BASE_URL}resume.pdf`; // ✅ correct relative path
                  link.download = "Karthick_Resume.pdf";
                  document.body.appendChild(link); // safe in some browsers
                  link.click();
                  document.body.removeChild(link);
                }}
              >
                Download CV
              </button>
              <button
                className="secondary-btn"
                onClick={() =>
                  projectsRef.current?.scrollIntoView({ behavior: "smooth" })
                }
              >
                View Projects
              </button>
            </div>
          </div>

          <div className="right-content">
            <div
              className="image-card"
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "rotateX(0deg) rotateY(0deg)";
              }}
              onMouseMove={(e) => {
                const card = e.currentTarget;
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left; // x position within the element
                const y = e.clientY - rect.top; // y position within the element
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;

                const rotateX = ((y - centerY) / centerY) * -20; // max 10deg rotation
                const rotateY = ((x - centerX) / centerX) * 20;

                card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
              }}
            >
              <img src={whiteImage} alt="Karthick" />
            </div>

            {/* <div className="right-role">
              <p className="role-text">
                I am a <span className="role-colored">Student</span>
              </p>
            </div> */}
          </div>
        </div>
        <div className="background-text">DEVELOPER</div>

        {/* <div className="scroll-icon">
          <span>↓</span>
        </div> */}
      </section>
      <AboutMe />
      <Portfolio ref={projectsRef} />
    </div>
  );
};

export default Home;
