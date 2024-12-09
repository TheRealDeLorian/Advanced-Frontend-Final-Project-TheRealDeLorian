import { useState } from "react";
import LoginButton from "../LoginButton";
import { Link } from "react-router-dom";

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="navbar navbar-expand-md mx-2 navbar-light bg-light">
        <Link className="col navbar-brand" to="#">
          SacredSteps
        </Link>
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
            <Link className="nav-item nav-link mx-auto active" to="/">
              Home
            </Link>
            <Link className="nav-item nav-link mx-auto" to="/journal">
              My Journal
            </Link>
            <Link className="nav-item nav-link mx-auto" to="/temples">
              Temples
            </Link>
            <Link className="nav-item nav-link mx-auto" to="/settings">
              Settings
            </Link>
          </div>
        </div>
        <div className="mx-2">
          <LoginButton />
        </div>
      </nav>
    </>
  );
};
