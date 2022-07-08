import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/pages/Navbar';
import Hero from './components/pages/Hero';
import About from './components/pages/About';
import Project from './components/pages/Project';
import Contact from './components/pages/Contact';
import Footer from './components/pages/Footer';

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Hero />
      <About />
      <Project />
      <Contact />
      <Footer />
    </BrowserRouter>
    </>
  );
}

export default App;