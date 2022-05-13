import { useParams } from 'react-router-dom'
import Navbar from '../../components/navbar/Navbar'

export function Bookings() {
  //La llamamos igual que en App.js//
  const { id } = useParams()

  return (
    <div>
      <Navbar />
      <h1>SOY BOOKING {id}</h1>
    </div>
  )
}
