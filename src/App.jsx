import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import AboutMe from './Components/AboutMe/AboutMe';
import SkillsTools from './Components/SkillsTools/SkillsTools';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';
import Sidebar from './Components/sidebar/sidebar'; // Import Sidebar
import Footer from './Components/Footer/Footer';
import Certifications from './Components/Certifications/Certifications';

const App = () => {
  return (
    <div>
      <Navbar />
      <Sidebar /> {/* Add Sidebar component here */}
      {/* Sections */}
      <div id="hero">
        <Hero />
      </div>
      <div id="about">
        <AboutMe />
      </div>
      <div id="skills">
        <SkillsTools />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="certificates">
        <Certifications />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
};

export default App;
