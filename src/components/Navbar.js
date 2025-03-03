import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="#home" className="navbar-logo">Allan Masibo</a>
        <ul className="navbar-menu">
          <li className="navbar-item"><a href="#home" className="navbar-link">Home</a></li>
          <li className="navbar-item"><a href="#home" className="navbar-link">Education</a></li>
          <li className="navbar-item"><a href="#about" className="navbar-link">Experience</a></li>
          <li className="navbar-item"><a href="#portfolio" className="navbar-link">Projects</a></li>
          <li className="navbar-item"><a href="#contact" className="navbar-link">Contact me</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;