import React from "react";

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-btn" onClick={onClose}>
          X
        </button>
        <h2>{project.title}</h2>
        <p>{project.description}</p>
        {project.video ? (
          <video controls src={project.video} />
        ) : (
          <img src={project.image} alt="preview" />
        )}
        <a href={project.github} target="_blank" rel="noopener noreferrer">
          View on GitHub
        </a>
      </div>
    </div>
  );
};

export default ProjectModal;
