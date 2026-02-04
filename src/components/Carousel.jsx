import React, { useState, useEffect } from 'react'

const slides = [
  { id: 1, title: 'Design Systems', desc: 'Reusable components for fast builds.' },
  { id: 2, title: 'Responsive Layouts', desc: 'Layouts that adapt to any device.' },
  { id: 3, title: 'Interactive Prototypes', desc: 'Bring designs to life with animations.' },
]

export default function Carousel({ interval = 4000 }) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % slides.length), interval)
    return () => clearInterval(t)
  }, [interval])

  return (
    <section id="rooms" className="carousel container">
      <div className="carousel-track">
        {slides.map((s, i) => (
          <div
            key={s.id}
            className={`carousel-slide ${i === index ? 'active' : ''}`}
            aria-hidden={i !== index}
          >
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>
      <div className="carousel-controls">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`dot ${i === index ? 'active' : ''}`}
            onClick={() => setIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
