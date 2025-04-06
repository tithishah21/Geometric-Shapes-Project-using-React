import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import Faqs from './temp';
import AuthForm from "./components/AuthForm";
import "bootstrap/dist/css/bootstrap.min.css";
import "boxicons/css/boxicons.min.css";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Faqs" element={<Faqs />} />
        <Route path="AuthFrom" element={<AuthForm />} />
      </Routes>
    </Router>
  );
}

export default App;
