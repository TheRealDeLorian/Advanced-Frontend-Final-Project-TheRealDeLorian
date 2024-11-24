import React, { useState } from "react";
import LoginButton from "../LoginButton";

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="navbar navbar-expand-md mx-2 navbar-light bg-light">
        <a className="col navbar-brand" href="#">
          SacredSteps
        </a>
        <div className="mx-2">
          <LoginButton />
        </div>
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
        <div
          className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav">
            <a className="nav-item nav-link mx-auto active" href="#">
              Home{" "}
            </a>
            <a className="nav-item nav-link mx-auto" href="#">
              Temples
            </a>
            <a className="nav-item nav-link mx-auto" href="#">
              Map
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};
