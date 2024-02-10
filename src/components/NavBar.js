// src/components/NavBar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">OceanGaurdians</Link>
        <ul className="navbar-menu">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/donate">Donate</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/login">Shop</Link></li>
          <li><Link to="/login">Contact Us</Link></li>
          {/* Add more navigation items as needed */}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
