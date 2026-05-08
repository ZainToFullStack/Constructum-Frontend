import { useState } from "react";
import { Search, Menu, X } from "lucide-react";
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

import logoImg from "../../assets/logo34.png";
import "../../style/Navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="navbar-wrapper">
        <header className="navbar">

          <div className="navbar-inner">

            {/* LOGO */}

            <div className="logo-container">
              <Link to="/">
                <img
                  src={logoImg}
                  alt="Constructum Logo"
                  className="navbar-logo"
                />
              </Link>
            </div>

            {/* DESKTOP LINKS */}

            <nav className="nav-links">

              <Link to="/">HOME</Link>

              <Link to="/aboutus">
                ABOUT US
              </Link>

              <Link to="/services">
                SERVICES
              </Link>

              <Link to="/otherservice">
                OTHER SERVICES
              </Link>

              <Link to="/contact">
                CONTACT US
              </Link>

            </nav>

            {/* RIGHT SECTION */}

            <div className="nav-right">

              <Search
                size={20}
                className="search-icon"
              />

              <button className="cta-btn">
                Get in Touch
              </button>

            </div>

            {/* MOBILE MENU ICON */}

            <div
              className="menu-icon"
              onClick={() => setOpen(!open)}
            >
              {open ? <X size={28} /> : <Menu size={28} />}
            </div>

          </div>

          {/* MOBILE MENU */}

          <div className={`mobile-menu ${open ? "active" : ""}`}>

            <nav>

              <Link to="/" onClick={() => setOpen(false)}>
                Home
              </Link>

              <Link to="/aboutus" onClick={() => setOpen(false)}>
                About Us
              </Link>

              <Link to="/services" onClick={() => setOpen(false)}>
                Services
              </Link>

              <Link to="/otherservice" onClick={() => setOpen(false)}>
                Other Services
              </Link>

              <Link to="/contact" onClick={() => setOpen(false)}>
                Contact Us
              </Link>

            </nav>

          </div>

        </header>
      </div>
    </>
  );
};

export default Navbar;