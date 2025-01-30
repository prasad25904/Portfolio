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
    root.style.setProperty("--button-bg-color", "#f9f9f9");
    root.style.setProperty("--icon-color", "orange");
    root.style.setProperty("--button-bg-image", `url(${Day})`);
    root.style.setProperty("--navbar-color", "rgba(215, 239, 255, 0.86)");
    root.style.setProperty("--navbar-text-color", "rgb(0, 0, 0)");
  };

  // Function to switch to dark mode
  const toDarkMode = () => {
    const root = document.documentElement;
    root.style.setProperty("--bg-color", "black");
    root.style.setProperty("--text-color", "white");
    root.style.setProperty("--button-bg-color", "#333");
    root.style.setProperty("--icon-color", "yellow");
    root.style.setProperty("--button-bg-image", `url(${Night})`);
    root.style.setProperty("--navbar-color", "rgba(142, 189, 220, 0.86)");
    root.style.setProperty("--navbar-text-color", "rgb(255, 255, 255)");
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
