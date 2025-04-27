import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";

function TabbedContent({ activeTab, projects, resume, contact }) {
  const contentRef = useRef(null);

  useEffect(() => {
    if (contentRef.current) {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" }
      );
    }
  }, [activeTab]);

  return (
    <div ref={contentRef}>
      {activeTab === "projects" && projects}
      {activeTab === "resume" && resume}
      {activeTab === "contact" && contact}
    </div>
  );
}

export default TabbedContent;
