import React, { useState } from 'react';
import "../../../style/ContentSection.css";

const ContentSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "How does your inspection process work?",
      answer: "At Prime Assessment Services and Solutions, we follow a structured inspection methodology that includes documentation review, on-site evaluation, and technical analysis using advanced diagnostic tools to ensure accurate and reliable results."
    },
    {
      question: "What type of inspection reports do you provide?",
      answer: "We deliver detailed structural and technical inspection reports including safety assessments, defect identification, and condition analysis to support informed decision-making for property owners and developers."
    },
    {
      question: "Do you use advanced technology for inspections?",
      answer: "Yes, we utilize modern inspection tools such as thermal cameras, moisture meters, multimeters, and 3D scanning technology to detect hidden structural issues with high precision and accuracy."
    }
  ];

  return (
    <div className="full-page-wrapper"> 
      <div className="content-container">

        {/* Inspection Strategy Section */}
        <section className="strategy-section">
          <h2 className="section-heading">Inspection Planning & Methodology</h2>

          <ul className="strategy-list">
            <li>
              <span className="list-icon">↘</span>
              Comprehensive site evaluation and risk assessment
            </li>
            <li>
              <span className="list-icon">↘</span>
              Advanced diagnostic tools and inspection techniques
            </li>
            <li>
              <span className="list-icon">↘</span>
              Accurate reporting with professional analysis
            </li>
          </ul>

          <div className="text-blocks">
            <p>
              Prime Assessment Services and Solutions specializes in professional inspection services focused on structural safety, quality assurance, and technical evaluation. We ensure every project is assessed with precision using modern inspection standards.
            </p>
            <p>
              Our inspection process identifies hidden defects, structural weaknesses, and safety risks using advanced tools and engineering expertise. We deliver clear, reliable insights that help clients make informed construction and property decisions.
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="faq-section">
          <h2 className="section-heading">Frequently Asked Inspection Questions</h2>

          <div className="faq-list">
            {faqData.map((item, index) => (
              <div key={index} className="faq-item">
                
                <div 
                  className="faq-question-row" 
                  onClick={() => toggleFAQ(index)} 
                  style={{ cursor: 'pointer' }}
                >
                  <h3 className="faq-question">{item.question}</h3>
                  <span className={`faq-arrow ${activeIndex === index ? 'active' : ''}`}>
                    {activeIndex === index ? '↓' : '→'}
                  </span>
                </div>

                {activeIndex === index && (
                  <p className="faq-answer">{item.answer}</p>
                )}

              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
};

export default ContentSection;