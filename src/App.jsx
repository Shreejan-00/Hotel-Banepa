import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Rooms from './pages/Rooms'
import RoomDetails from './pages/RoomDetails'
import Booking from './pages/Booking'
import Amenities from './pages/Amenities'
import Dining from './pages/Dining'
import Contact from './pages/Contact'
import GrandRestaurantMenu from './pages/GrandRestaurantMenu'
import HimalayanKitchenMenu from './pages/HimalayanKitchenMenu'
import RooftopLoungeMenu from './pages/RooftopLoungeMenu'
import TableReservation from './pages/TableReservation'
import Login from './pages/Login'

function App() {
  return (
    <Router>
      <div className="site-root">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/rooms" element={<Rooms />} />
            <Route path="/rooms/:id" element={<RoomDetails />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/amenities" element={<Amenities />} />
            <Route path="/dining" element={<Dining />} />
            <Route path="/dining/grand-restaurant-menu" element={<GrandRestaurantMenu />} />
            <Route path="/dining/himalayan-kitchen-menu" element={<HimalayanKitchenMenu />} />
            <Route path="/dining/rooftop-lounge-menu" element={<RooftopLoungeMenu />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/table-reservation" element={<TableReservation />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
