import React from 'react'
// import Herosection from '../pagescomponents/home/HeroSection'
import HeroSection from '../pagescomponents/home/HeroSection'
import GridSection from '../GridSection'
import Services from '../pagescomponents/services/Services';
import AboutCompanySection from '../AboutCompanySection';
import OurFeatures from '../pagescomponents/services/OurFeatures';
import ProcessSection from '../pagescomponents/services/ProcessSection';
import BlogSection from '../BlogSection';
import TestimonialSection from '../TestimonialSection';
// import Services from '../pagescomponents/services/Services'
// import AboutCompanySection from '../AboutCompanySection'
// import OurFeatures from '../OurFeatures'
// import StatsSection from '../StatsSection'
// import GallerySlider from '../GallerySlider'
// import ProcessSection from '../ProcessSection'


function Home() {
  return (
    <>
      <HeroSection />
      <GridSection />
      <Services />
      <AboutCompanySection />
      <OurFeatures />
      <ProcessSection />
      <TestimonialSection />
      <BlogSection />
      {/* <InlineMarquee />
      <AboutCompanySection />
      <OurFeatures />
      <StatsSection />
      <GallerySlider />
      <ProcessSection /> */} 

    </>
  )
}

export default Home;

