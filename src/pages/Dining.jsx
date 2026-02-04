import React from 'react'
import { Link } from 'react-router-dom'

const restaurants = [
  {
    id: 1,
    name: 'The Grand Restaurant',
    type: 'Multi-Cuisine',
    description: 'Our signature restaurant offering a blend of local and international cuisines. Experience fine dining with panoramic views.',
    hours: '7:00 AM - 10:30 PM',
    image: '/aj.jpg',
    highlights: ['Breakfast Buffet', 'À la carte Lunch & Dinner', 'Live Cooking Stations'],
    menuLink: '/dining/grand-restaurant-menu'
  },
  {
    id: 2,
    name: 'Himalayan Kitchen',
    type: 'Nepali & Tibetan',
    description: 'Authentic Nepali and Tibetan cuisine prepared with traditional recipes and fresh local ingredients.',
    hours: '11:00 AM - 10:00 PM',
    image: '/ak.jpg',
    highlights: ['Traditional Dal Bhat', 'Momos', 'Thukpa', 'Newari Cuisine'],
    menuLink: '/dining/himalayan-kitchen-menu'
  },
  {
    id: 3,
    name: 'Rooftop Lounge',
    type: 'Bar & Lounge',
    description: 'Relax with cocktails and light bites while enjoying stunning mountain views from our rooftop terrace.',
    hours: '4:00 PM - 11:00 PM',
    image: '/al.jpg',
    highlights: ['Signature Cocktails', 'Wine Selection', 'Tapas', 'Live Music (Weekends)'],
    menuLink: '/dining/rooftop-lounge-menu'
  }
]

const menuHighlights = [
  { name: 'Breakfast Buffet', price: 'NPR 800', desc: 'Continental & Nepali breakfast spread' },
  { name: 'Lunch Set Menu', price: 'NPR 650', desc: 'Three-course meal with beverage' },
  { name: 'Dinner Buffet', price: 'NPR 1,200', desc: 'International buffet with live stations' },
  { name: 'High Tea', price: 'NPR 450', desc: 'Selection of teas with snacks' }
]

export default function Dining() {
  return (
    <section className="page-section container">
      <div className="page-header">
        <h1 className="page-title">Dining</h1>
        <p className="page-subtitle">Savor exquisite flavors at our restaurants</p>
      </div>
      
      <div className="dining-restaurants">
        {restaurants.map((restaurant) => (
          <div key={restaurant.id} className="restaurant-card">
            <div className="restaurant-image">
              <img src={restaurant.image} alt={restaurant.name} />
            </div>
            <div className="restaurant-info">
              <span className="restaurant-type">{restaurant.type}</span>
              <h3 className="restaurant-name">{restaurant.name}</h3>
              <p className="restaurant-description">{restaurant.description}</p>
              <div className="restaurant-hours">
                <span>🕐</span> {restaurant.hours}
              </div>
              <div className="restaurant-highlights">
                <h4>Highlights:</h4>
                <ul>
                  {restaurant.highlights.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
              <Link to={restaurant.menuLink} className="btn btn-outline">View Menu</Link>
            </div>
          </div>
        ))}
      </div>
      
      <div className="reservation-cta">
        <h2>Make a Reservation</h2>
        <p>For table reservations, please call us at <strong>+977-11-661234</strong> or email <strong>dining@hotelbanepa.com</strong></p>
        <Link to="/booking" className="btn btn-primary btn-reservation">Reserve a Table</Link>
      </div>
    </section>
  )
}
