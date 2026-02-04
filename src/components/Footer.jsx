import React from 'react'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-wave"></div>
      <div className="container">
        <div className="footer-content">
          {/* Hotel Info Section */}
          <div className="footer-section">
            <h3 className="footer-brand">HOTEL BANEPA</h3>
            <div className="footer-contact-info">
              <p>Banepa-10, Kavre, Nepal</p>
              <p>+977 11-661234</p>
              <p>info@hotelbanepa.com</p>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="footer-section">
            <h4 className="footer-heading">Quick Links</h4>
            <nav className="footer-links">
              <a href="/about">About Us</a>
              <a href="/rooms">Rooms</a>
              <a href="/contact">Contact</a>
            </nav>
          </div>

          {/* Social Media Section */}
          <div className="footer-section">
            <h4 className="footer-heading">Follow Us</h4>
            <div className="footer-social">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <span className="social-icon">👥</span>
                <span>Facebook</span>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <span className="social-icon">💬</span>
                <span>Twitter</span>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <span className="social-icon">📷</span>
                <span>Instagram</span>
              </a>
            </div>
          </div>

          {/* Map Section - Replacing Newsletter */}
          <div className="footer-section">
            <h4 className="footer-heading">Find Us</h4>
            <div className="footer-map-inline">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.8447891234567!2d85.52!3d27.63!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjfCsDM3JzQ4LjAiTiA4NcKwMzEnMTIuMCJF!5e0!3m2!1sen!2snp!4v1234567890"
                width="100%"
                height="140"
                style={{ border: 0, borderRadius: '8px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Hotel Banepa Location"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Hotel Banepa — Your Home Away From Home</p>
        </div>
      </div>
    </footer>
  )
}
