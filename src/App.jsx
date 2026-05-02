import React from 'react'
import Footer from './components/headrandfooter/Footer'
import Navbar from './components/headrandfooter/Navbar'
import InlineMarquee from './components/Marquee'
import HeroSection from './components/pagescomponents/home/HeroSection'
import GridSection from './components/GridSection'
import Services from './components/Services'
import AboutCompanySection from './components/AboutCompanySection'
import OurFeatures from './components/OurFeatures'

const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <GridSection />
      <Services />
      <InlineMarquee />
      <AboutCompanySection />
      <OurFeatures />
      <Footer />
    </div>

  )
}

export default App
