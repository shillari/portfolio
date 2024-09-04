import React from 'react';
import './App.css';
import NavBar from './components/navbar/NavBar';
import Home from './components/home/Home';
import Projects from './components/projects/Projects';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Impressum from './components/impressum/Impressum';
import CaseStudyMoonflix from './components/casestudy/CaseStudyMoonflix';

function App() {
  return (
    <Router>
      <main className="App">
        <Routes>
          <Route
            path='/'
            element={<Navigate to='/portfolio' replace />} />
          <Route
            exact
            path='/portfolio' element={
              <>
                <NavBar />
                <Home />
                <About />
                <Projects />
                <Contact />
                <Footer />
              </>
            } />
          <Route path='/impressum' element={
            <Impressum />
          } />
          <Route path='/casestudy-moonflix' element={
            <CaseStudyMoonflix />
          } />
        </Routes>
      </main>
    </Router >
  );
}

export default App;
