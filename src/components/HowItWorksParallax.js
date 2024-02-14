// src/components/HowItWorksParallax.js
import React from 'react';
//import './HowItWorksParallax.css';

const HowItWorksParallax = ({ imageUrl }) => {
  return (
    <div className="how-it-works-parallax" style={{ backgroundImage: `url(${imageUrl})` }}>
      <div className="parallax-content">
        <h2>How It Works</h2>
        {/* Add your content for the "How It Works" section */}
      </div>
    </div>
  );
};

export default HowItWorksParallax;
