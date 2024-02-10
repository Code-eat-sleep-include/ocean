// src/components/ParallaxSection.js
import React from 'react';
import './ParallaxSection.css';

const ParallaxSection = ({ title, imageUrl }) => {
  return (
    <div className="parallax-section" style={{ backgroundImage: `url(${imageUrl})` }}>
      <div className="parallax-content">
        <h2>{title}</h2>
        {/* Add more content as needed */}
      </div>
    </div>
  );
};

export default ParallaxSection;
