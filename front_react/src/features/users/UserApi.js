import axios from 'axios'
const { REACT_APP_BASE_URL } = process.env
//Obtener todos los usurios
export async function fetchUserList() {
  const result = await axios.get(`${REACT_APP_BASE_URL}users?_page=1&_limit=10`)

  return result.data
}
