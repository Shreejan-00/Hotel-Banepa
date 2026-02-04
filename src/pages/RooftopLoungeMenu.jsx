import React from 'react'
import { useNavigate } from 'react-router-dom'

const menuCategories = [
  {
    category: 'Signature Cocktails',
    items: [
      { name: 'Himalayan Sunset', price: 'NPR 650', desc: 'Vodka, orange juice, grenadine, lime' },
      { name: 'Everest Mule', price: 'NPR 700', desc: 'Vodka, ginger beer, lime, mint' },
      { name: 'Banepa Breeze', price: 'NPR 680', desc: 'Rum, coconut cream, pineapple, blue curaçao' },
      { name: 'Mountain Mojito', price: 'NPR 600', desc: 'White rum, mint, lime, soda' },
      { name: 'Kathmandu Cosmopolitan', price: 'NPR 720', desc: 'Vodka, triple sec, cranberry, lime' },
      { name: 'Sherpa\'s Choice', price: 'NPR 750', desc: 'Whiskey, honey, lemon, ginger' }
    ]
  },
  {
    category: 'Classic Cocktails',
    items: [
      { name: 'Margarita', price: 'NPR 650', desc: 'Tequila, triple sec, lime juice' },
      { name: 'Martini', price: 'NPR 700', desc: 'Gin or vodka, dry vermouth, olive' },
      { name: 'Old Fashioned', price: 'NPR 750', desc: 'Bourbon, bitters, sugar, orange' },
      { name: 'Negroni', price: 'NPR 680', desc: 'Gin, Campari, sweet vermouth' },
      { name: 'Whiskey Sour', price: 'NPR 650', desc: 'Bourbon, lemon juice, sugar, egg white' }
    ]
  },
  {
    category: 'Wine Selection',
    items: [
      { name: 'Red Wine (Glass)', price: 'NPR 500', desc: 'Cabernet Sauvignon, Merlot, or Shiraz' },
      { name: 'White Wine (Glass)', price: 'NPR 500', desc: 'Chardonnay, Sauvignon Blanc, or Riesling' },
      { name: 'Rosé Wine (Glass)', price: 'NPR 480', desc: 'Provence-style rosé' },
      { name: 'Sparkling Wine (Glass)', price: 'NPR 600', desc: 'Prosecco or Champagne' },
      { name: 'Wine Bottle', price: 'NPR 2,500+', desc: 'Ask server for wine list' }
    ]
  },
  {
    category: 'Beer & Spirits',
    items: [
      { name: 'Local Beer', price: 'NPR 350', desc: 'Gorkha, Everest, or Tuborg' },
      { name: 'Imported Beer', price: 'NPR 500', desc: 'Heineken, Corona, or Budweiser' },
      { name: 'Whiskey (30ml)', price: 'NPR 400+', desc: 'Various brands available' },
      { name: 'Vodka (30ml)', price: 'NPR 350+', desc: 'Various brands available' },
      { name: 'Rum (30ml)', price: 'NPR 350+', desc: 'Various brands available' },
      { name: 'Gin (30ml)', price: 'NPR 400+', desc: 'Various brands available' }
    ]
  },
  {
    category: 'Tapas & Light Bites',
    items: [
      { name: 'Bruschetta', price: 'NPR 450', desc: 'Toasted bread with tomato, basil, olive oil' },
      { name: 'Cheese Platter', price: 'NPR 800', desc: 'Assorted cheeses with crackers and fruits' },
      { name: 'Chicken Satay', price: 'NPR 550', desc: 'Grilled chicken skewers with peanut sauce' },
      { name: 'Nachos Supreme', price: 'NPR 600', desc: 'Tortilla chips with cheese, salsa, guacamole' },
      { name: 'Calamari Rings', price: 'NPR 650', desc: 'Fried squid rings with aioli' },
      { name: 'Garlic Bread', price: 'NPR 300', desc: 'Toasted bread with garlic butter' },
      { name: 'French Fries', price: 'NPR 350', desc: 'Crispy fries with ketchup' },
      { name: 'Onion Rings', price: 'NPR 380', desc: 'Beer-battered onion rings' }
    ]
  },
  {
    category: 'Non-Alcoholic',
    items: [
      { name: 'Virgin Mojito', price: 'NPR 350', desc: 'Mint, lime, soda, sugar' },
      { name: 'Fresh Juice', price: 'NPR 300', desc: 'Orange, apple, pineapple, or mixed' },
      { name: 'Iced Tea', price: 'NPR 250', desc: 'Lemon or peach flavored' },
      { name: 'Soft Drinks', price: 'NPR 150', desc: 'Coke, Sprite, Fanta' },
      { name: 'Mineral Water', price: 'NPR 100', desc: 'Still or sparkling' }
    ]
  }
]

export default function RooftopLoungeMenu() {
  const navigate = useNavigate()

  return (
    <section className="page-section container">
      <div className="room-details-header">
        <button onClick={() => navigate('/dining')} className="back-button">
          ← Back to Dining
        </button>
      </div>

      <div className="page-header">
        <h1 className="page-title">Rooftop Lounge Menu</h1>
        <p className="page-subtitle">Bar & Lounge with Mountain Views</p>
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
        <p><strong>Hours:</strong> 4:00 PM - 11:00 PM</p>
        <p><strong>Live Music:</strong> Friday &amp; Saturday, 7:00 PM - 10:00 PM</p>
        <p><strong>Reservations:</strong> +977-11-661234 | lounge@hotelbanepa.com</p>
        <p className="menu-note">All prices are in Nepali Rupees and subject to 13% VAT and 10% service charge. Must be 18+ to consume alcohol.</p>
      </div>
    </section>
  )
}
