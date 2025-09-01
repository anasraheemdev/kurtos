import React from 'react';

export const BakeryFooter = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Pacifico&family=Montserrat:wght@300;400;600;700&display=swap');
        
        .bakery-footer {
          background: linear-gradient(to bottom, #2c1a0f 0%, #1f1209 100%);
          color: #f8f0e7;
          padding: 4rem 1rem 2rem;
          position: relative;
          overflow: hidden;
          font-family: 'Montserrat', sans-serif;
        }
        
        .footer-container {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2.5rem;
          position: relative;
          z-index: 2;
        }
        
        .footer-logo {
          margin-bottom: 1.5rem;
        }
        
        .footer-brand {
          font-family: 'Pacifico', cursive;
          font-size: 2.2rem;
          color: #e67e22;
          margin: 0;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
        }
        
        .footer-tagline {
          color: #c9b29b;
          font-size: 1rem;
          margin: 0.5rem 0 1.5rem;
          line-height: 1.6;
          max-width: 300px;
        }
        
        .social-links {
          display: flex;
          gap: 1rem;
          margin-top: 1.5rem;
        }
        
        .social-link {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          background: rgba(230, 126, 34, 0.1);
          border: 1px solid rgba(230, 126, 34, 0.3);
          border-radius: 50%;
          color: #e67e22;
          text-decoration: none;
          transition: all 0.3s ease;
        }
        
        .social-link:hover {
          background: #e67e22;
          color: #2c1a0f;
          transform: translateY(-3px);
          box-shadow: 0 5px 15px rgba(230, 126, 34, 0.3);
        }
        
        .footer-heading {
          font-size: 1.2rem;
          font-weight: 700;
          color: #e67e22;
          margin-bottom: 1.5rem;
          position: relative;
          padding-bottom: 0.5rem;
        }
        
        .footer-heading::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: 0;
          width: 40px;
          height: 2px;
          background: #e67e22;
        }
        
        .footer-links {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        
        .footer-links li {
          margin-bottom: 0.8rem;
        }
        
        .footer-links a {
          color: #c9b29b;
          text-decoration: none;
          transition: all 0.3s ease;
          display: inline-flex;
          align-items: center;
        }
        
        .footer-links a:hover {
          color: #e67e22;
          transform: translateX(5px);
        }
        
        .footer-links a::before {
          content: '→';
          margin-right: 8px;
          opacity: 0;
          transition: all 0.3s ease;
        }
        
        .footer-links a:hover::before {
          opacity: 1;
        }
        
        .contact-info {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        
        .contact-info li {
          display: flex;
          margin-bottom: 1.2rem;
          align-items: flex-start;
        }
        
        .contact-icon {
          color: #e67e22;
          margin-right: 12px;
          font-size: 1.2rem;
          min-width: 20px;
        }
        
        .contact-text {
          color: #c9b29b;
          line-height: 1.6;
        }
        
        .newsletter-text {
          color: #c9b29b;
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }
        
        .newsletter-form {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        
        .newsletter-input {
          padding: 0.8rem 1rem;
          border: 1px solid rgba(230, 126, 34, 0.3);
          border-radius: 5px;
          background: rgba(63, 41, 25, 0.5);
          color: #f8f0e7;
          font-family: 'Montserrat', sans-serif;
          transition: all 0.3s ease;
        }
        
        .newsletter-input:focus {
          outline: none;
          border-color: #e67e22;
          box-shadow: 0 0 0 2px rgba(230, 126, 34, 0.2);
        }
        
        .newsletter-input::placeholder {
          color: #9c8572;
        }
        
        .subscribe-btn {
          background: linear-gradient(to right, #e67e22, #d35400);
          color: white;
          border: none;
          padding: 0.8rem 1.5rem;
          border-radius: 5px;
          font-family: 'Montserrat', sans-serif;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          max-width: 150px;
        }
        
        .subscribe-btn:hover {
          background: linear-gradient(to right, #d35400, #e67e22);
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(230, 126, 34, 0.3);
        }
        
        .footer-bottom {
          max-width: 1200px;
          margin: 3rem auto 0;
          padding-top: 2rem;
          border-top: 1px solid rgba(201, 178, 155, 0.2);
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          align-items: center;
          gap: 1rem;
        }
        
        .copyright {
          color: #9c8572;
          font-size: 0.9rem;
        }
        
        .footer-bottom-links {
          display: flex;
          gap: 1.5rem;
        }
        
        .footer-bottom-links a {
          color: #9c8572;
          text-decoration: none;
          font-size: 0.9rem;
          transition: color 0.3s ease;
        }
        
        .footer-bottom-links a:hover {
          color: #e67e22;
        }
        
        .footer-pattern {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 0.03;
          background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 50L0 25L0 75L50 100L100 75L100 25L50 50Z' fill='%23e67e22'/%3E%3C/svg%3E");
          background-size: 200px;
          z-index: 1;
        }
        
        .footer-decoration {
          position: absolute;
          opacity: 0.1;
          z-index: 1;
        }
        
        .footer-decoration-1 {
          top: 20%;
          right: 5%;
          font-size: 8rem;
          transform: rotate(15deg);
        }
        
        .footer-decoration-2 {
          bottom: 10%;
          left: 5%;
          font-size: 6rem;
          transform: rotate(-10deg);
        }
        
        @media (max-width: 768px) {
          .footer-container {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          
          .footer-bottom {
            flex-direction: column;
            text-align: center;
          }
          
          .footer-bottom-links {
            justify-content: center;
          }
          
          .footer-decoration {
            display: none;
          }
        }
      `}</style>
      
      <footer className="bakery-footer">
        <div className="footer-pattern"></div>
        <div className="footer-decoration footer-decoration-1">🥐</div>
        <div className="footer-decoration footer-decoration-2">🍞</div>
        
        <div className="footer-container">
          <div className="footer-col">
            <div className="footer-logo">
              <h3 className="footer-brand">Kurtoos</h3>
              <p className="footer-tagline">Freshly baked goods made with love and tradition since 2010</p>
            </div>
            <div className="social-links">
              <a href="#" className="social-link" aria-label="Facebook">
                <span>FB</span>
              </a>
              <a href="#" className="social-link" aria-label="Instagram">
                <span>IG</span>
              </a>
              <a href="#" className="social-link" aria-label="Twitter">
                <span>TW</span>
              </a>
              <a href="#" className="social-link" aria-label="Pinterest">
                <span>PT</span>
              </a>
            </div>
          </div>
          
          <div className="footer-col">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#">Home</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Our Menu</a></li>
              <li><a href="#">Special Offers</a></li>
              <li><a href="#">Gallery</a></li>
              <li><a href="#">Blog</a></li>
            </ul>
          </div>
          
          <div className="footer-col">
            <h4 className="footer-heading">Contact Info</h4>
            <ul className="contact-info">
              <li>
                <span className="contact-icon">📍</span>
                <span className="contact-text">I-8 Markaz, Islamabad Pakistan</span>
              </li>
              <li>
                <span className="contact-icon">📞</span>
                <span className="contact-text">+92 317 5818580</span>
              </li>
              <li>
                <span className="contact-icon">✉️</span>
                <span className="contact-text">hello@kurtoos.com</span>
              </li>
              <li>
                <span className="contact-icon">🕒</span>
                <span className="contact-text">Mon-Fri: 7am-7pm, Sat-Sun: 8am-5pm</span>
              </li>
            </ul>
          </div>
          
          <div className="footer-col">
            <h4 className="footer-heading">Newsletter</h4>
            <p className="newsletter-text">Subscribe to our newsletter for exclusive offers, new flavors, and baking tips!</p>
            <form className="newsletter-form">
              <input 
                type="email" 
                className="newsletter-input" 
                placeholder="Your email address" 
                required 
              />
              <button type="submit" className="subscribe-btn">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p className="copyright">© 2025 Creamy Kurtoos. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Policy</a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default BakeryFooter;