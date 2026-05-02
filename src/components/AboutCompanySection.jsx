import React from 'react';
import "../style/AboutCompanySection.css";

const AboutCompanySection = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        
        {/* Left Side: Company Info */}
        <div className="about-info">
          <span className="section-tag">/ about company /</span>
          <h2 className="about-title">Building dreams, delivering and excellence</h2>
          
          <div className="about-text">
            <p>
              Welcome to Constructum, where we bring visions to life and construct legacies. 
              Our comprehensive construction services encompass every aspect of your project, 
              from groundbreaking to the finishing touch.
            </p>
            <p>
              Whether you're dreaming of a new home, commercial space, or a renovation, 
              our skilled team is dedicated to delivering excellence at every step. 
              With a commitment to quality craftsmanship, precision engineering, and timely delivery.
            </p>
          </div>
          
          <a href="#" className="about-more-link">
            MORE ABOUT <span className="arrow">↗</span>
          </a>
        </div>

        {/* Right Side: Objectives & Purpose */}
        <div className="about-objectives">
          <div className="objectives-content">
            <h3 className="objectives-title">Objectives & purpose</h3>
            
            <div className="objectives-text">
              <p>
                Our mission is to deliver exceptional construction solutions with 
                unwavering commitment to quality, innovation, and client satisfaction.
              </p>
              <p>
                We envision transforming visions into reality, creating enduring structures 
                that stand as testaments to our dedication and expertise. Through collaborative 
                partnerships and a focus on sustainability, we strive to leave a positive 
                impact on the communities we serve. At the heart of our mission is a passion 
                for building a better, more resilient future, one project at a time.
              </p>
            </div>
          </div>

          {/* Decorative Grid Pattern (Bottom Left of dark area) */}
          <div className="grid-pattern"></div>

          {/* Large Background Text */}
          <div className="since-text">
            We've built <br />
            <span>since the 80's.</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutCompanySection;