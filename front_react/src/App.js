import React, { createContext, useReducer } from 'react'
import { Bookings } from './features/bookings/Bookings'
import { Home } from './features/home/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Users } from './features/users/Users'
import { Contact } from './features/contact/Contact'
import { Rooms } from './features/rooms/Rooms'
import { Login } from './features/login/Login'
import { RequireAuth } from './components/RequiteAuth'

const initialUser = [
  {
    autenticado: false,
    name: null,
    email: null,
  },
]

const reducer = (state, action) => {
  switch (action.type) {
    case 'login':
      // if (localStorage.getItem('authenticated') !== true)
      // if (
      //   state.name === action.user.newName &&
      //   state.pass === action.user.newPass
      // )
      localStorage.setItem('authenticated', '1')
      return {
        ...state,
        autenticado: true,
        name: action.user.newName,
        email: action.user.newEmail,
      }
    case 'logout':
      localStorage.removeItem('authenticated')
      return { ...state, autenticado: false }
    case 'changeUsername':
      return
    case 'changeEmail':
      return
    default:
      return state
  }
}

export const UserContext = createContext()

function App() {
  const [user, dispatch] = useReducer(reducer, initialUser)

  // const [authenticated, setAutheticated] = useState(
  //   localStorage.getItem('authenticated') !== null,
  // )
  // useEffect(() => {
  //   if (authenticated) {
  //     localStorage.setItem('authenticated', '1')
  //   } else {
  //     localStorage.removeItem('authenticated')
  //   }
  // }, [authenticated])

  return (
    <>
      <UserContext.Provider value={{ user, dispatch }}>
        <Router>
          <Routes>
            <Route
              path="/login"
              // element={<Login setAutheticated={setAutheticated} />}
              element={<Login />}
            >
              {' '}
            </Route>
            <Route
              path="/"
              element={
                // <RequireAuth authenticated={authenticated}>
                <RequireAuth>
                  <Home />
                </RequireAuth>
              }
            />
            <Route
              path="home/bookings"
              element={
                // <RequireAuth authenticated={authenticated}>
                <RequireAuth>
                  <Bookings />
                </RequireAuth>
              }
            />
            <Route
              path="home/bookings/id"
              element={
                // <RequireAuth authenticated={authenticated}>
                <RequireAuth>
                  <Bookings />
                </RequireAuth>
              }
            />
            <Route
              path="home/users"
              element={
                // <RequireAuth authenticated={authenticated}>
                <RequireAuth>
                  <Users />
                </RequireAuth>
              }
            />
            <Route
              path="home/users/id"
              element={
                // <RequireAuth authenticated={authenticated}>
                <RequireAuth>
                  <Users />
                </RequireAuth>
              }
            />
            <Route
              path="home/contact"
              element={
                // <RequireAuth authenticated={authenticated}>
                <RequireAuth>
                  <Contact />
                </RequireAuth>
              }
            />
            <Route
              path="home/contact/id"
              element={
                // <RequireAuth authenticated={authenticated}>
                <RequireAuth>
                  <Contact />
                </RequireAuth>
              }
            />
            <Route
              path="home/rooms"
              element={
                // <RequireAuth authenticated={authenticated}>
                <RequireAuth>
                  <Rooms />
                </RequireAuth>
              }
            />
            <Route
              path="home/rooms/id"
              element={
                // <RequireAuth authenticated={authenticated}>
                <RequireAuth>
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
      </UserContext.Provider>
    </>
  )
}

export default App
