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
import hometestinomials from '../hometestinomials';
import TestimonialsSlider from '../hometestinomials';
import ProfessionalMarquee from '../Marquee';
// import hometestinomials from '../hometestinomials';
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
      {/* <Services /> */}
      <AboutCompanySection />
      <ProfessionalMarquee />
      <OurFeatures />
      <ProcessSection />
      {/* <TestimonialSection /> */}
      <BlogSection />
      <TestimonialsSlider />
      {/* 
      <AboutCompanySection />
      <OurFeatures />
      <StatsSection />
      <GallerySlider />
      <ProcessSection /> */}

    </>
  )
}

export default Home;

