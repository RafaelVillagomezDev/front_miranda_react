import { useParams } from 'react-router-dom'

export function Users() {
  const { id } = useParams()
  return (
    <div>
      <h1>SOY Users {id}</h1>
    </div>
  )
}
