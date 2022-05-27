import { Container, ContainerCard, DivImage, DivText } from './style_cardItem'
import * as FaIcons from 'react-icons/fa'

const cards = [
  {
    name: 'New Booking',
    icon: <FaIcons.FaBed />,
    data: '8,461',
  },
  {
    name: 'Sheduled Room',
    icon: <FaIcons.FaCalendarCheck />,
    data: '963',
  },
  {
    name: 'Check In',
    icon: <FaIcons.FaSignInAlt />,
    data: '753',
  },
  {
    name: 'Check Out',
    icon: <FaIcons.FaSignOutAlt />,
    data: '516',
  },
]

function CardItems() {
  return cards.map((card, index) => {
    return (
      <ContainerCard key={index}>
        <DivImage>{card.icon}</DivImage>
        <DivText>
          <h1>{card.data}</h1>
          <p>{card.name}</p>
        </DivText>
      </ContainerCard>
    )
  })
}

export default CardItems
