import React, { useState, useEffect } from "react";

function TopBar() {
  const [theme, setTheme] = useState(
    () =>
      sessionStorage.getItem("theme") ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light")
  );

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    sessionStorage.setItem("theme", theme);
  }, [theme]);

  const handleThemeClick = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <header className="topbar">
      <a href="#" className="logo">
        <h2 className="brand-logo">deloooonp</h2>
      </a>

      <button
        className="icon-btn theme-btn"
        data-theme-btn
        onClick={handleThemeClick}
      >
        <span className="material-symbols-outlined dark" aria-hidden="true">
          dark_mode
        </span>
        <span className="material-symbols-outlined light" aria-hidden="true">
          light_mode
        </span>

        <div className="state-layer"></div>
      </button>
    </header>
  );
}

export default TopBar;
