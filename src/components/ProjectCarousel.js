import React from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ProjectCard from "./ProjectCard";
import pokedexImg from "../img/pokedex.png";
import moonflixbackendImg from "../img/moonflix-backend.png";
import moonflixfrontendImg from "../img/moonflix-frontend.png";
import meetImg from '../img/meet.png';

const projects = [
  {
    id: 1,
    name: 'Pokédex',
    image: pokedexImg,
    description: 'The Pokédex project aims to create a user-friendly web application using HTML, CSS, and JavaScript. By leveraging data from an external API, users can explore detailed information about various Pokémon species, enhancing their knowledge and enjoyment of the Pokémon world.',
    github: 'https://github.com/shillari/pokedex',
    deployment: 'https://shillari.github.io/pokedex'
  },
  {
    id: 2,
    name: 'Moonflix Backend',
    image: moonflixbackendImg,
    description: 'Moonflix backend is the server-side component of a “movies” web application. This web application provides users with access to information about different movies, directors, and genres. Users can sign up, update their personal information, and create a list of their favorite movies.',
    github: 'https://github.com/shillari/moonflix_backend',
    deployment: 'https://moonflix-97228dafe8d1.herokuapp.com/documentation.html'
  },
  {
    id: 3,
    name: 'Moonflix Frontend',
    image: moonflixfrontendImg,
    description: 'Moonflix Frontend is the client-side component of the moonflix app, built using React and designed to interact with the existing server-side code (REST API and database).',
    github: 'https://github.com/shillari/moonflix_frontend',
    deployment: 'https://main--moonflix-app.netlify.app/login'
  },
  {
    id: 4,
    name: 'Meet App',
    image: meetImg,
    description: 'Meet is a web application developed using the Test Driven Development (TDD) approach. The objective of the app is to display tech events around the world, allowing users to choose the city and the number of events to display.',
    github: 'https://github.com/shillari/meet',
    deployment: 'https://shillari.github.io/meet'
  }
];

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const ProjectCarousel = () => {
  return (
    <div className="carousel">
      <Carousel responsive={responsive}
        swipeable={true}
        draggable={false}
        showDots={true}
        ssr={true}
        infinite={true}
        autoPlay={false}
        autoPlaySpeed={3000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style">
        {
          projects.map(project => <ProjectCard key={project.id} project={project} />)
        }
      </Carousel>
    </div>
  )
}

export default ProjectCarousel;