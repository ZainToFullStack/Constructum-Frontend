import React from "react";
import "../../../style/aboutsec1.css";

const AboutInspection = () => {
    return (
        <section className="about-inspection">
            <div className="about-inspection__overlay"></div>
            <div className="about-inspection__container">
                <div className="about-inspection__content">
                    <div className="about-inspection__text">
                        <span className="about-inspection__subtitle">WHO WE ARE</span>
                        <h2 className="about-inspection__title">About Us</h2>
                        <div className="about-inspection__divider"></div>
                        <p className="about-inspection__description">
                            We provide professional building and house inspections for buyers and
                            sellers in Pakistan, ensuring every detail is checked so you can make
                            informed and confident decisions.
                        </p>
                        <div className="about-inspection__accent"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutInspection;