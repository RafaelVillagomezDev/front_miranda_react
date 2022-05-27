import axios from 'axios'
const { REACT_APP_BASE_URL } = process.env

export async function fetchBookings() {
  return await axios
    .get(`${REACT_APP_BASE_URL}bookings?_page=1&_limit=10`)
    .then((result) => result.data)
}

//Borrar Booking
export async function deleteBooking(id) {
  const res = await axios.delete(`${REACT_APP_BASE_URL}bookings/${id}`)

  return res.status
}

//Añadir habitacion
export async function postBooking(obj) {
  const {
    id,
    img,
    type_room,
    num_room,
    name_client,
    date_of_entry,
    date_of_exit,
    order_date,
    special_request,
  } = obj
  const res = await axios.post(
    `${REACT_APP_BASE_URL}bookings`,
    {
      id: id,
      img: img,
      type_room: type_room,
      num_room: num_room,
      name_client: name_client,
      date_of_entry: date_of_entry,
      date_of_exit: date_of_exit,
      order_date: order_date,
      special_request: special_request,
    },
    {
      headers: {
        'content-type': 'text/json',
      },
    },
  )
  return res
}
