import React from "react";

const ProjectCard = ({ project }) => {

  return (
    <div className="card" >
      {
        project &&
        <>
          <img className="card-img" src={project.image} alt="project" />
          <a target="_blank" className="project-button" href={project.github}>See project on GitHub</a>
          <p className="card-description">{project.description}</p>
        </>
      }
    </div>
  );
}

export default ProjectCard;