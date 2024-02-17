import React from 'react';

const FAQ = ({ showFAQ, toggleFAQ }) => {
  return (
    <div className={`faq-container ${showFAQ ? 'show' : ''}`}>
      <div className="faq-popup">
        <button className="cancel-button" onClick={toggleFAQ}>
          X
        </button>
        <h2>Frequently Asked Questions</h2>
        <div className="faq-content">
          <p>Q: What is the purpose of this website?</p>
          <p>A: This website provides information about...</p>
          {}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
