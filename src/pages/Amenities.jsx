import React from 'react'

const amenities = [
  {
    category: 'Recreation',
    items: [
      { name: 'Swimming Pool', desc: 'Outdoor pool with loungers and poolside service', icon: '🏊' },
      { name: 'Fitness Center', desc: 'Fully equipped gym with modern equipment', icon: '💪' },
      { name: 'Spa & Wellness', desc: 'Relaxing spa treatments and massage services', icon: '🧖' },
      { name: 'Garden Area', desc: 'Beautiful landscaped gardens for relaxation', icon: '🌳' }
    ]
  },
  {
    category: 'Business',
    items: [
      { name: 'Conference Rooms', desc: 'Modern meeting rooms with AV equipment', icon: '🏢' },
      { name: 'Business Center', desc: 'Printing, scanning, and office services', icon: '💼' },
      { name: 'High-Speed Wi-Fi', desc: 'Complimentary internet throughout the property', icon: '📶' },
      { name: 'Event Halls', desc: 'Spacious halls for conferences and events', icon: '🎪' }
    ]
  },
  {
    category: 'Services',
    items: [
      { name: '24/7 Room Service', desc: 'Round-the-clock dining in your room', icon: '🛎️' },
      { name: 'Concierge', desc: 'Personal assistance for all your needs', icon: '👨‍💼' },
      { name: 'Laundry Service', desc: 'Same-day laundry and dry cleaning', icon: '👔' },
      { name: 'Airport Shuttle', desc: 'Convenient transfers to and from airport', icon: '🚐' }
    ]
  },
  {
    category: 'Convenience',
    items: [
      { name: 'Free Parking', desc: 'Secure parking for all guests', icon: '🅿️' },
      { name: 'Currency Exchange', desc: 'Foreign exchange services available', icon: '💱' },
      { name: 'Travel Desk', desc: 'Tour bookings and travel assistance', icon: '✈️' },
      { name: 'Medical Assistance', desc: 'On-call doctor and first aid', icon: '🏥' }
    ]
  },
  {
    category: 'Food and Beverage',
    items: [
      { name: 'Restaurant', desc: 'Fine dining experience with international and local cuisine prepared by expert chefs in an elegant atmosphere', icon: '🍽️' },
      { name: 'Bar', desc: 'Sophisticated lounge bar offering premium spirits, signature cocktails, and live entertainment in a relaxed setting', icon: '🍸' },
      { name: 'Room Service', desc: 'Extensive in-room dining menu available 24/7, delivering fresh meals directly to your room for ultimate convenience', icon: '🛎️' },
      { name: 'Coffee Shop', desc: 'Cozy café serving freshly brewed coffee, artisan pastries, and light snacks throughout the day', icon: '☕' }
    ]
  }
]

export default function Amenities() {
  return (
    <section className="page-section container">
      <div className="page-header">
        <h1 className="page-title">Amenities</h1>
        <p className="page-subtitle">Everything you need for a comfortable stay</p>
      </div>
      
      <div className="amenities-container">
        {amenities.map((category, index) => (
          <div key={index} className="amenity-category">
            <h2 className="category-title">{category.category}</h2>
            <div className="amenity-grid">
              {category.items.map((item, idx) => (
                <div key={idx} className="amenity-card">
                  <div className="amenity-icon">{item.icon}</div>
                  <h3>{item.name}</h3>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
