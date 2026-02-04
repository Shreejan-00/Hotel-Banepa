import React, { useState, useEffect } from 'react'

export default function Hero() {
  const images = [
    '/bg.jpg',
    '/af.jpg',
    '/ah.jpg',
    '/aj.jpg',
    
  ]
  
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [images.length])

  const goToSlide = (index) => {
    setCurrentIndex(index)
  }

  return (
    <section id="about" className="hero container">
      <div className="hero-content">
        <div className="hero-brand">
          <span className="hero-welcome">Welcome To</span>
          <h1 className="hero-hotel">Hotel Banepa</h1>
        </div>
        <div className="hero-ctas">
          <button className="btn btn-primary">Get started</button>
          <button className="btn btn-outline"></button>
        </div>
      </div>
      <div className="hero-media">
        <div className="device-mock">
          <div className="hero-slider">
            {images.map((image, index) => (
              <img 
                key={index}
                src={image} 
                alt={`Hero image ${index + 1}`} 
                className={`hero-image ${index === currentIndex ? 'active' : ''}`}
              />
            ))}
          </div>
          <div className="slider-dots">
            {images.map((_, index) => (
              <button 
                key={index}
                className={`dot ${index === currentIndex ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
