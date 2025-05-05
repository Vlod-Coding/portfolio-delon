import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Typed from "typed.js";
import { assets } from "../../assets";
import "./Hero.css";

function Hero() {
  const heroRef = useRef(null);
  const heroContentRef = useRef(null);
  const typedRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        [heroRef.current, heroContentRef.current],
        {
          y: -400,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1.5,
          delay: 4,
          ease: "power4.inOut",
          stagger: {
            amount: 0.25,
          },
        }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const options = {
      strings: ["Frontend", "Backend"],
      typeSpeed: 160,
      backSpeed: 120,
      loop: true,
    };

    typedRef.current = new Typed(".auto-type", options);

    return () => {
      typedRef.current.destroy();
    };
  }, []);

  return (
    <section ref={heroRef} className="section hero">
      <div className="container">
        <figure className="hero-banner img-holder">
          <img
            src={assets.profile}
            width="240"
            height="240"
            alt="Delon Pratama"
            className="img-cover"
          />
        </figure>

        <div className="hero-content" ref={heroContentRef}>
          <h1 className="display-medium hero-name">Delon Pratama</h1>
          <div className="type-container">
            <span className="title-large section-subtitle">
              <span className="auto-type"></span>Developer
            </span>
          </div>
          <p className="body-large section-text">
            I'm a web developer with experience in Laravel, Tailwind, and React.
            I build responsive and functional websites, handling both frontend
            and backend development to create smooth user experiences.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
