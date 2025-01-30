import React, { useState } from 'react';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faBriefcase, faTimes } from '@fortawesome/free-solid-svg-icons'; // Import faTimes for the close icon

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="#hero">
          <FontAwesomeIcon icon={faBriefcase} className="icon" />
        </a>
        <p className="char">Prasad's Portfolio</p>
      </div>
      <button
        className="hamburger"
        onClick={toggleMenu}
        aria-expanded={isMenuOpen}
        aria-label="Toggle menu"
      >
        <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} className="icon" />
      </button>
      <ul className={`navbar-items ${isMenuOpen ? 'open' : ''}`}>
        <li><a href="#hero" className='menuList'>Home</a></li>
        <li><a href="#about" className='menuList' onClick={() => setMenuOpen(false)}>About Me</a></li>
        <li><a href="#skills" className='menuList' onClick={() => setMenuOpen(false)}>Skills & Tools</a></li>
        <li><a href="#projects" className='menuList' onClick={() => setMenuOpen(false)}>Projects</a></li>
        <li><a href="#certificates" className='menuList' onClick={() => setMenuOpen(false)}>Certifications</a></li>
        <li><a href="#contact" className='menuList' onClick={() => setMenuOpen(false)}>Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
