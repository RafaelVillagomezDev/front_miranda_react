import {
  BigBtnFacilities,
  Card,
  CardCheck,
  CardInfo,
  CardMoreInfo,
  CardProfile,
  CardRoomInfo,
  CardText,
  ContainerCard,
  EyeLiner,
  Facilities,
  ItemCheck,
  ItemRoom,
  ListBtn,
  SliderImg,
  SmallBtnFacilities,
} from './style_cardBooking'
import * as FaIcons from 'react-icons/fa'

const ItemBtnIcon = [
  {
    name: '3 Bed Spaces',
    icon: <FaIcons.FaBed />,
  },
  {
    name: '24 Hours Guard',
    icon: <FaIcons.FaShieldAlt />,
  },
  {
    name: 'Free Wifi',
    icon: <FaIcons.FaWifi />,
  },
]

const BtnFacilities = [
  {
    name: '2 Bathdroom',
  },
  {
    name: 'Air Conditioner',
  },
  {
    name: 'Television',
  },
]

function CardBooking() {
  return (
    <ContainerCard>
      <Card>
        <CardProfile>
          <CardText>
            <h1>Roberto Mansini</h1>
            <p>ID 1234124512551</p>
          </CardText>
          <CardCheck>
            <ItemCheck>
              <h3>Check In</h3>
              <h1>October 30th,2022 | 09:22 AM</h1>
            </ItemCheck>
            <ItemCheck>
              <h3>Check Out</h3>
              <h1>November 2th,2022</h1>
            </ItemCheck>
          </CardCheck>
        </CardProfile>
        <EyeLiner />
        <CardInfo>
          <CardMoreInfo>
            <ItemRoom>
              <h3>Room Info</h3>
              <h1>Deluxe Z-002424</h1>
            </ItemRoom>
            <ItemRoom>
              <h3>Price</h3>
              <h1>
                $142 <sub>/night</sub>
              </h1>
            </ItemRoom>
          </CardMoreInfo>
          <CardRoomInfo>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet,
              et quos! Quisquam, culpa veniam commodi deleniti quibusdam natus
              aspernatur necessitatibus recusandae autem excepturi sint?
              Temporibus aperiam dolorum soluta consectetur excepturi!
            </p>
          </CardRoomInfo>
          <Facilities>
            <h3>Facilities</h3>
            <ListBtn>
              {ItemBtnIcon.map((item) => {
                return (
                  <BigBtnFacilities>
                    {item.icon}
                    <h3>{item.name}</h3>
                  </BigBtnFacilities>
                )
              })}
              {BtnFacilities.map((item) => {
                return (
                  <SmallBtnFacilities>
                    <h3>{item.name}</h3>
                  </SmallBtnFacilities>
                )
              })}
            </ListBtn>
          </Facilities>
        </CardInfo>
      </Card>
      <SliderImg>
        <h1>pepe</h1>
      </SliderImg>
    </ContainerCard>
  )
}

export default CardBooking
