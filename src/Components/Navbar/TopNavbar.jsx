import React from "react";
import "./TopNavbar.css";

const TopNavbar = () => {
  return (
      <nav className="top-navbar">
          
      {/* <div className="nav-logo">Karthick</div> */}

      <ul className="nav-links">
        <li>
          <a href="#profile">Profile</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
      </ul>
    </nav>
  );
};

export default TopNavbar;
