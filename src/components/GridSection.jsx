import React from 'react';
import "../style/GridSection.css";

const GridSection = () => {
  const images = {
    left: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1000&auto=format&fit=crop",
    center: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1000&auto=format&fit=crop",
    right: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop"
  };

  return (
    <section className="grid-section">
      <div className="grid-container">
        
        {/* Column 1 - Professionals */}
        <div className="grid-item">
          <div className="item-image" style={{ backgroundImage: `url(${images.left})` }}></div>
          <div className="item-content">
            <div className="item-divider"></div>
            <p className="item-text">PROFESSIONALS <br /> IN OUR BEST TEAM.</p>
          </div>
        </div>

        {/* Column 2 - Geometric Mask (The "S" Design) */}
        <div className="grid-item item-center">
          <div className="mask-wrapper">
            <div className="geometric-mask">
              <img src={images.center} alt="Welder" className="welder-image" />
            </div>
          </div>
          <div className="item-content">
            <div className="item-divider"></div>
            <p className="item-text">CREATIVE APPROACH <br /> TO WORK WITH YOU.</p>
          </div>
        </div>

        {/* Column 3 - High Quality */}
        <div className="grid-item">
          <div className="item-image grayscale" style={{ backgroundImage: `url(${images.right})` }}></div>
          <div className="item-content align-right">
            <div className="item-divider"></div>
            <p className="item-text">HIGH QUALITY <br /> PROJECTS EVER.</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default GridSection;