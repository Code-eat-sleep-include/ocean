import React from 'react';

const ContactSection = () => {
  return (
    <div className="bg-info contact4 overflow-hidden position-relative">
      {/* Row */}
      <div className="row no-gutters">
        <div className="container4">
          <div className="col-lg-6 contact-box mb-4 mb-md-0">
            <div>
              <h1 className="title font-weight-light text-white mt-2">Contact Us</h1>
              <form className="mt-3">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="form-group mt-2">
                      <input className="form-control text-white" type="text" placeholder="name" />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group mt-2">
                      <input className="form-control text-white" type="email" placeholder="email address" />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group mt-2">
                      <textarea className="form-control text-white" rows="3" placeholder="message"></textarea>
                    </div>
                  </div>
                  <div className="col-lg-6 d-flex align-items-center mt-2">
                    <button type="submit" className="btn bg-white text-inverse px-3 py-2"><span> Submit</span></button>
                    <span className="ml-auto text-white align-self-center"><i className="icon-phone mr-2"></i>251 546 9442</span>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="col-lg-6 right-image p-r-0">
          <iframe
            title="Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1619902.0054433027!2d-122.68851282163044!3d37.534535608111824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan+Francisco%2C+CA%2C+USA!5e0!3m2!1sen!2sin!4v1507725785789"
            width="100%" height="538" frameBorder="0" style={{ border: 0 }} allowFullScreen
            data-aos="fade-left" data-aos-duration="3000"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;

/*import React, { useState } from 'react';
import './ContactUs.css';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    message: '',
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted:', formData);
    // Reset form fields if needed
    setFormData({
      name: '',
      email: '',
      phone: '',
      location: '',
      message: '',
    });
  };

  return (
    <div className="contact2" style={{ backgroundImage: 'url(https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/map.jpg)' }} id="contact">
    <div className="container3">
      <div class="row contact-container">
        <div class="col-lg-12">
          <div class="card card-shadow border-0 mb-4">
            <div class="row">
              <div class="col-lg-8">
                <div class="contact-box p-4">
                  <h4 class="title">Contact Us</h4>
                <form>
                  <div class="row">
                    <div class="col-lg-6">
                      <div class="form-group mt-3">
                        <input class="form-control" type="text" placeholder="name"></input>
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="form-group mt-3">
                        <input class="form-control" type="text" placeholder="email"></input>
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="form-group mt-3">
                        <input class="form-control" type="text" placeholder="phone"></input>
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="form-group mt-3">
                        <input class="form-control" type="text" placeholder="location"></input>
                      </div>
                    </div>
                    <div class="col-lg-12">
                      <div class="form-group mt-3">
                        <input class="form-control" type="text" placeholder="message"></input>
                      </div>
                    </div>
                    <div class="col-lg-12">
                      <button type="submit" class="btn btn-danger-gradiant mt-3 mb-3 text-white border-0 py-2 px-3"><span> SUBMIT NOW <i class="ti-arrow-right"></i></span></button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-4 bg-image" style={{ backgroundImage: 'url(https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/1.jpg)' }}>
              <div className="detail-box p-4">
                <h5 class="text-white font-weight-light mb-3">ADDRESS</h5>
                <p class="text-white op-7">601 Sherwood Ave.</p>
                  <p> San Bernandino</p>
                <h5 class="text-white font-weight-light mb-3 mt-4">CALL US</h5>
                <p class="text-white op-7">251 546 9442</p>
                  <p> 630 446 8851</p>
                <div class="round-social light">
                  <a href="#" class="ml-0 text-decoration-none text-white border border-white rounded-circle"><i class="icon-social-facebook"></i></a>
                  <a href="#" class="text-decoration-none text-white border border-white rounded-circle"><i class="icon-social-twitter"></i></a>
                  <a href="#" class="text-decoration-none text-white border border-white rounded-circle"><i class="icon-social-youtube"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  );
};

export default ContactSection;*/
