import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <p className="body-medium">
          &copy; Copyright {currentYear}. All rights reserved by deloooonp. test
        </p>
      </div>
    </footer>
  );
}

export default Footer;
