import React from "react";
import sandy from '../img/sandy-square.jpeg';

const Home = () => {
  return (
    <section className="section" id="home">
      <div className="homepage">
        <img className="self-photo" src={sandy} alt="sandy" />
        <div className="home-text">
          <p>Hello!
            <br />I am Sandy Hayashi
          </p>
          <p>Web Developer</p>
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