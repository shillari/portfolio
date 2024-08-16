import React from 'react';
import './App.css';
import NavBar from './components/navbar/NavBar';
import Home from './components/home/Home';
import Projects from './components/projects/Projects';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

function App() {
  return (
    <>
      <NavBar />
      <main className="App">
        <Home />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

export default App;
