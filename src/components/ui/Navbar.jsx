import React from "react";
import { FaCode, FaMagic, FaRobot } from "react-icons/fa";

export const Navbar = ({ showAbout, setShowAbout }) => {
  return (
    <nav className="navbar">
      <div className="nav-brand">
        <FaMagic className="brand-icon" />
        <span>Cipher Cinema</span>
      </div>
      <div className="nav-links">
        <button
          className={`nav-button ${!showAbout ? "active" : ""}`}
          onClick={() => setShowAbout(false)}
        >
          <FaCode className="nav-icon" />
          <span>Generator</span>
        </button>
        <button
          className={`nav-button ${showAbout ? "active" : ""}`}
          onClick={() => setShowAbout(true)}
        >
          <FaRobot className="nav-icon" />
          <span>About</span>
        </button>
      </div>
    </nav>
  );
};
