import "./Hero.css";
import { useRef, useState, useEffect } from "react";

function Hero() {
  const [resumeMessage, setResumeMessage] = useState("");
  const containerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setResumeMessage("");
      }
    };

    if (resumeMessage) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [resumeMessage]);

  const handleResumeClick = async (e) => {
    e.preventDefault();

    const resumePath = "/Karthick_Sri_Ram_Resume_.pdf";

    try {
      const response = await fetch(resumePath, {
        method: "HEAD",
      });

      const contentType = response.headers.get("content-type");

      if (
        !response.ok ||
        !contentType ||
        !contentType.includes("application/pdf")
      ) {
        throw new Error("Resume not found");
      }

      window.open(resumePath, "_blank", "noopener,noreferrer");
    } catch (error) {
      setResumeMessage(
        "Oops! My resume got lost. You can find it on my LinkedIn.",
      );
    }
  };
  return (
    <section className="hero">
      <div className="hero-orb hero-orb-blue" />
      <div className="hero-orb hero-orb-pink" />

      <nav className="hero-nav">
        <div className="hero-logo">KARTHICK</div>

        <div className="hero-nav-links">
          <a href="#about">ABOUT</a>
          <a href="#projects">PROJECTS</a>
          <a href="#skills">SKILLS</a>
        </div>

        <div className="hero-nav-actions">
          <div
            className="resume-container"
            ref={containerRef}
            style={{ position: "relative" }}
          >
            <a
              href="#resume"
              onClick={handleResumeClick}
              className="hero-resume-btn"
            >
              RESUME
            </a>

            {resumeMessage && (
              <div className="resume-fallback-toast">
                <p>{resumeMessage}</p>
                <a
                  href="https://www.linkedin.com/in/karthicksriram"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="fallback-linkedin-link"
                >
                  Visit LinkedIn →
                </a>
              </div>
            )}
          </div>

          <a href="#contact" className="hero-contact">
            LET'S TALK
          </a>
        </div>
      </nav>

      <div className="hero-content">
        <h1 className="hero-heading">
          <span className="heading-part">HI, I'M </span>
          <span className="heading-part">KARTHICK</span>
        </h1>

        <div className="hero-description">
          <span className="hero-description-label">SOFTWARE ENGINEER</span>
          <p>
            I build scalable web applications, solve complex problems, and turn
            ideas into products.
          </p>
        </div>

        <div className="hero-avatar-wrapper">
          <img src="/avatar.png" alt="Karthick" className="hero-avatar" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
