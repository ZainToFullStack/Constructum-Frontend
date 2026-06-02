import React from "react"; 
import "../style/AboutCompanySection.css";

const AboutCompanySection = () => {
  return (
    <section className="about-section">

      <div className="about-container">

        {/* LEFT SIDE */}
        <div className="about-left">

          <div className="about-content">

            <span className="section-tag">
              / about company /
            </span>

            <h2 className="about-title">
              Trusted Experts in Building Inspection Services
            </h2>

            <div className="about-text">

              <p>
                Welcome to Prime Assessment Services and Solutions, a professional building inspection company dedicated to helping clients make safe and informed property decisions. We specialize in comprehensive inspections from foundation to final finish.
              </p>

              <p>
                Our expert team evaluates structural integrity, plumbing, electrical systems, roofing, and finishing quality using advanced inspection methods. We ensure every property meets safety, durability, and quality standards before any investment decision is made.
              </p>

            </div>

          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="about-right">

          <div className="objective-content">

            <h3 className="objectives-title">
              Our Purpose & Commitment
            </h3>

            <div className="objectives-text">

              <p>
                Our mission is to deliver accurate, transparent, and reliable inspection services that help clients identify risks and ensure complete property safety and quality.
              </p>

              <p>
                We aim to support homeowners, buyers, and investors with detailed inspection reports and professional assessments. Through precision, integrity, and modern inspection techniques, we ensure confidence in every property decision.
              </p>

            </div>

          </div>

          <div className="grid-pattern"></div>

        </div>

      </div>

    </section>
  );
};

export default AboutCompanySection;