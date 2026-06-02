// import React, { useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination } from "swiper/modules";

// import "swiper/css";
// import "swiper/css/pagination";

// import dpimgs from "../assets/dpimgs.jpg";
// import "../style/hometestinomials.css";
// const testimonials = [
//   {
//     id: "01",
//     text: "The engineering-grade scrutiny PASS brings is unmatched. Their structural assessment, backed by modern diagnostic tools, allowed me to proceed with my property acquisition in Lahore with absolute certainty and professional confidence.",
//     author: "Daniyal",
//     location: "Property Buyer, Lahore", // Updated to reflect acquisition context
//   },
//   {
//     id: "02",
//     text: "As a seller, transparency is vital for a smooth transaction. The PASS comprehensive assessment report identified potential liabilities early, helping us secure a premium price and effectively eliminating any post-sale disputes.",
//     author: "Abdullah",
//     location: "Real Estate Seller, Lahore", // Updated to reflect sales context
//   },
//   {
//     id: "03",
//     text: "The expertise of a former Director of Building Control is evident in their methodology. From thermal imaging to moisture detection, they provide a level of technical credibility that standard visual inspections simply cannot match.",
//     author: "Javed Ali",
//     location: "Technical Consultant & Buyer", // Updated to reflect technical appreciation
//   },
//   {
//     id: "04",
//     text: "PASS transformed our property listing into a verified asset. Their systematic evaluation of workmanship and structural integrity provided our buyers the trust needed to close the deal without unnecessary negotiation stalls.",
//     author: "Saniya Zahra",
//     location: "Commercial Property Seller", // Updated to reflect listing context
//   },
//   {
//     id: "05",
//     text: "I highly recommend PASS for any serious investor. Their independent third-party verification and detailed technical reports are critical decision-making resources that safeguard investments and professional reputations.",
//     author: "Muhammad Ali",
//     location: "Real Estate Investor", // Updated to reflect investment focus
//   },
// ];

// const TestimonialsSlider = () => {
//   const [selectedCard, setSelectedCard] = useState(null);

//   return (
//     <section className="testimonials-section">
//       <div className="testimonials-wrapper">

//         {/* HEADER */}

//         <div className="testimonial-header-flex">

//           <div className="testimonial-title-area">
//             <span className="testimonials-label">
//               / testimonials /
//             </span>

//             <h2 className="testimonials-title">
//               Engineering Confidence in Every Inspection
//             </h2>
//           </div>

//           <div className="testimonial-desc-area">
//             <p className="testimonials-lead">
//               Technical validation and independent assessments for buyers and sellers to ensure informed, dispute-free transactions.
//             </p>
//           </div>

//         </div>

//         {/* SWIPER */}

//         <Swiper
//           modules={[Autoplay, Pagination]}
//           spaceBetween={30}
//           slidesPerView={2}
//           loop={true}
//           speed={1200}
//           autoplay={{
//             delay: 4000,
//             disableOnInteraction: false,
//           }}
//           pagination={{ clickable: true }}
//           breakpoints={{
//             320: {
//               slidesPerView: 1,
//               spaceBetween: 20,
//             },

//             768: {
//               slidesPerView: 1,
//               spaceBetween: 20,
//             },

//             992: {
//               slidesPerView: 2,
//               spaceBetween: 30,
//             },

//             1200: {
//               slidesPerView: 3,
//               spaceBetween: 30,
//             },
//           }}
//           className="testimonials-swiper"
//         >
//           {testimonials.map((item) => (
//             <SwiperSlide key={item.id}>
//               <div
//                 className="testimonials-item"
//                 onClick={() => setSelectedCard(item)}
//               >

//                 {/* IMAGE */}

//                 <div className="testimonial-image-box">

//                   <span className="testimonial-number">
//                     /{item.id}
//                   </span>

//                   <img
//                     src={dpimgs}
//                     alt={item.author}
//                     className="testimonials-author-img"
//                   />

//                 </div>

//                 {/* CONTENT */}

//                 <div className="testimonial-content-box">

//                   <div className="testimonial-text-content">

//                     <p className="testimonials-text">
//                       {item.text}
//                     </p>

//                     <div className="testimonials-author">
//                       <div>
//                         <div className="testimonials-author-name">
//                           {item.author}
//                         </div>

//                         <div className="testimonials-author-location">
//                           {item.location}
//                         </div>
//                       </div>
//                     </div>

//                   </div>

//                   {/* <span className="testimonial-arrow">
//                     ↗
//                   </span> */}

//                 </div>

//                 <div className="testimonials-quote">
//                   &rdquo;&rdquo;
//                 </div>

//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>

//         {/* MODAL */}

//         {selectedCard && (
//           <div
//             className="testimonial-modal-overlay"
//             onClick={() => setSelectedCard(null)}
//           >
//             <div
//               className="testimonial-modal"
//               onClick={(e) => e.stopPropagation()}
//             >

