import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import logoImage from './wave.jpg';

const NavBar = ({scrollToHowItWorks, toggleFAQ}) => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img src={logoImage} alt="OceanGuardiansLogo" />
        </Link>
        <ul className="navbar-menu">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/donate">Donate</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/shop">Shop</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li><Link to="/inquiries">Press Inquiries</Link></li>
          <li><Link to="/faq" onClick={toggleFAQ}>FAQ</Link></li>
          <li><Link to="/leaderboard">Leaderboard</Link></li>
          <li><Link to="/how-it-works" onClick={scrollToHowItWorks}>How It Works</Link></li>
          {/* Add more navigation items as needed */}
        </ul>
        <span className="cursive-text">#OceanGuardians</span>
      </div>
    </nav>
  );
};

export default NavBar;
