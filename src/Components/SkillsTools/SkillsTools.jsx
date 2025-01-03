import React from "react";
import "./SkillsTools.css";

const SkillsTools = () => {
  const skills = [
    { name: "HTML", icon: "fab fa-html5" },
    { name: "Node.js", icon: "fab fa-node" },
    { name: "React.js", icon: "fab fa-react" },
    { name: "Java Swing", icon: "fab fa-java" },
    { name: "MERN Stack", icon: "fab fa-js-square" },
    { name: "JavaScript", icon: "fab fa-js" },
    { name: "CSS", icon: "fab fa-css3-alt" },
    { name: "MySQL", icon: "fab fa-database" },
    { name: "Java", icon: "fab fa-java" },
    { name: "MongoDB", icon: "fas fa-database" },
  ];

  const tools = [
    { name: "Figma", icon: "fab fa-figma" },
    { name: "VSCode", icon: "fas fa-code" },
    { name: "GitHub", icon: "fab fa-github" },
    { name: "Git", icon: "fab fa-git" },
    { name: "Docker", icon: "fab fa-docker" },
    { name: "Postman", icon: "fas fa-cogs" },
    { name: "NPM", icon: "fab fa-npm" },
  ];

  const duplicateItems = (items, times = 3) => {
    let duplicated = [];
    for (let i = 0; i < times; i++) {
      duplicated = [...duplicated, ...items];
    }
    return duplicated;
  };

  return (
    <div id="skills" className="skills-tools-container">
      <div className="skills-header">
        <span className="header-line"></span>
        <h2><strong>&lt;</strong>Skills &amp; Tools <strong>/&gt;</strong></h2>
        <span className="header-line"></span>
      </div>

      <div className="skills-slider">
        <div className="slider-track">
          {duplicateItems(skills).map((skill, index) => (
            <div key={index} className="slider-item">
              <i className={`${skill.icon} slider-item-icon`}></i>
              <div className="slider-item-name">{skill.name}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="tools-slider">
        <div className="slider-track">
          {duplicateItems(tools).map((tool, index) => (
            <div key={index} className="slider-item">
              <i className={`${tool.icon} slider-item-icon`}></i>
              <div className="slider-item-name">{tool.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsTools;
