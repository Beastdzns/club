import React from 'react';
import Home from './pages/Home';
import Clubs from './pages/Clubs';
import Application from './pages/Application';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/clubs" element={<Clubs />} />
        <Route path="/application" element={<Application />} />
      </Routes>
    </Router>
  );
};

export default App;
