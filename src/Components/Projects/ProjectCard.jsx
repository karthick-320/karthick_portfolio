import React from "react";

const ProjectCard = ({ project, onClick }) => {
  return (
    <div className="project-card" onClick={() => onClick(project)}>
      <h3>{project.title}</h3>
      <p className="category">{project.category}</p>
      <p>{project.shortDesc}</p>
      <img src={project.thumbnail} alt={project.title} />
      <div className="meta">
        <p>
          <strong>Tech:</strong> {project.tech}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
