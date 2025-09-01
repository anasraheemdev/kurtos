import { useState } from 'react';

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  const faqData = [
    {
      question: "What are your opening hours?",
      answer: "We are open Monday to Saturday from 8:00 AM to 8:00 PM, and on Sundays from 9:00 AM to 5:00 PM. During holiday seasons, we may have extended hours."
    },
    {
      question: "Do you offer gluten-free options?",
      answer: "Yes, we have a selection of gluten-free pastries and bread. Please ask our staff for recommendations, and note that while we take precautions, our kitchen is not entirely gluten-free."
    },
    {
      question: "Can I place custom orders for special occasions?",
      answer: "Absolutely! We love helping customers celebrate special occasions. We require at least 48 hours notice for custom cakes and 24 hours for specialty pastries. Larger orders may require more advance notice."
    },
    {
      question: "Do you deliver?",
      answer: "Yes, we offer delivery through our partners at Foodpanda. You can place orders directly through our website or via the Foodpanda app. Delivery charges vary based on your location."
    },
    {
      question: "How should I store my baked goods?",
      answer: "For optimal freshness, most of our pastries are best consumed the same day. Breads can be stored in a cool, dry place for 2-3 days. Cakes with cream or custard should be refrigerated and consumed within 2 days."
    },
    {
      question: "Do you use organic ingredients?",
      answer: "We source organic ingredients whenever possible, particularly for our flour, dairy, and eggs. About 70% of our ingredients are certified organic. We're committed to increasing this percentage as supply allows."
    }
  ];

  return (
    <section id="FAQs" className="bakery-faq">
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Pacifico&family=Montserrat:wght@400;500;700&display=swap');
        
        .bakery-faq {
          background: linear-gradient(to bottom, #fff8f0 0%, #f9e5d0 100%);
          padding: 5rem 1rem;
          position: relative;
          overflow: hidden;
        }
        
        .faq-container {
          max-width: 1000px;
          margin: 0 auto;
          position: relative;
          z-index: 2;
        }
        
        .faq-title {
          font-family: 'Pacifico', cursive;
          color: #7a3518;
          font-size: clamp(2.5rem, 5vw, 3.5rem);
          text-align: center;
          margin-bottom: 0.5rem;
        }
        
        .faq-subtitle {
          font-family: 'Montserrat', sans-serif;
          color: #914220;
          font-size: clamp(1rem, 3vw, 1.2rem);
          text-align: center;
          margin-bottom: 3rem;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }
        
        .faq-list {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        
        .faq-item {
          background: rgba(255, 255, 255, 0.95);
          border-radius: 15px;
          box-shadow: 0 5px 20px rgba(122, 53, 24, 0.1);
          overflow: hidden;
          transition: all 0.3s ease;
        }
        
        .faq-item.active {
          box-shadow: 0 8px 25px rgba(122, 53, 24, 0.15);
        }
        
        .faq-question {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1.5rem;
          cursor: pointer;
          font-family: 'Montserrat', sans-serif;
          font-weight: 700;
          color: #7a3518;
          font-size: 1.1rem;
        }
        
        .faq-icon {
          width: 24px;
          height: 24px;
          position: relative;
          transition: transform 0.3s ease;
        }
        
        .faq-icon::before,
        .faq-icon::after {
          content: '';
          position: absolute;
          background-color: #e67e22;
          transition: all 0.3s ease;
        }
        
        .faq-icon::before {
          top: 50%;
          left: 0;
          width: 100%;
          height: 2px;
          transform: translateY(-50%);
        }
        
        .faq-icon::after {
          top: 0;
          left: 50%;
          width: 2px;
          height: 100%;
          transform: translateX(-50%);
        }
        
        .faq-item.active .faq-icon::after {
          transform: translateX(-50%) rotate(90deg);
          opacity: 0;
        }
        
        .faq-answer {
          padding: 0 1.5rem;
          max-height: 0;
          overflow: hidden;
          transition: all 0.3s ease;
          font-family: 'Montserrat', sans-serif;
          color: #5c2c0f;
          line-height: 1.6;
        }
        
        .faq-item.active .faq-answer {
          padding: 0 1.5rem 1.5rem;
          max-height: 300px;
        }
        
        .faq-decoration {
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
        
        .contact-note {
          text-align: center;
          margin-top: 3rem;
          font-family: 'Montserrat', sans-serif;
          color: #5c2c0f;
          font-size: 1.1rem;
        }
        
        .contact-link {
          color: #e67e22;
          text-decoration: none;
          font-weight: 700;
          transition: color 0.3s ease;
        }
        
        .contact-link:hover {
          color: #7a3518;
          text-decoration: underline;
        }
        
        @media (max-width: 768px) {
          .faq-question {
            padding: 1.2rem;
            font-size: 1rem;
          }
          
          .faq-item.active .faq-answer {
            padding: 0 1.2rem 1.2rem;
          }
          
          .faq-decoration {
            display: none;
          }
        }
      `}</style>
      
      <div className="faq-decoration decoration-1"></div>
      <div className="faq-decoration decoration-2"></div>
      <div className="faq-decoration decoration-3"></div>
      
      <div className="faq-container">
        <h2 className="faq-title">Frequently Asked Questions</h2>
        <p className="faq-subtitle">Find answers to common questions about our bakery products and services</p>
        
        <div className="faq-list">
          {faqData.map((faq, index) => (
            <div 
              key={index} 
              className={`faq-item ${activeIndex === index ? 'active' : ''}`}
            >
              <div 
                className="faq-question" 
                onClick={() => toggleAccordion(index)}
              >
                <span>{faq.question}</span>
                <div className="faq-icon"></div>
              </div>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="contact-note">
          <p>Still have questions? <a href="#contact" className="contact-link">Contact us</a> and we'll be happy to help!</p>
        </div>
      </div>
    </section>
  );
}