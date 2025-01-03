import React from 'react';
import './AboutMe.css';

const AboutMe = () => {
  return (
    <section id="about" className="about-me">
      <div className="layer"></div>
      <div className="layer"></div>
      <div className="layer"></div>
      <h2 className="about-title">About Me</h2>

      <p className="about-description">
        Hi, I’m Prasad, a BTech student at VIT, Pune. I specialize in crafting high-quality websites with clean, elegant, and user-friendly interfaces. I’ve worked on several projects, including <strong>Pradipti</strong>, a website for AAI internships, and <strong>WingTips</strong>, a user guide for air travel. My passion lies in delivering seamless digital solutions that are easy to use, even for non-technical users.
      </p>
      <p className="about-description">
        Beyond academics and projects, I enjoy solving challenging problems and continuously learning new technologies to stay updated in this dynamic field. My goal is to contribute innovative ideas to real-world applications and leave a positive impact through technology.
      </p>
    </section>
  );
};

export default AboutMe;
