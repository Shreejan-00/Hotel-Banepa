import React from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'

const rooms = [
  {
    id: 1,
    name: 'Deluxe Room',
    description: 'Spacious room with modern amenities and city view.',
    fullDescription: 'Our Deluxe Room offers a perfect blend of comfort and style. Featuring contemporary design with warm tones, this spacious room provides everything you need for a relaxing stay. Enjoy stunning city views from your window while experiencing premium comfort.',
    price: 'NPR 5,000',
    features: ['King Size Bed', 'Free Wi-Fi', 'Air Conditioning', 'Mini Bar'],
    amenities: [
      'Flat-screen TV with cable channels',
      'Work desk and chair',
      'In-room safe',
      'Coffee/tea maker',
      'Private bathroom with shower',
      'Complimentary toiletries',
      'Daily housekeeping',
      '24-hour room service'
    ],
    image: '/bg.jpg',
    size: '35 sqm',
    maxGuests: 2
  },
  {
    id: 2,
    name: 'Executive Suite',
    description: 'Luxurious suite with separate living area and premium facilities.',
    fullDescription: 'Experience ultimate luxury in our Executive Suite. This spacious accommodation features a separate living area, premium furnishings, and exclusive amenities. Perfect for business travelers or those seeking extra comfort and space during their stay.',
    price: 'NPR 8,500',
    features: ['King Size Bed', 'Living Room', 'Free Wi-Fi', 'Jacuzzi', 'Mini Bar'],
    amenities: [
      'Separate living and sleeping areas',
      'Jacuzzi bathtub',
      'Premium bedding and linens',
      'Large flat-screen TV',
      'Executive work desk',
      'Complimentary breakfast',
      'Express check-in/out',
      'Priority room service',
      'Nespresso machine'
    ],
    image: '/project img 3.jpg',
    size: '55 sqm',
    maxGuests: 3
  },
  {
    id: 3,
    name: 'Standard Room',
    description: 'Comfortable room perfect for business travelers.',
    fullDescription: 'Our Standard Room provides all the essentials for a comfortable stay at an excellent value. Clean, modern, and well-appointed, this room is ideal for business travelers or those looking for quality accommodation without unnecessary extras.',
    price: 'NPR 3,500',
    features: ['Queen Size Bed', 'Free Wi-Fi', 'Air Conditioning'],
    amenities: [
      'Queen size bed',
      'Flat-screen TV',
      'Work desk',
      'Free Wi-Fi',
      'Air conditioning',
      'Private bathroom',
      'Daily housekeeping',
      'Complimentary toiletries'
    ],
    image: '/as.avif',
    size: '28 sqm',
    maxGuests: 2
  },
  {
    id: 4,
    name: 'Family Suite',
    description: 'Perfect for families with extra space and amenities.',
    fullDescription: 'Our Family Suite is designed with families in mind, offering ample space and comfort for everyone. With two separate bedrooms, a living area, and a kitchenette, this suite provides a home-away-from-home experience perfect for extended stays.',
    price: 'NPR 12,000',
    features: ['2 Bedrooms', 'Living Room', 'Kitchen', 'Free Wi-Fi', 'Balcony'],
    amenities: [
      'Two separate bedrooms',
      'Full living room',
      'Kitchenette with refrigerator',
      'Dining area',
      'Private balcony',
      'Two bathrooms',
      'Multiple flat-screen TVs',
      'Washer and dryer',
      'Extra storage space',
      'Children\'s amenities available'
    ],
    image: '/af.jpg',
    size: '75 sqm',
    maxGuests: 6
  }
]

export default function RoomDetails() {
  const { id } = useParams()
  const navigate = useNavigate()
  const room = rooms.find(r => r.id === parseInt(id))

  if (!room) {
    return (
      <section className="page-section container">
        <div className="page-header">
          <h1 className="page-title">Room Not Found</h1>
          <p className="page-subtitle">The room you're looking for doesn't exist.</p>
        </div>
        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <Link to="/rooms" className="btn btn-primary">Back to Rooms</Link>
        </div>
      </section>
    )
  }

  return (
    <section className="page-section container">
      <div className="room-details-header">
        <button onClick={() => navigate('/rooms')} className="back-button">
          ← Back to Rooms
        </button>
      </div>

      <div className="room-details-content">
        <div className="room-details-main">
          <div className="room-details-image">
            <img src={room.image} alt={room.name} />
          </div>

          <div className="room-details-info">
            <h1 className="room-details-title">{room.name}</h1>
            <div className="room-details-meta">
              <span>📏 {room.size}</span>
              <span>👥 Up to {room.maxGuests} guests</span>
            </div>

            <p className="room-details-description">{room.fullDescription}</p>

            <div className="room-details-section">
              <h3>Key Features</h3>
              <ul className="room-features-list">
                {room.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>

            <div className="room-details-section">
              <h3>Room Amenities</h3>
              <ul className="room-amenities-list">
                {room.amenities.map((amenity, index) => (
                  <li key={index}>{amenity}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="room-details-sidebar">
          <div className="booking-card">
            <div className="booking-card-price">
              <span className="price-amount">{room.price}</span>
              <span className="price-period">/night</span>
            </div>

            <Link to="/booking" className="btn btn-primary btn-full">
              Book This Room
            </Link>

            <div className="booking-card-info">
              <h4>What's Included</h4>
              <ul>
                <li>✓ Free Wi-Fi</li>
                <li>✓ Daily housekeeping</li>
                <li>✓ 24-hour front desk</li>
                <li>✓ Free parking</li>
              </ul>
            </div>

            <div className="booking-card-policies">
              <h4>Policies</h4>
              <p><strong>Check-in:</strong> 2:00 PM</p>
              <p><strong>Check-out:</strong> 12:00 PM</p>
              <p><strong>Cancellation:</strong> Free up to 24 hours before</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
