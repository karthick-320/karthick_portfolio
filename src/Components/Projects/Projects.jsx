import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import "./Projects.css";
import udemyThumbnail from "../../assets/Projects/udemy1.png";
import udemyimage1 from "../../assets/Projects/udemy2_.png";
import tripadvisorThumbnail from "../../assets/Projects/trip1.png";
import tripadvisorimage1 from "../../assets/Projects/trip2.png";
import nostra1 from "../../assets/Projects/nostra1.png";
import nostra2 from "../../assets/Projects/nostra2.png";
import eventPlannerImage from "../../assets/Projects/AWS.png";

const sampleProjects = [
  {
    title: "Event Planner AI (AWS-Powered)",
    category: "Full Stack",
    shortDesc:
      "An AI-powered event planning assistant using AWS Lambda, DynamoDB, and Bedrock, integrated with a React frontend.",
    description:
      "This project is a serverless full-stack application that allows users to generate intelligent event plans through an interactive React frontend. It uses AWS Lambda for backend logic, DynamoDB for data storage, and Amazon Bedrock (Claude 3.5) for AI-powered event suggestions. Users can create sessions, fetch plans, and interact through follow-up questions. The frontend is deployed on GitHub Pages, and backend uses CORS-secured Lambda URLs to communicate seamlessly.",
    thumbnail: eventPlannerImage, // replace with your thumbnail image import
    image: eventPlannerImage, // replace with your detailed preview image import
    video: "", // or a demo video link like "eventplanner-demo.mp4"
    tech: "React, AWS Lambda, DynamoDB, Amazon Bedrock, HTML, CSS, JavaScript",
    url: "https://karthick-320.github.io/eventplanneraws",
    github: "https://github.com/karthick-320/eventplanneraws",
  },
  {
    title: "Udemy - Online Learning (CLONE)",
    category: "Web",
    shortDesc:
      "A mobile-responsive static UI clone of the Udemy learning platform, built to replicate its design and layout.",
    description:
      "This project is a pixel-perfect static clone of the Udemy homepage layout. It focuses on replicating the original UI design, responsiveness, and user-friendly structure across devices. Though it has no backend functionality, the project demonstrates strong attention to layout precision, responsive design, and UI/UX consistency for real-world platforms.",
    thumbnail: udemyThumbnail,
    image: udemyimage1,
    video: "", // or "bonza-preview.mp4"
    tech: "HTML,CSS",
    url: "https://karthick-320.github.io/udemy-clone/",
    github: "https://github.com/karthick-320/udemy-clone",
  },
  {
    title: "TripAdvisor - Travel Guide (CLONE)",
    category: "Web",
    shortDesc:
      "A static, mobile-responsive UI clone of TripAdvisor's travel platform, focused on layout and visual design.",
    description:
      "This project is a static front-end clone of the TripAdvisor website. It replicates the visual structure, design aesthetics, and responsive behavior of the original site. The project emphasizes clean layout techniques, responsiveness across device sizes, and UI consistency. It does not include any backend functionality but showcases front-end design skills.",
    thumbnail: tripadvisorThumbnail,
    image: tripadvisorThumbnail,
    video: "", // or "bonza-preview.mp4"
    tech: "HTML,CSS",
    url: "https://karthick-320.github.io/tripadvisor-clone/",
    github: "https://github.com/karthick-320/tripadvisor-clone",
  },
  {
    title: "Nostra - Fashion E-commerce Page",
    category: "Web",
    shortDesc:
      "A responsive fashion e-commerce page featuring brand highlights, product showcases, and searching products",
    description:
      "Nostra is a static front-end project that emulates a modern fashion e-commerce homepage. Built with HTML, CSS and JS, it features sections like New Arrivals, Most Wanted, and promotional offers. The design emphasizes responsiveness, clean layout, and visual appeal, providing a seamless user experience across devices.",
    thumbnail: nostra1,
    image: nostra2,
    video: "",
    tech: "HTML, CSS",
    url: "https://karthick-320.github.io/Nostra/",
    github: "https://github.com/karthick-320/Nostra",
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section className="projects-section">
      <h2>
        My <span className="highlight">Code Stories</span>
      </h2>
      <div className="project-grid">
        {sampleProjects.map((proj, i) => (
          <ProjectCard key={i} project={proj} onClick={setSelectedProject} />
        ))}
      </div>
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};

export default Projects;
