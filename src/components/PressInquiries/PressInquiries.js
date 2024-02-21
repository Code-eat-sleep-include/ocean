/*import React, { useEffect } from 'react';
import './PressInquiries.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'bootstrap';
import blog3 from '../assets/blog3.jpg';
import blog1 from '../assets/blog1.webp';
import blog2 from '../assets/blog2.jpg';
import blog4 from '../assets/blog4.jpg';
import blog5 from '../assets/blog5.jpg';
import blog6 from '../assets/blog6.jpg';

const PressInquiries = () => {
  useEffect(() => {
    const carouselElement = document.getElementById('carouselExampleAutoplaying');
    const carousel = new Carousel(carouselElement, {
      interval: 2000,
    });
    return () => {
      carousel.dispose();
    };
  }, []);

  return (
    <div className='outer-press-inq mt-5 p-5'>
      <div className='title mb-5 mx-5'>Post Your Blog</div>
      <div className='outer-container-press-inq'>
        <div className='blog-container mx-5'>
          <form>
            <div class="my-3">
              <label for="exampleFormControlInput1" class="form-label">Name</label>
              <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="John Doe"></input>
            </div>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">Email address</label>
              <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="johndoe@email.com"></input>
            </div>
            <div class="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label">Your Blog</label>
              <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <button className='btn btn-primary mb-4'>Post</button>
          </form>
        </div>
        <div className='yt-container mx-5'>
          <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel" data-bs-interval="2000">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={blog3} className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src={blog1} className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src={blog2} className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src={blog4} className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src={blog5} className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src={blog6} className="d-block w-100" alt="..." />
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PressInquiries;
*/