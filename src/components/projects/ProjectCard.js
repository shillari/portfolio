import React, { useRef, useState } from "react";
import { Button, Overlay } from "react-bootstrap";
import { Github } from "react-bootstrap-icons";
import { FaCircleInfo } from "react-icons/fa6";
import FootnoteProject from "../footer/FootnoteProject";

const ProjectCard = ({ project }) => {

  const [show, setShow] = useState(false);
  const target = useRef(null);

  return (
    <div className="card" >
      {
        project &&
        <>
          <img className="card-img" src={project.image} alt="project" />

          <div className="project-card-buttons">
            <div className="project-deploy">
              {
                project.deployment &&
                <a target="_blank" rel="noreferrer" href={project.deployment}>
                  {project.name}
                </a>
              }

              {
                project.download &&
                <a target="_blank" rel="noreferrer" href={project.download} download>
                  Download video demo
                </a>
              }
            </div>

            <a target="_blank" rel="noreferrer" className="project-button" href={project.github}>
              <Github size={20} className="project-icon" />
            </a>
            {project.description &&
              <>
                <Button className="project-button" ref={target} onClick={() => setShow(!show)}>
                  <FaCircleInfo size={20} className="project-icon" />
                </Button>
                <Overlay target={target.current} show={show} placement="left">
                  {({
                    placement: _placement,
                    arrowProps: _arrowProps,
                    show: _show,
                    popper: _popper,
                    hasDoneInitialMeasure: _hasDoneInitialMeasure,
                    ...props
                  }) => (
                    <div
                      {...props}
                      style={{
                        position: 'absolute',
                        backgroundColor: '#163b59',
                        padding: '5px 10px',
                        color: 'white',
                        borderRadius: 3,
                        maxWidth: 300,
                        ...props.style,
                      }}
                    >
                      {project.description}
                    </div>
                  )}
                </Overlay>
              </>
            }
          </div>
          {project.technologies &&
            <>
              <div className="card-techs">
                {
                  project.technologies.map(tech =>
                    <FootnoteProject key={tech} tech={tech} />
                  )
                }
              </div>
            </>
          }
        </>
      }
    </div >
  );
}

export default ProjectCard;