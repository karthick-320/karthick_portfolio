import React from "react";
import "./AboutMe.css";

const skills = [
  {
    name: "AWS",
    percent: 10,
    color: "#F26464",
    point: "Used Lambda, DynamoDB & Bedrock in full-stack projects.",
  },
  {
    name: "JavaScript",
    percent: 80,
    color: "#F26464",
    point: "Structured clean, modular JS code in multi-page web projects.",
  },
  {
    name: "HTML/CSS",
    percent: 95,
    color: "#7D5FFF",
    point: "Cloned real-world UIs like Udemy with responsive HTML/CSS.",
  },
  {
    name: "React",
    percent: 70,
    color: "#F26464",
    point: "Developed dynamic UIs using React and reusable components.",
  },
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
              <p>{ }{skill.point}</p>
            </div>
          ))}
        </div>

        {/* About Text Section */}
        <div className="about-info">
          <h2 className="section-title">
            More Than Just <span className="highlight">Code</span> – Here’s Who{" "}
            <span className="highlight">I Am</span>
          </h2>
          {/* <p className="tagline">
            Get to know the developer who loves design, performance, and problem
            solving.
          </p> */}
          <p>
            I’m not just another Full Stack Developer — I’m someone who blends
            creative UI design, snappy performance, and clean code into seamless
            digital experiences. Driven by curiosity and a love for building
            meaningful projects, I keep experimenting, learning, and solving
            problems — one bug at a time. My strength? Bridging logic with
            design.
          </p>
          <p>
            I also actively sharpen my brain with Data Structures and
            Algorithms, combining real-world projects with strong fundamentals
            to stay ahead of the curve.
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
