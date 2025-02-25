import React, { useState } from 'react';
import './Projects.css';

// Import images
import wingtipsImg from './../../assets/projectsImg/Wingtips.webp';
import movieBookingImg from './../../assets/projectsImg/movie_booking_system.webp';
import atomsAndCompoundsImg from './../../assets/projectsImg/atoms_and_compounds.webp';
import hospitalPrioritizationImg from './../../assets/projectsImg/hospital_prioritization.webp';

const projectsData = [
  {
    title: "WingTips - User Guide for Air Travel",
    image: wingtipsImg,
    description: "A comprehensive guide aimed at educating air travelers for a seamless experience. This project provides tips and insights into booking tickets, preparing for travel, navigating airports, and ensuring a stress-free journey. It features interactive components and user-friendly design to cater to both novice and experienced travelers.",
    tools: ["React", "NodeJs", "CSS", "Express", "MySQL"],
  },
  {
    title: "Movie Booking System",
    image: movieBookingImg,
    description: "This is a movie booking system developed using Java and JDBC. The system allows users to browse movies, check availability, book tickets, and manage bookings seamlessly. It incorporates a robust database for managing movie schedules, user data, and transaction history.",
    tools: ["Java", "JDBC", "MySQL"],
  },
  {
    title: "Atoms And Compound Simulation System",
    image: atomsAndCompoundsImg,
    description: "Elements and Atoms, Compounds and their Atomic Structures, Nuclear Chain Reactions. This project was developed as part of a computer graphics coursework and demonstrates advanced rendering techniques, interactive visualizations, and real-time simulations.",
    tools: ["C++", "OpenGL", "Computer Graphics"],
  },
  {
    title: "Hospital Prioritization System",
    image: hospitalPrioritizationImg,
    description: "This repository contains a Hospital Prioritization System developed in C++ using computer graphics. The system simulates hospital management operations with a variety of features aimed at organizing and prioritizing hospital activities effectively.",
    tools: ["OpenGL", "C++", "Computer Graphics"],
  },
];

const Projects = () => {
  const [searchQuery, setSearchQuery] = useState("");

  // Filter projects based on search query
  const filteredProjects = projectsData.filter((project) =>
    project.tools.some((tool) =>
      tool.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  return (
    <section id="projects" className="projects">
      <h2 className="projectTitle">Projects</h2>
      {/* Search Box */}
      <div className="search-container">
        <input
          type="text"
          placeholder="Search by tools (e.g., React, Java)"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-box"
        />
      </div>
      {/* Project Cards */}
      <div className="projects-container">
        {filteredProjects.map((project, index) => (
          <div key={index} className="project-card">
            <img
              src={project.image}
              alt={`${project.title} thumbnail`}
              className="project-image"
            />
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <div className="project-tools">
              <strong>Tools:</strong> {project.tools.join(", ")}
            </div>
          </div>
        ))}
        {filteredProjects.length === 0 && (
          <p className="no-results">No projects found for the entered tool.</p>
        )}
      </div>
    </section>
  );
};

export default Projects;
