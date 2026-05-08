import React from 'react';
import '../style/BlogSection.css';

const BlogSection = () => {
  const posts = [
    {
      id: 1,
      category: 'Construction',
      date: '14',
      month: "Jan '26",
      title: 'Building the future: sustainable construction practices',
      image: 'https://plus.unsplash.com/premium_photo-1683134181132-d21384512e01?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      id: 2,
      category: 'Building',
      date: '14',
      month: "Jan '26",
      title: 'Unveiling the artistry in modern construction techniques',
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1000&auto=format&fit=crop'
    },
    {
      id: 3,
      category: 'Renovation',
      date: '14',
      month: "Jan '26",
      title: 'Construction of a new high-tech plant in Washington',
      image: 'https://plus.unsplash.com/premium_photo-1682974932129-134fc233442d?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }
  ];

  return (
    <section className="blog-container">
      <div className="blog-header">
        <span className="blog-sub">/ blog /</span>
        <h2 className="blog-main-title">
          Articles and blog posts filled <br /> with valuable insights and knowledge
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

      <div className="blog-footer">
        <a href="#" className="more-posts-btn">
          MORE POSTS <span className="arrow">↗</span>
        </a>
      </div>
    </section>
  );
};

export default BlogSection;