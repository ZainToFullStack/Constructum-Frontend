// import React from 'react';
// import { Twitter, Facebook, Linkedin, Instagram, ArrowUpRight, ArrowUp } from 'lucide-react';
// import "../style/footer.css"; // Normal import sahi hai

// const Footer = () => {
//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   };

//   return (
//     // Har jagah se 'styles.' hata dein aur classes ko quotes "" mein likhein
//     <footer className="footer">
//       <div className="footerTop">
//         <h1 className="headline">
//           We stand prepared to assist <br /> 
//           you and address any <br /> 
//           inquiries you may have
//         </h1>
//         <a href="#" className="contactLink">
//           CONTACTS US <ArrowUpRight size={20} />
//         </a>
//       </div>

//       <hr className="divider" />

//       <div className="footerGrid">
//         <div className="brandCol">
//           <h2 className="logo">Constructum</h2>
//           <h3 className="sinceText">since the 80's</h3>
//           <p className="copyright">2025 Constructum. All Rights reserved by Artureanec</p>
//         </div>

//         <div className="column">
//           <h4>New York</h4>
//           <p className="address">
//             523 Sylvan Ave, 5th Floor<br />
//             Mountain View, CA 94041 USA
//           </p>
//           <div className="socialContainer">
//             <p className="smallLabel">Follow us</p>
//             <div className="socialPill">
//               <div className="iconActive"><Twitter size={14} /></div>
//               <Facebook size={16} className="icon" />
//               <Linkedin size={16} className="icon" />
//               <Instagram size={16} className="icon" />
//             </div>
//           </div>
//         </div>

//         {/* ... baaki sab columns mein bhi 'styles.' hata kar quotes laga dein ... */}
        
//         <div className="column">
//           <h4>Phone</h4>
//           <p className="infoText">+1 234 719 8948<br />+1 987 654 3210</p>
//           <div className="emailSection">
//             <h4>Email</h4>
//             <p className="smallLabel">Interested in working with us?</p>
//             <a href="mailto:support@constructum.co" className="emailLink">support@constructum.co</a>
//           </div>
//         </div>

//         <div className="column">
//           <h4>Main menu</h4>
//           <ul className="navList">
//             <li><a href="#" className="activeLink">/ Home /</a></li>
//             <li><a href="#">About Us</a></li>
//             <li><a href="#">Services</a></li>
//             <li><a href="#">Our Projects</a></li>
//             <li><a href="#">Products</a></li>
//           </ul>
//         </div>

//         <div className="column">
//           <ul className="navList">
//             <li><a href="#">Career</a></li>
//             <li><a href="#">Team</a></li>
//             <li><a href="#">Blog</a></li>
//             <li><a href="#">Contacts</a></li>
//           </ul>
//         </div>
//       </div>

//       <button onClick={scrollToTop} className="scrollTopBtn">
//         <ArrowUp size={24} />
//       </button>
//     </footer>
//   );
// };

// export default Footer;

import React from "react";

// Inline Icons (no lucide-react needed)
const Twitter = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M22 5.8c-.7.3-1.5.6-2.3.7.8-.5 1.4-1.2 1.7-2.1-.8.5-1.6.8-2.5 1-1.5-1.6-4-.8-4.6 1.3-.3.7-.3 1.5 0 2.2-3.3-.2-6.2-1.7-8.1-4.3-1.1 1.9-.6 4.3 1.2 5.5-.6 0-1.2-.2-1.7-.5 0 2.1 1.5 3.9 3.6 4.3-.5.1-1 .2-1.5.1.4 1.8 2 3.1 3.9 3.2-1.8 1.4-4 2-6.2 1.7 2 1.3 4.3 2 6.7 2 8 0 12.4-6.6 12.4-12.3v-.6c.8-.5 1.5-1.2 2-2z"/>
  </svg>
);

const Facebook = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M22 12a10 10 0 1 0-11.6 9.9v-7h-2.1V12h2.1V9.8c0-2.1 1.3-3.3 3.2-3.3.9 0 1.8.1 1.8.1v2h-1c-1 0-1.3.6-1.3 1.2V12h2.3l-.4 2.9h-1.9v7A10 10 0 0 0 22 12z"/>
  </svg>
);

