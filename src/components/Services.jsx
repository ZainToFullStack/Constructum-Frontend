import React from 'react';
import "../style/Services.css";

const Services = () => {
  const serviceData = [
    {
      icon: "fa-solid fa-building", // Building icon
      title: "Modern renovation",
      desc: "Transform your space with our expert renovation services."
    },
    {
      icon: "fa-solid fa-faucet-drip", // Crane/Construction vibe icon
      title: "Construction",
      desc: "Majestic skyscraper rises, a testament to architectural prowess."
    },
    {
      icon: "fa-solid fa-vest", // Safety vest icon
      title: "Professional team",
      desc: "Our team of dedicated professionals brings expertise."
    },
    {
      icon: "fa-solid fa-map-location-dot", // Blueprint icon
      title: "Projection",
      desc: "From concept to completion, we breathe new life into your."
    }
  ];

  return (
    <section className="services-section">
      <div className="services-wrapper">
        
        <div className="services-top">
          <div className="title-area">
            <span className="breadcrumb">/ services /</span>
            <h1 className="main-heading">
              Comprehensive <br /> 
              construction solutions <br />
              for your vision today
            </h1>
          </div>
          <div className="link-area">
            <a href="#" className="more-link">MORE SERVICES <span className="arrow">↗</span></a>
          </div>
        </div>

        <div className="services-grid">
          {serviceData.map((item, index) => (
          <div className="service-item" key={index}>
  <div className="icon-box">
    <i className={item.icon}></i>
  </div>
  
  <h3 className="service-title">{item.title}</h3>

  {/* Underline yahan honi chahiye Title aur Description ke darmiyan */}
  <div className="item-divider"></div>
  
  <p className="service-desc">{item.desc}</p>
</div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;