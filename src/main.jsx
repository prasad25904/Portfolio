// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client'; // Correct import from 'react-dom/client'
import App from './App';
import './index.css';

// Create a root element and render the App
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
