import React from 'react'
const IMG = "https://img.playbook.com/_XkjQnJM_0LBPRBA-ZsyagXtHRY1zVcD5I4htPg-FkU/s:967:768/exp:1756598399/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9s/YXJnZV9wcmV2aWV3/cy85ZDk3YzI3NS02/OTlhLTQ2N2MtYjQw/ZS1iNGQ2YTZiN2Qw/ODc.webp";

const items = [
  { 
    price: "Rs. 1,200", 
    name: "CREAMY DELIGHTS",
    description: "Rich cream-filled pastries with a delicate crust",
    image: "https://img.playbook.com/MuzTF7gzijG4gX04tZZ1R1mwSuEoP5i60VvGhPUalQ8/w:500/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9w/cmV2aWV3cy8yZTFk/NDg0Ni01YmUzLTRk/YmYtYTVlMi04OTg3/MmM5MjU1M2I.webp",
    badge: "BESTSELLER"
  },
  { 
    price: "Rs. 1,200", 
    name: "ALMOND DELIGHTS",
    description: "Crunchy almond toppings over soft, buttery layers",
    image: "https://img.playbook.com/VxiAB2Ypgz2UqvVXCP_HtALNlWLcq-gccLXEFSzrb3Y/s:564:572/exp:1756511999/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9s/YXJnZV9wcmV2aWV3/cy9mMDkwMjk2Yi03/NDZhLTRjODEtOGJi/My03NGJlM2RlMjg5/ZmE.webp",
    badge: "TRENDING"
  },
  { 
    price: "Rs. 1,500", 
    name: "CHOCO SWIRL",
    description: "Decadent chocolate spirals with caramel drizzle",
    image: "https://img.playbook.com/RP8uDsRsOqEYqd4O8Mr0gWzrgDSwwgiQKJlaqS4hZKE/w:500/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9w/cmV2aWV3cy8zMjAx/MGQ4Zi0xYTY5LTQw/ODMtYjE0ZC0yOWNk/ZWUyYTc1OTg.webp",
    badge: "PREMIUM"
  }
];

