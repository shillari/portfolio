import React, { useState } from "react";
import { Link } from "react-scroll";

import logo from '../../assets/img/portfolio-logo.png';
import { FaBars } from "react-icons/fa6";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const setClose = () => {
    setIsOpen(false);
  };

  return (
    <header className="header">
      <img className="logo-img" src={logo} alt="sandy logo" />
      <nav className={`navigation ${isOpen ? 'open' : ''}`} role="navigation" aria-label="portfolio menu">
        <ul>
          <li className="listitem" >
            <Link
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              duration={700} onClick={setClose}>HOME</Link>
          </li>
          <li className="listitem">
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              duration={700} onClick={setClose}>ABOUT ME</Link>
          </li>
          <li className="listitem">
            <Link
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              duration={700} onClick={setClose}>PROJECTS</Link>
          </li>
          <li className="listitem">
            <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              duration={700} onClick={setClose}>CONTACT</Link>
          </li>
        </ul>
      </nav>
      <div className="navbar-toggle" >
        <div className="toggle-icon" onClick={toggleMenu}>
          <FaBars size={25} />
        </div>
      </div>
    </header>
  );
};

export default NavBar;