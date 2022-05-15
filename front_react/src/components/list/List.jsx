import {
  CheckIn,
  ContainerList,
  ItemCol,
  ItemGuest,
  ItemGuestImg,
  ItemList,
  ItemListDescription,
  OrderDate,
  RoomType,
  SpecialRequest,
  Status,
} from './style_list'
import * as FaIcons from 'react-icons/fa'
import './list.css'

const descriptions = [
  {
    id: 1,
    description: 'Guest',
  },
  {
    id: 2,
    description: 'Order Date',
  },
  {
    id: 3,
    description: 'Check In',
  },
  {
    id: 4,
    description: 'Check Out',
  },
  {
    id: 5,
    description: 'Special Request',
  },
  {
    id: 6,
    description: 'Room Type',
  },
  {
    id: 7,
    description: 'Status',
  },
]

/*SEGUNDO ITEM LIST TENGO QUE ITERARLO , SEGUN CANTIDAD DE GUEST */

function List() {
  return (
    <>
      <ContainerList>
        <ItemListDescription>
          {descriptions.map((item) => {
            if (item.description === 'Guest') {
              return (
                <ItemCol key={item.id}>
                  <label className="form-control">
                    <input type="checkbox" name="checkbox" />
                    {item.description}
                  </label>
                </ItemCol>
              )
            } else {
              return (
                <ItemCol key={item.id}>
                  <h1>{item.description}</h1>
                </ItemCol>
              )
            }
          })}
        </ItemListDescription>

        <ItemList>
          {descriptions.map((item) => {
            if (item.description === 'Guest') {
              return (
                <ItemCol key={item.id}>
                  <label className="form-control">
                    <input type="checkbox" name="checkbox" />
                  </label>
                  <ItemGuestImg />
                  <ItemGuest>
                    <h1>Cahyadi Purnomo</h1>
                    <p>#000123456</p>
                  </ItemGuest>
                </ItemCol>
              )
            } else if (item.description === 'Order Date') {
              return (
                <ItemCol key={item.id}>
                  <OrderDate>Oct 30th 2020 09:21 AM</OrderDate>
                </ItemCol>
              )
            } else if (item.description === 'Special Request') {
              return (
                <ItemCol key={item.id}>
                  <SpecialRequest>
                    <h1>View Notes</h1>
                  </SpecialRequest>
                </ItemCol>
              )
            } else if (item.description === 'Room Type') {
              return (
                <ItemCol key={item.id}>
                  <RoomType>Deluxe A - 02</RoomType>
                </ItemCol>
              )
            } else if (item.description === 'Status') {
              return (
                <ItemCol key={item.id}>
                  <Status>
                    <h1>Refund</h1>
                  </Status>
                  <FaIcons.FaEllipsisV />
                </ItemCol>
              )
            } else {
              return (
                <ItemCol key={item.id}>
                  <CheckIn>
                    <h1>Nov 2th, 2020</h1>
                    <p>9.46 PM</p>
                  </CheckIn>
                </ItemCol>
              )
            }
          })}
        </ItemList>
      </ContainerList>
    </>
  )
}

export default List
