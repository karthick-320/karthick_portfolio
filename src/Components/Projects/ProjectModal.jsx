import React, { useEffect } from "react";
import "./ProjectModal.css";

const ProjectModal = ({ project, onClose }) => {
  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [project]);

  if (!project) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-btn" onClick={onClose}>
          X
        </button>
        <h2>{project.title}</h2>
        <p className="modal-content-description">{project.description}</p>

        {project.video ? (
          <video controls src={project.video} />
        ) : (
          <img src={project.image} alt="preview" />
        )}

        <div className="modal-links">
          {project.url && (
            <a href={project.url} target="_blank" rel="noopener noreferrer">
              Live Preview
            </a>
          )}
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              View on GitHub
            </a>
          )}
        </div>
      </div>
      <div style={{ height: "3rem" }}></div>
    </div>
  );
};

export default ProjectModal;
