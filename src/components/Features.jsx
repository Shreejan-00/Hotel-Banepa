import React from 'react'

const features = [
  {
    key: 'wifi',
    title: 'Free Wi‑Fi',
    desc: 'High-speed internet throughout the property.',
    svg: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <path d="M2 8.5C6 5 11 5 15 8.5" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M5 11.5C7.5 9.5 10.5 9.5 13 11.5" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M8 14.5C9.25 13.5 10.75 13.5 12 14.5" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="12" cy="18" r="1" fill="#fff" />
      </svg>
    ),
  },
  {
    key: 'pool',
    title: 'Swimming Pool',
    desc: 'Outdoor pool with loungers and poolside service.',
    svg: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <path d="M2 16c2-2 4-2 6 0s4 2 6 0 4-2 6 0" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3 12c2-2 4-2 6 0s4 2 6 0 4-2 6 0" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    key: 'dining',
    title: 'Dining',
    desc: 'On-site restaurant offering local and international cuisine.',
    svg: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <path d="M7 3v12" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M11 3v12" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3 7h14" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    key: 'spa',
    title: 'Spa & Wellness',
    desc: 'Relaxing spa treatments and wellness programs.',
    svg: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <path d="M12 2c2 2 4 3 6 3s3-1 3-1" stroke="#fff" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M5 21c2-2 4-3 7-3s5 1 7 3" stroke="#fff" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 7a3 3 0 100 6 3 3 0 000-6z" stroke="#fff" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    key: 'service',
    title: '24/7 Service',
    desc: 'Friendly staff available around the clock.',
    svg: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <path d="M12 2v2" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M20 12h2" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 22v-2" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 12h2" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="12" cy="12" r="3" fill="#fff" />
      </svg>
    ),
  },
  {
    key: 'shuttle',
    title: 'Airport Shuttle',
    desc: 'Convenient transfers to and from the airport.',
    svg: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <path d="M3 13h14l3 3v1" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="7" cy="18" r="1.4" fill="#fff"/>
        <circle cx="17" cy="18" r="1.4" fill="#fff"/>
      </svg>
    ),
  },
]

export default function Features() {
  return (
    <section id="features" className="features container">
      <div className="features-grid">
        {features.map((f) => (
          <div key={f.key} className="feature-card">
            <div className="feature-icon" aria-hidden>
              {f.svg}
            </div>
            <h3>{f.title}</h3>
            <p>{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
