import React, { useState, useEffect } from 'react';
import './Projects.css';

// Import images
import ast1 from './../../assets/projectsImg/ast1.webp';
import wingtipsImg from './../../assets/projectsImg/Wingtips.webp';
import movieBookingImg from './../../assets/projectsImg/movie_booking_system.webp';
import atomsAndCompoundsImg from './../../assets/projectsImg/atoms_and_compounds.webp';
import hospitalPrioritizationImg from './../../assets/projectsImg/hospital_prioritization.webp';

// Tech stack color mapping
const techColors = {
  // Languages
  'C/C++ Compiler': '#659ad3',
  'Java': '#f89820',
  'JavaScript': '#f0db4f',
  'Python': '#3572A5',
  
  // Frameworks
  'React': '#61dafb',
  'NodeJs': '#68a063',
  'Express': '#000000',
  
  // Databases
  'MySQL': '#00758f',
  
  // Tools
  'Flex': '#ffcc00',
  'Bison': '#ff6600',
  'Graphviz': '#2596be',
  'OpenGL': '#5586a4',
  'Computer Graphics': '#6e4b87',
  'JDBC': '#d72a2a',
  
  // Styling
  'CSS': '#2965f1'
};

const projectsData = [
  {
    title: "JavaScript Code Analyzer",
    image: ast1,
    description: "A lightweight JavaScript static code analyzer built using Flex and Bison, capable of generating an Abstract Syntax Tree (AST), building a Symbol Table, and performing Semantic Analysis.",
    tools: ["C/C++ Compiler", "Flex", "Bison", "Graphviz"],
    githubLink: "https://github.com/prasad25904/JavaScript_Code_Analyzer.git",
    demoLink: "#"
  },
  {
    title: "WingTips - User Guide for Air Travel",
    image: wingtipsImg,
    description: "A comprehensive guide aimed at educating air travelers for a seamless experience. This project provides tips and insights into booking tickets, preparing for travel, navigating airports, and ensuring a stress-free journey.",
    tools: ["React", "NodeJs", "CSS", "Express", "MySQL"],
    githubLink: "#",
    demoLink: "#"
  },
  {
    title: "Movie Booking System",
    image: movieBookingImg,
    description: "This is a movie booking system developed using Java and JDBC. The system allows users to browse movies, check availability, book tickets, and manage bookings seamlessly.",
    tools: ["Java", "JDBC", "MySQL"],
    githubLink: "https://github.com/prasad25904/Movie_booking_system.git",
    demoLink: "#"
  },
  {
    title: "Atoms And Compound Simulation System",
    image: atomsAndCompoundsImg,
    description: "Elements and Atoms, Compounds and their Atomic Structures, Nuclear Chain Reactions. This project demonstrates advanced rendering techniques and interactive visualizations.",
    tools: ["C++", "OpenGL", "Computer Graphics"],
    githubLink: "https://github.com/prasad25904/ComputerGraphicsProjects.git",
    demoLink: "#"
  },
  {
    title: "Hospital Prioritization System",
    image: hospitalPrioritizationImg,
    description: "A Hospital Prioritization System developed in C++ using computer graphics. The system simulates hospital management operations with features for organizing and prioritizing activities.",
    tools: ["OpenGL", "C++", "Computer Graphics"],
    githubLink: "https://github.com/prasad25904/ComputerGraphicsProjects.git",
    demoLink: "#"
  },
];

