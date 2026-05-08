import React, { useState } from 'react';
import "../../../style/ContentSection.css";

const ContentSection = () => {
  // State to track which FAQ index is open
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "Where I can find instructions to technology process?",
      answer: "Trumpeter candlefish sheatfish dorado yellowtail kingfish Black swallower Rio Grande perch Atlantic herring porbeagle shark. Stickleback; Rabbitfish orangespine unicorn fish saber-toothed blenny bigeye northern anchovy"
    },
    {
      question: "How to work with documentation?",
      answer: "Trumpeter candlefish sheatfish dorado yellowtail kingfish Black swallower Rio Grande perch Atlantic herring porbeagle shark. Stickleback; Rabbitfish orangespine unicorn fish saber-toothed blenny bigeye northern anchovy"
    },
    {
      question: "Can you help with development?",
      answer: "Trumpeter candlefish sheatfish dorado yellowtail kingfish Black swallower Rio Grande perch Atlantic herring porbeagle shark. Stickleback; Rabbitfish orangespine unicorn fish saber-toothed blenny bigeye northern anchovy"
    }
  ];

  return (
    <div className="full-page-wrapper"> 
      <div className="content-container">
        {/* Planing & Strategy Section */}
        <section className="strategy-section">
          <h2 className="section-heading">Planing & Strategy</h2>
          <ul className="strategy-list">
            <li>
              <span className="list-icon">↘</span>
              Research beyond the business plan
            </li>
            <li>
              <span className="list-icon">↘</span>
              Marketing options and rates
            </li>
            <li>
              <span className="list-icon">↘</span>
              The ability to turnaround consulting
            </li>
          </ul>

          <div className="text-blocks">
            <p>
              Trumpeter candlefish sheatfish dorado yellowtail kingfish Black swallower Rio Grande perch Atlantic herring porbeagle shark. Stickleback; Rabbitfish orangespine unicorn fish saber-toothed blenny bigeye northern anchovy
            </p>
            <p>
              Reef triggerfish goblin shark sand knifefish; slickhead grass carp. Clown loach California flyingfish, Atlantic eel false cat shark, "snake mudhead sabertooth fish paradise fish char aruana squeaker." Houndshark Alaska blackfish Pacific viperfish slender mola lake trout, sprat, tarwhine, graveldiver dace longnose lancetfish stickleback peamouth Indian mul. Sandroller; Peter's elephantnose fish long-finned char.
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="faq-section">
          <h2 className="section-heading">Freuqency asked questions</h2>
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
                
                {/* Answer only shows if activeIndex matches current index */}
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