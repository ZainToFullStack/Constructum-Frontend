// import React from "react";
// import "../../../style/ProcessSection.css";

// const ProcessSection = () => {
//   return (
//     <section className="process">

//       {/* Top Text */}
//       <p className="process-subtitle">/ how we work /</p>

//       {/* Heading */}
//       <h1 className="process-heading">
//         Delivering precise inspection services through a <br />
//         transparent and structured process
//       </h1>

//       {/* Steps */}
//       <div className="process-container">

//         {/* Step 1 */}
//         <div className="process-card">
//           <h2 className="step-number">/01</h2>
//           <span className="step-label">step</span>

//           <h3 className="step-title">
//             Documentation
//           </h3>

//           <p className="step-desc">
//            We prepare detailed inspection documents, including technical reports(Architectural,Structural and MEP Drawings), Compilance reports and evaluation records to ensure accuracy, clarity, and full compliance before site assessment.
//            </p>
//         </div>

//         {/* Divider */}
//         <div className="divider"></div>

//         {/* Step 2 */}
//         <div className="process-card">
//           <h2 className="step-number">/02</h2>
//           <span className="step-label">step</span>

//           <h3 className="step-title">
//             Data Collection On Site
//           </h3>

//           <p className="step-desc">
//             Our experts conduct detailed site inspections using advanced tools and collect data to access structural conditions, safety risks and construction quality with precision and reliability.
//           </p>
//         </div>

//         {/* Divider */}
//         <div className="divider"></div>

//         {/* Step 3 */}
//         <div className="process-card">
//           <h2 className="step-number">/03</h2>
//           <span className="step-label">step</span>

//           <h3 className="step-title">
//             Data Processing And Report Generating
//           </h3>

//           <p className="step-desc">
//         Based on the data collected, we carry out data analysis and perpare inspection report.
//           </p>
//         </div>

//         {/* Step 4 */}
//         <div className="process-card">
//           <h2 className="step-number">/04</h2>
//           <span className="step-label">step</span>

//           <h3 className="step-title">
//            Report Delivery
//           </h3>

//           <p className="step-desc">
//           We deliver clear, professional inspection reports with key findings and recommendations, ensuring clients receive complete understanding and support for informed decision making.
//           </p>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default ProcessSection;

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/autoplay";

import "../../../style/ProcessSection.css";

const ProcessSection = () => {
  const processData = [
    {
      id: "01",
      title: "Documentation",
      description:
        "We prepare detailed inspection documents including architectural, structural and MEP drawings, compliance reports and evaluation records to ensure complete accuracy before site assessment.",
      img: "https://plus.unsplash.com/premium_photo-1674338460087-8d2e9fbdc0c3?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },

    {
      id: "02",
      title: "Data Collection On Site",
      description:
        "Our experts perform detailed inspections using advanced tools to assess structural conditions, safety risks and construction quality with maximum precision and reliability.",
      img: "https://plus.unsplash.com/premium_photo-1681841431244-35f68d21c127?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },

    {
      id: "03",
      title: "Data Processing & Report Preparation",
      description:
        "Based on the collected information, our engineers analyze inspection data carefully and generate detailed technical reports with accurate findings and recommendations.",
      img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop",
    },

    {
      id: "04",
      title: "Report Delivery",
      description:
        "We deliver professional inspection reports with key findings and expert recommendations to support informed and confident decision making for our clients.",
      img: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  return (
    <section className="process-wrapper">
      <div className="process-container-main">

        {/* HEADER */}
        <div className="process-header">
          <div className="process-title-area">
            <span className="process-subtitle">
              / how we work /
            </span>

            <h1>
              Delivering precise inspection services through a
              transparent and structured process
            </h1>
          </div>

          <div className="process-desc-area">
            <p>
              Our inspection workflow is designed to ensure complete
              transparency, technical accuracy and reliable reporting
              throughout every stage of the project lifecycle.
            </p>
          </div>
        </div>

        {/* SWIPER */}
        <Swiper
          modules={[Autoplay]}
          loop={true}
          speed={1400}
          grabCursor={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          spaceBetween={22}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },

            480: {
              slidesPerView: 1.15,
            },

            768: {
              slidesPerView: 2,
            },

            1024: {
              slidesPerView: 3,
            },

            1280: {
              slidesPerView: 4,
            },
          }}
          className="process-swiper"
        >
          {processData.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="process-card">

                {/* IMAGE */}
                <div className="process-image-box">
                  <span className="process-number">
                    /{item.id}
                  </span>

                  <img
                    src={item.img}
                    alt={item.title}
                  />
                </div>

                {/* CONTENT */}
                <div className="process-content-box">

                  <span className="process-step">
                      Step {item.id}
                  </span>

                  <h3>
                    {item.title}
                  </h3>

                  <p>
                    {item.description}
                  </p>

                  {/* <div className="process-arrow">
                    ↗
                  </div> */}
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
};

export default ProcessSection;