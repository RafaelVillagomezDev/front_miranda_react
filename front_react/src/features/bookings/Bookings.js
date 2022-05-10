import { useParams } from 'react-router-dom'

export function Bookings() {
  //La llamamos igual que en App.js//
  const { id } = useParams()

  return (
    <div>
      <h1>SOY BOOKING {id}</h1>
    </div>
  )
}
