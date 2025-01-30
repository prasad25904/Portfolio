import React, { useState, useEffect } from "react";
import "./LightDark.css";
import Day from "./../../assets/images/light.jpg";
import Night from "./../../assets/images/dark.jpg";

const LightDark = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Function to switch to light mode
  const toLightMode = () => {
    const root = document.documentElement;
    root.style.setProperty("--bg-color", "white");
    root.style.setProperty("--text-color", "black");
    root.style.setProperty("--button-bg-color", "rgba(234, 147, 241, 0.85)");
    root.style.setProperty("--background-shadow", "rgba(0, 0, 0, 0.36)");
    root.style.setProperty("--button-bg-image", `url(${Day})`);
    root.style.setProperty("--navbar-color", "rgba(157, 232, 245, 0.71)");
    root.style.setProperty("--navbar-text-hover", "rgb(242, 234, 83)");
    root.style.setProperty("--navbar-background-color", "rgba(168, 215, 211, 0.7)");
    root.style.setProperty("--sidebar-background", "rgba(58, 58, 58, 0.32)");
    root.style.setProperty("--sidebar-background-open", "rgba(47, 46, 46, 0.63)");
    root.style.setProperty("--about-bg-c1", "rgba(109, 170, 235, 0.66)");
    root.style.setProperty("--about-bg-c2", "rgba(227, 143, 244, 0.65)");
    root.style.setProperty("--about-bg-c3", "rgba(132, 248, 188, 0.65)");
    root.style.setProperty("--project-card-color", "rgba(252, 252, 252, 0.75)");
    root.style.setProperty("--project-tool-bg", "rgba(244, 244, 244, 0.75)");
    root.style.setProperty("--project-card-tools-hover", "rgba(222, 199, 255, 0.73)");
    root.style.setProperty("--input-box-color", "rgba(237, 237, 237, 0.5)");
  };

  // Function to switch to dark mode
  const toDarkMode = () => {
    const root = document.documentElement;
    root.style.setProperty("--bg-color", "black");
    root.style.setProperty("--text-color", "white");
    root.style.setProperty("--button-bg-color", "rgba(222, 172, 227, 0.85)");
    root.style.setProperty("--background-shadow", "rgba(255, 255, 255, 0.36)");
    root.style.setProperty("--button-bg-image", `url(${Night})`);
    root.style.setProperty("--navbar-color", "rgba(47, 79, 79, 0.85)");
    root.style.setProperty("--navbar-text-hover", "rgb(220, 220, 220)");
    root.style.setProperty("--navbar-background-color", "rgba(30, 30, 30, 0.85)");
    root.style.setProperty("--sidebar-background", "rgba(47, 46, 46, 0.63)");
    root.style.setProperty("--sidebar-background-open", "rgba(30, 30, 30, 0.8)");
    root.style.setProperty("--about-bg-c1", "rgba(54, 57, 63, 0.75)");
    root.style.setProperty("--about-bg-c2", "rgba(90, 40, 110, 0.7)");
    root.style.setProperty("--about-bg-c3", "rgba(60, 90, 75, 0.75)");
    root.style.setProperty("--project-card-color", "rgba(9, 0, 58, 0.49)");
    root.style.setProperty("--project-tool-bg", "rgba(53, 53, 53, 0.75)");
    root.style.setProperty("--project-card-tools-hover", "rgba(88, 35, 163, 0.73)");
    root.style.setProperty("--input-box-color", "rgba(50, 50, 50, 0.5)");
  };

  // Toggle between light and dark mode
  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  // Apply the theme whenever isDarkMode changes
  useEffect(() => {
    if (isDarkMode) {
      toDarkMode();
    } else {
      toLightMode();
    }
  }, [isDarkMode]);

  return (
    <button className="theme-toggle" onClick={toggleTheme}>
      {isDarkMode ? "" : ""}
    </button>
  );
};

export default LightDark;
