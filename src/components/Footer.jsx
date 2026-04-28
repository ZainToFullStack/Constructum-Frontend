import React from 'react';
import { Twitter, Facebook, Linkedin, Instagram, ArrowUpRight, ArrowUp } from 'lucide-react';
import "../style/footer.css"; // Normal import sahi hai

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    // Har jagah se 'styles.' hata dein aur classes ko quotes "" mein likhein
    <footer className="footer">
      <div className="footerTop">
        <h1 className="headline">
          We stand prepared to assist <br /> 
          you and address any <br /> 
          inquiries you may have
        </h1>
        <a href="#" className="contactLink">
          CONTACTS US <ArrowUpRight size={20} />
        </a>
      </div>

      <hr className="divider" />

      <div className="footerGrid">
        <div className="brandCol">
          <h2 className="logo">Constructum</h2>
          <h3 className="sinceText">since the 80's</h3>
          <p className="copyright">2025 Constructum. All Rights reserved by Artureanec</p>
        </div>

        <div className="column">
          <h4>New York</h4>
          <p className="address">
            523 Sylvan Ave, 5th Floor<br />
            Mountain View, CA 94041 USA
          </p>
          <div className="socialContainer">
            <p className="smallLabel">Follow us</p>
            <div className="socialPill">
              <div className="iconActive"><Twitter size={14} /></div>
              <Facebook size={16} className="icon" />
              <Linkedin size={16} className="icon" />
              <Instagram size={16} className="icon" />
            </div>
          </div>
        </div>

        {/* ... baaki sab columns mein bhi 'styles.' hata kar quotes laga dein ... */}
        
        <div className="column">
          <h4>Phone</h4>
          <p className="infoText">+1 234 719 8948<br />+1 987 654 3210</p>
          <div className="emailSection">
            <h4>Email</h4>
            <p className="smallLabel">Interested in working with us?</p>
            <a href="mailto:support@constructum.co" className="emailLink">support@constructum.co</a>
          </div>
        </div>

        <div className="column">
          <h4>Main menu</h4>
          <ul className="navList">
            <li><a href="#" className="activeLink">/ Home /</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Our Projects</a></li>
            <li><a href="#">Products</a></li>
          </ul>
        </div>

        <div className="column">
          <ul className="navList">
            <li><a href="#">Career</a></li>
            <li><a href="#">Team</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Contacts</a></li>
          </ul>
        </div>
      </div>

      <button onClick={scrollToTop} className="scrollTopBtn">
        <ArrowUp size={24} />
      </button>
    </footer>
  );
};

export default Footer;