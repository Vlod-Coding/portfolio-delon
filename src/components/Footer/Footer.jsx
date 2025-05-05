import React from "react";
import "./Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <p className="body-medium">
          &copy; Copyright {currentYear}. All rights reserved by deloooonp.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
