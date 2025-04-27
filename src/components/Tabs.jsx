import React from "react";

function Tabs({ activeTab, setActiveTab }) {
  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };
  return (
    <div className="primary-tabs">
      <button
        className={`tab-btn ${activeTab === "projects" ? "active" : ""}`}
        data-tab-btn="projects"
        onClick={() => handleTabClick("projects")}
      >
        <span className="tab-text title-small">Projects</span>
        <div className="state-layer"></div>
      </button>

      <button
        className={`tab-btn ${activeTab === "resume" ? "active" : ""}`}
        data-tab-btn="resume"
        onClick={() => handleTabClick("resume")}
      >
        <span className="tab-text title-small">Resume</span>
        <div className="state-layer"></div>
      </button>

      <button
        className={`tab-btn ${activeTab === "contact" ? "active" : ""}`}
        data-tab-btn="contact"
        onClick={() => handleTabClick("contact")}
      >
        <span className="tab-text title-small">Contact</span>
        <div className="state-layer"></div>
      </button>
    </div>
  );
}

export default Tabs;
