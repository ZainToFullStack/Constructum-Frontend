import React from 'react';
import "../../../style/ServicesSecion.css";

const ServicesSection = () => {
  const data = [
    { 
      id: '01', 
      title: 'Renovation using modern technologies', 
      img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800' 
    },
    { 
      id: '02', 
      title: 'Bridge restoration', 
      img: 'https://images.unsplash.com/photo-1596456012049-27ce74a2ae6f?q=80&w=1031&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' 
    },
    { 
      id: '03', 
      title: 'Architecture and development', 
      img: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&q=80&w=800' 
    },
    { 
      id: '04', 
      title: 'Building and modern construction', 
      img: 'https://images.unsplash.com/photo-1601074231509-dce351c05199?q=80&w=388&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' 
    },
  ];

  return (
    <section className="services-wrapper">
      <div className="container">
        <div className="header-flex">
          <div className="title-area">
            <span className="sub-tag">/ additional services /</span>
            <h1>Outstanding products and services provided by our industrial enterprise</h1>
          </div>
          <div className="desc-area">
            <p>Allan wrasse climbing gourami amur pike Arctic char, steelhead sprat sea lamprey grunion. Walleye poolfish sand goby butterfly ray stream.</p>
          </div>
        </div>

        <div className="services-grid">
          {data.map((item) => (
            <div key={item.id} className="service-card">
              <div className="image-box">
                <span className="item-number">/{item.id}</span>
                <img src={item.img} alt={item.title} key={item.id} />
              </div>
              <div className="content-box">
                <p className="card-text">{item.title}</p>
                <span className="arrow">↗</span>
              </div>
            </div>
          ))}
        </div>

        {/* <div className="pagination">
          <span className="dot active"></span>
          <span className="dot"></span>
        </div> */}
      </div>
    </section>
  );
};

export default ServicesSection;