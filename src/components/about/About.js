import React from "react";
import AboutCard from "./AboutCard";
import {
  FaUserGraduate,
  FaNetworkWired,
  FaLightbulb,
  FaScrewdriverWrench,
  FaCrosshairs
} from "react-icons/fa6";

const About = () => {
  return (
    <section className="section" id="about">
      <h1>Ab<span>ou</span>t me</h1>
      <div className="elevator-pitch">
        <p>I am a software developer with experience in building, testing, and maintaining critical systems. I’m skilled in backend development and troubleshooting and currently expanding my expertise to become a full-stack developer. I focus on delivering reliable results, even under tight deadlines.
        </p>
        <a href="/hayashi-sandy-resume.pdf" download>Download CV</a>
      </div>
      <div className='about-cards'>
        <AboutCard
          icon={FaUserGraduate}
          title='Education'
          description={
            <>
              Bachelor of Electrical Engineering
              <br />
              <span style={{ fontSize: 12 }}>(Faculdades Metropolitanas Unidas - Brazil)</span>
              <br />
              <br />
              Full-stack web development program
              <br />
              <span style={{ fontSize: 12 }}>(Career Foundry - Germany)</span>
            </>
          }
        />
        <AboutCard
          icon={FaNetworkWired}
          title='Professional Journey'
          description={
            <>
              Software developer (Aug 2019 - Nov 2021)
              <br />
              <span style={{ fontSize: 12 }}>(Itaú Unibanco - Brazil)</span>
              <br />
              <br />
              Software developer (Apr 2014 - Aug 2019)
              <br />
              <span style={{ fontSize: 12 }}>(Atech S/A - Grupo Embraer - Brazil)</span>
            </>
          }
        />
        <AboutCard
          icon={FaLightbulb}
          title='Philosophy'
          description={
            <>
              Collaborative problem-solver offering analyzes and solutions to better meet the needs of the client and the company, keeping in mind that business knowledge is also essential to ensure better solutions.
            </>}
        />
        <AboutCard
          icon={FaScrewdriverWrench}
          title='Expertise'
          description={
            <>
              &#9675; Language (Java, C, Javascript) &#9675; React &#9675; Springboot framework &#9675; HTML &#9675; CSS &#9675; SQL (MySQL, OracleDB) &#9675; GIT &#9675; JIRA
            </>
          }
        />
        <AboutCard
          icon={FaCrosshairs}
          title='Future Goals'
          description={
            <>
              After a short break, I could focus on learn new skills. I am willing to get back to work and excited to join a tech company and pursue a career as a full-stack developer.
            </>}
        />
      </div>
    </section>
  );
}

export default About;