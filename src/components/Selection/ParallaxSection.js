import React from 'react';
import './ParallaxSection.css';
import HowItWorksParallax from './HowItWorksParallax';

const ParallaxSection = ({ title, imageUrl }) => {
  return (
    
    <div id="home-parallax-section" className="parallax-section" style={{ backgroundImage: `url(${imageUrl})` }}>
      <div className="parallax-content">
        <h2>{title}</h2>
        {}
      </div>
      {}
      <HowItWorksParallax imageUrl="your-image-url-for-how-it-works" />
    </div>
  );
};

export default ParallaxSection;
