import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import "./Projects.css";
import udemyThumbnail from "../../assets/Projects/udemy1.png";
import udemyimage1 from "../../assets/Projects/udemy2.png";
import tripadvisorThumbnail from "../../assets/Projects/trip1.png";
import tripadvisorimage1 from "../../assets/Projects/trip2.png";

const sampleProjects = [
  {
    title: "Udemy - Online Learning (CLONE)",
    category: "Web | Mobile",
    shortDesc:
      "A mobile-responsive static UI clone of the Udemy learning platform, built to replicate its design and layout.",
    description:
      "This project is a pixel-perfect static clone of the Udemy homepage layout. It focuses on replicating the original UI design, responsiveness, and user-friendly structure across devices. Though it has no backend functionality, the project demonstrates strong attention to layout precision, responsive design, and UI/UX consistency for real-world platforms.",
    thumbnail: udemyThumbnail,
    image: udemyimage1,
    video: "", // or "bonza-preview.mp4"
    tech: "HTML,CSS,",
    url: "https://karthick-34.github.io/udemy-clone/",
    github: "https://github.com/karthick-34/udemy-clone",
  },
  {
    title: "TripAdvisor - Travel Guide (CLONE)",
    category: "Web | Mobile",
    shortDesc:
      "A static, mobile-responsive UI clone of TripAdvisor's travel platform, focused on layout and visual design.",
    description:
      "This project is a static front-end clone of the TripAdvisor website. It replicates the visual structure, design aesthetics, and responsive behavior of the original site. The project emphasizes clean layout techniques, responsiveness across device sizes, and UI consistency. It does not include any backend functionality but showcases front-end design skills.",
    thumbnail: tripadvisorThumbnail,
    image: tripadvisorimage1,
    video: "", // or "bonza-preview.mp4"
    tech: "HTML,CSS,",
    url: "https://karthick-34.github.io/tripadvisor-clone/",
    github: "https://github.com/karthick-34/tripadvisor-clone",
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
