import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import logoImage from '../assets/wave.jpg';

const NavBar = ({ scrollToHowItWorks, toggleFAQ }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img src={logoImage} alt="OceanGuardiansLogo" />
        </Link>
        <span className="cursive-text">#OceanGuardians</span>
        <li className="login"><Link to="/login">Sign Up/In</Link></li>
        <div className="hamburger-menu" onClick={toggleMenu}>
          <div className={`line ${isOpen ? 'open' : ''}`}></div>
          <div className={`line ${isOpen ? 'open' : ''}`}></div>
          <div className={`line ${isOpen ? 'open' : ''}`}></div>
        </div>
        {isOpen && (
          <ul className="navbar-menu">
            <li><Link to="/shop">Shop</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/inquiries">Press Inquiries</Link></li>
            <li><Link to="/faq" onClick={toggleFAQ}>FAQ</Link></li>
            <li><Link to="/leaderboard">Leaderboard</Link></li>
            <li><Link to="/how-it-works" onClick={scrollToHowItWorks}>How It Works</Link></li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
