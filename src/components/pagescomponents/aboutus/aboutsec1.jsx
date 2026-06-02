import React from "react";
import "../../../style/aboutsec1.css";
import WhyChooseUs from "./homewhyussec5";

const AboutInspection = () => {
    return (
       <div className="page-wrapper">
      {/* <Navbar /> */}
      
      <main>
        {/* Hero Section */}
        <section className="contact-hero">
          <div className="overlay"></div>
          
          <div className="hero-content">
            <h1 className="hero-title">About Us</h1>
          </div>

          {/* Bottom Bar */}
          <div className="hero-bottom-bar">
            {/* <div className="breadcrumb-box">
              <span className="breadcrumb-link">Home</span>
              <span className="dot">.</span>
              <span className="breadcrumb-current">About</span>
            </div> */}
            
            <div className="stripes-container">
              <div className="stripe"></div>
              <div className="stripe"></div>
              <div className="stripe"></div>
              <div className="stripe"></div>
            </div>
          </div>
        </section>

        {/* Content Sections */}
        {/* <div className="services-content-flow"> */}
          {/* <Services />
          <ServicesSection />
          <ProcessSection />
          <OurFeatures /> */}
          {/* <WhyChooseUs />
        </div> */}
      </main>

      {/* <Footer /> */}
    </div>
  );
};

export default AboutInspection;