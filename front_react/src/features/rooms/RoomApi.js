import axios from 'axios'
const { REACT_APP_BASE_URL } = process.env
//Obtener todos los usurios
export async function fetchRooms() {
  const result = await axios.get(`${REACT_APP_BASE_URL}rooms?_page=1&_limit=10`)

  return result.data
}
//Borrar habitacion
export async function deleteRoom(id) {
  const res = await axios.delete(`${REACT_APP_BASE_URL}rooms/${id}`)

  return res.status
}

//Añadir habitacion
export async function postRoom(obj) {
  const { id, type_id, room_floor, facilities, rate, status } = obj
  const res = await axios.post(
    `${REACT_APP_BASE_URL}rooms`,
    {
      id: id,
      type: type_id,
      room: room_floor,
      facilities: facilities,
      rate: rate,
      status: status,
    },
    {
      headers: {
        'content-type': 'text/json',
      },
    },
  )
  return res
}
