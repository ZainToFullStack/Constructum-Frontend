import { useState } from "react";
import { Search, Menu } from "lucide-react";
import "../style/navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar-inner">

        {/* LEFT: LOGO */}
        <div className="logo">
          <div className="logo-box"></div>
          <h1 className="logo-text">CONSTRUCTUM</h1>
        </div>

        {/* CENTER: NAV LINKS */}
        <nav className="nav-links">
          <a href="#">HOME</a>
          <a href="#">PAGES</a>
          <a href="#">PROJECTS</a>
          <a href="#">SHOP</a>
          <a href="#">BLOG</a>
          <a href="#">CONTACTS</a>
        </nav>

        {/* RIGHT: ICON + BUTTON */}
        <div className="nav-right">
          <Search size={18} className="search-icon" />
          <button className="cta-btn">Get in Touch</button>
        </div>

        {/* MOBILE MENU ICON */}
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