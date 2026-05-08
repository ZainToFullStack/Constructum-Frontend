import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Navbar from "./components/headrandfooter/Navbar.jsx";
import Footer from "./components/headrandfooter/Footer.jsx";
import Home from "./components/pages/Home.jsx";
// FIX: Capitalize 'Services' here to match the component usage
import Services from "./components/pages/Serve1.jsx"; 
import OtherServices from "./components/pages/Serve2.jsx"

import "./App.css";
import AboutUs from "./components/pages/About.jsx"
import ContactUs from "./components/pages/Contact1.jsx"

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          {/* Now 'Services' matches the import above */}
          <Route path="/services" element={<Services />} />
          <Route path="/otherservice" element={<OtherServices/>} />
          <Route path="/contact" element={<ContactUs />} />
 
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;