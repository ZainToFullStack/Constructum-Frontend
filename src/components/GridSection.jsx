import React from 'react';
import "../style/GridSection.css";

const GridSection = () => {
  const images = {
    left: "https://www.inspectorproinsurance.com/wp-content/uploads/2022/06/shutterstock_625124798-1536x1024.jpg.webp",
    center: "https://plus.unsplash.com/premium_photo-1681822931903-76ad04ac8cc1?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    right: "https://www.ecmag.com/images/default-source/articles/xml_uploads/unzipped/cfa2fb6f-992a-41cc-90c1-6bca4b4488bc.jpeg?sfvrsn=bb206429_0"
  };

  return (
    <section className="grid-section">
      <div className="grid-container">

        {/* ── Column 1 ── */}
        <div className="grid-item">
          <div
            className="item-image"
            style={{ backgroundImage: `url(${images.left})` }}
          />
          <span className="item-number">01</span>
          <div className="item-content">
            <div className="item-divider" />
            <p className="item-text">
              EXPERT INSPECTION TEAM <br />
              DELIVERING RELIABLE ASSESSMENTS.
            </p>
          </div>
        </div>

        {/* ── Column 2 ── */}
        <div className="grid-item item-center">
          <img
            src={images.center}
            alt="Inspection Work"
            className="welder-image"
          />
          <span className="item-number">02</span>
          <div className="item-content">
            <div className="item-divider" />
            <p className="item-text">
              PRECISION-DRIVEN APPROACH <br />
              TO EVERY PROPERTY INSPECTION.
            </p>
          </div>
        </div>

        {/* ── Column 3 ── */}
        <div className="grid-item">
          <div
            className="item-image grayscale"
            style={{ backgroundImage: `url(${images.right})` }}
          />
          <span className="item-number">03</span>
          <div className="item-content align-right">
            <div className="item-divider" />
            <p className="item-text">
              HIGH STANDARDS OF <br />
              STRUCTURAL SAFETY & QUALITY.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default GridSection;