import React from "react";
import "../../../style/ProcessSection.css";

const ProcessSection = () => {
  return (
    <section className="process">
      
      {/* Top Text */}
      <p className="process-subtitle">/ how we work /</p>

      {/* Heading */}
      <h1 className="process-heading">
        Outlining the collaborative <br />
        process to achieve your <br />
        business goals together
      </h1>

      {/* Steps */}
      <div className="process-container">

        {/* Step 1 */}
        <div className="process-card">
          <h2 className="step-number">/01</h2>
          <span className="step-label">step</span>

          <h3 className="step-title">
            Preparation <br /> of project documents
          </h3>

          <p className="step-desc">
            Allan wrasse climbing gourami amur pike Arctic char, steelhead sprat sea lamprey grunion.
          </p>
        </div>

        {/* Divider */}
        <div className="divider"></div>

        {/* Step 2 */}
        <div className="process-card">
          <h2 className="step-number">/02</h2>
          <span className="step-label">step</span>

          <h3 className="step-title">
            Creation of a project <br /> with a team on time
          </h3>

          <p className="step-desc">
            Arctic char, steelhead sprat sea lamprey grunion. Walleye poolfish sand goby butterfly ray stream catfish jewfish.
          </p>
        </div>

        {/* Divider */}
        <div className="divider"></div>

        {/* Step 3 */}
        <div className="process-card">
          <h2 className="step-number">/03</h2>
          <span className="step-label">step</span>

          <h3 className="step-title">
            Completion of the <br /> project and payment
          </h3>

          <p className="step-desc">
            Sprat sea lamprey grunion. Walleye poolfish sand goby butterfly ray stream catfish jewfish.
          </p>
        </div>

      </div>
    </section>
  );
};

export default ProcessSection;