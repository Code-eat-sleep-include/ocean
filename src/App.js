// src/App.js
import React from 'react';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link, animateScroll as scroll } from 'react-scroll';
import NavBar from './components/NavBar';
import ParallaxSection from './components/ParallaxSection';
import LoginForm from './components/LoginForm';
import LandingPage from './components/LandingPage';
import DonationSection from './components/DonationSection';
import ProgressTracker from './components/ProgressTracker';
import Footer from './components/Footer';
import './App.css';
import ContactUs from './components/ContactUs';
import PressInquiries from './components/PressInquiries';
import './components/FAQ.css';
import FAQ from './components/FAQ';
import HowItWorks from './components/HowItWorks';
import HamburgerMenu from './components/HamburgerMenu';

const App = () => {
  const [showFAQ, setShowFAQ] = useState(false);

  const toggleFAQ = () => {
    setShowFAQ(!showFAQ);
  };
  const scrollToHowItWorks = () => {
    scroll.scrollTo('how-it-works', {
      duration: 800,
      smooth: 'easeInOutQuart',
    });
  };
  return (
    <Router>
      <div>
        <NavBar scrollToHowItWorks={scrollToHowItWorks} toggleFAQ={toggleFAQ}/>
        <Routes>
          <Route path="/" element={<ParallaxSection title="Aquatic Wildlife Awareness" imageUrl="nightsea.gif" />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/" element={<LandingPage />} />
          <Route path="/donate" element={<DonationSection />} />
          <Route path="/contact" element={<ContactUs/>}/>
          <Route path="/inquiries" element={<PressInquiries/>}/>
          <Route path="/faq" element={<FAQ showFAQ={showFAQ} toggleFAQ={toggleFAQ} />} /> {/* Added the new Route for FAQ */}
          <Route path="/how-it-works" element={<HowItWorks />} />
        </Routes>
        <ProgressTracker goal={1000000} current={500000} />
        <Footer />
        <div><HamburgerMenu /></div>
      </div>
      <div className="HowItWorks">
      <h3>HOW IT WORKS</h3>
      </div>
      <div className="LeaderBoard">
      <h3>LEADER BOARD</h3>
      </div>
      <div className="Donate">
      <h3>DONATE</h3>
      </div>
    </Router>
  );
};

export default App;
