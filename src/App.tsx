import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Hometown from './components/sections/Hometown';
import Hobbies from './components/sections/Hobbies';
import Contact from './components/sections/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider>
      <div className="bg-white dark:bg-dark-900 min-h-screen">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Hometown />
        <Hobbies />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;