import { useParams } from 'react-router-dom'
import Navbar from '../../components/navbar/Navbar'

export function Rooms() {
  const { id } = useParams()
  return (
    <div>
      <Navbar />
      <h1>SOY Rooms {id}</h1>
    </div>
  )
}
