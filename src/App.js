import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import Faqs from './temp';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Faqs" element={<Faqs />} />
        

      </Routes>
    </Router>
  );
}

export default App;
