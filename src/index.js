import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// This is a movie generation website where users can input prompts and scripts
// The application will generate scenes, background sounds, and voices
// to create a complete movie experience using AI generation
reportWebVitals();
