import React from 'react';
import "../../../style/ServicePage.css";
import Navbar from "../../../components/headrandfooter/Footer";
import Footer from "../../../components/headrandfooter/Footer";
import Services from './Services';
import ServicesSection from './ServicesSection';
import ProcessSection from './ProcessSection';
import OurFeatures from './OurFeatures';

const ServicesPage = () => {
  return (
    <div className="page-wrapper">
      {/* <Navbar /> */}
      
      <main>
        {/* Hero Section */}
        <section className="contact-hero">
          <div className="overlay"></div>
          
          <div className="hero-content">
            <h1 className="hero-title">Services</h1>
          </div>

          {/* Bottom Bar */}
          <div className="hero-bottom-bar">
            <div className="breadcrumb-box">
              <span className="breadcrumb-link">Home</span>
              <span className="dot">.</span>
              <span className="breadcrumb-current">Services</span>
            </div>
            
            <div className="stripes-container">
              <div className="stripe"></div>
              <div className="stripe"></div>
              <div className="stripe"></div>
              <div className="stripe"></div>
            </div>
          </div>
        </section>

        {/* Content Sections */}
        <div className="services-content-flow">
          {/* <Services />
          <ServicesSection />
          <ProcessSection />
          <OurFeatures /> */}
        </div>
      </main>

      {/* <Footer /> */}
    </div>
  );
};

export default ServicesPage;