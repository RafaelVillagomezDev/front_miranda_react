import { useParams } from 'react-router-dom'

export function Contact() {
  const { id } = useParams()
  return (
    <div>
      <h1>Soy Contact {id}</h1>
    </div>
  )
}
