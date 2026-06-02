import React, { useState } from 'react';
import "../../../style/OurFeatures.css";
import quality from "../../../assets/quality.jpg";
import material from "../../../assets/material.jfif";

const OurFeatures = () => {
  const [activeTab, setActiveTab] = useState('modern');

  const featureContent = {
    modern: {
      text:
        "We use advanced inspection technology and modern diagnostic tools to deliver precise property evaluations. From thermal imaging to 3D scanning systems, our equipment helps detect hidden structural defects, moisture issues, and safety risks with high accuracy. This ensures non-destructive inspections and reliable reporting for better decision-making.",

      image:
        "https://i.pinimg.com/1200x/e0/0e/96/e00e96bd9e2f5afb120aafabe1e90abe.jpg"
    },

    quality: {
      text:
        "Our inspection process is built on strict quality standards and professional expertise. Every evaluation is conducted by skilled inspectors who ensure accuracy, consistency, and attention to detail. We focus on identifying structural weaknesses, safety concerns, and construction flaws to deliver dependable and trustworthy inspection results.",

      image:
        quality
    },

    materials: {
      text:
        "We assess construction quality by thoroughly examining building materials and structural components. Our inspections verify strength, durability, and compliance with safety standards. By identifying material defects and construction issues early, we help clients ensure long-term safety and structural reliability of their property.",

      image:
        material
    }
  };

  return (
    <section className="features-section">
      <div className="features-container">

        {/* Left Side */}
        <div className="features-image-wrapper">
          <div className="main-feature-img">
            <img
              key={activeTab}
              src={featureContent[activeTab].image}
              alt="Inspection Feature"
              className="feature-image"
            />

            <div className="decorative-stripes"></div>
          </div>
        </div>

        {/* Right Side */}
        <div className="features-content">
          <span className="section-tag">/ features /</span>

          <h2 className="features-main-title">
            Advanced Inspection Technology with Reliable Quality Standards
          </h2>

          {/* Tabs */}
          <div className="features-tabs">

            <button
              className={`tab-btn ${activeTab === 'modern' ? 'active' : ''}`}
              onClick={() => setActiveTab('modern')}
            >
              Modern Equipment
            </button>

            <button
              className={`tab-btn ${activeTab === 'quality' ? 'active' : ''}`}
              onClick={() => setActiveTab('quality')}
            >
              Inspection Quality
            </button>

            <button
              className={`tab-btn ${activeTab === 'materials' ? 'active' : ''}`}
              onClick={() => setActiveTab('materials')}
            >
              Material Evaluation
            </button>

          </div>

          <div className="tab-divider"></div>

          {/* Content */}
          <div className="features-description">
            <p>{featureContent[activeTab].text}</p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default OurFeatures;