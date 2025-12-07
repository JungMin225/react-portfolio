import React from "react";

function Header({ onNavClick }) {
  return (
    <header className="site-header">
      <nav className="nav-pill">
        <button
          type="button"
          className="nav-link"
          onClick={() => onNavClick("skills")}
        >
          SKILL
        </button>
        <button
          type="button"
          className="nav-link"
          onClick={() => onNavClick("projects")}
        >
          PROJECT
        </button>
        <button
          type="button"
          className="nav-link"
          onClick={() => onNavClick("contact")}
        >
          ABOUT
        </button>
      </nav>
    </header>
  );
}

export default Header;
