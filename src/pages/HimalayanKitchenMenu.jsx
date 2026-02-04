import React from 'react'
import { useNavigate } from 'react-router-dom'

const menuCategories = [
  {
    category: 'Nepali Specialties',
    items: [
      { name: 'Dal Bhat Set', price: 'NPR 550', desc: 'Traditional lentil soup, rice, vegetable curry, pickle, papad' },
      { name: 'Chicken Dal Bhat', price: 'NPR 650', desc: 'Dal bhat with chicken curry' },
      { name: 'Mutton Dal Bhat', price: 'NPR 750', desc: 'Dal bhat with mutton curry' },
      { name: 'Thakali Khana Set', price: 'NPR 700', desc: 'Authentic Thakali-style meal with multiple curries' }
    ]
  },
  {
    category: 'Momos & Dumplings',
    items: [
      { name: 'Vegetable Momo (10 pcs)', price: 'NPR 300', desc: 'Steamed vegetable dumplings' },
      { name: 'Chicken Momo (10 pcs)', price: 'NPR 350', desc: 'Steamed chicken dumplings' },
      { name: 'Buff Momo (10 pcs)', price: 'NPR 400', desc: 'Steamed buffalo meat dumplings' },
      { name: 'Fried Momo (10 pcs)', price: 'NPR 380', desc: 'Deep-fried chicken or veg momos' },
      { name: 'Jhol Momo (10 pcs)', price: 'NPR 420', desc: 'Momos in spicy sesame soup' },
      { name: 'C-Momo (10 pcs)', price: 'NPR 450', desc: 'Momos with special chili sauce' }
    ]
  },
  {
    category: 'Tibetan Cuisine',
    items: [
      { name: 'Thukpa', price: 'NPR 400', desc: 'Tibetan noodle soup with vegetables' },
      { name: 'Chicken Thukpa', price: 'NPR 450', desc: 'Noodle soup with chicken' },
      { name: 'Tingmo', price: 'NPR 250', desc: 'Steamed Tibetan bread (3 pcs)' },
      { name: 'Thenthuk', price: 'NPR 420', desc: 'Hand-pulled noodle soup' },
      { name: 'Sha Phaley', price: 'NPR 380', desc: 'Tibetan meat-filled bread (2 pcs)' }
    ]
  },
  {
    category: 'Newari Cuisine',
    items: [
      { name: 'Newari Khaja Set', price: 'NPR 800', desc: 'Assorted Newari snacks platter' },
      { name: 'Choila (Chicken)', price: 'NPR 550', desc: 'Spiced grilled chicken' },
      { name: 'Choila (Buff)', price: 'NPR 600', desc: 'Spiced grilled buffalo meat' },
      { name: 'Bara (2 pcs)', price: 'NPR 200', desc: 'Lentil pancakes' },
      { name: 'Chatamari', price: 'NPR 250', desc: 'Nepali rice crepe with toppings' },
      { name: 'Yomari (3 pcs)', price: 'NPR 300', desc: 'Sweet steamed dumplings' }
    ]
  },
  {
    category: 'Beverages',
    items: [
      { name: 'Butter Tea (Po Cha)', price: 'NPR 150', desc: 'Traditional Tibetan butter tea' },
      { name: 'Masala Chiya', price: 'NPR 100', desc: 'Spiced Nepali milk tea' },
      { name: 'Lassi', price: 'NPR 180', desc: 'Sweet or salty yogurt drink' },
      { name: 'Tongba', price: 'NPR 500', desc: 'Traditional millet-based hot drink' },
      { name: 'Fresh Lime Soda', price: 'NPR 150', desc: 'Sweet or salty' }
    ]
  }
]

export default function HimalayanKitchenMenu() {
  const navigate = useNavigate()

  return (
    <section className="page-section container">
      <div className="room-details-header">
        <button onClick={() => navigate('/dining')} className="back-button">
          ← Back to Dining
        </button>
      </div>

      <div className="page-header">
        <h1 className="page-title">Himalayan Kitchen Menu</h1>
        <p className="page-subtitle">Authentic Nepali & Tibetan Cuisine</p>
      </div>

      <div className="menu-page-content">
        {menuCategories.map((category, index) => (
          <div key={index} className="menu-category-section">
            <h2 className="menu-category-title">{category.category}</h2>
            <div className="menu-items-grid">
              {category.items.map((item, itemIndex) => (
                <div key={itemIndex} className="menu-item-card">
                  <div className="menu-item-header">
                    <h3>{item.name}</h3>
                    <span className="menu-price">{item.price}</span>
                  </div>
                  <p className="menu-item-desc">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="menu-footer-note">
        <p><strong>Hours:</strong> 11:00 AM - 10:00 PM</p>
        <p><strong>Reservations:</strong> +977-11-661234 | dining@hotelbanepa.com</p>
        <p className="menu-note">All prices are in Nepali Rupees and subject to 13% VAT and 10% service charge</p>
      </div>
    </section>
  )
}
