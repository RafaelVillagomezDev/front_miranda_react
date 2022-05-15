import axios from 'axios'
const { REACT_APP_BASE_URL } = process.env

export async function fetchUserList() {
  axios.get('http://localhost:3000/users')
}
