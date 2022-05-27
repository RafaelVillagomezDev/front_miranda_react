import axios from 'axios'
const { REACT_APP_BASE_URL } = process.env
//Obtener todos los usurios
export async function fetchUserList() {
  const result = await axios.get(`${REACT_APP_BASE_URL}users?_page=1&_limit=10`)

  return result.data
}

//Borrar User
export async function deleteUser(id) {
  const res = await axios.delete(`${REACT_APP_BASE_URL}users/${id}`)

  return res.status
}

//Añadir User
export async function postUser(obj) {
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
