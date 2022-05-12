import axios from 'axios'

export async function fetchUserList() {
  axios.get('http://localhost:3000/users')
}
