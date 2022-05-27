import axios from 'axios'
const { REACT_APP_BASE_URL } = process.env

export async function fetchContact() {
  return await axios
    .get(`${REACT_APP_BASE_URL}contacts?_page=1&_limit=10`)
    .then((result) => result.data)
}

//Borrar habitacion
export async function deleteContact(id) {
  const res = await axios.delete(`${REACT_APP_BASE_URL}contacts/${id}`)

  return res.status
}
//Añadir Contact
export async function postContact(obj) {
  const {
    id,
    date_message,
    id_messague,
    name_customer,
    email_customer,
    tlf_customer,
    subject,
    comment,
  } = obj
  const res = await axios.post(
    `${REACT_APP_BASE_URL}contacts`,
    {
      id: id,
      date_message: date_message,
      id_messague: id_messague,
      name_customer: name_customer,
      email_customer: email_customer,
      tlf_customer: tlf_customer,
      subject: subject,
      comment: comment,
    },
    {
      headers: {
        'content-type': 'text/json',
      },
    },
  )
  return res
}
