import React from 'react';
import './gallery.css';
import beachCleaningDrive from '../assets/beach cleaning drive.jpg';
import beach2 from '../assets/beach 2.jpg';
import beach3 from '../assets/beach 3.jpg';

class Gallery extends React.Component {
  render() {
    return (
      <div className="gallery">
        <img src={beachCleaningDrive} alt="picture 1" className="gallery-item" />
        <img src={beach2} alt="picture 2" className="gallery-item" />
        <img src={beach3} alt="picture 3" className="gallery-item" />
      </div>
    );
  }
}

export default Gallery;
