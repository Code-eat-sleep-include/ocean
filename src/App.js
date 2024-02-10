// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import ParallaxSection from './components/ParallaxSection';
import LoginForm from './components/LoginForm';
import LandingPage from './components/LandingPage';
import DonationSection from './components/DonationSection';
import ProgressTracker from './components/ProgressTracker';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<ParallaxSection title="Aquatic Wildlife Awareness" imageUrl="bg.jpg" />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/" element={<LandingPage />} />
          <Route path="/donate" element={<DonationSection />} />
        </Routes>
        <ProgressTracker goal={1000000} current={500000} />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
