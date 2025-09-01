import React, { useState } from 'react';

export const BakeryContact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Pacifico&family=Montserrat:wght@400;700;900&display=swap');
        
        .bakery-contact {
          background: radial-gradient(ellipse at center, #f9d5b7 0%, #f8c39a 100%);
          padding: 5rem 1rem;
          position: relative;
          overflow: hidden;
        }
        
        .contact-container {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          position: relative;
          z-index: 2;
        }
        
        .contact-title {
          font-family: 'Pacifico', cursive;
          color: #7a3518;
          font-size: clamp(2.5rem, 5vw, 4rem);
          margin-bottom: 0.5rem;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
        }
        
        .contact-subtitle {
          font-family: 'Montserrat', sans-serif;
          color: #914220;
          font-size: clamp(1rem, 3vw, 1.5rem);
          margin-bottom: 2rem;
          font-weight: 400;
        }
        
        .contact-form {
          background: rgba(255, 255, 255, 0.9);
          padding: 2.5rem;
          border-radius: 20px;
          box-shadow: 0 10px 30px rgba(122, 53, 24, 0.15);
        }
        
        .form-group {
          margin-bottom: 1.5rem;
        }
        
        .form-label {
          display: block;
          font-family: 'Montserrat', sans-serif;
          color: #7a3518;
          font-weight: 700;
          margin-bottom: 0.5rem;
        }
        
        .form-input, .form-textarea {
          width: 100%;
          padding: 0.8rem 1rem;
          border: 2px solid #f8c39a;
          border-radius: 10px;
          font-family: 'Montserrat', sans-serif;
          font-size: 1rem;
          transition: all 0.3s ease;
          background: rgba(255, 255, 255, 0.8);
        }
        
        .form-input:focus, .form-textarea:focus {
          outline: none;
          border-color: #e67e22;
          box-shadow: 0 0 0 3px rgba(230, 126, 34, 0.3);
        }
        
        .form-textarea {
          min-height: 150px;
          resize: vertical;
        }
        
        .submit-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(to right, #e67e22, #d35400);
          color: white;
          padding: 0.8rem 1.5rem;
          border: none;
          border-radius: 50px;
          font-family: 'Montserrat', sans-serif;
          font-weight: 700;
          font-size: 1rem;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(230, 126, 34, 0.3);
        }
        
        .submit-button:hover {
          background: linear-gradient(to right, #d35400, #e67e22);
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(230, 126, 34, 0.4);
        }
        
        .contact-info {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        
        .info-item {
          display: flex;
          align-items: flex-start;
          margin-bottom: 2rem;
        }
        
        .info-icon {
          background: linear-gradient(to right, #e67e22, #d35400);
          color: white;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: 1rem;
          flex-shrink: 0;
          font-size: 1.2rem;
        }
        
        .info-content h3 {
          font-family: 'Montserrat', sans-serif;
          color: #7a3518;
          font-weight: 700;
          margin-bottom: 0.5rem;
          font-size: 1.2rem;
        }
        
        .info-content p {
          font-family: 'Montserrat', sans-serif;
          color: #914220;
          line-height: 1.5;
        }
        
        .map-container {
          margin-top: 2rem;
          border-radius: 15px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(122, 53, 24, 0.15);
          height: 250px;
        }
        
        .map-container iframe {
          width: 100%;
          height: 100%;
          border: none;
        }
        
        .decorative-element {
          position: absolute;
          width: 150px;
          height: 150px;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cpath fill='%23e67e2255' d='M50,0 C77.614,0 100,22.386 100,50 C100,77.614 77.614,100 50,100 C22.386,100 0,77.614 0,50 C0,22.386 22.386,0 50,0 Z' /%3E%3C/svg%3E");
          background-size: contain;
          opacity: 0.3;
          z-index: 1;
        }
        
        .deco-1 {
          top: 10%;
          left: 5%;
          animation: float 6s ease-in-out infinite;
        }
        
        .deco-2 {
          bottom: 15%;
          right: 5%;
          animation: float 7s ease-in-out infinite 1s;
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }
        
        @media (max-width: 968px) {
          .contact-container {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
        }
        
        @media (max-width: 768px) {
          .contact-form {
            padding: 1.5rem;
          }
          
          .decorative-element {
            display: none;
          }
        }
      `}</style>
      
      <section id="contact" className="bakery-contact">
        <div className="decorative-element deco-1"></div>
        <div className="decorative-element deco-2"></div>
        
        <div className="contact-container">
          <div className="contact-form-container">
            <h2 className="contact-title">Get in Touch</h2>
            <p className="contact-subtitle">We'd love to hear from you!</p>
            
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name" className="form-label">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-input"
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email" className="form-label">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-input"
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="subject" className="form-label">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="form-input"
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message" className="form-label">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="form-textarea"
                  required
                ></textarea>
              </div>
              
              <button type="submit" className="submit-button">
                Send Message
              </button>
            </form>
          </div>
          
          <div className="contact-info">
            <div className="info-item">
              <div className="info-icon">
                <i>📍</i>
              </div>
              <div className="info-content">
                <h3>Our Location</h3>
                <p>I-8 Markaz, Islamabad <br/>Pakistan</p>
              </div>
            </div>
            
            <div className="info-item">
              <div className="info-icon">
                <i>📞</i>
              </div>
              <div className="info-content">
                <h3>Phone Number</h3>
                <p>+92 317 5818580<br />Mon-Sun: 8am-6pm</p>
              </div>
            </div>
            
            <div className="info-item">
              <div className="info-icon">
                <i>✉️</i>
              </div>
              <div className="info-content">
                <h3>Email Address</h3>
                <p>hello@kurtoos.com<br />orders@kurtoos.com</p>
              </div>
            </div>
            
            <div className="info-item">
              <div className="info-icon">
                <i>🕒</i>
              </div>
              <div className="info-content">
                <h3>Opening Hours</h3>
                <p>Monday-Friday: 7am-7pm<br />Saturday-Sunday: 8am-5pm</p>
              </div>
            </div>
            
            <div className="map-container">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3320.5454674586867!2d73.0775625!3d33.6689375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df952251bcfd83%3A0x4da790feaf6c593d!2s%23Kurtos!5e0!3m2!1sen!2s!4v1756736938723!5m2!1sen!2s" 
                allowFullScreen="" 
                loading="lazy"
                title="Our Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BakeryContact;