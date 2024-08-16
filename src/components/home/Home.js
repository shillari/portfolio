import React from "react";
import sandy from '../../assets/img/sandy-square.jpeg';
import bckgImage from '../../assets/img/hero-overlay-graph-lines.svg';
import { Github, Linkedin } from "react-bootstrap-icons";

const Home = () => {
  return (
    <section className="section" id="home">
      <div className="background-lines">
        <img src={bckgImage} alt="background lines" />
      </div>
      <div className="homepage">
        <img className="self-photo" src={sandy} alt="sandy" />
        <div className="home-text">
          <p>Hello!
            <br />I am Sandy Hayashi
          </p>
          <p>Software Developer</p>
          <div className="social-media">
            <a href="https://github.com/shillari" target="_blank" rel="noreferrer" ><Github size={30} color="#f5f9ff" /></a>
            <a href="https://www.linkedin.com/in/sandy-hillari-060353165" target="_blank" rel="noreferrer"><Linkedin size={30} color="#f5f9ff" /></a>
          </div>
        </div>
        <a href="#projects" className="work-arrow">
          <p>Check out my work</p>
          <div className="arrow"></div>
        </a>
      </div>
    </section>
  );
}

export default Home;