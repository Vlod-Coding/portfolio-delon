import React from "react";
import {
  experiences,
  education,
  certificates,
  skills,
} from "../../../data/resumeData";
import "./Resume.css";

export default function Resume({ activeTab }) {
  return (
    <section
      className={`section tab-content resume-tab ${
        activeTab === "resume" ? "active" : ""
      }`}
      data-tab-content="resume"
    >
      <div className="container">
        <h2 className="section-title title-medium">Experience</h2>
        <ul className="list">
          {experiences.map((item, index) => (
            <li className="resume-item" key={index}>
              <div className="resume-card">
                <p className="body-large">{item.name}</p>
                <span className="label-medium card-subtitle">{item.date}</span>
                <span className="body-medium card-text">{item.desc}</span>
              </div>
            </li>
          ))}
        </ul>

        <h2 className="section-title title-medium">Education</h2>
        <ul className="list">
          {education.map((item, index) => (
            <li className="resume-item" key={index}>
              <div className="resume-card">
                <p className="body-large">{item.name}</p>
                <span className="body-medium card-text">{item.desc}</span>
                <span className="label-medium card-subtitle">{item.date}</span>
              </div>
            </li>
          ))}
        </ul>

        <h2 className="section-title title-medium">Certificates</h2>
        <ul className="list">
          {certificates.map((item, index) => (
            <li className="resume-item" key={index}>
              <div className="resume-card">
                <p className="body-large">{item.name}</p>
                <span className="body-medium card-text">{item.desc}</span>
                <span className="label-medium card-subtitle">{item.date}</span>
                <div className="btn-wrapper view-doc-btn">
                  <a
                    href={item.file}
                    downloads=""
                    target="_blank"
                    className="chip"
                  >
                    <span className="label-large">View Document</span>
                    <div className="state-layer"></div>
                  </a>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <h2 className="section-title title-medium">Skills and Technologies</h2>
        <ul className="resume-bottom-list">
          {skills.map((skill, index) => (
            <li className="resume-bottom-item" key={index}>
              <img
                src={skill.img}
                width="28"
                height="28"
                loading="lazy"
                className="icon"
                alt={skill.name}
              />
              <span className="label-medium">{skill.name}</span>
              <span href="#" className="state-layer"></span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
