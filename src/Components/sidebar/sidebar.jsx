import React, { useState, useEffect } from 'react';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa'; // Use chevron icons for toggle
import { FaLinkedin, FaGithub, FaMedium } from 'react-icons/fa'; // Social media icons
import './sidebar.css';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(window.innerWidth > 500); // Default to open if screen width > 500px
  const [isMobile, setIsMobile] = useState(window.innerWidth < 500);

  // Update state based on window size
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 500);
      if (window.innerWidth > 500) {
        setIsOpen(true); // Automatically open sidebar for larger screens
      } else {
        setIsOpen(false); // Automatically close sidebar for smaller screens
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSidebar = () => {
    setIsOpen(!isOpen); // Toggle sidebar visibility
  };

  return (
    <div>
      {/* Sidebar Toggle Icon (only for mobile) */}
      {isMobile && (
        <div className={`sidebar-toggle ${isOpen ? 'open' : 'closed'}`} onClick={toggleSidebar}>
          {isOpen ? <FaChevronLeft className="sidebar-toggle-icon" /> : <FaChevronRight className="sidebar-toggle-icon" />}
        </div>
      )}

      {/* Sidebar */}
      <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
        <ul className="sidebar-links">
          <li>
            <a
              href="https://www.linkedin.com/in/prasad-ingle-639731261/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="sidebar-icon" />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/prasad25904"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub className="sidebar-icon" />
            </a>
          </li>
          <li>
            <a
              href="https://medium.com/@prasadingle25904"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Medium"
            >
              <FaMedium className="sidebar-icon" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
