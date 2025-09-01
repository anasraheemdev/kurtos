import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

export const AboutUs = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Pacifico&family=Montserrat:wght@400;500;700;900&display=swap');
        
        .about-us-section {
          background: radial-gradient(ellipse at center, #914220 20%, #7a3518 100%);
          width: 100%;
          position: relative;
          overflow: hidden;
          padding: 100px 20px;
        }
        
        .about-container {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }
        
        .about-visual {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        
        .visual-container {
          position: relative;
          width: 100%;
          max-width: 520px;
          aspect-ratio: 1;
        }
        
        .dashed-circle {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          border: 4px dashed #f97316;
          animation: rotate 30s linear infinite;
        }
        
        @keyframes rotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        .about-image {
          position: relative;
          z-index: 10;
          width: 100%;
          height: 100%;
          object-fit: contain;
          padding: 30px;
          filter: drop-shadow(0 10px 25px rgba(0, 0, 0, 0.15));
          border-radius: 50%;
          transition: all 0.5s ease;
        }
        
        .about-image:hover {
          transform: scale(1.03);
          filter: drop-shadow(0 15px 30px rgba(0, 0, 0, 0.2));
        }
        
        .floating-elements {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
        }
        
        .floating-element {
          position: absolute;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: #f97316;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: bold;
          font-size: 24px;
          filter: drop-shadow(0 5px 15px rgba(0, 0, 0, 0.2));
          animation: float 6s ease-in-out infinite;
        }
        
        .floating-element:nth-child(1) {
          top: 10%;
          right: 15%;
          animation-delay: 0s;
          background: #facc15;
        }
        
        .floating-element:nth-child(2) {
          bottom: 20%;
          left: 10%;
          animation-delay: 1s;
          width: 50px;
          height: 50px;
          font-size: 20px;
          background: #ea580c;
        }
        
        .floating-element:nth-child(3) {
          top: 40%;
          right: 5%;
          animation-delay: 2s;
          width: 40px;
          height: 40px;
          font-size: 18px;
          background: #dc2626;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(5deg); }
        }
        
        .about-content {
          color: #ffffffff;
        }
        
        .about-subtitle {
          font-family: 'Pacifico', cursive;
          font-size: clamp(20px, 3vw, 32px);
          color: #ffffffff;
          margin-bottom: 10px;
        }
        
        .about-title {
          font-family: 'Montserrat', sans-serif;
          font-weight: 900;
          font-size: clamp(36px, 6vw, 64px);
          line-height: 1.1;
          margin-bottom: 24px;
          text-transform: uppercase;
          color: #ffffffff;
        }
        
        .about-description {
          font-family: 'Montserrat', sans-serif;
          font-size: clamp(16px, 2vw, 18px);
          line-height: 1.6;
          margin-bottom: 32px;
          max-width: 90%;
          color: #ffffffff;
        }
        
        .about-highlight {
          color: #e67e22;
          font-weight: 700;
        }
        
        .learn-more-btn {
          display: inline-flex;
          align-items: center;
          background: #e67e22;
          color: white;
          font-family: 'Montserrat', sans-serif;
          font-weight: 600;
          font-size: 16px;
          padding: 14px 28px;
          border-radius: 50px;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(230, 126, 34, 0.3);
        }
        
        .learn-more-btn:hover {
          background: #d35400;
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(230, 126, 34, 0.4);
        }
        
        .btn-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          background: white;
          color: #e67e22;
          border-radius: 50%;
          width: 28px;
          height: 28px;
          margin-left: 12px;
          transition: transform 0.3s ease;
        }
        
        .learn-more-btn:hover .btn-icon {
          transform: translateX(3px);
        }
        
        /* Animation classes */
        .fade-in-up {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }
        
        .fade-in-up.loaded {
          opacity: 1;
          transform: translateY(0);
        }
        
        /* Add decorative elements to match FAQ section */
        .about-decoration {
          position: absolute;
          z-index: 1;
          opacity: 0.1;
        }
        
        .decoration-1 {
          top: 10%;
          left: 5%;
          width: 100px;
          height: 100px;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cpath fill='%237a3518' d='M50,0 C77.614,0 100,22.386 100,50 C100,77.614 77.614,100 50,100 C22.386,100 0,77.614 0,50 C0,22.386 22.386,0 50,0 Z' /%3E%3C/svg%3E");
        }
        
        .decoration-2 {
          bottom: 10%;
          right: 5%;
          width: 150px;
          height: 150px;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cpath fill='%23e67e22' d='M50,0 C77.614,0 100,22.386 100,50 C100,77.614 77.614,100 50,100 C22.386,100 0,77.614 0,50 C0,22.386 22.386,0 50,0 Z' /%3E%3C/svg%3E");
        }
        
        .decoration-3 {
          top: 20%;
          right: 15%;
          width: 80px;
          height: 80px;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cpath fill='%23e67e22' d='M50,0 C77.614,0 100,22.386 100,50 C100,77.614 77.614,100 50,100 C22.386,100 0,77.614 0,50 C0,22.386 22.386,0 50,0 Z' /%3E%3C/svg%3E");
        }
        
        /* Responsive Design */
        @media (max-width: 968px) {
          .about-container {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          
          .about-visual {
            order: 2;
          }
          
          .about-content {
            order: 1;
            text-align: center;
          }
          
          .about-description {
            max-width: 100%;
          }
        }
        
        @media (max-width: 640px) {
          .about-us-section {
            padding: 60px 20px;
          }
          
          .visual-container {
            max-width: 380px;
          }
          
          .floating-element {
            width: 50px;
            height: 50px;
            font-size: 20px;
          }
          
          .floating-element:nth-child(2) {
            width: 40px;
            height: 40px;
            font-size: 16px;
          }
          
          .floating-element:nth-child(3) {
            width: 35px;
            height: 35px;
            font-size: 14px;
          }
          
          .about-decoration {
            display: none;
          }
        }
        
        @media (max-width: 480px) {
          .visual-container {
            max-width: 300px;
          }
          
          .about-title {
            font-size: 32px;
          }
          
          .learn-more-btn {
            padding: 12px 24px;
            font-size: 14px;
          }
          
          .btn-icon {
            width: 24px;
            height: 24px;
          }
        }
      `}</style>
      
      <section className="about-us-section" id="about">
        <div className="about-decoration decoration-1"></div>
        <div className="about-decoration decoration-2"></div>
        <div className="about-decoration decoration-3"></div>
        
        <div className="about-container">
          <div className="about-visual">
            <div className="visual-container">
              <div className="dashed-circle"></div>
              <img
                src="https://img.playbook.com/z4XRFY_RnnGA1LTZrpeaOAaWFNcOpHbI5TO84jSsaE8/w:1000/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9s/YXJnZV9wcmV2aWV3/cy8yNDU0ZGQyOC0z/MmE1LTQ3MjAtYTVh/ZC0yZDE5ZjEyOTBi/YjQ.webp"
                alt="Kurtos chimney cone and beverage"
                className="about-image"
                loading="lazy"
                decoding="async"
              />
              <div className="floating-elements">
                <div className="floating-element">13+</div>
                <div className="floating-element">50+</div>
                <div className="floating-element">1k+</div>
              </div>
            </div>
          </div>
          
          <div className="about-content">
            <p className={`about-subtitle fade-in-up ${isLoaded ? 'loaded' : ''}`}>Our Story</p>
            <h2 className={`about-title fade-in-up ${isLoaded ? 'loaded' : ''}`} style={{transitionDelay: '0.1s'}}>
              ABOUT US
            </h2>
            <p className={`about-description fade-in-up ${isLoaded ? 'loaded' : ''}`} style={{transitionDelay: '0.2s'}}>
              At <span className="about-highlight">#Kurtos</span>, baking is more than just a craft — it's a tradition. Born from a love of warm ovens, simple ingredients, and the joy of sharing good food, we were founded to bring fresh, honest, and irresistibly delicious baked goods to the community.
            </p>
            <p className={`about-description fade-in-up ${isLoaded ? 'loaded' : ''}`} style={{transitionDelay: '0.3s'}}>
              Our master bakers use time-honored techniques and only the finest ingredients to create our signature <span className="about-highlight">Chimney Cones</span>, artisanal breads, and pastries that transport you to the charming bakeries of old-world Europe.
            </p>
            <button className={`learn-more-btn fade-in-up ${isLoaded ? 'loaded' : ''}`} style={{transitionDelay: '0.4s'}}>
              <span>Learn More</span>
              <span className="btn-icon">
                <ArrowRight size={16} />
              </span>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;