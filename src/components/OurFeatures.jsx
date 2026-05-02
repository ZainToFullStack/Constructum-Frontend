import React, { useState } from 'react';
import "../style/OurFeatures.css";

const OurFeatures = () => {
  const [activeTab, setActiveTab] = useState('modern');

  const featureContent = {
    modern: "Arctic char, steelhead sprat sea lamprey grunion. Walleye poolfish sand goby butterfly ray stream catfish jewfish. Allan wrasse climbing gourami amur pike. Does no one know that dolphins and whales are mammals and not fish? Please see the above and replace the word.",
    quality: "Spanish mackerel yellow weaver sixgill. Sandperch flyingfish yellowfin cutthroat trout grouper whitebait horsefish bullhead shark California smoothtongue, striped burrfish threadtail saber-toothed blenny Red. Our commitment to work quality is unmatched.",
    materials: "High quality materials are the backbone of every legacy we build. We source only the best industry-standard components to ensure durability, safety, and a premium finish for every project."
  };

  return (
    <section className="features-section">
      <div className="features-container">
        
        {/* Left Side: Image with Decorative Stripes */}
        <div className="features-image-wrapper">
          <div className="main-feature-img">
            <img 
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1000&auto=format&fit=crop" 
              alt="Engineer" 
            />
            {/* White Decorative Stripes like the picture */}
            <div className="decorative-stripes"></div>
          </div>
        </div>

        {/* Right Side: Content & Tabs */}
        <div className="features-content">
          <span className="section-tag">/ features /</span>
          <h2 className="features-main-title">
            The advantages of our <br /> company are in the <br /> quality of products
          </h2>

          {/* Tabs Navigation */}
          <div className="features-tabs">
            <button 
              className={`tab-btn ${activeTab === 'modern' ? 'active' : ''}`}
              onClick={() => setActiveTab('modern')}
            >
              <i className="fa-solid fa-tractor"></i> Modern equipment
            </button>
            <button 
              className={`tab-btn ${activeTab === 'quality' ? 'active' : ''}`}
              onClick={() => setActiveTab('quality')}
            >
              <i className="fa-solid fa-microscope"></i> Quality of work
            </button>
            <button 
              className={`tab-btn ${activeTab === 'materials' ? 'active' : ''}`}
              onClick={() => setActiveTab('materials')}
            >
              <i className="fa-solid fa-fan"></i> High quality materials
            </button>
          </div>

          <div className="tab-divider"></div>

          {/* Dynamic Content */}
          <div className="features-description">
            <p>{featureContent[activeTab]}</p>
            <p>
              Spanish mackerel yellow weaver sixgill. Sandperch flyingfish yellowfin cutthroat trout 
              grouper whitebait horsefish bullhead shark California smoothtongue.
            </p>
          </div>

          <a href="#" className="explore-link">
            EXPLORE MORE <span className="arrow">↗</span>
          </a>
        </div>

      </div>
    </section>
  );
};

export default OurFeatures;