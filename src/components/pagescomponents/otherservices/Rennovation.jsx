import React from 'react';
import "../../../style/Rennovation.css";

// Aapke components ka import tarika
import Navbar from "../../headrandfooter/Navbar";
import Footer from "../../headrandfooter/Footer";
import RenovationDetails from './RennovationDetails';

const Rennovation = () => {
  return (
    <div className="page-wrapper">
      {/* <Navbar /> */}

      {/* Hero Section */}
      <section className="contact-hero">
        <div className="overlay"></div>
        
        <div className="hero-content">
          {/* <span className="est-text">est. 1956</span> */}
          <h1 className="hero-title">REPAIRING TO RENNOVATION</h1>
        </div>

        {/* Bottom Bar with Breadcrumbs and Stripes */}
        <div className="hero-bottom-bar">
          <div className="breadcrumb-box">
            <span className="breadcrumb-link">Home</span>
            <span className="dot">.</span>
            <span className="breadcrumb-current">Contacts</span>
            <span className="dot">.</span>
            <span className="breadcrumb-current">Preparing to rennovation</span>
          </div>
          
          <div className="stripes-container">
            <div className="stripe"></div>
            <div className="stripe"></div>
            <div className="stripe"></div>
            <div className="stripe"></div>
          </div>
        </div>
      </section>

      {/* Content Area */}
      <div className="content-placeholder">
        {/* Main content goes here */}
      </div>
      {/* <RenovationDetails /> */}
      {/* <Footer /> */}
    </div>
  );
};

export default Rennovation;