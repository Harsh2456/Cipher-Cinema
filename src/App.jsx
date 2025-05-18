import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import MovieGenerator from './pages/MovieGenerator';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<MovieGenerator />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App; 