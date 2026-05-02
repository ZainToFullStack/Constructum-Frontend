import { useState } from "react";
import { Search, Menu } from "lucide-react";
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa';
import logoImg from "../../assets/logo34.png"; 
import "../../style/Navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="topbar">
      <div className="topbar-left">
        <span>Services</span>
        <span>FAQ</span>
        <span>Pricing Plans</span>
      </div>

      <div className="topbar-right">
        <span>Call us: +1 (800) 987 456 98</span>
        <span>Mail us: constructum@mail.com</span>
        
        {/*  Social Icons Section */}
        <div className="topbar-socials">
          <a href="#" aria-label="Twitter"><FaTwitter /></a>
          <a href="#" aria-label="Facebook"><FaFacebookF /></a>
          <a href="#" aria-label="Youtube"><FaYoutube /></a>
          <a href="#" aria-label="Instagram"><FaInstagram /></a>
        </div>
      </div>
    </div>


      {/* MAIN NAVBAR */}
      <div className="navbar-inner">

        {/* LOGO */}
        <div className="logo-container">
          <a href="/">
            <img src={logoImg} alt="Constructum Logo" className="navbar-logo" />
          </a>
        </div>

        {/* LINKS */}
        <nav className="nav-links">
          <a href="#">HOME</a>
          <a href="#">PAGES</a>
          <a href="#">PROJECTS</a>
          <a href="#">SHOP</a>
          <a href="#">BLOG</a>
          <a href="#">CONTACTS</a>
        </nav>

        {/* RIGHT */}
        <div className="nav-right">
          <Search size={18} className="search-icon" />
          <button className="cta-btn">Get in Touch</button>
        </div>

        {/* MOBILE */}
        <div className="menu-icon" onClick={() => setOpen(prev => !prev)}>
          <Menu />
        </div>
      </div>

      {/* MOBILE MENU */}
      <div className={`mobile-menu ${open ? "active" : ""}`}>
        <nav>
          <a href="#">Home</a>
          <a href="#">Pages</a>
          <a href="#">Projects</a>
          <a href="#">Shop</a>
          <a href="#">Blog</a>
          <a href="#">Contacts</a>
        </nav>
      </div>

    </header>
  );
};

export default Navbar;