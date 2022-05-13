import { useParams } from 'react-router-dom'
import Navbar from '../../components/navbar/Navbar'

export function Users() {
  const { id } = useParams()
  return (
    <div>
      <Navbar />
      <h1>SOY Users {id}</h1>
    </div>
  )
}
