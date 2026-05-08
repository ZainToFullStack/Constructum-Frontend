import React, { useEffect, useRef, useState } from "react";
import "../../../style/homecountsec3.css";

// Helper function for counting animation with easing
const animateCounter = (target, setValue, duration = 2000) => {
  let start = 0;
  const startTime = Date.now();
  
  const updateCounter = () => {
    const elapsed = Date.now() - startTime;
    const progress = Math.min(elapsed / duration, 1);
    
    // Easing function for smoother animation
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = Math.floor(eased * target);
    
    setValue(current);
    
    if (progress < 1) {
      requestAnimationFrame(updateCounter);
    }
  };
  
  requestAnimationFrame(updateCounter);
};

const HouseSection = () => {
  // Counter states
  const [clients, setClients] = useState(0);
  const [projects, setProjects] = useState(0);
  const [reports, setReports] = useState(0);
  const [experience, setExperience] = useState(0);

  // Toggle state for accordion
  const [openAccordion, setOpenAccordion] = useState(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  const statsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            animateCounter(88000, setClients);
            animateCounter(96, setProjects);
            animateCounter(123000, setReports);
            animateCounter(24, setExperience);
            setHasAnimated(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.3, rootMargin: "0px 0px -50px 0px" }
    );

    if (statsRef.current) observer.observe(statsRef.current);

    return () => {
      if (statsRef.current) observer.unobserve(statsRef.current);
    };
  }, [hasAnimated]);

  // Toggle accordion helper
  const handleAccordionToggle = (index) => {
    setOpenAccordion((prev) => (prev === index ? null : index));
  };

  return (
    <section className="house-section">
      <div className="house-section__wrapper">
        <div className="house-section__container">
          <div className="house-section__content">
            <div className="house-section__header">
              <span className="house-section__badge">OUR EXPERTISE</span>
              <h2 className="house-section__title">
                Trust Your Home to Our Skilled Inspectors
              </h2>
              <div className="house-section__divider"></div>
            </div>

            <p className="house-section__description">
              We inspect homes thoroughly from foundation to finish. Our experts
              ensure every corner meets quality and safety standards, providing
              peace of mind for buyers and homeowners alike.
            </p>

            {/* Services List */}
            <div className="house-section__list-grid">
              <ul className="house-section__list">
                {/* Accordion Item */}
                <li
                  className="house-section__accordion"
                  onClick={() => handleAccordionToggle(0)}
                >
                  <div className="house-section__accordion-header">
                    <div className="house-section__accordion-left">
                      <span className="house-section__icon">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </span>
                      <span>Grey Structure</span>
                    </div>
                    <span
                      className={`house-section__chevron ${openAccordion === 0 ? "house-section__chevron--open" : ""}`}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </span>
                  </div>

                  {openAccordion === 0 && (
                    <div className="house-section__details">
                      <div className="house-section__details-grid">
                        <div className="house-section__details-column">
                          <span className="house-section__details-item">Foundation</span>
                          <span className="house-section__details-item">Columns</span>
                          <span className="house-section__details-item">Beams</span>
                          <span className="house-section__details-item">Slab</span>
                        </div>
                        <div className="house-section__details-column">
                          <span className="house-section__details-item">Stairs</span>
                          <span className="house-section__details-item">Brick Works</span>
                          <span className="house-section__details-item">Door & Window Frames</span>
                        </div>
                      </div>
                    </div>
                  )}
                </li>

                {/* Static Items */}
                <li className="house-section__list-item">
                  <span className="house-section__icon">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </span>
                  <span>Plumbing Inspection</span>
                </li>
                <li className="house-section__list-item">
                  <span className="house-section__icon">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </span>
                  <span>Electrical Inspection</span>
                </li>
                <li className="house-section__list-item">
                  <span className="house-section__icon">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </span>
                  <span>Solar System Inspection</span>
                </li>
                <li className="house-section__list-item">
                  <span className="house-section__icon">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </span>
                  <span>Roof & Boundary Wall Quality</span>
                </li>
                <li className="house-section__list-item">
                  <span className="house-section__icon">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </span>
                  <span>Flooring & Finishes</span>
                </li>
              </ul>

              <ul className="house-section__list">
                <li className="house-section__list-item">
                  <span className="house-section__icon">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </span>
                  <span>HVAC & Ventilation Checks</span>
                </li>
                <li className="house-section__list-item">
                  <span className="house-section__icon">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </span>
                  <span>Safety & Compliance Reports</span>
                </li>
                <li className="house-section__list-item">
                  <span className="house-section__icon">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </span>
                  <span>Detailed Digital Report</span>
                </li>
                <li className="house-section__list-item">
                  <span className="house-section__icon">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </span>
                  <span>Recommendations for Buyers</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="house-section__stats" ref={statsRef}>
          <div className="house-section__stats-wrapper">
            <div className="house-section__stat-card">
              <div className="house-section__stat-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <div className="house-section__stat-number">
                {clients.toLocaleString()}+
              </div>
              <div className="house-section__stat-label">Happy Clients</div>
            </div>

            <div className="house-section__stat-card">
              <div className="house-section__stat-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </div>
              <div className="house-section__stat-number">{projects}%</div>
              <div className="house-section__stat-label">Completed Projects</div>
            </div>

            <div className="house-section__stat-card">
              <div className="house-section__stat-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
              </div>
              <div className="house-section__stat-number">
                {reports.toLocaleString()}+
              </div>
              <div className="house-section__stat-label">Reports Generated</div>
            </div>

            <div className="house-section__stat-card">
              <div className="house-section__stat-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
              </div>
              <div className="house-section__stat-number">{experience}+ </div>
              <div className="house-section__stat-label">Years of Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HouseSection;