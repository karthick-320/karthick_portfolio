import React from "react";
import "./AboutMe.css";

const skills = [
  { name: "Photoshop", percent: 87, color: "#F26464" },
  { name: "Javascript", percent: 80, color: "#F26464" },
  { name: "HTML5/CSS3", percent: 95, color: "#7D5FFF" },
  { name: "React", percent: 70, color: "#F26464" },
];

const AboutMe = () => {
  return (
    <section className="about-wrapper">
      {/* <div className="about-header">
        <h1 className="about-background-text">About</h1>
        <h1><span className="about-bold">About</span> <span className="about-highlight">Me</span></h1>
      </div> */}
      <div className="about-grid">
        {/* Skills Section */}
        <div className="skills-grid">
          {skills.map((skill, i) => (
            <div className="skill-card" key={i}>
              <div className="progress-wrapper">
                <svg width="100" height="100">
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    stroke="#eee"
                    strokeWidth="8"
                    fill="none"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    stroke={skill.color}
                    strokeWidth="8"
                    fill="none"
                    strokeDasharray={2 * Math.PI * 40}
                    strokeDashoffset={
                      (2 * Math.PI * 40 * (100 - skill.percent)) / 100
                    }
                    transform="rotate(-90 50 50)"
                  />
                </svg>
                <div className="progress-text">{skill.percent}%</div>
              </div>
              <h3>{skill.name}</h3>
              <p>Lorem Ipsum is simply dummy text of the printing.</p>
            </div>
          ))}
        </div>

        {/* About Text Section */}
        <div className="about-info">
          <h2 className="section-title">
            More Than Just <span className="highlight">Code</span> – Here’s Who{" "}
            <span className="highlight">I Am</span>
          </h2>
          <p className="tagline">
            Get to know the developer who loves design, performance, and problem
            solving.
          </p>
          <p>
            I'm a passionate Full Stack Developer with a interest in building
            performance-driven web applications. My passion for creating
            attractive UI and efficient backend systems has fueled a consistent
            journey of learning and experimentation.
          </p>
          <p>
            Alongside web development, I actively practice Data Structures and
            Algorithms to sharpen my logical thinking and problem-solving
            abilities. I believe that combining a strong foundation in DSA with
            real-world project experience is the key to becoming a well-rounded
            developer.
          </p>
          <div className="details">
            <p>
              <strong>Full Name :</strong> Karthick Sri Ram A
            </p>
            <p>
              <strong>Age :</strong> 20 year
            </p>
            <p>
              <strong>Phone No :</strong> +91 8072677977
            </p>
            <p>
              <strong>Email :</strong> karthicksriram10@gmail.com
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
