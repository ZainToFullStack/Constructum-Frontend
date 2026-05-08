import React, { useState, useEffect, useRef } from 'react';
import "../../../style/HeroSection.css";

const slides = [
  {
    id: 1,
    bg: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop",
    eyebrow: "Premium Construction & Design",
    eyebrowCenter: false,
    position: "pos-left",
    title: "Transformative Renovations Tailored To Your Unique Style",

    // (
    //   <>
    //     {/* <span className="gold">Transformative</span><br />
    //     <span className="gold">Renovations</span><br />
    //     <span className="white">Tailored To Your</span><br />
    //     <span className="white">Unique Style</span> */}
    //   </>
    // )
    desc: "With a commitment to quality craftsmanship, precision engineering, and timely delivery.",
  },
  {
    id: 2,
    bg: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1931&auto=format&fit=crop",
    eyebrow: "Excellence in Every Detail",
    eyebrowCenter: true,
    position: "pos-center",
    title: "Transformative Renovations Tailored To Your Unique Comfort",
    desc: "With a commitment to quality craftsmanship, precision engineering, and timely delivery. We build landmarks.",
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
    }, 5000);
  };

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setCurrent(prev => (prev === 1 ? 2 : 1));
    }, 5000);
    return () => clearInterval(timerRef.current);
  }, []);

  const activeSlide = slides.find(s => s.id === current);

  return (
    <div className="hero-wrap">

      {/* Top gold accent */}
      <div className="top-accent" />

      {/* Background layers */}
      {slides.map(slide => (
        <div
          key={slide.id}
          className={`hero-bg ${current === slide.id ? 'active' : 'inactive'}`}
          style={{ backgroundImage: `url(${slide.bg})` }}
        />
      ))}

      {/* Overlays */}
      <div className="hero-overlay" />
      <div className="hero-overlay-2" />

      {/* Slide panels */}
      {slides.map(slide => (
        <div
          key={slide.id}
          className={`slide-panel ${slide.position} ${current === slide.id ? 'active' : 'inactive'}`}
        >
          {/* Eyebrow */}
          <div className="eyebrow" style={slide.eyebrowCenter ? { justifyContent: 'center' } : {}}>
            <div className="eyebrow-line" />
            <span className="eyebrow-text">{slide.eyebrow}</span>
            {slide.eyebrowCenter && <div className="eyebrow-line" />}
          </div>

          {/* Title */}
          <h1 className="hero-title">{slide.title}</h1>

          {/* Divider */}
          <div
            className="divider-wrap"
            style={slide.eyebrowCenter ? { justifyContent: 'center' } : {}}
          >
            <div className="divider-bar" />
            <div className="divider-diamond" />
            <div className="divider-bar-short" />
          </div>

          {/* Subtitle */}
          <p
            className="hero-sub"
            style={slide.eyebrowCenter
              ? { textAlign: 'center', marginLeft: 'auto', marginRight: 'auto' }
              : {}}
          >
            {slide.desc}
          </p>

          {/* CTA */}
          <div
            className="cta-row"
            style={slide.eyebrowCenter ? { justifyContent: 'center' } : {}}
          >
            <button className="discover-btn">
              Discover
              <span className="btn-arrow">↗</span>
            </button>
            <button className="learn-more-btn">Our Projects</button>
          </div>
        </div>
      ))}

      {/* Side indicator */}
      <div className="side-indicator">
        <div className="side-line" />
        <span className="side-text">
          Slide 0{current}
        </span>
        <div className="side-line" />
      </div>

      {/* Bottom bar */}
      <div className="bottom-bar">

        {/* Stat cards */}
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

        {/* Nav controls */}
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