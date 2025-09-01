import React, { useState, useEffect } from 'react';

const BakeryHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 20);

      // Dynamic active section detection
      const sections = ['home', 'menu', 'about', 'sellers','bestpricing','FAQs', 'contact'];
      
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    // Prevent body scroll when menu is open
    document.body.style.overflow = !isMobileMenuOpen ? 'hidden' : 'unset';
  };

  const handleNavClick = (section) => {
    setActiveSection(section);
    setIsMobileMenuOpen(false);
    document.body.style.overflow = 'unset';
    
    // Smooth scroll to section
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Pacifico&family=Montserrat:wght@300;400;500;600;700;800;900&display=swap');

        * {
          box-sizing: border-box;
        }

        .bakery-header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          width: 100%;
          z-index: 1000;
          transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          background: linear-gradient(135deg, 
            rgba(145, 66, 32, 0.85) 0%, 
            rgba(122, 53, 24, 0.9) 50%,
            rgba(109, 48, 21, 0.95) 100%);
          backdrop-filter: blur(20px) saturate(180%);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
        }

        .bakery-header.scrolled {
          background: linear-gradient(135deg, 
            rgba(122, 53, 24, 0.95) 0%, 
            rgba(109, 48, 21, 0.98) 50%,
            rgba(97, 43, 18, 1) 100%);
          backdrop-filter: blur(30px) saturate(200%);
          box-shadow: 
            0 8px 40px rgba(0, 0, 0, 0.25),
            0 2px 20px rgba(0, 0, 0, 0.15),
            inset 0 1px 0 rgba(255, 255, 255, 0.1);
          border-bottom: 1px solid rgba(255, 255, 255, 0.15);
        }

        .header-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 clamp(20px, 4vw, 50px);
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: clamp(75px, 9vh, 95px);
          transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          position: relative;
        }

        .bakery-header.scrolled .header-container {
          height: clamp(65px, 8vh, 80px);
        }

        /* Minimalist Logo */
        .logo {
          display: flex;
          align-items: center;
          gap: 12px;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .logo-icon {
          width: 50px;
          height: 50px;
          border-radius: 12px;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.15);
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
        }

        .logo-icon img {
          width: 80%;
          height: 80%;
          object-fit: contain;
          transition: all 0.3s ease;
        }

        .logo:hover .logo-icon {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }

        .logo-text {
          color: #ffffff;
          font-family: 'Pacifico', cursive;
          font-size: 24px;
          font-weight: 400;
          letter-spacing: 0.5px;
          transition: all 0.3s ease;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
        }

        .logo:hover .logo-text {
          color: #f4e4c1;
        }

        /* Clean Navigation */
        .nav-menu {
          display: flex;
          align-items: center;
          gap: 8px;
          list-style: none;
          margin: 0;
          padding: 0;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          padding: 4px;
          box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
        }

        .nav-item {
          position: relative;
        }

        .nav-link {
          color: rgba(255, 255, 255, 0.9);
          text-decoration: none;
          font-family: 'Montserrat', sans-serif;
          font-weight: 500;
          font-size: 15px;
          letter-spacing: 0.3px;
          padding: 10px 18px;
          border-radius: 12px;
          transition: all 0.3s ease;
          display: block;
          text-transform: capitalize;
        }

        .nav-link:hover {
          color: #f4e4c1;
          background: rgba(255, 255, 255, 0.1);
        }

        .nav-link.active {
          color: #f4e4c1;
          background: rgba(255, 255, 255, 0.15);
          font-weight: 600;
        }

        /* Minimal CTA Button */
        .cta-button {
          background: linear-gradient(135deg, 
            #f4e4c1 0%, 
            #e6d4a7 50%, 
            #d4c394 100%);
          color: #914220;
          border: none;
          padding: 12px 26px;
          border-radius: 12px;
          font-family: 'Montserrat', sans-serif;
          font-weight: 600;
          font-size: 15px;
          cursor: pointer;
          transition: all 0.3s ease;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
        }

        .cta-button:hover {
          background: linear-gradient(135deg, 
            #ffffff 0%, 
            #f4e4c1 50%, 
            #e6d4a7 100%);
          transform: translateY(-2px);
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.25);
          color: #7a3518;
        }

        .cta-button:active {
          transform: translateY(0);
        }

        .cta-icon {
          font-size: 16px;
          transition: transform 0.3s ease;
        }

        .cta-button:hover .cta-icon {
          transform: translateX(2px);
        }

        /* Minimal Mobile Menu Button */
        .mobile-menu-button {
          display: none;
          flex-direction: column;
          justify-content: space-between;
          width: 30px;
          height: 22px;
          background: transparent;
          border: none;
          cursor: pointer;
          padding: 0;
          z-index: 1001;
        }

        .mobile-menu-button span {
          width: 100%;
          height: 2px;
          background: #f4e4c1;
          border-radius: 2px;
          transition: all 0.3s ease;
          transform-origin: center;
        }

        .mobile-menu-button.open span:nth-child(1) {
          transform: rotate(45deg) translate(6px, 6px);
        }

        .mobile-menu-button.open span:nth-child(2) {
          opacity: 0;
        }

        .mobile-menu-button.open span:nth-child(3) {
          transform: rotate(-45deg) translate(6px, -6px);
        }

        /* Mobile Menu with Original Background */
        .mobile-menu {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          background: linear-gradient(135deg, 
            rgba(145, 66, 32, 0.98) 0%, 
            rgba(122, 53, 24, 0.99) 50%,
            rgba(109, 48, 21, 1) 100%);
          backdrop-filter: blur(25px) saturate(150%);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 20px;
          transform: translateX(-100%);
          transition: all 0.4s ease;
          z-index: 998;
          padding: 20px;
        }

        .mobile-menu.open {
          transform: translateX(0);
        }

        .mobile-nav-link {
          color: rgba(255, 255, 255, 0.9);
          text-decoration: none;
          font-family: 'Montserrat', sans-serif;
          font-weight: 500;
          font-size: 22px;
          padding: 15px 30px;
          border-radius: 12px;
          transition: all 0.3s ease;
          text-align: center;
          text-transform: capitalize;
        }

        .mobile-nav-link:hover {
          color: #f4e4c1;
          background: rgba(255, 255, 255, 0.1);
        }

        .mobile-nav-link.active {
          color: #f4e4c1;
          background: rgba(255, 255, 255, 0.15);
          font-weight: 600;
        }

        .mobile-cta {
          margin-top: 30px;
          padding: 16px 32px;
          font-size: 18px;
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          .nav-menu {
            gap: 6px;
          }
          
          .nav-link {
            padding: 8px 14px;
            font-size: 14px;
          }
        }

        @media (max-width: 900px) {
          .nav-menu,
          .cta-button {
            display: none;
          }
          
          .mobile-menu-button {
            display: flex;
          }
        }

        @media (max-width: 480px) {
          .header-container {
            padding: 0 20px;
            height: 75px;
          }
          
          .bakery-header.scrolled .header-container {
            height: 65px;
          }
          
          .logo-icon {
            width: 42px;
            height: 42px;
          }
          
          .logo-text {
            font-size: 20px;
          }
          
          .mobile-nav-link {
            font-size: 20px;
            padding: 14px 25px;
          }
        }

        /* Focus states for accessibility */
        .nav-link:focus,
        .cta-button:focus,
        .mobile-menu-button:focus {
          outline: 2px solid #f4e4c1;
          outline-offset: 2px;
        }

        .mobile-nav-link:focus {
          outline: 2px solid #f4e4c1;
          outline-offset: 4px;
        }
      `}</style>

      <header className={`bakery-header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="header-container">
          <a href="#home" className="logo" onClick={(e) => { e.preventDefault(); handleNavClick('home'); }}>
            <div className="logo-icon">
              <img 
                src="https://img.playbook.com/VxiAB2Ypgz2UqvVXCP_HtALNlWLcq-gccLXEFSzrb3Y/s:564:572/exp:1756511999/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9s/YXJnZV9wcmV2aWV3/cy9mMDkwMjk2Yi03/NDZhLTRjODEtOGJi/My03NGJlM2RlMjg5/ZmE.webp" 
                alt="Creamy Delight Bread - Premium Artisanal Bakery Logo" 
              />
            </div>
            <span className="logo-text">Kurtoos</span>
          </a>

          <nav className="nav-menu" role="navigation" aria-label="Main navigation">
            {['home', 'menu', 'about','sellers','bestpricing', 'FAQs','contact'].map((item) => (
              <div key={item} className="nav-item">
                <a 
                  href={`#${item}`} 
                  className={`nav-link ${activeSection === item ? 'active' : ''}`}
                  onClick={(e) => { e.preventDefault(); handleNavClick(item); }}
                  aria-current={activeSection === item ? 'page' : undefined}
                >
                  {item === 'menu' ? 'Our Menu' : item}
                </a>
              </div>
            ))}
          </nav>

          <a 
            href="#order" 
            className="cta-button"
            onClick={(e) => { e.preventDefault(); handleNavClick('order'); }}
            aria-label="Order fresh baked goods now"
          >
            <span>Order Now</span>
            <span className="cta-icon" role="img" aria-label="Shopping cart">🛒</span>
          </a>

          <button 
            className={`mobile-menu-button ${isMobileMenuOpen ? 'open' : ''}`}
            onClick={toggleMobileMenu}
            aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isMobileMenuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        <nav 
          className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}
          role="navigation" 
          aria-label="Mobile navigation"
          aria-hidden={!isMobileMenuOpen}
        >
          {['home', 'menu', 'about','sellers', 'bestpricing','FAQs', 'contact'].map((item) => (
            <a 
              key={item}
              href={`#${item}`} 
              className={`mobile-nav-link ${activeSection === item ? 'active' : ''}`}
              onClick={(e) => { e.preventDefault(); handleNavClick(item); }}
              aria-current={activeSection === item ? 'page' : undefined}
            >
              {item === 'menu' ? 'Our Menu' : item}
            </a>
          ))}
          <a 
            href="#order" 
            className="cta-button mobile-cta"
            onClick={(e) => { e.preventDefault(); handleNavClick('order'); }}
            aria-label="Order fresh baked goods now"
          >
            <span>Order Now</span>
            <span className="cta-icon">🛒</span>
          </a>
        </nav>
      </header>
    </>
  );
};

export default BakeryHeader;