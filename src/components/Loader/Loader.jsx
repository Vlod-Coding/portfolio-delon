import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./Loader.css";

function Loader() {
  const loaderRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".loader-1", {
        width: 0,
        duration: 3,
        ease: "power2.inOut",
      });

      gsap.from(".loader-2", {
        width: 0,
        delay: 0,
        duration: 2,
        ease: "power2.inOut",
      });

      gsap.to(".loader", {
        background: "none",
        delay: 3,
        duration: 0.1,
      });

      gsap.to(".loader-1", {
        rotate: 90,
        y: -50,
        duration: 0.5,
        delay: 3.5,
      });

      gsap.to(
        ".loader-2",
        {
          x: -75,
          y: 75,
          duration: 0.5,
        },
        "<"
      );

      gsap.to(".loader", {
        scale: 40,
        duration: 1,
        delay: 4.25,
        ease: "power2.inOut",
      });

      gsap.to(".loader", {
        rotate: 45,
        y: 500,
        x: 2000,
        duration: 1,
        delay: 4.25,
        ease: "power2.inOut",
      });

      gsap.to(".loading-screen", {
        opacity: 0,
        duration: 0.25,
        delay: 4.75,
        ease: "power1.inOut",
      });
    }, loaderRef); // Context attached to the loader's ref

    return () => ctx.revert(); // Cleanup GSAP animations on unmount
  }, []);

  return (
    <div ref={loaderRef}>
      <div className="header-revealer"></div>
      <div className="loading-screen">
        <div className="loader">
          <div className="loader-1 bar"></div>
          <div className="loader-2 bar"></div>
        </div>
      </div>
    </div>
  );
}

export default Loader;
