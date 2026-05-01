import React from 'react';

const ProfessionalMarquee = () => {
  const keyframes = `
    @keyframes scrollMarquee {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
  `;

  const wrapperStyle = {
    width: '100vw',
    maxWidth: '100%',
    overflow: 'hidden',
    background: 'transparent',
    padding: '40px 0',
    whiteSpace: 'nowrap',
    display: 'flex',
    boxSizing: 'border-box'
  };

  const contentStyle = {
    display: 'flex',
    // Yahan 30s ko 10s kar diya hai speed badhane ke liye
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
          {/* Loop ko mazeed smooth karne ke liye 3rd span (Optional) */}
          <span style={textStyle}>{textContent}</span>
        </div>
      </div>
    </>
  );
};

export default ProfessionalMarquee;