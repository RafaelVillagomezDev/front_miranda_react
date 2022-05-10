import React from 'react'
import { Bookings } from './features/bookings/Bookings'
import { Home } from './features/home/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Users } from './features/users/Users'
import { Contact } from './features/contact/Contact'
import { Rooms } from './features/rooms/Rooms'
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bookings" element={<Bookings />} />
          <Route path="/users" element={<Users />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/rooms" element={<Rooms />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
