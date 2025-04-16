import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="sidebar">
      <ul className="sidebar-links">
        <li>
          <a
            href="https://github.com/your-username"
            target="_blank"
            rel="noopener noreferrer"
            data-label="GitHub"
          >
            <FaGithub />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/karthicksriram"
            target="_blank"
            rel="noopener noreferrer"
            data-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </li>
        <li>
          <a href="mailto:karthicksriram10.email@example.com" data-label="Email">
            <FaEnvelope />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
