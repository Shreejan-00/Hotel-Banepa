import React, { useState } from 'react'

export default function Booking() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    checkIn: '',
    checkOut: '',
    guests: '1',
    roomType: 'deluxe',
    specialRequests: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Booking submitted:', formData)
    alert('Thank you for your booking request! We will contact you shortly.')
  }

  return (
    <section className="page-section container">
      <div className="page-header">
        <h1 className="page-title">Book Your Stay</h1>
        <p className="page-subtitle">Reserve your perfect room at Hotel Banepa</p>
      </div>

      <div className="booking-wrapper">
        <form className="booking-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">Full Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="phone">Phone Number *</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="guests">Number of Guests *</label>
              <input
                type="number"
                id="guests"
                name="guests"
                min="1"
                max="10"
                value={formData.guests}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="checkIn">Check-in Date *</label>
              <input
                type="date"
                id="checkIn"
                name="checkIn"
                value={formData.checkIn}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="checkOut">Check-out Date *</label>
              <input
                type="date"
                id="checkOut"
                name="checkOut"
                value={formData.checkOut}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="roomType">Room Type *</label>
            <select
              id="roomType"
              name="roomType"
              value={formData.roomType}
              onChange={handleChange}
              required
            >
              <option value="standard">Standard Room - NPR 3,500/night</option>
              <option value="deluxe">Deluxe Room - NPR 5,000/night</option>
              <option value="executive">Executive Suite - NPR 8,500/night</option>
              <option value="family">Family Suite - NPR 12,000/night</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="specialRequests">Special Requests</label>
            <textarea
              id="specialRequests"
              name="specialRequests"
              rows="4"
              value={formData.specialRequests}
              onChange={handleChange}
              placeholder="Any special requirements or preferences..."
            />
          </div>

          <button type="submit" className="btn btn-primary btn-full">
            Confirm Booking
          </button>
        </form>

        <div className="booking-info">
          <div className="info-card">
            <h3>Booking Information</h3>
            <ul>
              <li>✓ Free cancellation up to 24 hours before check-in</li>
              <li>✓ No prepayment needed - pay at the property</li>
              <li>✓ Confirmation within 2 hours</li>
              <li>✓ Best price guarantee</li>
            </ul>
          </div>

          <div className="info-card">
            <h3>Check-in/Check-out</h3>
            <p><strong>Check-in:</strong> From 2:00 PM</p>
            <p><strong>Check-out:</strong> Until 12:00 PM</p>
          </div>

          <div className="info-card">
            <h3>Need Help?</h3>
            <p>Contact our reservation team:</p>
            <p><strong>Phone:</strong> +977-11-661234</p>
            <p><strong>Email:</strong> reservations@hotelbanepa.com</p>
          </div>
        </div>
      </div>
    </section>
  )
}
