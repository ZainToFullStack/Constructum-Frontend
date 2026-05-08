import React from 'react';
import "../style/TeamSection.css";

const teamMembers = [
  { 
    id: 1, 
    name: 'Adam Spilbern', 
    role: 'CEO Constructum', 
    label: 'building', 
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&h=250&auto=format&fit=crop' 
  },
  { 
    id: 2, 
    name: 'Ann Santana', 
    role: 'Head of Production', 
    label: 'renovation', 
    img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&h=250&auto=format&fit=crop' 
  },
  { 
    id: 3, 
    name: 'Helen Bishop', 
    role: 'Architect', 
    label: 'construction', 
    img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&h=250&auto=format&fit=crop' 
  },
  { 
    id: 4, 
    name: 'John Carter', 
    role: 'Manager', 
    label: 'roofing', 
    img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&h=250&auto=format&fit=crop' 
  },
  { 
    id: 5, 
    name: 'Sam Peters', 
    role: 'Designer', 
    label: 'repairing', 
    img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=200&h=250&auto=format&fit=crop' 
  },
];

const TeamSection = () => {
  return (
    <section className="team-container">
      <div className="bg-pattern"></div>

      <div className="team-grid">
        <div className="top-row">
          <div className="members-pair">
            {teamMembers.slice(0, 2).map((member) => (
              <div key={member.id} className="team-card">
                <div className="image-wrapper">
                  <img src={member.img} alt={member.name} />
                  <span className="vertical-label">{member.label}</span>
                </div>
                <div className="member-info">
                  <h4>{member.name}</h4>
                  <p>/ {member.role} /</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-content">
            <p className="sub-tag">/ creative staff /</p>
            <h2>Innovative builders crafting dream spaces with passion, precision and a touch of artistic brilliance</h2>
            <a href="#team" className="more-btn">MORE ABOUT TEAM ↗</a>
          </div>
        </div>

        <div className="bottom-row">
          <div className="stats-box">
            <h1 className="stats-number">250+</h1>
            <p className="stats-text">Awesome team members</p>
          </div>

          <div className="members-trio">
            {teamMembers.slice(2, 5).map((member) => (
              <div key={member.id} className="team-card">
                <div className="image-wrapper">
                  <img src={member.img} alt={member.name} />
                  <span className="vertical-label">{member.label}</span>
                </div>
                <div className="member-info">
                  <h4>{member.name}</h4>
                  <p>/ {member.role} /</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;