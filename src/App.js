import React from 'react';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link, animateScroll as scroll } from 'react-scroll';

import NavBar from './components/Navbar/NavBar';
import ParallaxSection from './components/Selection/ParallaxSection';
import LoginForm from './components/LoginForm/LoginForm';
import LandingPage from './components/LandingPage/LandingPage';
import DonationSection from './components/DonationSection/DonationSection';
import ProgressTracker from './components/ProgressTracker/ProgressTracker';
import Footer from './components/Footer/Footer';
import ContactUs from './components/ContactUs/ContactUs';
import PressInquiries from './components/PressInquiries/PressInquiries';
import FAQ from './components/FAQ/FAQ';
import HowItWorks from './components/Selection/HowItWorks';
import HamburgerMenu from './components/HamburgerMenu/HamburgerMenu';
import UserPage from './components/UserPage/UserPage';
import SignUpForm from './components/SignUpForm/SignUpForm';
import user1 from './components/assets/user1.jpeg'

import './App.css';
import './components/FAQ/FAQ.css';

const App = () => {
  const [showFAQ, setShowFAQ] = useState(false);

  const toggleFAQ = () => {
    setShowFAQ(!showFAQ);
  };
  const scrollToHowItWorks = () => {
    let heightV = document.getElementById('how-it-works').getClientRects()[0].height;
    scroll.scrollTo(heightV, {
      duration: 800,
      smooth: 'easeInOutQuart',
    });
  };
  return (
    <div className='home-page'>
      <div className='home-page-container'>
        <Router>
          <div>
            <NavBar scrollToHowItWorks={scrollToHowItWorks} toggleFAQ={toggleFAQ} />
            <div className='my-5'></div>
            <Routes>
              {/* <Route path="/" element={<ParallaxSection title="" imageUrl="nightsea.gif" />} /> */}
              <Route path="/login" element={<LoginForm title="" imageUrl="dolph.jpg" />} />
              <Route path="/" element={<LandingPage />} />
              <Route path="/donate" element={<DonationSection />} />
              <Route path="/contact" element={<ContactUs />} />
              <Route path="/inquiries" element={<PressInquiries />} />
              <Route path="/faq" element={<FAQ showFAQ={showFAQ} toggleFAQ={toggleFAQ} />} /> { }
              <Route path="/how-it-works" element={<HowItWorks />} />
              <Route path="/user" element={<UserPage />} />
              <Route path="/signup" element={<SignUpForm />} />
            </Routes>
            {/* <ProgressTracker goal={1000000} current={500000} /> */}
            {/* <Footer /> */}
            <div><HamburgerMenu /></div>
          </div>
        </Router>

        <div id="carouselExampleIndicators" class="carousel slide">
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div className='blog-container'>
                <div className='user-container'>
                  <div className='user-img'>
                    <img src={user1}></img>
                  </div>
                  <div className='user-name'>Niharika</div>
                </div>
                <div className='blog-content'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac pellentesque velit. Mauris fermentum felis ac luctus suscipit. Phasellus lectus erat, scelerisque eu eleifend quis, viverra et risus. Suspendisse metus nibh, volutpat ac vestibulum nec, sagittis sagittis odio. Duis sed enim varius diam lacinia pharetra. Vivamus tristique suscipit rhoncus. Curabitur quis lorem vitae nisi pretium luctus. Donec elementum felis sit amet orci aliquet, in euismod libero scelerisque. Quisque eget vehicula turpis. Praesent suscipit commodo ex sed ultricies. Phasellus velit dui, ullamcorper eget lobortis sit amet, accumsan auctor erat.
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div className='blog-container'>
                <div className='user-container'>
                  <div className='user-img'>
                    <img src={user1}></img>
                  </div>
                  <div className='user-name'>Niharika</div>
                </div>
                <div className='blog-content'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac pellentesque velit. Mauris fermentum felis ac luctus suscipit. Phasellus lectus erat, scelerisque eu eleifend quis, viverra et risus. Suspendisse metus nibh, volutpat ac vestibulum nec, sagittis sagittis odio. Duis sed enim varius diam lacinia pharetra. Vivamus tristique suscipit rhoncus. Curabitur quis lorem vitae nisi pretium luctus. Donec elementum felis sit amet orci aliquet, in euismod libero scelerisque. Quisque eget vehicula turpis. Praesent suscipit commodo ex sed ultricies. Phasellus velit dui, ullamcorper eget lobortis sit amet, accumsan auctor erat.
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div className='blog-container'>
                <div className='user-container'>
                  <div className='user-img'>
                    <img src={user1}></img>
                  </div>
                  <div className='user-name'>Niharika</div>
                </div>
                <div className='blog-content'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac pellentesque velit. Mauris fermentum felis ac luctus suscipit. Phasellus lectus erat, scelerisque eu eleifend quis, viverra et risus. Suspendisse metus nibh, volutpat ac vestibulum nec, sagittis sagittis odio. Duis sed enim varius diam lacinia pharetra. Vivamus tristique suscipit rhoncus. Curabitur quis lorem vitae nisi pretium luctus. Donec elementum felis sit amet orci aliquet, in euismod libero scelerisque. Quisque eget vehicula turpis. Praesent suscipit commodo ex sed ultricies. Phasellus velit dui, ullamcorper eget lobortis sit amet, accumsan auctor erat.
                </div>
              </div>
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>

      </div>
    </div>
  );
};

export default App;
