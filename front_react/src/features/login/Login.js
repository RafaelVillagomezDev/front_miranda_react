import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

export function Login(props) {
  const [user, setUser] = useState('')
  const [pass, setPass] = useState('')
  let navigate = useNavigate()
  let location = useLocation()

  let from = location.state?.from?.pathname || '/'

  const handleSubmit = () => {
    if (user === 'pepe' && pass === '1234') {
      props.setAutheticated(true)
      navigate(from, { replace: true })
    } else {
      props.setAutheticated(false)
    }
  }
  return (
    <div>
      <h1>User</h1>
      <input
        type="text"
        value={user}
        onChange={(e) => setUser(e.target.value)}
      />
      <h1>Password</h1>
      <input
        type="text"
        value={pass}
        onChange={(e) => setPass(e.target.value)}
      />
      <button type="submit" onClick={handleSubmit}>
        Enviar
      </button>
    </div>
  )
}
