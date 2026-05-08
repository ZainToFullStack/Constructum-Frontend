import React, { useState } from 'react';
import "../style/GallerySlider.css";

const GallerySlider = () => {
  const sliderData = [
    {
      id: 1,
      image: "https://media.istockphoto.com/id/2223676031/photo/vibrant-twilight-with-fire-clouds-over-danshui-new-taipei-taiwan-cable-bridge.jpg?s=1024x1024&w=is&k=20&c=LLtFyMQN1zcjHS44QHD0ieOIuw47gDDdIm4zAq_zoas=", 
      text: "Organization of the process in bridge renovation"
    },
    {
      id: 2,
      image: "https://media.istockphoto.com/id/2223676015/photo/sunset-behind-danjiang-bridge-under-construction-in-tamsui-new-taipei-city.jpg?s=1024x1024&w=is&k=20&c=lY-U8pdKHVqkPkyj1HAcelQBl8bcKZfSYGGHFQ_KubA=",
      text: "Future infrastructure and urban development"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % sliderData.length);
  };

  // Dots ke liye click handler
  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="gallery-section-wrapper">
      <div className="gallery-preview">
        <div className="gallery-header">
          <span className="gallery-label">/ gallery /</span>
          <h2 className="gallery-title">
            Visual showcase of <br /> the work results at <br /> our company
          </h2>
        </div>

        <div className="gallery-controls">
          <a href="#" className="view-link">
            VIEW GALLERY <span className="arrow-icon-small">↗</span>
          </a>
          <div className="slider-dots">
            {sliderData.map((_, index) => (
              <span 
                key={index} 
                className={`s-dot ${index === currentIndex ? 'active' : ''}`}
                onClick={() => goToSlide(index)} // Ab dots bhi click honge
                style={{ cursor: 'pointer' }}
              ></span>
            ))}
          </div>
        </div>
      </div>

      <div className="main-slider-container">
        <div className="slide-content">
          <img 
            key={currentIndex} // Image refresh ke liye key zaroori hai
            src={sliderData[currentIndex].image} 
            alt="Project" 
            className="full-width-image" 
          />
          
          <div className="slide-text-overlay">
            <p>{sliderData[currentIndex].text}</p>
          </div>
        </div>

        {/* <div className="side-navigation-bar" onClick={handleNext}>
          <div className="main-arrow">↘</div>
        </div> */}
      </div>
    </div>
  );
};

export default GallerySlider;