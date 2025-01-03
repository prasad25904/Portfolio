import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-text">
          &copy; {new Date().getFullYear()} | Developed by <strong>Prasad Ingle</strong>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
