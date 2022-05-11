import React, { useEffect, useState } from 'react'
import { Bookings } from './features/bookings/Bookings'
import { Home } from './features/home/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Users } from './features/users/Users'
import { Contact } from './features/contact/Contact'
import { Rooms } from './features/rooms/Rooms'
import { Login } from './features/login/Login'
import { RequireAuth } from './components/RequiteAuth'
//DUDA IMPORTANTE HAY Q HACER JWT TOKEN ???//
function App() {
  const [authenticated, setAutheticated] = useState(
    localStorage.getItem('authenticated') !== null,
  )

  useEffect(() => {
    if (authenticated) {
      localStorage.setItem('authenticated', '1')
    } else {
      localStorage.removeItem('authenticated')
    }
  }, [authenticated])

  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/login"
            element={<Login setAutheticated={setAutheticated} />}
          >
            {' '}
          </Route>
          <Route
            path="/"
            element={
              <RequireAuth authenticated={authenticated}>
                <Home />
              </RequireAuth>
            }
          />
          <Route
            path="home/bookings"
            element={
              <RequireAuth authenticated={authenticated}>
                <Bookings />
              </RequireAuth>
            }
          />
          <Route
            path="home/bookings/:id"
            element={
              <RequireAuth authenticated={authenticated}>
                <Bookings />
              </RequireAuth>
            }
          />
          <Route
            path="home/users"
            element={
              <RequireAuth authenticated={authenticated}>
                <Users />
              </RequireAuth>
            }
          />
          <Route
            path="home/users/:id"
            element={
              <RequireAuth authenticated={authenticated}>
                <Users />
              </RequireAuth>
            }
          />
          <Route
            path="home/contact"
            element={
              <RequireAuth authenticated={authenticated}>
                <Contact />
              </RequireAuth>
            }
          />
          <Route
            path="home/contact/:id"
            element={
              <RequireAuth authenticated={authenticated}>
                <Contact />
              </RequireAuth>
            }
          />
          <Route
            path="home/rooms"
            element={
              <RequireAuth authenticated={authenticated}>
                <Rooms />
              </RequireAuth>
            }
          />
          <Route
            path="home/rooms/:id"
            element={
              <RequireAuth authenticated={authenticated}>
                <Rooms />
              </RequireAuth>
            }
          />

          <Route
            path="*"
            element={
              <main style={{ padding: '1rem' }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Routes>
      </Router>
    </>
  )
}

export default App
