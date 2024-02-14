// src/components/ParallaxSection.js
import React from 'react';
import './ParallaxSection.css';
import HowItWorksParallax from './HowItWorksParallax';

const ParallaxSection = ({ title, imageUrl }) => {
  return (
    <div id="home-parallax-section" className="parallax-section" style={{ backgroundImage: `url(${imageUrl})` }}>
      <div className="parallax-content">
        <h2>{title}</h2>
        {/* Add more content as needed */}
      </div>
      {/* Include the HowItWorksParallax component */}
      <HowItWorksParallax imageUrl="your-image-url-for-how-it-works" />
    </div>
  );
};

export default ParallaxSection;
