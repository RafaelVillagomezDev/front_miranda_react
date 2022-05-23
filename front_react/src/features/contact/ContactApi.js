import axios from 'axios'
const { REACT_APP_BASE_URL } = process.env

export async function fetchContact() {
  return await axios
    .get(`${REACT_APP_BASE_URL}contact?_page=1&_limit=10`)
    .then((result) => result.data)
}
