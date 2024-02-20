import React from 'react';
import './ContactUs.css';

const ContactSection = () => {
  return (
    <div className='outer-contact-us mt-5 p-5'>
      <div className='heading mb-5 mx-5'>Contact Us</div>
      <div className='outer-container-contact-us'>
        <div className='map-container mx-5'>
          <iframe
            className='map-frame'
            title="Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1619902.0054433027!2d-122.68851282163044!3d37.534535608111824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan+Francisco%2C+CA%2C+USA!5e0!3m2!1sen!2sin!4v1507725785789"
            data-aos="fade-left" data-aos-duration="3000"
          ></iframe>
        </div>
        <div className='form-container mx-5'>
          <form>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">Name</label>
              <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="John Doe"></input>
            </div>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">Email address</label>
              <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="johndoe@email.com"></input>
            </div>
            <div class="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label">Message</label>
              <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <button className='btn btn-success'>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
