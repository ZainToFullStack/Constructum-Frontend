import React from 'react';
import "../../../style/Services.css";

const serviceData = [
  {
    icon: "fa-solid fa-building",
    title: "Modern Renovation",
    desc: "Transform your space with our expert renovation services, tailored to your vision."
  },
  {
    icon: "fa-solid fa-helmet-safety",
    title: "Construction",
    desc: "Majestic structures rise — a testament to architectural prowess and precision."
  },
  {
    icon: "fa-solid fa-users",
    title: "Professional Team",
    desc: "Our dedicated professionals bring expertise and craftsmanship to every project."
  },
  {
    icon: "fa-solid fa-map-location-dot",
    title: "Projection",
    desc: "From concept to completion, we breathe new life into your boldest ideas."
  }
];

const Services = () => {
  return (
    <section className="services-section">
      <div className="services-wrapper">

        {/* ── Header Row ── */}
        <div className="services-top">
          <div className="title-area">
            <span className="breadcrumb">services</span>
            <h1 className="main-heading">
              Comprehensive <br />
              construction solutions <br />
              for your vision today
            </h1>
          </div>

          <div className="link-area">
            <a href="#" className="more-link">
              More Services
              <span className="arrow">↗</span>
            </a>
          </div>
        </div>

        {/* ── Services Grid ── */}
        <div className="services-grid">
          {serviceData.map((item, index) => (
            <div className="service-item" key={index}>

              {/* Index number */}
              <span className="item-number">0{index + 1}</span>

              {/* Icon */}
              <div className="icon-box">
                <i className={item.icon}></i>
              </div>

              {/* Title */}
              <h3 className="service-title">{item.title}</h3>

              {/* Divider */}
              <div className="item-divider" />

              {/* Description */}
              <p className="service-desc">{item.desc}</p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;