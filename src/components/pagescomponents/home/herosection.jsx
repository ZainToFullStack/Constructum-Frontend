import React, { useState, useEffect, useRef } from 'react';
import "../../../style/HeroSection.css";
import transform from "../../../assets/wmremove-transformed.webp";

const slides = [
  {
    id: 1,
    bg: "https://static.vecteezy.com/system/resources/previews/052/518/748/non_2x/a-modern-apartment-building-with-an-arched-entrance-and-multiple-balconies-photo.jpeg",
    eyebrow: "Your Trusted Inspection Partner",
    eyebrowCenter: false,
    position: "pos-left",
    title: "Complete Building Inspections From Foundation to Finish",
    desc: "We provide accurate and reliable property inspections, ensuring full structural safety, quality assurance, and transparent reporting for confident decisions.",
  },
  {
    id: 2,
    bg: transform,
    eyebrow: "Advanced Building Evaluation Services",
    eyebrowCenter: true,
    position: "pos-center",
    title: "Trusted Experts in Structural Assessment",
    desc: "Using modern inspection tools and professional expertise, we identify hidden defects, risks, and construction issues with precision and detailed reporting.",
  },
];

const stats = [
  { number: "280", suffix: "+", label: "Projects Done" },
  { number: "15", suffix: "yr", label: "Experience" },
  { number: "98", suffix: "%", label: "Satisfaction" },
];

const HeroSection = () => {
  const [current, setCurrent] = useState(1);
  const timerRef = useRef(null);

  const goToSlide = (n) => {
    if (n === current) return;
    setCurrent(n);
    resetTimer();
  };

  const resetTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrent(prev => (prev === 1 ? 2 : 1));
    }, 10000);
  };

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setCurrent(prev => (prev === 1 ? 2 : 1));
    }, 10000);
    return () => clearInterval(timerRef.current);
  }, []);

  return (
    <div className="hero-wrap">

      <div className="top-accent" />

      {slides.map(slide => (
        <div
          key={slide.id}
          className={`hero-bg ${current === slide.id ? 'active' : 'inactive'}`}
          style={{ backgroundImage: `url(${slide.bg})` }}
        />
      ))}

      <div className="hero-overlay" />
      <div className="hero-overlay-2" />

      {slides.map(slide => (
        <div
          key={slide.id}
          className={`slide-panel ${slide.position} ${current === slide.id ? 'active' : 'inactive'}`}
        >
          <div className="eyebrow" style={slide.eyebrowCenter ? { justifyContent: 'center' } : {}}>
            <div className="eyebrow-line" />
            <span className="eyebrow-text">{slide.eyebrow}</span>
            {slide.eyebrowCenter && <div className="eyebrow-line" />}
          </div>

          <h1 className="hero-title">{slide.title}</h1>

          <div
            className="divider-wrap"
            style={slide.eyebrowCenter ? { justifyContent: 'center' } : {}}
          >
            <div className="divider-bar" />
            <div className="divider-diamond" />
            <div className="divider-bar-short" />
          </div>

          <p
            className="hero-sub"
            style={slide.eyebrowCenter
              ? { textAlign: 'center', marginLeft: 'auto', marginRight: 'auto' }
              : {}}
          >
            {slide.desc}
          </p>

          <div
            className="cta-row"
            style={slide.eyebrowCenter ? { justifyContent: 'center' } : {}}
          >
            <button className="discover-btn">
              Discover
              <span className="btn-arrow">↗</span>
            </button>
            {/* <button className="learn-more-btn">Our Projects</button> */}
          </div>
        </div>
      ))}

      <div className="side-indicator">
        <div className="side-line" />
        <span className="side-text">
          Slide 0{current}
        </span>
        <div className="side-line" />
      </div>

      <div className="bottom-bar">

        <div className="stat-cards">
          {stats.map((stat, i) => (
            <div className="stat-card" key={i}>
              <div className="stat-number">
                {stat.number}<span>{stat.suffix}</span>
              </div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="nav-controls">
          <span className="slide-counter">
            <strong>0{current}</strong> / 0{slides.length}
          </span>
          <div className="progress-track">
            <div
              className="progress-fill"
              style={{ width: current === 1 ? '50%' : '100%' }}
            />
          </div>
          <div className="nav-dots">
            {slides.map(slide => (
              <button
                key={slide.id}
                className={`dot ${current === slide.id ? 'active' : ''}`}
                onClick={() => goToSlide(slide.id)}
                aria-label={`Slide ${slide.id}`}
              />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default HeroSection;