import React from 'react'

export default function About() {
  return (
    <section className="page-section container">
      <div className="page-header">
        <h1 className="page-title">About Us</h1>
        <p className="page-subtitle">Discover the story of Hotel Banepa</p>
      </div>
      
      <div className="about-content">
        <div className="about-text">
          <h2>Our Story</h2>
          <p>
            Welcome to Hotel Banepa, a premier destination nestled in the heart of Banepa. 
            Since our establishment, we have been committed to providing exceptional hospitality 
            and creating memorable experiences for our guests.
          </p>
          <p>
            Our hotel combines traditional Nepali warmth with modern amenities, offering a 
            unique blend of comfort and cultural authenticity. Whether you're here for business 
            or leisure, we strive to make your stay unforgettable.
          </p>
          
          <h2>Our Mission</h2>
          <p>
            To provide world-class hospitality services while preserving and showcasing the 
            rich cultural heritage of Nepal. We believe in sustainable tourism and are committed 
            to supporting our local community.
          </p>
          
          <h2>Why Choose Us?</h2>
          <ul className="about-features">
            <li>Prime location in the heart of Banepa</li>
            <li>Experienced and friendly staff</li>
            <li>Modern amenities with traditional charm</li>
            <li>Authentic local and international cuisine</li>
            <li>24/7 customer service</li>
          </ul>
        </div>
        
        <div className="about-image">
          <img src="/bg.jpg" alt="Hotel Banepa" className="about-img" />
        </div>
      </div>
    </section>
  )
}
