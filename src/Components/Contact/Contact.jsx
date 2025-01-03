// src/Components/Contact/Contact.jsx
import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="contact-content section-content">
        <h2 className="section-subtitle">Contact</h2>
        <h4 className="h3 section-title">Have You Any Project or want to work with me? Please Drop a Message</h4>
        <p className="section-text">
          Get in touch and let me know how I can help. Fill out the form, and I’ll be in touch as soon as possible.
        </p>
        <div className='contactForm'>
        <div className='leftContent'>
        <h2 className="section-subtitle">My Contact Information</h2>
        <ul className="contact-list">
          <li className="contact-list-item">
            <div className="contact-item-icon">
              <ion-icon name="location-outline"></ion-icon>
            </div>
            <div className="wrapper">
              <h3 className="h4 contact-item-title">Address:</h3>
              <address className="contact-info">
                <strongAddress><b>Current Address:</b></strongAddress> Chintamani Nagar, Bibvewadi, Pune.
              </address>
              <address className="contact-info">
              <strongAddress><b>Permanent Address:</b></strongAddress> Renuka Nagar, Dabki Road, Akola-444002.
              </address>
            </div>
          </li>
          <li className="contact-list-item">
            <div className="contact-item-icon">
              <ion-icon name="call-outline"></ion-icon>
            </div>
            <div className="wrapper">
              <h3 className="h4 contact-item-title">Phone:</h3>
              <a href="tel:+918208025105" className="contact-info">(+91) 8208025105</a>
            </div>
          </li>
          <li className="contact-list-item">
            <div className="contact-item-icon">
              <ion-icon name="mail-outline"></ion-icon>
            </div>
            <div className="wrapper">
              <h3 className="h4 contact-item-title">Email:</h3>
              <a href="mailto:prasadingle25904@gmail.com" className="contact-info">prasadingle25904@gmail.com</a>
            </div>
          </li>
        </ul>
        </div>
        <div className='rightContact'>
        <form className="contact-form">
          <div className="form-wrapper">
            <label htmlFor="name" className="form-label">Name<strongAdd> *</strongAdd></label>
            <div className="input-wrapper">
              <input type="text" name="name" id="name" required placeholder="Enter your name" className="input-field" />
              <ion-icon name="person-circle"></ion-icon>
            </div>
          </div>
          <div className="form-wrapper">
            <label htmlFor="email" className="form-label">Email<strongAdd> *</strongAdd></label>
            <div className="input-wrapper">
              <input type="email" name="email" id="email" required placeholder="Enter your mail ID" className="input-field" />
              <ion-icon name="mail"></ion-icon>
            </div>
          </div>
          <div className="form-wrapper">
            <label htmlFor="phone" className="form-label">Phone<strongAdd> *</strongAdd></label>
            <div className="input-wrapper">
              <input type="tel" name="phone" id="phone" required placeholder="Phone Number" className="input-field" />
              <ion-icon name="call"></ion-icon>
            </div>
          </div>
          <div className="form-wrapper">
            <label htmlFor="message" className="form-label">Message</label>
            <div className="input-wrapper">
              <textarea name="message" id="message" required placeholder="Write message..." className="input-field"></textarea>
              <ion-icon name="chatbubbles"></ion-icon>
            </div>
          </div>
          <button type="submit" className="btn btn-primary">Send</button>
        </form>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