const Projects = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState(projectsData);
  const [hoveredProject, setHoveredProject] = useState(null);
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'

  // Get all unique tools for filtering
  const allTools = ["All", ...new Set(projectsData.flatMap(project => project.tools))];

  useEffect(() => {
    let results = projectsData;
    
    // Apply search filter
    if (searchQuery) {
      results = results.filter(project =>
        project.tools.some(tool =>
          tool.toLowerCase().includes(searchQuery.toLowerCase())
        ) ||
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    // Apply tool filter
    if (activeFilter !== "All") {
      results = results.filter(project =>
        project.tools.includes(activeFilter)
      );
    }
    
    setFilteredProjects(results);
  }, [searchQuery, activeFilter]);

  const getTechColor = (tech) => {
    return techColors[tech] || '#6b7280'; // Default gray color
  };

  return (
    <section id="projects" className="projects">
      <h2 className="projectTitle">My Projects</h2>
      <p className="projectSubtitle">Here are some of my recent works</p>
      
      {/* Controls Section */}
      <div className="controls-section">
        {/* Search and Filter */}
        <div className="filter-section">
          <div className="search-container">
            <input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-box"
            />
            <svg className="search-icon" viewBox="0 0 24 24">
              <path d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 0 0 1.48-5.34c-.47-2.78-2.79-5-5.59-5.34a6.505 6.505 0 0 0-7.27 7.27c.34 2.8 2.56 5.12 5.34 5.59a6.5 6.5 0 0 0 5.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0 .41-.41.41-1.08 0-1.49L15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
            </svg>
          </div>
          
          <div className="filter-tags">
            {allTools.map((tool, index) => (
              <button
                key={index}
                className={`filter-tag ${activeFilter === tool ? 'active' : ''}`}
                onClick={() => setActiveFilter(tool)}
                style={activeFilter === tool ? { 
                  backgroundColor: getTechColor(tool),
                  color: '#fff'
                } : {}}
              >
                {tool}
              </button>
            ))}
          </div>
        </div>

        {/* View Toggle */}
        <div className="view-toggle">
          <button 
            className={`view-btn ${viewMode === 'grid' ? 'active' : ''}`}
            onClick={() => setViewMode('grid')}
          >
            <svg viewBox="0 0 24 24">
              <path d="M3 3v8h8V3H3zm6 6H5V5h4v4zm-6 4v8h8v-8H3zm6 6H5v-4h4v4zm4-16v8h8V3h-8zm6 6h-4V5h4v4zm-6 4v8h8v-8h-8zm6 6h-4v-4h4v4z"/>
            </svg>
          </button>
          <button 
            className={`view-btn ${viewMode === 'list' ? 'active' : ''}`}
            onClick={() => setViewMode('list')}
          >
            <svg viewBox="0 0 24 24">
              <path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z"/>
            </svg>
          </button>
        </div>
      </div>
      
      {/* Project Cards */}
      <div className={`projects-container ${viewMode}`}>
        {filteredProjects.map((project, index) => (
          <div 
            key={index} 
            className={`project-card ${viewMode}`}
            onMouseEnter={() => setHoveredProject(index)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            <div className="image-container">
              <img
                src={project.image}
                alt={`${project.title} thumbnail`}
                className="project-image"
                loading="lazy"
              />
              {hoveredProject === index && (
                <div className="project-overlay">
                  <div className="project-links">
                    <a href={project.githubLink} className="project-link" target="_blank" rel="noopener noreferrer">
                      <svg viewBox="0 0 24 24" className="github-icon">
                        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                      </svg>
                      Code
                    </a>
                    {project.demoLink && (
                      <a href={project.demoLink} className="project-link" target="_blank" rel="noopener noreferrer">
                        <svg viewBox="0 0 24 24" className="demo-icon">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                        </svg>
                        Demo
                      </a>
                    )}
                  </div>
                </div>
              )}
            </div>
            
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tools">
                {project.tools.map((tool, i) => (
                  <span 
                    key={i} 
                    className="tool-tag"
                    style={{
                      backgroundColor: getTechColor(tool),
                      color: getTextColor(getTechColor(tool))
                    }}
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
        
        {filteredProjects.length === 0 && (
          <div className="no-results">
            <svg viewBox="0 0 24 24" className="no-results-icon">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
            </svg>
            <p>No projects found matching your criteria</p>
            <button 
              className="reset-filters" 
              onClick={() => {
                setSearchQuery("");
                setActiveFilter("All");
              }}
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

// Helper function to determine text color based on background
function getTextColor(bgColor) {
  if (!bgColor) return '#ffffff';
  const color = bgColor.charAt(0) === '#' ? bgColor.substring(1, 7) : bgColor;
  const r = parseInt(color.substring(0, 2), 16); // hexToR
  const g = parseInt(color.substring(2, 4), 16); // hexToG
  const b = parseInt(color.substring(4, 6), 16); // hexToB
  return (r * 0.299 + g * 0.587 + b * 0.114) > 186 ? '#000000' : '#ffffff';
}

export default Projects;