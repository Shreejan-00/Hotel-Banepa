import React from 'react'
import { Link } from 'react-router-dom'

const rooms = [
  {
    id: 1,
    name: 'Deluxe Room',
    description: 'Spacious room with modern amenities and city view.',
    price: 'NPR 5,000',
    features: ['King Size Bed', 'Free Wi-Fi', 'Air Conditioning', 'Mini Bar'],
    image: '/bg.jpg'
  },
  {
    id: 2,
    name: 'Executive Suite',
    description: 'Luxurious suite with separate living area and premium facilities.',
    price: 'NPR 8,500',
    features: ['King Size Bed', 'Living Room', 'Free Wi-Fi', 'Jacuzzi', 'Mini Bar'],
    image: '/project img 3.jpg'
  },
  {
    id: 3,
    name: 'Standard Room',
    description: 'Comfortable room perfect for business travelers.',
    price: 'NPR 3,500',
    features: ['Queen Size Bed', 'Free Wi-Fi', 'Air Conditioning'],
    image: '/as.avif'
  },
  {
    id: 4,
    name: 'Family Suite',
    description: 'Perfect for families with extra space and amenities.',
    price: 'NPR 12,000',
    features: ['2 Bedrooms', 'Living Room', 'Kitchen', 'Free Wi-Fi', 'Balcony'],
    image: '/af.jpg'
  }
]

export default function Rooms() {
  return (
    <section className="page-section container">
      <div className="page-header">
        <h1 className="page-title">Rooms & Suites</h1>
        <p className="page-subtitle">Experience comfort and luxury in our well-appointed rooms</p>
      </div>
      
      <div className="rooms-grid">
        {rooms.map((room) => (
          <div key={room.id} className="room-card">
            <Link to={`/rooms/${room.id}`} className="room-image-link">
              <div className="room-image">
                <img src={room.image} alt={room.name} />
              </div>
            </Link>
            <div className="room-info">
              <Link to={`/rooms/${room.id}`} className="room-name-link">
                <h3 className="room-name">{room.name}</h3>
              </Link>
              <p className="room-description">{room.description}</p>
              <ul className="room-features">
                {room.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
              <div className="room-footer">
                <span className="room-price">{room.price}<small>/night</small></span>
                <Link to={`/rooms/${room.id}`} className="btn btn-primary">View Details</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
