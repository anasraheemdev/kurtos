import React from 'react'

export const BakeryHero = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Pacifico&family=Montserrat:wght@900&display=swap');

.bakery-hero {
  background: #914220;
  background: radial-gradient(ellipse at center, #914220 20%, #7a3518 100%);
  width: 100%;
  min-height: 100vh;
  position: relative;
  overflow: hidden;
}

.hero-container {
  width: 100%;
  height: 100vh;
  max-width: 100vw;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 10px;
}

.subtitle {
  font-family: 'Pacifico', 'Brush Script MT', cursive;
  color: #FFFFFF;
  font-size: clamp(24px, 4vw, 48px);
  line-height: 1;
  text-align: center;
  margin-bottom: clamp(20px, 4vh, 40px);
  position: relative;
  z-index: 10;
  text-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
  animation: fadeInDown 1.2s ease-out;
}

.title {
  font-family: 'Montserrat', 'Arial Black', sans-serif;
  font-weight: 900;
  color: #FFFFFF;
  font-size: clamp(48px, 12vw, 180px);
  line-height: 0.85;
  letter-spacing: 0.02em;
  text-align: center;
  margin: 0;
  position: relative;
  z-index: 5;
  text-transform: uppercase;
}

.title-line {
  display: block;
  animation: slideInLeft 1s ease-out;
  animation-fill-mode: both;
}

.title-line:nth-child(1) {
  animation-delay: 0.3s;
}

.title-line:nth-child(2) {
  animation-delay: 0.6s;
}

/* Falling Kurtos Animation */
.kurtos-container {
  position: fixed;
  top: -100px;
  right: 10%;
  z-index: 15;
  pointer-events: none;
}

.kurtos-falling {
  width: clamp(60px, 8vw, 120px);
  height: auto;
  filter: drop-shadow(0 8px 16px rgba(0, 0, 0, 0.4));
  animation: float 3s ease-in-out infinite;
}

/* Main Images */
.img-left {
  position: absolute;
  width: clamp(200px, 28vw, 380px);
  height: auto;
  left: clamp(-50px, -3vw, 20px);
  top: 50%;
  transform: translateY(-50%) rotate(-12deg);
  z-index: 3;
  filter: drop-shadow(0 15px 30px rgba(0, 0, 0, 0.5));
  animation: bounceInLeft 1.5s ease-out 0.8s both;
  transition: transform 0.3s ease;
  max-width: 100vw;
  object-fit: contain;
}

.img-left:hover {
  transform: translateY(-50%) rotate(-12deg) scale(1.05);
}

.img-mid {
  position: absolute;
  width: clamp(220px, 32vw, 420px);
  height: auto;
  left: 50%;
  top: clamp(38%, 45%, 50%);
  transform: translateX(-50%) translateY(-50%) rotate(-2deg);
  z-index: 8;
  filter: drop-shadow(0 20px 40px rgba(0, 0, 0, 0.6)) brightness(1.1);
  animation: bounceInUp 1.5s ease-out 1.2s both;
  transition: transform 0.3s ease;
  max-width: 90vw;
  object-fit: contain;
}

.img-mid:hover {
  transform: translateX(-50%) translateY(-50%) rotate(-2deg) scale(1.05);
}

.img-right {
  position: absolute;
  width: clamp(180px, 24vw, 320px);
  height: auto;
  right: clamp(-50px, -3vw, 20px);
  top: 50%;
  transform: translateY(-50%) rotate(18deg);
  z-index: 3;
  filter: drop-shadow(0 15px 30px rgba(0, 0, 0, 0.5));
  animation: bounceInRight 1.5s ease-out 1s both;
  transition: transform 0.3s ease;
  max-width: 100vw;
  object-fit: contain;
}

/* Chocolate Drips */
.chocolate-drip {
  position: absolute;
  left: 50%;
  top: clamp(62%, 68%, 72%);
  transform: translateX(-50%);
  width: 4px;
  height: clamp(100px, 15vh, 180px);
  background: linear-gradient(to bottom, 
    #6B4226 0%,
    #4a2c17 30%,
    #3d2414 60%,
    #2d1a0f 100%);
  border-radius: 0 0 50% 50%;
  z-index: 7;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
  animation: drip 2s ease-out 1.8s both;
}

.chocolate-drip-2 {
  position: absolute;
  left: calc(50% + 15px);
  top: clamp(64%, 70%, 74%);
  transform: translateX(-50%);
  width: 2px;
  height: clamp(60px, 10vh, 120px);
  background: linear-gradient(to bottom, #4a2c17, #2d1a0f);
  border-radius: 0 0 50% 50%;
  z-index: 6;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  animation: drip 1.8s ease-out 2.2s both;
}

.chocolate-drip::after,
.chocolate-drip-2::after {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 50%;
  transform: translateX(-50%);
  width: 8px;
  height: 8px;
  background: #2d1a0f;
  border-radius: 50%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
}

.chocolate-drip-2::after {
  width: 6px;
  height: 6px;
}

/* Scroll Indicator */
.scroll-indicator {
  position: absolute;
  bottom: clamp(30px, 5vh, 50px);
  left: 50%;
  transform: translateX(-50%);
  width: clamp(50px, 8vw, 70px);
  height: clamp(50px, 8vw, 70px);
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border: none;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 12;
  box-shadow: 
    0 10px 25px rgba(0, 0, 0, 0.3),
    0 4px 10px rgba(0, 0, 0, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 0.8);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  animation: pulse 2s infinite, fadeInUp 1s ease-out 2.5s both;
}

.scroll-indicator:hover {
  transform: translateX(-50%) translateY(-3px) scale(1.1);
  box-shadow: 
    0 15px 35px rgba(0, 0, 0, 0.4),
    0 6px 15px rgba(0, 0, 0, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.9);
  background: rgba(255, 255, 255, 1);
}

.scroll-indicator:active {
  transform: translateX(-50%) translateY(-1px) scale(1.05);
}

.arrow {
  color: #914220;
  font-size: clamp(20px, 4vw, 28px);
  font-weight: bold;
  line-height: 1;
  transition: transform 0.3s ease;
}

.scroll-indicator:hover .arrow {
  transform: translateY(2px);
}

/* Animations */
@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-100px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes bounceInLeft {
  0% {
    opacity: 0;
    transform: translateY(-50%) translateX(-100px) rotate(-12deg) scale(0.8);
  }
  60% {
    opacity: 1;
    transform: translateY(-50%) translateX(10px) rotate(-12deg) scale(1.1);
  }
  100% {
    transform: translateY(-50%) translateX(0) rotate(-12deg) scale(1);
  }
}

@keyframes bounceInRight {
  0% {
    opacity: 0;
    transform: translateY(-50%) translateX(100px) rotate(18deg) scale(0.8);
  }
  60% {
    opacity: 1;
    transform: translateY(-50%) translateX(-10px) rotate(18deg) scale(1.1);
  }
  100% {
    transform: translateY(-50%) translateX(0) rotate(18deg) scale(1);
  }
}

@keyframes bounceInUp {
  0% {
    opacity: 0;
    transform: translateX(-50%) translateY(50px) rotate(-2deg) scale(0.8);
  }
  60% {
    opacity: 1;
    transform: translateX(-50%) translateY(-60%) rotate(-2deg) scale(1.1);
  }
  100% {
    transform: translateX(-50%) translateY(-50%) rotate(-2deg) scale(1);
  }
}

@keyframes drip {
  0% {
    height: 0;
    opacity: 0;
  }
  30% {
    opacity: 1;
  }
  100% {
    height: clamp(100px, 15vh, 180px);
    opacity: 1;
  }
}

@keyframes float {
  0%, 100% {
    transform: translateY(0) rotate(0deg);
  }
  50% {
    transform: translateY(-10px) rotate(5deg);
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateX(-50%) translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }
}

@keyframes pulse {
  0%, 100% {
    box-shadow: 
      0 10px 25px rgba(0, 0, 0, 0.3),
      0 4px 10px rgba(0, 0, 0, 0.2),
      0 0 0 0 rgba(255, 255, 255, 0.7);
  }
  50% {
    box-shadow: 
      0 10px 25px rgba(0, 0, 0, 0.3),
      0 4px 10px rgba(0, 0, 0, 0.2),
      0 0 0 10px rgba(255, 255, 255, 0);
  }
}

/* Enhanced Mobile Responsiveness */
@media (max-width: 1024px) {
  .title {
    font-size: clamp(40px, 10vw, 140px);
  }
  
  .img-left {
    width: clamp(180px, 26vw, 320px);
    max-width: 95vw;
  }
  
  .img-mid {
    width: clamp(200px, 30vw, 380px);
    max-width: 85vw;
  }
  
  .img-right {
    width: clamp(160px, 22vw, 280px);
    max-width: 95vw;
  }
}

@media (max-width: 768px) {
  .bakery-hero { 
    width: 100%; 
    min-height: 100vh;
    min-height: 100svh; /* For better mobile viewport handling */
  }
  
  .hero-container {
    width: 100%;
    max-width: 100vw;
    padding: 0 8px;
    height: 100vh;
    height: 100svh;
  }
  
  .subtitle {
    font-size: clamp(20px, 5vw, 36px);
    margin-bottom: clamp(15px, 3vh, 30px);
  }
  
  .title {
    font-size: clamp(32px, 12vw, 90px);
    line-height: 0.8;
    letter-spacing: 0.01em;
  }
  
  .img-left {
    width: clamp(140px, 32vw, 240px);
    left: clamp(-70px, -10vw, 5px);
    transform: translateY(-50%) rotate(-10deg);
    max-width: 80vw;
    max-height: 35vh;
  }
  
  .img-left:hover {
    transform: translateY(-50%) rotate(-10deg) scale(1.03);
  }
  
  .img-mid {
    width: clamp(160px, 36vw, 280px);
    top: clamp(36%, 43%, 48%);
    max-width: 75vw;
    max-height: 40vh;
  }
  
  .img-mid:hover {
    transform: translateX(-50%) translateY(-50%) rotate(-2deg) scale(1.03);
  }
  
  .img-right {
    width: clamp(120px, 28vw, 200px);
    right: clamp(-70px, -10vw, 5px);
    transform: translateY(-50%) rotate(14deg);
    max-width: 80vw;
    max-height: 35vh;
  }
  
  .img-right:hover {
    transform: translateY(-50%) rotate(14deg) scale(1.03);
  }
  
  .kurtos-falling {
    width: clamp(35px, 8vw, 70px);
    right: 3%;
  }
  
  .chocolate-drip {
    height: clamp(70px, 12vh, 120px);
    width: 3px;
    top: clamp(60%, 66%, 70%);
  }
  
  .chocolate-drip-2 {
    height: clamp(45px, 8vh, 80px);
    width: 2px;
    left: calc(50% + 12px);
    top: clamp(62%, 68%, 72%);
  }
  
  .scroll-indicator {
    bottom: clamp(20px, 4vh, 40px);
    width: clamp(45px, 7vw, 60px);
    height: clamp(45px, 7vw, 60px);
  }
  
  .arrow {
    font-size: clamp(16px, 3.5vw, 24px);
  }
}

@media (max-width: 480px) {
  .hero-container {
    padding: 0 5px;
  }
  
  .subtitle {
    font-size: clamp(18px, 6vw, 28px);
    margin-bottom: clamp(12px, 2.5vh, 25px);
  }
  
  .title {
    font-size: clamp(24px, 14vw, 70px);
    line-height: 0.75;
  }
  
  .img-left {
    left: clamp(-90px, -18vw, -30px);
    width: clamp(110px, 38vw, 180px);
    transform: translateY(-50%) rotate(-8deg);
    max-width: 70vw;
    max-height: 30vh;
  }
  
  .img-left:hover {
    transform: translateY(-50%) rotate(-8deg) scale(1.02);
  }
  
  .img-mid {
    width: clamp(130px, 42vw, 220px);
    top: clamp(34%, 41%, 46%);
    max-width: 65vw;
    max-height: 35vh;
  }
  
  .img-right {
    right: clamp(-90px, -18vw, -30px);
    width: clamp(90px, 32vw, 160px);
    transform: translateY(-50%) rotate(12deg);
    max-width: 70vw;
    max-height: 30vh;
  }
  
  .img-right:hover {
    transform: translateY(-50%) rotate(12deg) scale(1.02);
  }
  
  .kurtos-falling {
    width: clamp(25px, 7vw, 50px);
    right: 2%;
  }
  
  .chocolate-drip {
    height: clamp(50px, 10vh, 100px);
    width: 2px;
    top: clamp(58%, 64%, 68%);
  }
  
  .chocolate-drip-2 {
    height: clamp(30px, 6vh, 70px);
    width: 1px;
    left: calc(50% + 8px);
    top: clamp(60%, 66%, 70%);
  }
  
  .chocolate-drip::after {
    width: 6px;
    height: 6px;
    bottom: -6px;
  }
  
  .chocolate-drip-2::after {
    width: 4px;
    height: 4px;
    bottom: -4px;
  }
  
  .scroll-indicator {
    bottom: clamp(15px, 3vh, 30px);
    width: clamp(40px, 6vw, 50px);
    height: clamp(40px, 6vw, 50px);
  }
  
  .arrow {
    font-size: clamp(14px, 3vw, 20px);
  }
}

/* Ultra-small screens */
@media (max-width: 360px) {
  .title {
    font-size: clamp(20px, 16vw, 60px);
  }
  
  .img-left {
    width: clamp(90px, 40vw, 140px);
    left: clamp(-100px, -22vw, -40px);
  }
  
  .img-mid {
    width: clamp(110px, 45vw, 180px);
  }
  
  .img-right {
    width: clamp(80px, 35vw, 130px);
    right: clamp(-100px, -22vw, -40px);
  }
}

/* Landscape mobile orientation */
@media (max-height: 500px) and (orientation: landscape) {
  .hero-container {
    height: 100vh;
  }
  
  .subtitle {
    font-size: clamp(16px, 4vh, 24px);
    margin-bottom: clamp(8px, 2vh, 15px);
  }
  
  .title {
    font-size: clamp(24px, 8vh, 60px);
  }
  
  .img-left,
  .img-mid,
  .img-right {
    top: 55%;
  }
  
  .img-left {
    width: clamp(80px, 12vh, 120px);
  }
  
  .img-mid {
    width: clamp(100px, 15vh, 150px);
    top: 50%;
  }
  
  .img-right {
    width: clamp(70px, 10vh, 100px);
  }
  
  .chocolate-drip {
    top: 70%;
    height: clamp(40px, 8vh, 80px);
  }
  
  .chocolate-drip-2 {
    top: 72%;
    height: clamp(25px, 5vh, 60px);
  }
  
  .scroll-indicator {
    bottom: clamp(10px, 2vh, 20px);
    width: clamp(35px, 6vh, 45px);
    height: clamp(35px, 6vh, 45px);
  }
}

/* High DPI displays */
@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
  .img-left,
  .img-mid,
  .img-right {
    image-rendering: -webkit-optimize-contrast;
    image-rendering: crisp-edges;
  }
}

/* Reduced motion preference */
@media (prefers-reduced-motion: reduce) {
  .title-line,
  .img-left,
  .img-mid,
  .img-right,
  .chocolate-drip,
  .chocolate-drip-2,
  .scroll-indicator,
  .subtitle {
    animation: none;
  }
  
  .kurtos-falling {
    animation: none;
  }
  
  .img-left:hover,
  .img-mid:hover,
  .img-right:hover,
  .scroll-indicator:hover {
    transform: none;
  }
}
      `}</style>
      <section className="bakery-hero" id="home">
        <div className="hero-container">
          <p className="subtitle">Creamy Delight Bread</p>
          <h1 className="title">
            <span className="title-line">BAKED FRESH</span>
            <span className="title-line">DAILY</span>
          </h1>
          <img
            src="https://img.playbook.com/VxiAB2Ypgz2UqvVXCP_HtALNlWLcq-gccLXEFSzrb3Y/s:564:572/exp:1756511999/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9s/YXJnZV9wcmV2aWV3/cy9mMDkwMjk2Yi03/NDZhLTRjODEtOGJi/My03NGJlM2RlMjg5/ZmE.webp"
            alt="Golden spiral-shaped artisanal bread"
            className="img-left"
          />
          <img
            src="https://img.playbook.com/MuzTF7gzijG4gX04tZZ1R1mwSuEoP5i60VvGhPUalQ8/w:500/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9w/cmV2aWV3cy8yZTFk/NDg0Ni01YmUzLTRk/YmYtYTVlMi04OTg3/MmM5MjU1M2I.webp"
            alt="Chocolate-drizzled artisanal bread with glossy finish"
            className="img-mid"
          />
          <img
            src="https://img.playbook.com/RP8uDsRsOqEYqd4O8Mr0gWzrgDSwwgiQKJlaqS4hZKE/w:500/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9w/cmV2aWV3cy8zMjAx/MGQ4Zi0xYTY5LTQw/ODMtYjE0ZC0yOWNk/ZWUyYTc1OTg.webp"
            alt="Specialty coffee cup with elegant branding"
            className="img-right"
          />
          <div className="chocolate-drip"></div>
          <div className="chocolate-drip-2"></div>
          <button className="scroll-indicator" aria-label="Scroll down">
            <span className="arrow">↓</span>
          </button>
        </div>
      </section>
    </>
  );
};

export default BakeryHero;