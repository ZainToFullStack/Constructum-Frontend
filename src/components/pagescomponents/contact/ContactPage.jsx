import React from 'react';
import "../../../style/ContactPage.css";
import Footer from '../../headrandfooter/Footer';

// Import your components
// import Navbar from "../../headrandfooter/Navbar";
// import Footer from "../../headrandfooter/Footer";

const ContactPage = () => {
  return (
    <div className="page-wrapper">
      {/* <Navbar /> */}
      <main>
        {/* ── Hero Section ── */}
        <section className="contact-hero" aria-label="Contact page hero">

          {/* Overlay */}
          <div className="overlay" aria-hidden="true" />

          {/* Hero Text */}
          <div className="hero-content">
            {/* <span className="est-text">est. 1956</span> */}
            <h1 className="hero-title">CONTACTS</h1>
          </div>

          {/* Bottom Bar: Breadcrumb + Diagonal Stripes */}
          <div className="hero-bottom-bar" aria-hidden="true">

            {/* <div className="breadcrumb-box">
            <span className="breadcrumb-link">Home</span>
            <span className="dot">·</span>
            <span className="breadcrumb-current">Contacts</span>
          </div> */}

            <div className="stripes-container">
              <div className="stripe" />
              <div className="stripe" />
              <div className="stripe" />
              <div className="stripe" />
            </div>

          </div>
        </section>

        {/* ── Main Content ── */}
        {/* <main className="content-placeholder"> */}
        {/* Drop your contact form / info cards here */}
        {/* </main> */}
        {/* 
      <Footer /> */}

        {/* <div className="services-content-flow">
          <Footer />
        </div> */}
      </main>
    </div>
  );
};

export default ContactPage;