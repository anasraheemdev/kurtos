import { useEffect, useState } from "react";

export default function BakeryLayout() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleMenuClick = (section) => {
    // Console log for development
    console.log(`See ${section} menu clicked`);
    
    // Add actual functionality here:
    // Example: Navigate to menu page
    // window.location.href = `/menu/${section}`;
    
    // Or show a modal/popup
    // setShowMenu(section);
    
    // Or scroll to menu section
    // document.getElementById(`${section}-menu`)?.scrollIntoView({ behavior: 'smooth' });
    
    // For now, show an alert for user feedback (remove in production)
    alert(`Opening ${section} menu...`);
  };

  return (
    <>
      <style>{`
        .bakery-layout {
          display: flex;
          gap: 20px;
          max-width: 1200px;
          margin: 0 auto;
          height: 700px;
          align-items: stretch;
          padding: 80px 10px;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
        }

        .chimney-card {
          flex: 1;
          background: linear-gradient(135deg, #ea580c, #c2410c);
          border-radius: 24px;
          position: relative;
          overflow: hidden;
          height: 100%;
          box-shadow: inset 0 0 50px rgba(0, 0, 0, 0.2);
          transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
          cursor: pointer;
        }

        .chimney-card.loaded {
          transform: translateY(0) scale(1);
          opacity: 1;
        }

        .chimney-card.not-loaded {
          transform: translateY(30px) scale(0.95);
          opacity: 0;
        }

        .chimney-image {
          width: 140%;
          height: 140%;
          object-fit: cover;
          object-position: center center;
          position: absolute;
          top: 0;
          left: 0;
          z-index: 2;
          transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .chimney-image.hovered {
          transform: scale(1.05);
        }

        .chimney-image.not-hovered {
          transform: scale(1);
        }

        .chimney-text-layer {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(234, 88, 12, 0.1);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 40px;
          z-index: 1;
        }

        .chimney-title {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .chimney-title-h1 {
          font-size: 4.5rem;
          font-weight: 900;
          color: white;
          letter-spacing: 0.1em;
          line-height: 1;
          text-shadow: 3px 3px 8px rgba(0,0,0,0.7);
          margin: 0;
          opacity: 0.9;
          transition: transform 1s cubic-bezier(0.4, 0, 0.2, 1) 0.3s;
          text-align: center;
        }

        .chimney-title-h1.loaded {
          transform: translateY(0);
        }

        .chimney-title-h1.not-loaded {
          transform: translateY(-20px);
        }

        .chimney-info {
          color: white;
          font-size: 1.1rem;
          font-weight: 500;
          text-shadow: 2px 2px 4px rgba(0,0,0,0.7);
        }

        .chimney-info p {
          margin: 0 0 5px 0;
        }

        .right-cards {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 20px;
          height: 100%;
        }

        .card {
          border-radius: 24px;
          padding: 32px;
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          flex: 1;
          box-shadow: inset 0 0 30px rgba(0, 0, 0, 0.15);
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .beverages-card {
          background: linear-gradient(135deg, #fde047, #facc15);
          flex: 1.5;
          transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.2s;
        }

        .beverages-card.loaded {
          transform: translateX(0) scale(1);
          opacity: 1;
        }

        .beverages-card.not-loaded {
          transform: translateX(30px) scale(0.95);
          opacity: 0;
        }

        .beverages-card.hovered {
          transform: translateX(0) scale(1) translateY(-5px);
        }

        .sweet-treats-card {
          background: linear-gradient(135deg, #facc15, #eab308);
          flex: 1;
          transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.4s;
        }

        .sweet-treats-card.loaded {
          transform: translateX(0) scale(1);
          opacity: 1;
        }

        .sweet-treats-card.not-loaded {
          transform: translateX(30px) scale(0.95);
          opacity: 0;
        }

        .sweet-treats-card.hovered {
          transform: translateX(0) scale(1) translateY(-5px);
        }

        .card h2 {
          font-size: 1.8rem;
          font-weight: 900;
          color: #1f2937;
          margin: 0 0 16px 0;
        }

        .card p {
          color: #374151;
          font-size: 0.95rem;
          line-height: 1.6;
          margin: 0 0 24px 0;
          max-width: 45%;
        }

        .menu-button {
          background: #ea580c;
          color: white;
          border: none;
          padding: 12px 24px;
          border-radius: 25px;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 8px;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          width: fit-content;
          font-size: 1rem;
          box-shadow: 0 4px 12px rgba(234, 88, 12, 0.3);
        }

        .menu-button.hovered-beverages {
          transform: translateY(-2px) scale(1.05);
          box-shadow: 0 6px 20px rgba(234, 88, 12, 0.4);
          background: #dc2626;
        }

        .menu-button.hovered-sweet {
          transform: translateY(-2px) scale(1.05);
          box-shadow: 0 6px 20px rgba(234, 88, 12, 0.4);
          background: #dc2626;
        }

        .product-image {
          position: absolute;
          right: 10px;
          top: 10px;
          z-index: 10;
          max-width: 100%;
        }

        .coffee-cup {
          width: 300px;
          height: auto;
          right: -25px;
          top: -5px;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .coffee-cup.hovered {
          transform: rotate(25deg) scale(1.1);
          filter: drop-shadow(0 8px 16px rgba(0,0,0,0.2));
        }

        .coffee-cup.not-hovered {
          transform: rotate(15deg) scale(1);
          filter: none;
        }

        .milkshake {
          width: 240px;
          height: auto;
          right: -10px;
          top: -5px;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .milkshake.hovered {
          transform: scale(1.1) translateY(-5px);
          filter: drop-shadow(0 8px 16px rgba(0,0,0,0.2));
        }

        .milkshake.not-hovered {
          transform: scale(1);
          filter: none;
        }

        /* Mobile Responsiveness */
        @media (max-width: 1024px) {
          .bakery-layout {
            padding: 60px 15px;
            height: auto;
            min-height: 600px;
          }
          
          .chimney-title-h1 {
            font-size: 3.5rem;
          }
          
          .coffee-cup {
            width: 250px;
            right: -20px;
          }
          
          .milkshake {
            width: 200px;
            right: -5px;
          }
        }

        @media (max-width: 768px) {
          .bakery-layout {
            flex-direction: column;
            gap: 24px;
            height: auto;
            padding: 40px 15px;
          }
          
          .chimney-card {
            height: 400px;
            min-height: 400px;
          }
          
          .chimney-text-layer {
            padding: 30px;
          }
          
          .chimney-title-h1 {
            font-size: clamp(2.5rem, 8vw, 3.5rem);
            letter-spacing: 0.05em;
          }
          
          .chimney-info {
            font-size: 1rem;
          }
          
          .right-cards {
            height: auto;
          }
          
          .card {
            height: auto;
            min-height: 200px;
            padding: 28px;
          }
          
          .card h2 {
            font-size: 1.6rem;
            margin-bottom: 12px;
          }
          
          .card p {
            font-size: 0.9rem;
            max-width: 60%;
            margin-bottom: 20px;
          }
          
          .menu-button {
            padding: 10px 20px;
            font-size: 0.9rem;
          }
          
          .coffee-cup {
            width: 200px;
            right: -15px;
            top: 10px;
          }
          
          .milkshake {
            width: 160px;
            right: -5px;
            top: 10px;
          }
          
          .beverages-card {
            flex: 1.3;
          }
        }

        @media (max-width: 480px) {
          .bakery-layout {
            padding: 30px 10px;
            gap: 20px;
          }
          
          .chimney-card {
            height: 320px;
            min-height: 320px;
          }
          
          .chimney-text-layer {
            padding: 24px;
          }
          
          .chimney-title-h1 {
            font-size: clamp(2rem, 10vw, 2.8rem);
            line-height: 0.9;
          }
          
          .chimney-info {
            font-size: 0.9rem;
          }
          
          .card {
            padding: 24px;
            min-height: 180px;
          }
          
          .card h2 {
            font-size: 1.4rem;
            margin-bottom: 10px;
          }
          
          .card p {
            font-size: 0.85rem;
            max-width: 70%;
            margin-bottom: 16px;
            line-height: 1.5;
          }
          
          .menu-button {
            padding: 8px 16px;
            font-size: 0.85rem;
          }
          
          .coffee-cup {
            width: 150px;
            right: -10px;
            top: 15px;
          }
          
          .milkshake {
            width: 120px;
            right: 0px;
            top: 15px;
          }
        }

        @media (max-width: 360px) {
          .bakery-layout {
            padding: 20px 8px;
          }
          
          .chimney-card {
            height: 280px;
            min-height: 280px;
          }
          
          .chimney-text-layer {
            padding: 20px;
          }
          
          .chimney-title-h1 {
            font-size: clamp(1.6rem, 12vw, 2.2rem);
          }
          
          .card {
            padding: 20px;
            min-height: 160px;
          }
          
          .card h2 {
            font-size: 1.2rem;
          }
          
          .card p {
            font-size: 0.8rem;
            max-width: 75%;
          }
          
          .coffee-cup {
            width: 120px;
            right: -5px;
          }
          
          .milkshake {
            width: 100px;
            right: 5px;
          }
        }

        /* Landscape mobile */
        @media (max-height: 500px) and (orientation: landscape) {
          .bakery-layout {
            flex-direction: row;
            height: 400px;
            padding: 20px 15px;
          }
          
          .chimney-card {
            height: 100%;
          }
          
          .right-cards {
            height: 100%;
          }
          
          .card {
            min-height: auto;
          }
          
          .chimney-title-h1 {
            font-size: clamp(2rem, 6vh, 2.5rem);
          }
        }

        /* Hover effects for touch devices */
        @media (hover: none) {
          .card:active {
            transform: translateY(-2px);
          }
          
          .menu-button:active {
            transform: translateY(-1px) scale(1.02);
          }
        }

        /* High DPI displays */
        @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
          .chimney-image,
          .coffee-cup,
          .milkshake {
            image-rendering: -webkit-optimize-contrast;
            image-rendering: crisp-edges;
          }
        }

        /* Reduced motion */
        @media (prefers-reduced-motion: reduce) {
          .chimney-card,
          .beverages-card,
          .sweet-treats-card,
          .chimney-image,
          .coffee-cup,
          .milkshake,
          .menu-button,
          .chimney-title-h1 {
            transition: none;
            animation: none;
          }
          
          .chimney-card,
          .beverages-card,
          .sweet-treats-card {
            transform: none !important;
            opacity: 1 !important;
          }
        }
      `}</style>

      <div className="bakery-layout" id="menu">
        {/* Left Card - Chimney Cones */}
        <div
          className={`chimney-card ${isLoaded ? 'loaded' : 'not-loaded'}`}
          onMouseEnter={() => setHoveredCard("chimney")}
          onMouseLeave={() => setHoveredCard(null)}
        >
          {/* Text layer behind image */}
          <div className="chimney-text-layer">
            <div className="chimney-title">
              <h1 className={`chimney-title-h1 ${isLoaded ? 'loaded' : 'not-loaded'}`}>CHIMNEY CONES</h1>
            </div>
            <div className="chimney-info">
              <p>Freshly Baked Daily</p>
              <p>#Kurtos Bakery Shop</p>
            </div>
          </div>
          {/* Image layer in foreground */}
          <img
            src="https://img.playbook.com/S9TbV9pkYtpKZQM0Gr3_vXs0KTQFurdlKtJNWIJO9KY/w:750/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9w/cmV2aWV3cy9lN2M3/MmVhMS05YTU2LTQ3/MGYtYmVhOS01MGI2/YTE0Y2IxZjU.webp"
            alt="Chimney Cones"
            className={`chimney-image ${hoveredCard === "chimney" ? 'hovered' : 'not-hovered'}`}
          />
        </div>

        {/* Right Side Cards */}
        <div className="right-cards">
          {/* Beverages Card */}
          <div
            className={`card beverages-card ${isLoaded ? 'loaded' : 'not-loaded'} ${hoveredCard === "beverages" ? "hovered" : ""}`}
            onMouseEnter={() => setHoveredCard("beverages")}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div>
              <h2>BEVERAGES</h2>
              <p>
                Crispy outside, soft inside. Rolled in sugar, baked fresh, and filled with irresistible delights!
              </p>
              <button
                className={`menu-button ${hoveredCard === "beverages" ? "hovered-beverages" : ""}`}
                onClick={() => handleMenuClick("beverages")}
              >
                See Menu →
              </button>
            </div>
            <img
              src="https://img.playbook.com/RP8uDsRsOqEYqd4O8Mr0gWzrgDSwwgiQKJlaqS4hZKE/w:500/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9w/cmV2aWV3cy8zMjAx/MGQ4Zi0xYTY5LTQw/ODMtYjE0ZC0yOWNk/ZWUyYTc1OTg.webp"
              alt="Coffee Cup"
              className={`product-image coffee-cup ${hoveredCard === "beverages" ? 'hovered' : 'not-hovered'}`}
            />
          </div>

          {/* Sweet Treats Card */}
          <div
            className={`card sweet-treats-card ${isLoaded ? 'loaded' : 'not-loaded'} ${hoveredCard === "sweet" ? "hovered" : ""}`}
            onMouseEnter={() => setHoveredCard("sweet")}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div>
              <h2>SWEET TREATS</h2>
              <button
                className={`menu-button ${hoveredCard === "sweet" ? "hovered-sweet" : ""}`}
                onClick={() => handleMenuClick("sweet treats")}
              >
                See Menu →
              </button>
            </div>
            <img
              src="https://img.playbook.com/MuzTF7gzijG4gX04tZZ1R1mwSuEoP5i60VvGhPUalQ8/w:500/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9w/cmV2aWV3cy8yZTFk/NDg0Ni01YmUzLTRk/YmYtYTVlMi04OTg3/MmM5MjU1M2I.webp"
              alt="Milkshake"
              className={`product-image milkshake ${hoveredCard === "sweet" ? 'hovered' : 'not-hovered'}`}
            />
          </div>
        </div>
      </div>
    </>
  );
}