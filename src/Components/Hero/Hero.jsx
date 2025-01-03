import React, { useEffect, useState } from 'react';
import './Hero.css';
import Back from './../../assets/hero2.mp4';
import Back2 from './../../assets/hero1.mp4';
import MyImg from './../../assets/ProfImgwithoutBackgroung.png';

const Hero = () => {
  const titles = [
    'Software Developer',
    'Data Scientist',
    'Problem Solver',
    'Tech Enthusiast',
  ];
  const [currentTitle, setCurrentTitle] = useState('');
  const [titleIndex, setTitleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typingSpeed = isDeleting ? 50 : 150;
    const timeout = setTimeout(() => {
      const fullTitle = titles[titleIndex];

      if (!isDeleting) {
        setCurrentTitle(fullTitle.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);

        if (charIndex + 1 === fullTitle.length) {
          setIsDeleting(true);
          setTimeout(() => {}, 1000);
        }
      } else {
        setCurrentTitle(fullTitle.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);

        if (charIndex === 0) {
          setIsDeleting(false);
          setTitleIndex((titleIndex + 1) % titles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, titles, titleIndex]);

  return (
    <section className="hero">
      <video className="hero-video" autoPlay loop muted>
        <source src={Back} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="hero-content">
        <div className="hero-contentLeft">
          <h1>Hi👋, I'm Prasad Ingle</h1>
          <div className="title-container">
            <h3>{currentTitle}</h3>
          </div>
          <button
            onClick={() =>
              window.open(
                'https://drive.google.com/file/d/1JWkJLf2NBrbpwQDFOMTvBT0ow-rnv8pI/view?usp=sharing',
                '_blank'
              )
            }
          >
            <i className="fa fa-download" aria-hidden="true"></i> Download My Resume
          </button>
        </div>
        <div className="hero-contentRight">
          <img src={MyImg} alt="My Image" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
