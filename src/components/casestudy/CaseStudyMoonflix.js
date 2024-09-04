import React from "react";
import { FaArrowLeft, FaLock } from "react-icons/fa6";
import moonflixFrontendImg from '../../assets/img/moonflix-frontend.png';
import swaggerImg from '../../assets/img/swagger.png';
import moonflixLoginImg from '../../assets/img/moonflix-login.png';
import moonflixImg from '../../assets/img/moonflix-screenshot.png'

const CaseStudyMoonflix = () => {
  return (
    <>
      <div className='nav-impressum'>
        <a href='/' >
          <FaArrowLeft /> Back to home
        </a>
      </div>
      <h1 className="casestudy-title">Moonflix - Case Study</h1>
      <div className="case-study">
        <div className="casestudy-content">
          <div className="casestudy-text">
            <h2>Overview</h2>
            <p>Moonflix is a full-stack web application built with the MERN stack
              (MongoDB, Express, React, and Node). It offers users detailed
              movie information, including brief description, release year, genre,
              and director.</p>
          </div>
          <div className="casestudy-text">
            <h2>Objective</h2>
            <p>The objective of this project is to build a full-stack web application
              as part of my achievements in the CareerFoundry Immersion
              Course. The application is composed of a backend and a
              frontend, both written in JavaScript using React.
            </p>
          </div>
        </div>
        <img className="casestudy-img" src={moonflixLoginImg} alt="moonflix screen" />
      </div>
      <div className="case-study">
        <img className="casestudy-img" src={swaggerImg} alt="swagger screen" />
        <div className="casestudy-content">
          <div className="casestudy-text">
            <h2>Backend</h2>
            <p> I developed the RESTful API using Node.js and Express,
              serving endpoints in JSON format. It interacts with a non
              relational MongoDB database for data storage.
              The API is also documented using
              Swagger and hosted on
              Heroku.</p>
          </div>
          <div className="casestudy-text">
            <FaLock />
            <p>Authentication is implemented using basic
              authentication (username and password), while
              authorization is managed with JSON Web Tokens
              (JWT).

            </p>
          </div>
        </div>
      </div>
      <div className="case-study">
        <div className="casestudy-content">
          <div className="casestudy-text">
            <h2>Frontend</h2>
            <p> I developed the client-side as a single-page application
              using React. To enhance the user experience and ensure
              accessibility, I utilized React Bootstrap for building
              some components. This approach allows a wide range
              of users to enjoy a better experience. The application
              enables users to:
              <ul>
                <li>
                  - View a list of movies and their information (including
                  a brief description, director, release year, and genre).
                </li>
                <li>
                  - Log in and log out.
                </li>
                <li>
                  - Change their personal information.
                </li>
                <li>
                  - Add favorite movies to their list.
                </li>
                <li>
                  - See similar movies by genre.
                </li>
                <li>
                  - Search for a movie.
                </li>
              </ul>
            </p>
          </div>
          <div className="casestudy-text">
            <p> I implemented Redux to store user information,
              including the username and JWT, in the browser's local
              storage. This allows users to access their accounts
              without needing to re-enter their credentials for every
              interaction with the server-side.
            </p>
          </div>
        </div>
        <img className="casestudy-img" src={moonflixImg} alt="moonflix screen" />
      </div>
      <div className="case-study">
        <img className="casestudy-img" src={moonflixFrontendImg} alt="moonflix screen" />
        <div className="casestudy-content">
          <div className="casestudy-text">
            <h2>Retrospective</h2>
            <p>  I was very excited to work on this project. At the beginning, I designed various
              components to challenge myself by implementing a range of visual elements and
              learning how they work.</p>
          </div>
          <div className="casestudy-text">
            <p>My biggest challenge was designing the application and learning a new stack to
              build it. With no prior experience in using React for building a full-stack
              application, I was enthusiastic about seeing the final result. Through this process,
              I learned how React works, how to reuse components to minimize extra lines of
              code, and how to use hooks to streamline various processes.
              I overcame difficulties by searching online forums, getting tips from AI, and
              receiving support from my course tutor.

            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default CaseStudyMoonflix;