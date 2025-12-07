import React from 'react';

function Header({ onNavClick }) {
  console.log("onNavClick exists?", !!onNavClick);
  return (
    <header className="site-header">
      <nav className="nav-pill">
        <button
          type="button"
          className="nav-link"
          onClick={() => onNavClick('skills')}
        >
          SKILL
        </button>
        
        <button
          type="button"
          className="nav-link"
          onClick={() => onNavClick('projects')}
        >
          PROJECT
        </button>
        
        <button
          type="button"
          className="nav-link"
          onClick={() => onNavClick('about')}
        >
          ABOUT
        </button>
      </nav>
    </header>
  );
}

export default Header;
