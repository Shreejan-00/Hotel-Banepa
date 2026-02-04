import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function TableReservation() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    restaurant: 'grand',
    specialRequests: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`Table reservation submitted!\n\nName: ${formData.name}\nRestaurant: ${formData.restaurant === 'grand' ? 'The Grand Restaurant' : formData.restaurant === 'himalayan' ? 'Himalayan Kitchen' : 'Rooftop Lounge'}\nDate: ${formData.date}\nTime: ${formData.time}\nGuests: ${formData.guests}\n\nWe will contact you shortly to confirm your reservation.`)
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      date: '',
      time: '',
      guests: '2',
      restaurant: 'grand',
      specialRequests: ''
    })
  }

  return (
    <section className="page-section container">
      <div className="room-details-header">
        <button onClick={() => navigate('/dining')} className="back-button">
          ← Back to Dining
        </button>
      </div>

      <div className="page-header">
        <h1 className="page-title">Book a Table</h1>
        <p className="page-subtitle">Reserve your dining experience at Hotel Banepa</p>
      </div>

      <div className="table-reservation-wrapper">
        <div className="reservation-form-container">
          <form onSubmit={handleSubmit} className="table-reservation-form">
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
                  placeholder="Enter your full name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="+977 XXX-XXXXXXX"
                />
              </div>
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
                placeholder="your.email@example.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="restaurant">Select Restaurant *</label>
              <select
                id="restaurant"
                name="restaurant"
                value={formData.restaurant}
                onChange={handleChange}
                required
              >
                <option value="grand">The Grand Restaurant</option>
                <option value="himalayan">Himalayan Kitchen</option>
                <option value="rooftop">Rooftop Lounge</option>
              </select>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="date">Reservation Date *</label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  min={new Date().toISOString().split('T')[0]}
                />
              </div>

              <div className="form-group">
                <label htmlFor="time">Reservation Time *</label>
                <input
                  type="time"
                  id="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="guests">Number of Guests *</label>
              <select
                id="guests"
                name="guests"
                value={formData.guests}
                onChange={handleChange}
                required
              >
                <option value="1">1 Guest</option>
                <option value="2">2 Guests</option>
                <option value="3">3 Guests</option>
                <option value="4">4 Guests</option>
                <option value="5">5 Guests</option>
                <option value="6">6 Guests</option>
                <option value="7">7 Guests</option>
                <option value="8">8 Guests</option>
                <option value="9">9 Guests</option>
                <option value="10+">10+ Guests</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="specialRequests">Special Requests (Optional)</label>
              <textarea
                id="specialRequests"
                name="specialRequests"
                value={formData.specialRequests}
                onChange={handleChange}
                rows="4"
                placeholder="Any dietary restrictions, special occasions, or seating preferences..."
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary btn-full">
              Confirm Reservation
            </button>
          </form>
        </div>

        <div className="reservation-info-sidebar">
          <div className="info-card">
            <h3>Restaurant Hours</h3>
            <div className="restaurant-hours-list">
              <div className="hours-item">
                <strong>The Grand Restaurant</strong>
                <p>7:00 AM - 10:30 PM</p>
              </div>
              <div className="hours-item">
                <strong>Himalayan Kitchen</strong>
                <p>11:00 AM - 10:00 PM</p>
              </div>
              <div className="hours-item">
                <strong>Rooftop Lounge</strong>
                <p>4:00 PM - 11:00 PM</p>
              </div>
            </div>
          </div>

          <div className="info-card">
            <h3>Contact Information</h3>
            <p><strong>Phone:</strong> +977-11-661234</p>
            <p><strong>Email:</strong> dining@hotelbanepa.com</p>
            <p className="info-note">For same-day reservations or groups of 10+, please call us directly.</p>
          </div>

          <div className="info-card">
            <h3>Cancellation Policy</h3>
            <p>Please notify us at least 2 hours in advance if you need to cancel or modify your reservation.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
