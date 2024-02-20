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
    // <nav className="navbar">
    //   <div className="navbar-container">
    //     <Link to="/" className="navbar-logo">
    //       <img src={logoImage} alt="OceanGuardiansLogo" />
    //     </Link>
    //     <span className="cursive-text">#OceanGuardians</span>
    //     <li className="login"><Link to="/login">Sign Up/In</Link></li>
    //     <div className="hamburger-menu" onClick={toggleMenu}>
    //       <div className={`line ${isOpen ? 'open' : ''}`}></div>
    //       <div className={`line ${isOpen ? 'open' : ''}`}></div>
    //       <div className={`line ${isOpen ? 'open' : ''}`}></div>
    //     </div>
    //     {isOpen && (
    //       <ul className="navbar-menu">
    //         <li><Link to="/shop">Shop</Link></li>
    //         <li><Link to="/contact">Contact Us</Link></li>
    //         <li><Link to="/inquiries">Press Inquiries</Link></li>
    //         <li><Link to="/faq" onClick={toggleFAQ}>FAQ</Link></li>
    //         <li><Link to="/leaderboard">Leaderboard</Link></li>
    //         <li><Link to="/how-it-works" onClick={scrollToHowItWorks}>How It Works</Link></li>
    //       </ul>
    //     )}
    //   </div>
    // </nav>
    <nav class="navbar navbar-dark bg-dark fixed-top">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <span className="navbar-logo">
            <img src={logoImage} alt="OceanGuardiansLogo" />
          </span>
          <span className="cursive-text">#OceanGuardians</span>
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">#OceanGaurdians</h5>
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div class="offcanvas-body">
            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className='nav-links mb-2'><Link className='nav-links' to="/shop">Shop</Link></li>
              <li className='nav-links mb-2'><Link className='nav-links' to="/contact">Contact Us</Link></li>
              <li className='nav-links mb-2'><Link className='nav-links' to="/inquiries">Press Inquiries</Link></li>
              <li className='nav-links mb-2'><Link className='nav-links' to="/faq" onClick={toggleFAQ} >FAQ</Link></li>
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
