import axios from 'axios'
const { REACT_APP_BASE_URL } = process.env
//Obtener todos los usurios
export async function fetchRooms() {
  return await axios
    .get(`${REACT_APP_BASE_URL}rooms?_page=1&_limit=10`)
    .then((result) => result.data)
}
