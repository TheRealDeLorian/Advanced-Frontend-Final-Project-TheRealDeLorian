import React, { useState } from "react";
import LoginButton from "../../LoginButton";

export const MobileFooter = () => {
  const [isOpen, setIsOpen] = useState(false); // State to track navbar collapse

  // Toggle navbar collapse
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">SacredSteps</a>
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleNavbar} 
          aria-controls="navbarNavAltMarkup"
          aria-expanded={isOpen ? "true" : "false"}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`} id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-item nav-link active" href="#">Home </a>
            <a className="nav-item nav-link" href="#">Temples</a>
            <a className="nav-item nav-link" href="#">Map</a>
            <LoginButton /> 
          </div>
        </div>
      </nav>
    </>
  );
};
