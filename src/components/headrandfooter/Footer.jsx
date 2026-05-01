import React, { useState, useEffect } from "react";
import logoImg from "../../assets/logo34.png";
import "../../style/Footer.css";

// SVG Icons
const Twitter = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
);
const Facebook = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M22 12a10 10 0 1 0-11.6 9.9v-7h-2.1V12h2.1V9.8c0-2.1 1.3-3.3 3.2-3.3.9 0 1.8.1 1.8.1v2h-1c-1 0-1.3.6-1.3 1.2V12h2.3l-.4 2.9h-1.9v7A10 10 0 0 0 22 12z" /></svg>
);
const Youtube = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
);
const Instagram = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.668-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
);
const ArrowUpRight = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17L17 7M7 7h10v10" /></svg>
);

const Footer = () => {
  // --- Scroll to Top Logic ---
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footerMain">
      <div className="contactSection">
        <div className="contactCard">
          <h2>Stay in Touch</h2>
          <p>Arctic char, steelhead sprat sea lamprey grunion. Walleye poolfish sand goby butterfly ray stream cat</p>
          <form className="contactForm">
            <input type="text" placeholder="Full name" />
            <input type="email" placeholder="Email" />
            <input type="text" placeholder="Subject" />
            <textarea placeholder="Message"></textarea>
            <button type="submit" className="sendBtn">
              SEND A MESSAGE <ArrowUpRight />
            </button>
          </form>
        </div>

        <div className="infoSection">
          <span className="subTag">/ contacts /</span>
          <h1 className="mainHeadline">We're here, ready to assist and respond to any questions</h1>
          
          <div className="infoGrid">
            <div>
              <h4>New York</h4>
              <p>523 Sylvan Ave, 5th Floor<br/>Mountain View, CA 94041 USA</p>
              <h4>Follow us</h4>
              <div className="socialIcons">
                <a href="#"><Twitter /></a>
                <a href="#"><Facebook /></a>
                <a href="#"><Youtube /></a>
                <a href="#"><Instagram /></a>
              </div>
            </div>
            <div>
              <h4>Phone</h4>
              <p>+1 234 719 8948<br/>+1 987 654 3210</p>
              <h4>Email</h4>
              <p>Interested in working with us?<br/><a href="mailto:support@constructum.com" className="emailLink">support@constructum.com</a></p>
            </div>
          </div>
          <div className="estDate">est. 1956</div>
        </div>
      </div>

      <div className="footerBottom">
        <div className="bottomGrid">
          <div className="brandCol">
            <img src={logoImg} alt="Constructum" className="footerLogo" />
            <p>Arctic char, steelhead sprat sea lamprey grunion. Walleye poolfish sand goby butterfly ray stream cat fish jewfish.</p>
          </div>
          
          <div className="newsletterCol">
            <h4>Newsletter</h4>
            <p>Goosefish gar pleco, chum salmon armour</p>
            <div className="subscribeField">
              <input type="email" placeholder="Email" />
              <button>Subscribe</button>
            </div>
          </div>

          <div className="menuCol">
            <h4>Main menu</h4>
            <div className="dualMenu">
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Our Projects</a></li>
              </ul>
              <ul>
                <li><a href="#">Career</a></li>
                <li><a href="#">Team</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Contacts</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footerLegal">
          <p>2026 Constructum. All Rights reserved by Arturcanec</p>
          <p>Privacy policy | Terms of use</p>
        </div>
      </div>

      {/* --- NAYA BUTTON --- */}
      {showButton && (
        <button className="scrollTopBtn" onClick={scrollToTop}>
          ↑
        </button>
      )}
    </footer>
  );
};

export default Footer;