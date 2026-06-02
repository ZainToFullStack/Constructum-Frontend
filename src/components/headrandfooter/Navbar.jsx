import { useState } from "react";
import { Search, Menu, X } from "lucide-react";
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import { NavLink } from "react-router-dom";

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
              <NavLink to="/">
                <img
                  src={logoImg}
                  alt="Constructum Logo"
                  className="navbar-logo"
                />
              </NavLink>
            </div>

            {/* DESKTOP LINKS */}

            <nav className="nav-links">

              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "active" : ""
                }
              >
                HOME
              </NavLink>

              <NavLink
                to="/aboutus"
                className={({ isActive }) =>
                  isActive ? "active" : ""
                }
              >
                ABOUT US
              </NavLink>

              <NavLink
                to="/services"
                className={({ isActive }) =>
                  isActive ? "active" : ""
                }
              >
                SERVICES
              </NavLink>

              {/* <NavLink to="/otherservice">
                OTHER SERVICES
              </NavLink> */}

              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? "active" : ""
                }
              >
                CONTACT US
              </NavLink>

            </nav>

            {/* RIGHT SECTION */}

            <div className="nav-right">

              <Search
                size={20}
                className="search-icon"
              />

              <NavLink className="cta-btn" to="/contact">
                Get in Touch
              </NavLink>

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

              <NavLink
                to="/"
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  isActive ? "active" : ""
                }
              >
                Home
              </NavLink>

              <NavLink
                to="/aboutus"
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  isActive ? "active" : ""
                }
              >
                About Us
              </NavLink>

              <NavLink
                to="/services"
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  isActive ? "active" : ""
                }
              >
                Services
              </NavLink>

              {/* <NavLink to="/otherservice">
                Other Services
              </NavLink> */}

              <NavLink
                to="/contact"
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  isActive ? "active" : ""
                }
              >
                Contact Us
              </NavLink>

            </nav>

          </div>

        </header>
      </div>
    </>
  );
};

export default Navbar;