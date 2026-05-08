import React from "react";
import { FaSearch, FaUserTie, FaShieldAlt } from "react-icons/fa";
import "../../../style/homewhyussec5.css";
import exteriorhouseimg from "../../../assets/homeexteriorinspection.jpg";
import buildinginspectionimg from "../../../assets/buildinginspectionimg.avif";
import homeINTERIORinspection from "../../../assets/homeINTERIORinspection.jpg";

const WhyChooseUs = () => {
    return (
        <section className="whyus">
            <div className="whyus__wrapper">
                <div className="whyus__container">
                    {/* LEFT CONTENT */}
                    <div className="whyus__content">
                        <div className="whyus__header">
                            <span className="whyus__label">
                                <span className="whyus__dot"></span>
                                <span className="whyus__label-text">WHY CHOOSE US</span>
                            </span>

                            <h2 className="whyus__title">
                                Trusted Building & Home Inspection <br className="whyus__line-break" /> Experts
                            </h2>
                            
                            <div className="whyus__divider"></div>
                        </div>

                        <p className="whyus__description">
                            We provide detailed, unbiased inspections to help you
                            understand the true condition of your property—from
                            foundation to roof—so you can make confident decisions.
                        </p>

                        <div className="whyus__features">
                            {/* Feature 1 */}
                            <div className="whyus__feature">
                                <div className="whyus__feature-icon-wrapper">
                                    <FaSearch className="whyus__icon" />
                                </div>
                                <div className="whyus__feature-content">
                                    <h4 className="whyus__feature-title">Thorough Property Inspection</h4>
                                    <p className="whyus__feature-text">
                                        Complete evaluation of structure, roofing,
                                        plumbing, electrical systems, and safety
                                        concerns.
                                    </p>
                                </div>
                            </div>

                            {/* Feature 2 */}
                            <div className="whyus__feature">
                                <div className="whyus__feature-icon-wrapper">
                                    <FaUserTie className="whyus__icon" />
                                </div>
                                <div className="whyus__feature-content">
                                    <h4 className="whyus__feature-title">Certified & Experienced Inspectors</h4>
                                    <p className="whyus__feature-text">
                                        Inspections performed by trained professionals
                                        with years of on-site building assessment
                                        experience.
                                    </p>
                                </div>
                            </div>

                            {/* Feature 3 */}
                            <div className="whyus__feature">
                                <div className="whyus__feature-icon-wrapper">
                                    <FaShieldAlt className="whyus__icon" />
                                </div>
                                <div className="whyus__feature-content">
                                    <h4 className="whyus__feature-title">Reliable Reports & Peace of Mind</h4>
                                    <p className="whyus__feature-text">
                                        Clear, easy-to-understand reports that help
                                        buyers, sellers, and owners avoid costly
                                        surprises.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT IMAGES */}
                    <div className="whyus__images">
                        <div className="whyus__images-grid">
                            <div className="whyus__accent"></div>
                            <div className="whyus__accent-secondary"></div>

                            <div className="whyus__img-wrapper whyus__img-wrapper--main">
                                <img
                                    src={buildinginspectionimg}
                                    alt="Inspector checking house interior"
                                    className="whyus__img"
                                    loading="lazy"
                                />
                                <div className="whyus__img-overlay"></div>
                            </div>

                            <div className="whyus__img-wrapper whyus__img-wrapper--top">
                                <img
                                    src={exteriorhouseimg}
                                    alt="Home inspection exterior"
                                    className="whyus__img"
                                    loading="lazy"
                                />
                                <div className="whyus__img-overlay"></div>
                            </div>

                            <div className="whyus__img-wrapper whyus__img-wrapper--bottom">
                                <img
                                    src={homeINTERIORinspection}
                                    alt="Building structure inspection"
                                    className="whyus__img"
                                    loading="lazy"
                                />
                                <div className="whyus__img-overlay"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;