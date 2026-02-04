import React from 'react'

export default function Hero() {
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
          <img src="/bg.jpg" alt="Hero background" className="hero-image" />
        </div>
      </div>
    </section>
  )
}
