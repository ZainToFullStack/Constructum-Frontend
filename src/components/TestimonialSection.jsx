import React, { useState, useEffect } from "react";
import "../style/TestimonialSection.css";

const TestimonialSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  
  const testimonials = [
    {
      id: 1,
      text: "Absolutely thrilled with the construction services provided! From start to finish, the team displayed professionalism and skill. The attention to detail was impeccable, and the project was completed ahead of schedule. Our vision was not only met but exceeded. Highly recommend for anyone seeking top-notch construction services.",
      name: "Samuel Smith / CEO Atlant"
    },
    {
      id: 2,
      text: "Constructum transformed our vision into reality with exceptional craftsmanship. Their team's dedication to quality and timeline management was outstanding. The entire process was seamless from concept to completion.",
      name: "Emily Rodriguez / Design Director"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 8000);
    
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const handleDotClick = (index) => {
    setCurrentTestimonial(index);
  };

  return (
    <section className="testimonial-section">
      {/* LEFT IMAGE */}
      <div className="testimonial-left">
        <div className="image-container">
          <img
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1600&auto=format&fit=crop"
            alt="Modern architectural construction masterpiece"
          />
        </div>

        <div className="top-gradient"></div>
        <div className="bottom-gradient-layer"></div>

        <div className="left-text">
          <h1>
            The greatest construction <br />
            of the 21st century
          </h1>
        </div>
      </div>

      {/* RIGHT CONTENT */}
      <div className="testimonial-right">
        <div className="content-box">
          <div className="premium-strip"></div>
          
          <h2>
            Customer voices: what <br />
            people say about <br />
            Constructum
          </h2>

          <div className="quote-icon">❝</div>

          <p className="testimonial-text">{testimonials[currentTestimonial].text}</p>

          <h4>{testimonials[currentTestimonial].name}</h4>

          {/* <div className="slider-dots">
            {testimonials.map((_, index) => (
              <span 
                key={index}
                className={`dot ${index === currentTestimonial ? 'active' : ''}`}
                onClick={() => handleDotClick(index)}
              ></span> */}
            {/* ))} */}
          {/* </div> */}

          <div className="pattern"></div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;