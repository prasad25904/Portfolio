import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const [submissionStatus, setSubmissionStatus] = useState(null);

  const validateField = (name, value) => {
    let error = '';
    switch (name) {
      case 'name':
        if (!value) {
          error = 'Name is required.';
        } else if (!/^[a-zA-Z\s]+$/.test(value)) {
          error = 'Only alphabets are allowed.';
        }
        break;
      case 'email':
        if (!value) {
          error = 'Email is required.';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          error = 'Invalid email format.';
        }
        break;
      case 'phone':
        if (!value) {
          error = 'Phone number is required.';
        } else if (!/^\d{10}$/.test(value)) {
          error = 'Phone number must be 10 digits.';
        }
        break;
      default:
        break;
    }
    setErrors({ ...errors, [name]: error });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    validateField(name, value);
  };

  const isFormValid = () => {
    return (
      formData.name &&
      formData.email &&
      formData.phone &&
      !errors.name &&
      !errors.email &&
      !errors.phone
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // You can replace this URL with your actual Formspree endpoint
    const formspreeUrl = 'https://formspree.io/f/meoobnpl';

    const response = await fetch(formspreeUrl, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
      }),
    });

    if (response.ok) {
      setSubmissionStatus('Your message has been sent successfully!');
      setFormData({ name: '', email: '', phone: '', message: '' });
    } else {
      setSubmissionStatus('Something went wrong. Please try again.');
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-content section-content">
        <h2 className="section-subtitle">Contact</h2>
        <h4 className="h3 section-title">
          Have You Any Project or want to work with me? Please Drop a Message
        </h4>
        <p className="section-text">
          Get in touch and let me know how I can help. Fill out the form, and I’ll be in touch as soon as possible.
        </p>
        <div className="contactForm">
          <div className="leftContent">
            <h2 className="section-subtitle">My Contact Information</h2>
            <ul className="contact-list">
              <li className="contact-list-item">
                <div className="contact-item-icon">
                  <ion-icon name="location-outline"></ion-icon>
                </div>
                <div className="wrapper">
                  <h3 className="h4 contact-item-title">Address:</h3>
                  <address className="contact-info">
                    <strongAddress>
                      <b>Current Address:</b>
                    </strongAddress>{' '}
                    Chintamani Nagar, Bibvewadi, Pune.
                  </address>
                  <address className="contact-info">
                    <strongAddress>
                      <b>Permanent Address:</b>
                    </strongAddress>{' '}
                    Renuka Nagar, Dabki Road, Akola-444002.
                  </address>
                </div>
              </li>
              <li className="contact-list-item">
                <div className="contact-item-icon">
                  <ion-icon name="call-outline"></ion-icon>
                </div>
                <div className="wrapper">
                  <h3 className="h4 contact-item-title">Phone:</h3>
                  <a href="tel:+918208025105" className="contact-info">
                    (+91) 8208025105
                  </a>
                </div>
              </li>
              <li className="contact-list-item">
                <div className="contact-item-icon">
                  <ion-icon name="mail-outline"></ion-icon>
                </div>
                <div className="wrapper">
                  <h3 className="h4 contact-item-title">Email:</h3>
                  <a href="mailto:prasadingle25904@gmail.com" className="contact-info">
                    prasadingle25904@gmail.com
                  </a>
                </div>
              </li>
            </ul>
          </div>
          <div className="rightContact">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-wrapper">
                <label htmlFor="name" className="form-label">
                  Name<strongAdd> *</strongAdd>
                </label>
                <div className="input-wrapper">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    placeholder="Enter your name"
                    className="input-field"
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                  <ion-icon name="person-circle"></ion-icon>
                </div>
                {errors.name && <small className="error-text">{errors.name}</small>}
              </div>
              <div className="form-wrapper">
                <label htmlFor="email" className="form-label">
                  Email<strongAdd> *</strongAdd>
                </label>
                <div className="input-wrapper">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    placeholder="Enter your mail ID"
                    className="input-field"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                  <ion-icon name="mail"></ion-icon>
                </div>
                {errors.email && <small className="error-text">{errors.email}</small>}
              </div>
              <div className="form-wrapper">
                <label htmlFor="phone" className="form-label">
                  Phone<strongAdd> *</strongAdd>
                </label>
                <div className="input-wrapper">
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    required
                    placeholder="Phone Number"
                    className="input-field"
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                  <ion-icon name="call"></ion-icon>
                </div>
                {errors.phone && <small className="error-text">{errors.phone}</small>}
              </div>
              <div className="form-wrapper">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <div className="input-wrapper">
                  <textarea
                    name="message"
                    id="message"
                    required
                    placeholder="Write message..."
                    className="input-field"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  ></textarea>
                  <ion-icon name="chatbubbles"></ion-icon>
                </div>
              </div>
              <button
                type="submit"
                className="btn btn-primary"
                disabled={!isFormValid()}
              >
                Send
              </button>
            </form>
            {submissionStatus && <p>{submissionStatus}</p>}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