const Linkedin = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.4 20.4h-3.6v-5.6c0-1.3 0-3-1.9-3s-2.2 1.5-2.2 2.9v5.7H9.1V9h3.4v1.6h.1c.5-.9 1.7-1.9 3.5-1.9 3.7 0 4.4 2.4 4.4 5.5v6.2zM5.3 7.4a2.1 2.1 0 1 1 0-4.2 2.1 2.1 0 0 1 0 4.2zM3.5 20.4h3.6V9H3.5v11.4z"/>
  </svg>
);

const Instagram = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm6-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
  </svg>
);

const ArrowUp = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 19V5M5 12l7-7 7 7"/>
  </svg>
);

const ArrowUpRight = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M7 17L17 7M7 7h10v10"/>
  </svg>
);

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <style>{`
        .footer {
          background: #121212;
          color: #fff;
          padding: 80px 8% 40px;
          font-family: sans-serif;
          position: relative;
        }

        .footerTop {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-bottom: 40px;
        }

        .headline {
          font-size: clamp(2rem, 5vw, 3.5rem);
          font-weight: 500;
          line-height: 1.1;
          margin: 0;
        }

        .contactLink {
          color: #e35e4a;
          text-decoration: none;
          font-weight: bold;
          border-bottom: 1px solid #e35e4a;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .footerGrid {
          display: grid;
          grid-template-columns: 1.5fr 1fr 1fr 1fr 0.8fr;
          gap: 40px;
        }

        .sinceText {
          font-size: 3rem;
          font-weight: 900;
          font-style: italic;
          color: transparent;
          -webkit-text-stroke: 1px #e35e4a;
        }

        .address, .infoText, .navList li a {
          color: #aaa;
          font-size: 0.9rem;
          text-decoration: none;
        }

        .socialPill {
          display: flex;
          gap: 12px;
          border: 1px solid #333;
          padding: 8px 15px;
          border-radius: 50px;
        }

               /* ✅ HOVER EFFECT ADDED */
        .socialPill svg {
          color: #aaa;
          cursor: pointer;
          transition: all 0.25s ease;
        }

        .socialPill svg:hover {
          color: #e35e4a;
          transform: translateY(-3px) scale(1.15);
        }
          
        .scrollTopBtn {
          position: absolute;
          right: 40px;
          bottom: 40px;
          width: 55px;
          height: 55px;
          border-radius: 50%;
          background: #e35e4a;
          border: none;
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }
      `}</style>

      <footer className="footer">
        <div className="footerTop">
          <h1 className="headline">
            We stand prepared to assist <br /> you and address any inquiries
          </h1>

          <a href="#" className="contactLink">
            CONTACT US <ArrowUpRight />
          </a>
        </div>

        <div className="footerGrid">
          <div>
            <h2>PASS</h2>
            <h3 className="sinceText">Since the 80's</h3>
          </div>

          <div>
            <h4>New York</h4>
            <p className="address">523 Sylvan Ave, CA</p>

            <h4>Follow us</h4>
            <div className="socialPill">
              <Twitter />
              <Facebook />
              <Linkedin />
              <Instagram />
            </div>
          </div>

          <div>
            <h4>Phone</h4>
            <p className="infoText">+1 234 719 8948</p>
              <h4>Email</h4>
  <p className="infoText">Interested in working with us?</p>
          </div>
<div>


            <h4>Main Menu</h4>
            <ul className="navList">
              <li><a href="#">Home</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Our Projects</a></li>
              <li><a href="#">Products</a></li>
            </ul>
          </div>

          <div>
            <ul className="navList">
              <li><a href="#">Career</a></li>
              <li><a href="#">Team</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Contacts</a></li>
            </ul>
          </div>
        </div>

        <button className="scrollTopBtn" onClick={scrollToTop}>
          <ArrowUp />
        </button>
      </footer>
    </>
  );
};

export default Footer;