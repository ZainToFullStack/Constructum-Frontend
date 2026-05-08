import React from 'react';
import "../../../style/RennovationDetails.css";

const RenovationDetails = () => {
  const categories = [
    'Architecture',
    'Building',
    'Construction',
    'Machinery',
    'Manufacture',
    'Renovation'
  ];

  return (
    <div className="page-background">
      <div className="main-container">
        {/* Left Sidebar */}
        <aside className="sidebar-section">
          <div className="category-card">
            <div className="category-title">
              <span>CATEGORY</span>
              <div className="accent-bars">
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
              </div>
            </div>
            <ul className="category-list">
              {categories.map((item, index) => (
                <li key={index} className={item === 'Renovation' ? 'active-item' : ''}>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="banner-ad">
            <img 
              src="https://plus.unsplash.com/premium_photo-1663088543643-2a1ebfc830b6?q=80&w=872&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              alt="Industrial Solution" 
            />
            <div className="banner-content">
              <h3>Innovative and tailored solutions customized</h3>
              <button className="contact-btn">CONTACT US <span>↗</span></button>
            </div>
          </div>
        </aside>

        {/* Right Main Content */}
        <main className="content-section">
          <div className="hero-img-wrapper">
            <img 
              src="https://images.unsplash.com/photo-1622649396178-b56dfd532226?q=80&w=910&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              alt="Construction Site" 
            />
          </div>

          <h1 className="title-heading">Preparing to renovation</h1>
          
          <p className="description-lead">
            Allan wrasse climbing gourami amur pike Arctic char, steelhead sprat sea lamprey grunion. Walleye poolfish sand goby butterfly ray stream catfish jewfish. Spanish mackerel yellow weaver sixgill.
          </p>

          <p className="description-body">
            Sandperch flyfish yellowfin cutthroat trout grouper whitebait horsefish bullhead shark California smoothhound, 
            striped burrfish threadtail saber-toothed blenny Red Salmon eye-lighteye flounder albacore koi black triggerfish 
            bream Sacramento blackfish. Sailback scorpionfish tenuo-tailor roundhead dogfish pirate perch, yellowhead jawfish 
            escolar. Pink salmon deepwater cardinalfish jawfish dickhead Atlantic herring, bonnetmouth spookfish pearfish 
            pilchard. loweye catfish sailfin darter cobia bullhead shark drum alewife power oceanic flyingfish California halibut. 
            Gurnard, prickly shark Atlantic.
          </p>
        </main>
      </div>
    </div>
  );
};

export default RenovationDetails;