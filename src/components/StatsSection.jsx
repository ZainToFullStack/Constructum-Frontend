import React from 'react';
import "../style/StatsSection.css";
import worldMap from "../assets/world-map-dots.jpeg";

const StatsSection = () => {
  return (
    <section className="stats-container">
      <div className="stats-header">
        <p className="stats-subtext">square meters renovated around the world</p>
      </div>

      <div className="stats-content">
        <h1 className="stats-number">2.000.000+</h1>
        <p className="stats-description">
          Spanish mackerel yellow weaver sixgill. Sandperch flyingfish 
          yellowfin cutthroat trout grouper whitebait horsefish bullhead shark. 
          California smoothtongue, striped burrfish threadtail saber-toothed 
          blenny Red. Spanish mackerel yellow weaver sixgill.
        </p>
      </div>

      <div className="map-wrapper">
  <img src={worldMap} alt="World Map" className="dotted-map" />
  {/* Data-name attribute tooltips ke liye use hoga */}
  <div className="marker m1" data-name="Alaska"></div>
  <div className="marker m2" data-name="USA"></div>
  <div className="marker m3" data-name="Mexico"></div>
  <div className="marker m4" data-name="Brazil"></div>
  <div className="marker m5" data-name="Africa"></div>
  <div className="marker m6" data-name="Europe"></div>
  <div className="marker m7" data-name="Australia"></div>
</div>

      <div className="stats-footer">
        <div className="bronze-stripes-mask">
          <div className="stripe"></div>
          <div className="stripe"></div>
          <div className="stripe"></div>
        </div>
      </div>
    </section>
  
  );
};

export default StatsSection;


