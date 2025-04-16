import React, { useState, useEffect, useRef } from "react";
import "./Home.css";
import blackImage from "../assets/black.jpeg";
import whiteImage from "../assets/white.jpeg"; // your hover image
import Navbar from "./Navbar/Navbar";
import AboutMe from "./AboutMe/AboutMe";
import Portfolio from "./Projects/Projects";

const Home = () => {
  const fullText = "Karthick Sri Ram";
  const [typedText, setTypedText] = useState("");
  const [currentImage, setCurrentImage] = useState(blackImage);
  const indexRef = useRef(0);

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

      <section className="home-section">
        <div className="home-container">
          <div className="left-content">
            <h2 className="intro-heading">
              My Self,
              <br />
              <span className="highlight-name">{typedText}</span>
            </h2>
            <p className="intro-text">
              I’m Karthick — a developer who turns ideas into interactive
              experiences.I enjoy creating things that live on the web and make
              people go “wow.”
            </p>
            <button
              className="download-btn"
              onClick={() => {
                const link = document.createElement("a");
                link.href = "/resume.pdf";
                link.download = "Karthick_Resume.pdf";
                link.click();
              }}
            >
              Download CV
            </button>
          </div>

          <div className="right-content">
            <div
              className="image-card"
              onMouseEnter={() => setCurrentImage(whiteImage)}
              onMouseLeave={(e) => {
                setCurrentImage(blackImage);
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
              <img src={currentImage} alt="Karthick" />
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
      <Portfolio />
    </div>
  );
};

export default Home;
