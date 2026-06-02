import React, { useState, useEffect } from "react";
import logoImg from "../../assets/logo34.png";
import "../../style/Footer.css";

// REACT ICONS
import {
  FaXTwitter,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";

import { HiArrowUpRight } from "react-icons/hi2";

const Footer = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footerMain">

      {/* CONTACT SECTION */}
      <div className="contactSection">

        {/* LEFT CONTACT FORM */}
        <div className="contactCard">

          <h2>Get In Touch</h2>

          <p>
            Contact Prime Assessment Services for reliable building
            inspections, professional evaluations, and detailed
            property assessment reports you can trust.
          </p>

          <form className="contactForm">
            <input type="text" placeholder="Full name" required />

            <input type="email" placeholder="Email address" required />

            <input type="text" placeholder="Subject" required />

            <textarea
              placeholder="Write your message"
              required
            ></textarea>

            <button type="submit" className="sendBtn">
              SEND MESSAGE <HiArrowUpRight />
            </button>
          </form>
        </div>

        {/* RIGHT INFO SECTION */}
        <div className="infoSection">

          <span className="subTag">/ contact us /</span>

          <h1 className="mainHeadline">
            Trusted Building Inspection Experts Ready To Assist You
          </h1>

          <div className="infoGrid">

            {/* ADDRESS */}
            <div>

              <h4>Office Address</h4>

              <p>
                2nd Floor, 46A Khayban e Iqbal <br />
                DHA Phase 3, Lahore
              </p>

              <h4>Follow us</h4>

              <div className="socialIcons">
                <div className="socialPill">
                  {/* <a href="#"><FaXTwitter /></a> */}
                  <a 
                  href="https://www.facebook.com/profile.php?id=61588185087598" target="_blank" rel="noopener noreferrer"><FaFacebookF />
                  </a>
                  <a
  href="https://www.linkedin.com/company/prime-assessment-services-solutions/"
  target="_blank"
  rel="noopener noreferrer"
>
  <FaLinkedinIn />
</a>
                  <a
                   href="https://www.instagram.com/primeassessment.ss?igsh=ZnVnMDc4ZGtwaHc5&utm_source=qr" target="_blank" rel="noopener noreferrer" ><FaInstagram /></a>
                </div>
              </div>

            </div>

            {/* CONTACT */}
            <div>

              <h4>Phone</h4>

              <p>
                +042 35741460 <br />
                Mon - Sat | 9AM - 6PM
              </p>

              <h4>Email</h4>

              <p>
                For inspections & consultations <br />

                <a
                  href="mailto:Info@passequip.com"
                  className="emailLink"
                >
                  Info@passequip.com
                </a>
                <br />
                <a
                  href="mailto:Info@passestate.com"
                  className="emailLink"
                >
                  Info@passestate.com
                </a>
              </p>

            </div>

          </div>
        </div>
      </div>

      {/* FOOTER BOTTOM */}
      <div className="footerBottom">

        <div className="bottomGrid">

          {/* BRAND COLUMN */}
          <div className="brandCol">

            <img
              src={logoImg}
              alt="Prime Assessment"
              className="footerLogo"
            />

            <p>
              Prime Assessment Services delivers trusted building
              inspections, structural evaluations, and detailed
              reporting with accuracy, integrity, and professionalism.
            </p>

          </div>

          {/* NEWSLETTER */}
          <div className="newsletterCol">

            <h4>Newsletter</h4>

            <p>
              Get updates, inspection insights, and professional
              property assessment tips.
            </p>

            <div className="subscribeField">
              <input type="email" placeholder="Email address" />
              <button>Subscribe</button>
            </div>

          </div>

          {/* MENU */}
          <div className="menuCol">

            <h4>Main Menu</h4>

            <div className="dualMenu">

              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/aboutus">About Us</a></li>
                <li><a href="/services">Services</a></li>
                <li><a href="/contact">Contact Us</a></li>
              </ul>

            </div>

          </div>

        </div>

        {/* FOOTER LEGAL */}
        <div className="footerLegal">

          <p>
            © 2026 Prime Assessment Services & Solutions.
            All Rights Reserved.
          </p>

          <p>
            Privacy Policy | Terms & Conditions
          </p>

        </div>

      </div>

      {/* SCROLL TO TOP BUTTON */}
      {showButton && (
        <button
          className="scrollTopBtn"
          onClick={scrollToTop}
        >
          ↑
        </button>
      )}

    </footer>
  );
};

export default Footer;