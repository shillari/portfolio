import React from "react";
import sandy from '../../assets/img/sandy-photo.jpg';
import bckgImage from '../../assets/img/hero-overlay-graph-lines.svg';
import { Github, Linkedin } from "react-bootstrap-icons";
import { Link } from "react-scroll";

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
            <a href="https://www.linkedin.com/in/sandy-hayashi/" target="_blank" rel="noreferrer"><Linkedin size={30} color="#f5f9ff" /></a>
          </div>
        </div>
        <Link
          className="work-arrow"
          activeClass="active"
          to="projects"
          spy={true}
          smooth={true}
          duration={700}><p>Check out my work</p>
          <div className="arrow"></div>
        </Link>
      </div>
    </section>
  );
}

export default Home;