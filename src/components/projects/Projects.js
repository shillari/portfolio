import React from "react";
import ProjectCard from "./ProjectCard";
import pokedexImg from "../../assets/img/pokedex.png";
import moonflixbackendImg from "../../assets/img/moonflix-backend.png";
import moonflixfrontendImg from "../../assets/img/moonflix-frontend.png";
import meetImg from '../../assets/img/meet.png';
import talkieImg from '../../assets/img/talkie.png';
import moonflixAngularImg from '../../assets/img/moonflix-angular.png';
import portfolioHtmlImg from '../../assets/img/portfolio_html.png';

const projects = [
  {
    id: 1,
    name: 'Pokédex',
    image: pokedexImg,
    description: 'The Pokédex project aims to create a user-friendly web application using HTML, CSS, and JavaScript. By leveraging data from an external API, users can explore detailed information about various Pokémon species, enhancing their knowledge and enjoyment of the Pokémon world.',
    github: 'https://github.com/shillari/pokedex',
    deployment: 'https://shillari.github.io/pokedex',
    technologies: ['Javascript', 'JQuery', 'HTML', 'CSS']
  },
  {
    id: 2,
    name: 'Moonflix Frontend',
    image: moonflixfrontendImg,
    description: 'Moonflix Frontend is the client-side component of the moonflix app, built using React and designed to interact with the existing server-side code (REST API and database).',
    github: 'https://github.com/shillari/moonflix_frontend',
    deployment: 'https://main--moonflix-app.netlify.app/login',
    casestudy: '/casestudy-moonflix',
    technologies: ['Javascript', 'React', 'HTML', 'CSS', 'Redux']
  },
  {
    id: 3,
    name: 'Moonflix Backend',
    image: moonflixbackendImg,
    description: 'Moonflix backend is the server-side component of a “movies” web application. This web application provides users with access to information about different movies, directors, and genres. Users can sign up, update their personal information, and create a list of their favorite movies.',
    github: 'https://github.com/shillari/moonflix_backend',
    deployment: 'https://moonflix-97228dafe8d1.herokuapp.com/documentation.html',
    technologies: ['Javascript', 'Node', 'HTML', 'CSS', 'Express', 'MongoDB']
  },
  {
    id: 4,
    name: 'Meet App',
    image: meetImg,
    description: 'Meet is a web application developed using the Test Driven Development (TDD) approach. The objective of the app is to display tech events around the world, allowing users to choose the city and the number of events to display.',
    github: 'https://github.com/shillari/meet',
    deployment: 'https://shillari.github.io/meet',
    technologies: ['Javascript', 'React', 'Node', 'HTML', 'CSS', 'AWS Lambda']
  },
  {
    id: 5,
    name: 'Talkie',
    image: talkieImg,
    description: 'Talkie is a chat application designed to connect people in a single room, facilitating easy and seamless communication.',
    github: 'https://github.com/shillari/talkie',
    download: `${process.env.PUBLIC_URL}/video/demostration.mp4`,
    technologies: ['Javascript', 'React Native', 'Node', 'CSS', 'Google Firebase']
  },
  {
    id: 6,
    name: 'Moonflix angular',
    image: moonflixAngularImg,
    description: 'Moonflix Frontend is the client-side component of the moonflix app, built using Angular and designed to interact with the server-side code (REST API and database).',
    github: 'https://github.com/shillari/moonflix-angular',
    deployment: 'https://shillari.github.io/moonflix-angular/welcome',
    technologies: ['Typescript', 'Angular', 'HTML', 'CSS']
  },
  {
    id: 7,
    name: 'Portfolio HTML',
    image: portfolioHtmlImg,
    description: 'The Portfolio project showcases my personal projects and skills. It was developed using HTML and CSS as part of my initial achievement in the CareerFoundry course.',
    github: 'https://github.com/shillari/portifolio-frontend',
    deployment: 'https://shillari.github.io/portifolio-frontend',
    technologies: ['HTML', 'CSS', 'Javascript']
  }
];

const Projects = () => {
  return (
    <section className="section" id="projects">
      <h1>Pro<span>je</span>cts</h1>

      <div className="project-cards">
        {
          projects.map(project => <ProjectCard key={project.id} project={project} />)
        }
      </div>
    </section>
  );
}

export default Projects;