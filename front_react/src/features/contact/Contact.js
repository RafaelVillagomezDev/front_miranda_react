import { useParams } from 'react-router-dom'
import Navbar from '../../components/navbar/Navbar'

export function Contact() {
  const { id } = useParams()
  return (
    <div>
      <Navbar />
      <h1>Soy Contact {id}</h1>
    </div>
  )
}
