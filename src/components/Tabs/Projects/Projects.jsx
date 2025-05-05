import React from "react";
import Tilty from "react-tilty";
import { projectsData } from "../../../data/projectsData";
import "./Projects.css";

function Projects({ activeTab }) {
  return (
    <section
      className={`section tab-content ${
        activeTab === "projects" ? "active" : ""
      }`}
      data-tab-content="projects"
    >
      <div className="container">
        <div className="project-list">
          {projectsData.map((project) => (
            <Tilty scale={1.08} key={project.id}>
              <div className="card">
                <figure
                  className="card-banner img-holder"
                  style={{ "--width": 334, "--height": 180 }}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    width="334"
                    height="180"
                    className="img-cover"
                  />
                </figure>
                <div className="card-content">
                  <span className="label-large card-subtitle">
                    {project.type}
                  </span>
                  <h3 className="title-large card-title">{project.title}</h3>
                  <ul className="project-skills-list">
                    {project.skills.map((skill, skillIndex) => (
                      <li key={skillIndex}>
                        <img
                          src={skill.img}
                          width="21"
                          height="21"
                          loading="lazy"
                          alt={skill.name}
                          className="icon"
                        />
                        <span className="label-medium"></span>
                      </li>
                    ))}
                  </ul>
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  className="state-layer"
                ></a>
              </div>
            </Tilty>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
