import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { assets } from "../../assets";
import "./About.css";

function About() {
  const aboutRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        aboutRef.current,
        { x: -900, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1.5,
          delay: 4,
          ease: "power4.inOut",
        }
      );
    }, aboutRef);

    return () => ctx.revert();
  }, []);
  return (
    <div ref={aboutRef} className="about-card">
      <h2 className="card-title title-medium">About Me</h2>
      <p className="body-medium card-text">
        I am a third-year Information Systems student at Bina Sarana Informatika
        with an interest in web development.
      </p>
      <ul className="about-list">
        <li className="resume-bottom-item">
          <span className="material-symbols-outlined icon-m" aria-hidden="true">
            <img src={assets.github} alt="" />
          </span>
          <span className="label-large">github.com/deloooonp</span>
          <a
            href="https://github.com/deloooonp"
            className="state-layer"
            target="_blank"
          ></a>
        </li>
        <li className="resume-bottom-item">
          <span className="material-symbols-outlined icon-m" aria-hidden="true">
            <img src={assets.linkedin} alt="" />
          </span>
          <span className="label-large">linkedin.com/in/delon-pratama</span>
          <a
            href="https://www.linkedin.com/in/delon-pratama-38592229a/"
            className="state-layer"
            target="_blank"
          ></a>
        </li>
        <li className="resume-bottom-item">
          <span className="material-symbols-outlined icon-m" aria-hidden="true">
            <img src={assets.instagram} alt="" />
          </span>
          <span className="label-large">instagram.com/deloooonp</span>
          <a
            href="https://www.instagram.com/deloooonp/"
            className="state-layer"
            target="_blank"
          ></a>
        </li>
        <div className="btn-wrapper">
          <a
            href={assets.Delon_Pratama_CV}
            downloads=""
            target="_blank"
            className="chip"
          >
            <span className="label-large">Download CV</span>
            <div className="state-layer"></div>
          </a>
        </div>
      </ul>
    </div>
  );
}

export default About;
