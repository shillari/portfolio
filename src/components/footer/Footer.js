import React from "react";
import { FaCopyright } from "react-icons/fa";
import { Github, Linkedin } from "react-bootstrap-icons";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="footer-container">
      <div className="footer-copy">
        <FaCopyright />{currentYear} Sandy Hayashi. All rights reserved.
      </div>
      <a className="link-impressum" href="/impressum">Impressum</a>
      <div className="footer-social">
        <a href="https://github.com/shillari" target="_blank" rel="noreferrer" ><Github size={30} color="#f5f9ff" /></a>
        <a href="https://www.linkedin.com/in/sandy-hillari-060353165" target="_blank" rel="noreferrer"><Linkedin size={30} color="#f5f9ff" /></a>
      </div>
    </div>
  )
}

export default Footer;