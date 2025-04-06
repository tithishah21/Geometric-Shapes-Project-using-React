import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import Faqs from './Faqs' // import your Faqs component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/faqs" element={<Faqs />} />
      </Routes>
    </Router>
  );
}

export default App;
