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
    <nav className="navbar navbar-dark bg-dark fixed-top">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          <span className="navbar-logo">
            <img src={logoImage} alt="OceanGuardiansLogo" />
          </span>
          <span className="cursive-text">#OceanGuardians</span>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation" onClick={toggleMenu}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`offcanvas offcanvas-end text-bg-dark ${isOpen ? 'show' : ''}`} tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">#OceanGaurdians</h5>
            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close" onClick={toggleMenu}></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className='nav-links mb-2'><Link className='nav-links' to="/shop">Shop</Link></li>
              <li className='nav-links mb-2'><Link className='nav-links' to="/contact">Contact Us</Link></li>
              <li className='nav-links mb-2'><Link className='nav-links' to="/inquiries">Press Inquiries</Link></li>
              <li className='nav-links mb-2'><Link className='nav-links' to="/faq" onClick={toggleFAQ}>FAQ</Link></li>
              <li className='nav-links mb-2'><Link className='nav-links' to="/leaderboard">Leaderboard</Link></li>
              <li className='nav-links mb-2'><Link className='nav-links' to="/how-it-works" onClick={scrollToHowItWorks}>How It Works</Link></li>
            </ul>
            <div className='outer-container mt-2'>
              <Link to="/login"><button className='btn btn-success'>Login</button></Link>
              <Link to="/signup"><button className='btn btn-primary'>Sign Up</button></Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
