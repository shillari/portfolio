import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <NavBar />
      <main className="App">
        <Home />
        <Projects />
        <About />
        <Contact />
      </main>
    </>
  );
}

export default App;
