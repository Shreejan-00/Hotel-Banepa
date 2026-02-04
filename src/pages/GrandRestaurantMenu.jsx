import React from 'react'
import { useNavigate } from 'react-router-dom'

const menuCategories = [
  {
    category: 'Breakfast',
    items: [
      { name: 'Continental Breakfast', price: 'NPR 650', desc: 'Toast, eggs, bacon, sausage, juice, coffee/tea' },
      { name: 'American Breakfast', price: 'NPR 700', desc: 'Pancakes, eggs, hash browns, bacon, juice' },
      { name: 'Nepali Breakfast', price: 'NPR 550', desc: 'Sel roti, aloo tarkari, yogurt, tea' },
      { name: 'Breakfast Buffet', price: 'NPR 800', desc: 'All-you-can-eat continental & Nepali spread' }
    ]
  },
  {
    category: 'Appetizers',
    items: [
      { name: 'Caesar Salad', price: 'NPR 450', desc: 'Romaine lettuce, parmesan, croutons, Caesar dressing' },
      { name: 'Soup of the Day', price: 'NPR 350', desc: 'Chef\'s special soup served with bread' },
      { name: 'Chicken Wings', price: 'NPR 550', desc: 'Spicy buffalo or BBQ glazed wings' },
      { name: 'Spring Rolls', price: 'NPR 400', desc: 'Vegetable spring rolls with sweet chili sauce' }
    ]
  },
  {
    category: 'Main Course',
    items: [
      { name: 'Grilled Chicken Steak', price: 'NPR 950', desc: 'Grilled chicken breast with mashed potatoes and vegetables' },
      { name: 'Beef Tenderloin', price: 'NPR 1,450', desc: 'Premium beef with red wine sauce, roasted potatoes' },
      { name: 'Salmon Fillet', price: 'NPR 1,200', desc: 'Pan-seared salmon with lemon butter sauce' },
      { name: 'Vegetable Lasagna', price: 'NPR 750', desc: 'Layered pasta with vegetables and cheese' },
      { name: 'Chicken Curry', price: 'NPR 850', desc: 'Traditional curry served with rice or naan' },
      { name: 'Pasta Carbonara', price: 'NPR 800', desc: 'Creamy pasta with bacon and parmesan' }
    ]
  },
  {
    category: 'Desserts',
    items: [
      { name: 'Chocolate Lava Cake', price: 'NPR 450', desc: 'Warm chocolate cake with vanilla ice cream' },
      { name: 'Tiramisu', price: 'NPR 400', desc: 'Classic Italian coffee-flavored dessert' },
      { name: 'Fruit Platter', price: 'NPR 350', desc: 'Seasonal fresh fruits' },
      { name: 'Ice Cream Selection', price: 'NPR 300', desc: 'Choice of vanilla, chocolate, or strawberry' }
    ]
  },
  {
    category: 'Beverages',
    items: [
      { name: 'Fresh Juice', price: 'NPR 250', desc: 'Orange, apple, or mixed fruit' },
      { name: 'Soft Drinks', price: 'NPR 150', desc: 'Coke, Sprite, Fanta' },
      { name: 'Coffee/Tea', price: 'NPR 200', desc: 'Espresso, cappuccino, latte, or tea' },
      { name: 'Mineral Water', price: 'NPR 100', desc: 'Still or sparkling' }
    ]
  }
]

export default function GrandRestaurantMenu() {
  const navigate = useNavigate()

  return (
    <section className="page-section container">
      <div className="room-details-header">
        <button onClick={() => navigate('/dining')} className="back-button">
          ← Back to Dining
        </button>
      </div>

      <div className="page-header">
        <h1 className="page-title">The Grand Restaurant Menu</h1>
        <p className="page-subtitle">Multi-Cuisine Fine Dining</p>
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
        <p><strong>Hours:</strong> 7:00 AM - 10:30 PM</p>
        <p><strong>Reservations:</strong> +977-11-661234 | dining@hotelbanepa.com</p>
        <p className="menu-note">All prices are in Nepali Rupees and subject to 13% VAT and 10% service charge</p>
      </div>
    </section>
  )
}
