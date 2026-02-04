import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from '../assets/hotel-logo.svg'

export default function Header() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  const handleNavClick = () => {
    setOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link to="/" className="brand" onClick={handleNavClick}>
          <img src={logo} alt="Hotel Banepa logo" className="brand-logo" />
          <div className="brand-text">
            <span className="brand-welcome"></span>
            <span className="brand-name">Hotel Banepa</span>
          </div>
        </Link>

        <button
          className="nav-toggle"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((s) => !s)}
        >
          <span className={`hamburger ${open ? 'open' : ''}`} />
        </button>

        <nav role="navigation" className={`nav ${open ? 'open' : ''}`}>
          <Link to="/about" className={isActive('/about') ? 'active' : ''} onClick={handleNavClick}>About</Link>
          <Link to="/rooms" className={isActive('/rooms') ? 'active' : ''} onClick={handleNavClick}>Rooms &amp; Suites</Link>
          <Link to="/amenities" className={isActive('/amenities') ? 'active' : ''} onClick={handleNavClick}>Amenities</Link>
          <Link to="/dining" className={isActive('/dining') ? 'active' : ''} onClick={handleNavClick}>Dining</Link>
          <Link to="/contact" className={isActive('/contact') ? 'active' : ''} onClick={handleNavClick}>Contact Us</Link>
          <Link to="/booking" className="book-now" onClick={handleNavClick}>Book now</Link>
        </nav>
      </div>
    </header>
  )
}
