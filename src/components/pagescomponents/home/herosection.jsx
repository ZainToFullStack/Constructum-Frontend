import React, { useState } from 'react';
import "../../../style/HeroSection.css";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(1);

  // Define two hero sections as slides
  const slides = [
    {
      id: 1,
      // Fixed: Pehli picture ka text left side par
      title: (
        <>
          <span className="accent-text">TRANSFORMATIVE</span> <br />
          <span className="accent-text">RENOVATIONS</span> <br />
        </>
      ),
      mainText: (
        <>
          TAILORED TO YOUR <br />
          UNIQUE STYLE AND <br />
          COMFORT
        </>
      ),
      desc: "With a commitment to quality craftsmanship, precision engineering, and timely delivery. We turn your concepts into concrete reality",
      // Picture 1: Worker on concrete
      bg: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop",
      position: "pos-left"
    },
    {
      id: 2,
      // FIX: Dusri picture ka text center mein, and Transformative was missing!
      title: (
        <>
          <span className="accent-text">TRANSFORMATIVE</span> <br />
          <span className="accent-text">RENOVATIONS</span> <br />
        </>
      ),
      mainText: (
        <>
          TAILORED TO YOUR <br />
          UNIQUE STYLE AND <br />
          COMFORT
        </>
      ),
      desc: "With a commitment to quality craftsmanship, precision engineering, and timely delivery.",
      // Picture 2: High-rise construction building
      bg: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1931&auto=format&fit=crop",
      position: "pos-center"
    }
  ];

  const activeSlide = slides.find(s => s.id === currentSlide);

  return (
    <div 
      className="hero-container" 
      style={{ backgroundImage: `url(${activeSlide.bg})` }}
    >
      <div className="hero-overlay">
        <div className="content-wrapper">
          
          {/* Main Content Area */}
          <div className={`text-section ${activeSlide.position}`}>
            <h1 className="hero-title">
              {activeSlide.title}
              {activeSlide.mainText}
            </h1>
            
            <div className="divider-line"></div>
            
            <p className="hero-subtitle">{activeSlide.desc}</p>

            <button className="discover-btn">
              Discover <span className="arrow">↗</span>
            </button>
          </div>

          {/* Bottom Bar: Watch Video & Nav Controls */}
          <div className="bottom-bar">
            {/* Watch Video (Solid White, Black Text) */}
            <div className="video-card">
              <div className="video-thumb">
                <img src="https://media.istockphoto.com/id/2242145836/photo/portrait-mature-man-or-engineer-in-factory-for-manufacturing-industrial-development-or.jpg?s=1024x1024&w=is&k=20&c=KGovVVnupdd0Wv2wXwrPkSN05g1GdHKADogvfWEwHfA=" alt="worker" className="worker-pic" />
                <div className="play-icon">▶</div>
              </div>
              <span className="video-text">Watch_video</span>
            </div>

            {/* Slider Controls */}
            <div className="navigation-controls">
              <div className="progress-bar">
                <div 
                  className="progress-fill" 
                  style={{ width: currentSlide === 1 ? '40%' : '100%' }}
                ></div>
              </div>
              <div className="nav-dots">
                <span 
                  className={`dot ${currentSlide === 1 ? 'active' : ''}`} 
                  onClick={() => setCurrentSlide(1)}
                ></span>
                <span 
                  className={`dot ${currentSlide === 2 ? 'active' : ''}`} 
                  onClick={() => setCurrentSlide(2)}
                ></span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default HeroSection;