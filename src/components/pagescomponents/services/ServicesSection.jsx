import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "../../../style/ServicesSecion.css";

const ServicesSection = () => {
  const [selectedCard, setSelectedCard] = useState(null);

const data = [
  {
    id: "01",
    title: "Property Assessment",
    description:
      "Comprehensive inspection of overall property condition, safety, and structural integrity to support confident and informed decisions.",
    img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "02",
    title: "Structural Evaluation",
    description:
      "Detailed assessment of foundations, beams, columns, and slabs to detect defects, weaknesses, and potential structural risks.",
    img: "https://images.unsplash.com/photo-1596456012049-27ce74a2ae6f?q=80&w=1031&auto=format&fit=crop",
  },
  {
    id: "03",
    title: "Risk Analysis",
    description:
      "Identification of structural, safety, and financial risks that may impact long-term property performance and durability.",
    img: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "04",
    title: "Compliance Inspection",
    description:
      "Verification of building compliance with safety codes, construction standards, and regulatory requirements before approval or purchase.",
    img: "https://plus.unsplash.com/premium_photo-1723662017429-675d6341f27e?q=80&w=749&auto=format&fit=crop",
  },
  {
    id: "05",
    title: "Consultation Services",
    description:
      "Expert guidance on property inspection findings, repairs, and investment decisions based on technical evaluation.",
    img: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?q=80&w=1170&auto=format&fit=crop",
  },
  {
    id: "06",
    title: "Technical Reporting",
    description:
      "Structured inspection reports with clear findings, recommendations, and documentation for full transparency and clarity.",
    img: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1170&auto=format&fit=crop",
  },
];
    

  return (
    <section className="services-wrapper">
      <div className="container">
        {/* HEADER */}
        <div className="header-flex">
          <div className="title-area">
            <span className="sub-tag">/ additional services /</span>

            <h1>
              Outstanding products and services provided by our industrial <br />enterprise
            </h1>
          </div>

          <div className="desc-area">
            <p>
             Professional building inspection and assessment services designed to ensure safety, structural integrity, and complete transparency.  
Delivering accurate evaluations and reliable reports to help clients make confident property decisions.
            </p>
          </div>
        </div>

        {/* SWIPER */}
        <Swiper
          modules={[Autoplay]}
          loop={true}
          speed={1200}
          grabCursor={true}
          autoplay={{
            delay: 2200,
            disableOnInteraction: false,
          }}
          spaceBetween={18}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },

            480: {
              slidesPerView: 1.2,
            },

            640: {
              slidesPerView: 2,
            },

            900: {
              slidesPerView: 3,
            },

            1200: {
              slidesPerView: 4,
            },
          }}
          className="services-swiper"
        >
          {data.map((item) => (
            <SwiperSlide key={item.id}>
              <div
                className="service-card"
                onClick={() => setSelectedCard(item)}
              >
                <div className="image-box">
                  <span className="item-number">
                    /{item.id}
                  </span>

                  <img
                    src={item.img}
                    alt={item.title}
                  />
                </div>

                <div className="content-box">
                  <div className="text-content">
                    <p className="card-text">
                      {item.title}
                    </p>

                    <p className="card-description">
                      {item.description}
                    </p>
                  </div>

                  <span className="arrow">↗</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* PREMIUM MODAL */}

        {selectedCard && (
          <div
            className="service-modal-overlay"
            onClick={() => setSelectedCard(null)}
          >
            <div
              className="service-modal"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="modal-close"
                onClick={() => setSelectedCard(null)}
              >
                ✕
              </button>

              <div className="modal-image">
                <img
                  src={selectedCard.img}
                  alt={selectedCard.title}
                />

                <span className="modal-number">
                  /{selectedCard.id}
                </span>
              </div>

              <div className="modal-content">
                <h2>{selectedCard.title}</h2>

                <p>{selectedCard.description}</p>

                {/* <button className="modal-btn">
                  Learn More ↗
                </button> */}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ServicesSection;