import React from 'react';
import "../style/GridSection.css";

const GridSection = () => {
  const images = {
    left:   "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1000&auto=format&fit=crop",
    center: "https://images.unsplash.com/photo-1587582423116-ec07293f0395?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    right:  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop"
  };

  return (
    <section className="grid-section">
      <div className="grid-container">

        {/* ── Column 1 — Professionals ── */}
        <div className="grid-item">
          <div
            className="item-image"
            style={{ backgroundImage: `url(${images.left})` }}
          />
          <span className="item-number">01</span>
          <div className="item-content">
            <div className="item-divider" />
            <p className="item-text">
              PROFESSIONALS <br /> IN OUR BEST TEAM.
            </p>
          </div>
        </div>

        {/* ── Column 2 — Creative (center / bronze accent) ── */}
        <div className="grid-item item-center">
          <img
            src={images.center}
            alt="Welder at work"
            className="welder-image"
          />
          <span className="item-number">02</span>
          <div className="item-content">
            <div className="item-divider" />
            <p className="item-text">
              CREATIVE APPROACH <br /> TO WORK WITH YOU.
            </p>
          </div>
        </div>

        {/* ── Column 3 — High Quality (grayscale / right-aligned) ── */}
        <div className="grid-item">
          <div
            className="item-image grayscale"
            style={{ backgroundImage: `url(${images.right})` }}
          />
          <span className="item-number">03</span>
          <div className="item-content align-right">
            <div className="item-divider" />
            <p className="item-text">
              HIGH QUALITY <br /> PROJECTS EVER.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default GridSection;