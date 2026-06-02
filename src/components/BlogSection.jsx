import React from 'react';
import '../style/BlogSection.css';
import featureImg from "../assets/featureImg.png";

const BlogSection = () => {
  const posts = [
    {
      id: 1,
      category: 'Inspection Insights',
      date: '2',
      month: "Jan '26",
      title: 'Ensuring safer buildings through modern inspection practices',
      image: featureImg
    },
    {
      id: 2,
      category: 'Structural Analysis',
      date: '9',
      month: "Jan '26",
      title: 'Advancing property evaluation with precise inspection techniques',
      image: 'https://i.pinimg.com/1200x/76/54/52/765452f06fa116fae63e1411a22a9264.jpg'
    },
    {
      id: 3,
      category: 'Property Assessment',
      date: '14',
      month: "Jan '26",
      title: 'Delivering accurate inspection reports for informed decisions',
      image: 'https://plus.unsplash.com/premium_photo-1682974932129-134fc233442d?q=80&w=387&auto=format&fit=crop'
    }
  ];

  return (
    <section className="blog-container">
      <div className="blog-header">
        <span className="blog-sub">/ insights /</span>
        <h2 className="blog-main-title">
          Expert inspection knowledge and property evaluation <br />
          insights for better decision-making
        </h2>
      </div>

      <div className="blog-grid">
        {posts.map((post) => (
          <div key={post.id} className="blog-card">
            <div className="blog-image-wrapper">
              <img src={post.image} alt={post.title} className="blog-image" />
              <div className="blog-date-badge">
                <span className="date-day">{post.date}</span>
                <span className="date-month">{post.month}</span>
              </div>
            </div>

            <div className="blog-content">
              <p className="blog-category">/ {post.category} /</p>
              <h3 className="blog-post-title">{post.title}</h3>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};

export default BlogSection;