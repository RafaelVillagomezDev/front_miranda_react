import axios from 'axios'
const { REACT_APP_BASE_URL } = process.env

export async function fetchBookings() {
  return await axios
    .get(`${REACT_APP_BASE_URL}bookings?_page=1&_limit=10`)
    .then((result) => result.data)
}
