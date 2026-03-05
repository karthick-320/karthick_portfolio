import React from "react";
import "./AboutMe.css";

import reactLogo from "../../assets/Skills/react.webp";
import nodeLogo from "../../assets/Skills/node js.svg";
import mysqlLogo from "../../assets/Skills/SQL.png";
import javaLogo from "../../assets/Skills/java.png";
import htmlLogo from "../../assets/Skills/html.png";
import cssLogo from "../../assets/Skills/css.png";
import githubLogo from "../../assets/Skills/github.webp";
import jsLogo from "../../assets/Skills/Javascript.svg";
import tailwindLogo from "../../assets/Skills/tailwind.png";
import mongoDbLogo from "../../assets/Skills/mongoDB.svg";

const skills = [
  { name: "HTML", image: htmlLogo },
  { name: "CSS", image: cssLogo },
  { name: "TAILWIND", image: tailwindLogo },
  { name: "JAVASCRIPT", image: jsLogo },
  { name: "JAVA", image: javaLogo },
  { name: "REACT JS", image: reactLogo },
  { name: "NODE JS", image: nodeLogo },
  { name: "SQL", image: mysqlLogo },
  { name: "MONGO DB", image: mongoDbLogo },
  { name: "GITHUB", image: githubLogo },
];

const AboutMe = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="vertical-wrapper">
        <div className="vertical-text">
          <h1>Skills</h1>
          <div className="vertical-border"></div>
        </div>
      </div>

      <div className="skills-container">
        <h2 className="skills-heading">What I Do</h2>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div className="skill-card" key={index}>
              <img src={skill.image} alt={skill.name} />
              <p>{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