export default function Pricing() {
  return (
    <section id="bestpricing" className="bakery-pricing">
      <style jsx>{`
       @import url('https://fonts.googleapis.com/css2?family=Pacifico&family=Montserrat:wght@400;500;700&display=swap');
        
        * {
          box-sizing: border-box;
        }
        
        .bakery-pricing {
          background: radial-gradient(ellipse at center, #914220 20%, #7a3518 100%);
          padding: 6rem 1rem;
          position: relative;
          min-height: 100vh;
          overflow: hidden;
        }
        
        .pricing-title {
          font-family: 'Pacifico', cursive;
          color: #ffffffff;
          font-size: clamp(2.5rem, 5vw, 4.5rem);
          text-align: center;
          margin-bottom: 0.5rem;
          font-weight: 900;
          letter-spacing: 2px;
          text-transform: uppercase;
        }
        
        .pricing-subtitle {
          font-family: 'Inter', sans-serif;
          color: #ffffffff;
          font-size: clamp(1rem, 2.5vw, 1.3rem);
          text-align: center;
          margin-bottom: 4rem;
          font-weight: 300;
          opacity: 0.8;
          letter-spacing: 3px;
          text-transform: uppercase;
        }
        
        .pricing-grid {
          display: grid;
          
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 3rem;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1rem;
        }
        
        .pricing-card {
          background: rgb(255, 255, 255);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(230, 126, 34, 0.2);
          border-radius: 24px;
          overflow: hidden;
          position: relative;
          transition: all 0.5s cubic-bezier(0.23, 1, 0.320, 1);
          box-shadow: 
            0 8px 32px rgba(0, 0, 0, 0.3),
            inset 0 1px 0 rgba(255, 255, 255, 0.1);
        }
        
        .pricing-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, 
            rgba(230, 126, 34, 0.1) 0%, 
            transparent 50%, 
            rgba(211, 84, 0, 0.1) 100%);
          opacity: 0;
          transition: opacity 0.5s ease;
          pointer-events: none;
        }
        
        .pricing-card:hover {
          transform: translateY(-12px) scale(1.02);
          border-color: rgba(230, 126, 34, 0.6);
          box-shadow: 
            0 20px 60px rgba(0, 0, 0, 0.4),
            0 0 40px rgba(230, 126, 34, 0.3),
            inset 0 1px 0 rgba(255, 255, 255, 0.2);
        }
        
        .pricing-card:hover::before {
          opacity: 1;
        }
        
        .card-badge {
          position: absolute;
          top: -1px;
          right: 20px;
          background: linear-gradient(135deg, #e67e22, #f39c12);
          color: #000;
          padding: 0.4rem 1rem;
          font-family: 'Orbitron', monospace;
          font-weight: 700;
          font-size: 0.65rem;
          letter-spacing: 1px;
          clip-path: polygon(0 0, 100% 0, 85% 100%, 15% 100%);
          z-index: 10;
          text-shadow: none;
        }
        
        .card-image {
          height: 200px;
          position: relative;
          overflow: hidden;
          margin: 1rem;
          border-radius: 16px;
          border: 1px solid rgba(230, 126, 34, 0.3);
        }
        
        .card-image::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(45deg, 
            rgba(230, 126, 34, 0.1) 0%, 
            transparent 50%, 
            rgba(211, 84, 0, 0.1) 100%);
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        
        .pricing-card:hover .card-image::after {
          opacity: 1;
        }
        
        .card-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s ease;
          filter: brightness(0.9) contrast(1.1);
        }
        
        .pricing-card:hover .card-image img {
          transform: scale(1.1);
          filter: brightness(1) contrast(1.2);
        }
        
        .card-content {
          padding: 1.5rem 2rem 2rem;
          position: relative;
          z-index: 5;
        }
        
        .card-title {
          
          font-weight: 700;
          color: rgba(96, 46, 2, 1);
          font-size: 1.1rem;
          margin-bottom: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          text-shadow: 0 0 10px rgba(230, 126, 34, 0.3);
        }
        
        .card-description {
          font-family: 'Inter', sans-serif;
          color:rgba(96, 46, 2, 1);
          font-size: 0.9rem;
          line-height: 1.6;
          margin-bottom: 1.5rem;
          font-weight: 300;
          opacity: 0.8;
        }
        
        .price-section {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.5rem;
          padding: 1rem;
          background: rgba(230, 126, 34, 0.05);
          border-radius: 12px;
          border: 1px solid rgba(230, 126, 34, 0.1);
        }
        
        .card-price {
        
          font-weight: 900;
          color: rgba(96, 46, 2, 1);
          font-size: 1.5rem;
          text-shadow: 0 0 15px rgba(230, 126, 34, 0.4);
        }
        
        .price-label {
          
          color: rgba(96, 46, 2, 1);
          font-size: 0.7rem;
          opacity: 0.6;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        
        .order-button {
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #e67e22 0%, #d35400 50%, #e67e22 100%);
          background-size: 200% 100%;
          color: #000;
          padding: 1rem 2rem;
          border-radius: 12px;
          text-decoration: none;
          
          font-weight: 700;
          transition: all 0.4s ease;
          box-shadow: 
            0 4px 15px rgba(230, 126, 34, 0.3),
            inset 0 1px 0 rgba(255, 255, 255, 0.2);
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          position: relative;
          overflow: hidden;
        }
        
        .order-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, 
            transparent, 
            rgba(255, 255, 255, 0.3), 
            transparent);
          transition: left 0.6s ease;
        }
        
        .order-button:hover {
          background-position: 100% 0;
          transform: translateY(-2px);
          box-shadow: 
            0 8px 25px rgba(230, 126, 34, 0.5),
            0 0 20px rgba(230, 126, 34, 0.3);
        }
        
        .order-button:hover::before {
          left: 100%;
        }
        
        .button-icon {
          margin-left: 0.8rem;
          font-size: 1rem;
          transition: transform 0.3s ease;
        }
        
        .order-button:hover .button-icon {
          transform: translateX(4px);
        }
        
        .tech-grid {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: 
            linear-gradient(rgba(230, 126, 34, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(230, 126, 34, 0.03) 1px, transparent 1px);
          background-size: 50px 50px;
          pointer-events: none;
          animation: gridMove 20s linear infinite;
        }
        
        .neon-orb {
          position: absolute;
          width: 200px;
          height: 200px;
          border-radius: 50%;
          filter: blur(40px);
          opacity: 0.1;
          animation: float 8s ease-in-out infinite;
        }
        
        .orb-1 {
          background: radial-gradient(circle, #e67e22, transparent);
          top: 10%;
          left: 10%;
          animation-delay: 0s;
        }
        
        .orb-2 {
          background: radial-gradient(circle, #d35400, transparent);
          bottom: 20%;
          right: 15%;
          animation-delay: 4s;
        }
        
        .orb-3 {
          background: radial-gradient(circle, #f39c12, transparent);
          top: 60%;
          left: 70%;
          animation-delay: 2s;
          width: 150px;
          height: 150px;
        }
        
        @keyframes gridMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
        
        @keyframes float {
          0%, 100% { 
            transform: translateY(0) translateX(0); 
          }
          33% { 
            transform: translateY(-30px) translateX(20px); 
          }
          66% { 
            transform: translateY(20px) translateX(-15px); 
          }
        }
        
        @media (max-width: 768px) {
          .pricing-grid {
            grid-template-columns: 1fr;
            max-width: 350px;
            gap: 2rem;
          }
          
          .card-content {
            padding: 1rem 1.5rem 1.5rem;
          }
          
          .neon-orb {
            width: 100px;
            height: 100px;
          }
          
          .tech-grid {
            background-size: 30px 30px;
          }
        }
      `}</style>
      
      <div className="tech-grid"></div>
      <div className="neon-orb orb-1"></div>
      <div className="neon-orb orb-2"></div>
      <div className="neon-orb orb-3"></div>
      
      <h2 className="pricing-title">Kurtoos</h2>
      <p className="pricing-subtitle">Future of Taste</p>
      
      <div className="pricing-grid">
        {items.map((item) => (
          <div key={item.name} className="pricing-card">
            <div className="card-badge">{item.badge}</div>
            <div className="card-image">
              <img src={item.image} alt={item.name} />
            </div>
            <div className="card-content">
              <h3 className="card-title">{item.name}</h3>
              <p className="card-description">{item.description}</p>
              <div className="price-section">
                <div>
                  <div className="price-label">Price</div>
                  <div className="card-price">{item.price}</div>
                </div>
              </div>
              <a 
                href="https://www.foodpanda.pk/restaurant/y3wu/kurtos-i8" 
                target="_blank" 
                rel="noopener noreferrer"
                className="order-button"
              >
                Deploy Order
                <span className="button-icon">→</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}