//               <button
//                 className="testimonial-modal-close"
//                 onClick={() => setSelectedCard(null)}
//               >
//                 ✕
//               </button>

//               <div className="testimonial-modal-image">

//                 <img
//                   src={dpimgs}
//                   alt={selectedCard.author}
//                 />

//                 <span className="testimonial-modal-number">
//                   /{selectedCard.id}
//                 </span>

//               </div>

//               <div className="testimonial-modal-content">

//                 <h2>{selectedCard.author}</h2>

//                 <span className="testimonial-modal-location">
//                   {selectedCard.location}
//                 </span>

//                 <p>{selectedCard.text}</p>

//               </div>

//             </div>
//           </div>
//         )}

//       </div>
//     </section>
//   );
// };

// export default TestimonialsSlider;


import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import dpimgs from "../assets/dpimgs.jpg";
import "../styles/home/hometestimonials.css";
// const testimonials = [
//   {
//     id: "01",
//     text: "PASS helped me understand the real condition of the property before buying. Every serious buyer should definitely use their inspection services.",
//     author: "Daniyal",
//     location: "Property Buyer, Lahore",
//   },

//   {
//     id: "02",
//     text: "Their inspection report built strong buyer trust and made our selling process easier. I highly recommend PASS to all property sellers.",
//     author: "Abdullah",
//     location: "Real Estate Seller, Lahore",
//   },

//   {
//     id: "03",
//     text: "PASS reveals structural issues that most people cannot identify themselves. Upcoming buyers should inspect before making any investment.",
//     author: "Javed Ali",
//     location: "Technical Consultant & Buyer",
//   },

//   {
//     id: "04",
//     text: "Their professional inspection added real value to our property and increased buyer confidence. Anyone looking for genuine services should definitely benefit from them.",
//     author: "Saniya Zahra",
//     location: "Commercial Property Seller",
//   },

//   {
//     id: "05",
//     text: "PASS helped protect my investment from future risks. Every property investor should strongly consider their inspection services.",
//     author: "Muhammad Ali",
//     location: "Real Estate Investor",
//   },

//   {
//     id: "06",
//     text: "As a Civil Engineer, I value how PASS focuses on actual structural quality. I recommend their inspections to every responsible buyer.",
//     author: "Engr. Hamza Rehman",
//     location: "Civil Engineer & Structural Consultant",
//   },
// ];
const testimonials = [
  {
    id: "01",
    text: "I really like the idea behind PASS. A professional inspection service like this can help buyers avoid future problems before buying property.",
    author: "Daniyal Ahmed",
    location: "Property Buyer, Lahore",
  },

  {
    id: "02",
    text: "PASS is bringing something new and very useful to the market. Buyers need this kind of guidance before making such a big investment.",
    author: "Abdullah Khan",
    location: "Home Buyer, Lahore",
  },

  {
    id: "03",
    text: "The concept of PASS looks very promising. Most buyers cannot judge the real quality of a building without professional inspection.",
    author: "Javed Ali",
    location: "Apartment Buyer, Lahore",
  },

  {
    id: "04",
    text: "I am happy to see awareness about property inspections growing in Pakistan. PASS can become very helpful for future buyers.",
    author: "Saniya Zahra",
    location: "Commercial Property Buyer, Lahore",
  },

  {
    id: "05",
    text: "PASS focuses on the actual quality of the building instead of only the finishing and design. This is something buyers truly need.",
    author: "Muhammad Ali",
    location: "Real Estate Investor, Lahore",
  },

  {
    id: "06",
    text: "The idea of getting a property inspected before buying is excellent. PASS seems like a very positive step for the real estate market.",
    author: "Hamza Rehman",
    location: "Property Buyer, Lahore",
  },
];


const TestimonialsSlider = () => {
  return (
    <section className="testimonials-section">
      <div className="testimonials-wrapper">
        <div className="testimonials-label">TESTIMONIALS</div>
        <h2 className="testimonials-title">
          What people say about our inspections
        </h2>
        <p className="testimonials-lead">
          Expert inspections for buyers and sellers to make confident decisions.
        </p>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={2}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          // pagination={{ clickable: true }}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 20 },
            768: { slidesPerView: 1, spaceBetween: 20 },
            992: { slidesPerView: 2, spaceBetween: 30 },
            1200: { slidesPerView: 3, spaceBetween: 30 },
          }}
          className="testimonials-swiper"
        >
          {testimonials.map((item, idx) => (
            <SwiperSlide key={idx}>
              <div className="testimonials-item">
                <div className="testimonials-text">{item.text}</div>
                <div className="testimonials-author">
                  <img
                    src={item.img || dpimgs}
                    alt={item.author}
                    className="testimonials-author-img"
                  />
                  <div>
                    <div className="testimonials-author-name">{item.author}</div>
                    <div className="testimonials-author-location">{item.location}</div>
                  </div>
                </div>
                <div className="testimonials-quote">&rdquo;&rdquo;</div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TestimonialsSlider;
