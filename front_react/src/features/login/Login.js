import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import {
  FormLogin,
  Container,
  FormLabel,
  FormButton,
  FormInput,
} from './style_login'

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
    <Container>
      <FormLogin>
        <FormLabel form="name_user">User</FormLabel>
        <FormInput
          id="name_user"
          name="name_user"
          placeholder="username"
          type="text"
          onChange={(e) => setUser(e.target.value)}
        />
        <FormLabel form="pass">Pasword</FormLabel>
        <FormInput
          id="pass"
          name="pass"
          type="text"
          placeholder="password"
          onChange={(e) => setPass(e.target.value)}
        />
        <FormButton type="submit" onClick={handleSubmit}>
          Enviar
        </FormButton>
      </FormLogin>
    </Container>
  )
}
