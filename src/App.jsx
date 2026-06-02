import React, { useEffect, useState } from "react";
import { Routes, Route, BrowserRouter, useLocation } from "react-router-dom";

import Navbar from "./components/headrandfooter/Navbar.jsx";
import Footer from "./components/headrandfooter/Footer.jsx";
import Home from "./components/pages/Home.jsx";
// FIX: Capitalize 'Services' here to match the component usage
import Services from "./components/pages/Serve1.jsx"; 
import OtherServices from "./components/pages/Serve2.jsx";
import AboutUs from "./components/pages/About.jsx";
import ContactUs from "./components/pages/Contact1.jsx";
import ScrollToTop from "./ScrollToTop.jsx";
import Loader from "./components/Loader.jsx";

import "./App.css";

const AppContent = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 400);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 900);
    return () => clearTimeout(timer);
  }, [location]);

  return (
    <>
      <Loader active={loading} />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/otherservice" element={<OtherServices />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>

      <Footer />
    </>
  );
};

const App = () => {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <AppContent />
      </BrowserRouter>
    </>
  );
};

export default App;