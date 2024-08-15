import React from "react";
import { Link } from "react-scroll";
import { Github, Linkedin } from "react-bootstrap-icons";

const NavBar = () => {

  return (
    <header className="header">
      <nav className="navigation" role="navigation" aria-label="portfolio menu">
        <ul>
          <li className="listitem">
            <Link
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              duration={700}>HOME</Link>
          </li>
          <li className="listitem">
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              duration={700}>ABOUT ME</Link>
          </li>
          <li className="listitem">
            <Link
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              duration={700}>PROJECTS</Link>
          </li>
          <li className="listitem">
            <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              duration={700}>CONTACT</Link>
          </li>
        </ul>
      </nav>
      <div className="social-media">
        <a href="https://github.com/shillari" target="_blank" rel="noreferrer" ><Github size={30} color="#f5f9ff" /></a>
        <a href="https://www.linkedin.com/in/sandy-hillari-060353165" target="_blank" rel="noreferrer"><Linkedin size={30} color="#f5f9ff" /></a>
      </div>
    </header>
  );
};

export default NavBar;