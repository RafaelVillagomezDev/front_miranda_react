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
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getUserList } from '../../features/users/userSlice'

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
  const dispatch = useDispatch()
  const { users } = useSelector((state) => state.users)
  useEffect(() => {
    dispatch(getUserList())
  }, [dispatch])

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
        {users.map((user) => {
          return (
            <ItemList key={user.id}>
              {descriptions.map((item) => {
                if (item.description === 'Guest') {
                  return (
                    <ItemCol key={item.id}>
                      <label className="form-control">
                        <input type="checkbox" name="checkbox" />
                      </label>
                      <ItemGuestImg />
                      <ItemGuest>
                        <h1>{user.name_client}</h1>
                        <p>{user.num_room}</p>
                      </ItemGuest>
                    </ItemCol>
                  )
                } else if (item.description === 'Order Date') {
                  return (
                    <ItemCol key={item.id}>
                      <OrderDate>{user.order_date} AM</OrderDate>
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
                      <RoomType>{user.type_room}</RoomType>
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
                } else if (item.description === 'Check In') {
                  return (
                    <ItemCol key={item.id}>
                      <CheckIn>
                        <h1>{user.date_of_entry}</h1>
                        <p>9.46 PM</p>
                      </CheckIn>
                    </ItemCol>
                  )
                } else if (item.description === 'Check Out') {
                  return (
                    <ItemCol key={item.id}>
                      <CheckIn>
                        <h1>{user.date_of_exit}</h1>
                        <p>9.46 PM</p>
                      </CheckIn>
                    </ItemCol>
                  )
                }
                return null
              })}
            </ItemList>
          )
        })}
      </ContainerList>
    </>
  )
}

export default List
