import React from 'react';

const ProfessionalMarquee = () => {
const keyframes = `
    @keyframes scrollMarquee {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
    
    /* Responsive Adjustments using CSS rules for cleaner control */
    @media (max-width: 1024px) {
      .marquee-text { font-size: 80px !important; }
      .marquee-wrapper { padding: 30px 0 !important; }
    }
    
    @media (max-width: 768px) {
      .marquee-text { font-size: 50px !important; padding-right: 40px !important; }
      .marquee-wrapper { padding: 20px 0 !important; }
    }
    
    @media (max-width: 480px) {
      .marquee-text { font-size: 35px !important; padding-right: 30px !important; }
    }
  `;

  const wrapperStyle = {
    width: '100vw',
    maxWidth: '100%',
    overflow: 'hidden',
    // Background transparent se white kar diya gaya hai
    background: '#ffffff', 
    padding: '40px 0',
    whiteSpace: 'nowrap',
    display: 'flex',
    boxSizing: 'border-box'
  };

  const contentStyle = {
    display: 'flex',
    animation: 'scrollMarquee 10s linear infinite', 
    minWidth: '200%'
  };

  const textStyle = {
    fontFamily: '"DM Mono", sans-serif',
    fontSize: '120px',
    fontWeight: '400',
    letterSpacing: '-0.03em',
    color: '#AA925E',
    opacity: '1',
    paddingRight: '60px',
    textTransform: 'uppercase'
  };

  

  const textContent = "Building dreams / crafting futures ";

  return (
    <>
      <style>{keyframes}</style>
      <div style={wrapperStyle}>
        <div style={contentStyle}>
          <span style={textStyle}>{textContent}</span>
          <span style={textStyle}>{textContent}</span>
          <span style={textStyle}>{textContent}</span>
        </div>
      </div>
    </>
  );
};

export default ProfessionalMarquee;