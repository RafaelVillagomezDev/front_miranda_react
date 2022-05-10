import { useParams } from 'react-router-dom'

export function Rooms() {
  const { id } = useParams()
  return (
    <div>
      <h1>SOY Rooms {id}</h1>
    </div>
  )
}
