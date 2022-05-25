import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUserList } from '../../features/users/userSlice'
import {
  CheckIn,
  ItemCol,
  ItemGuest,
  ItemGuestImg,
  ItemList,
  OrderDate,
  RoomType,
  Status,
  TlfEelement,
} from '../list/style_list'
import * as FaIcons from 'react-icons/fa'
function ListItemUser() {
  const dispatch = useDispatch()
  const users = useSelector((state) => state.users.users)

  useEffect(() => {
    dispatch(getUserList())
  }, [dispatch])

  return users.map((user, index) => {
    return (
      <ItemList key={index}>
        <ItemCol key={user.id}>
          <label className="form-control">
            <input type="checkbox" name="checkbox" />
          </label>
          <ItemGuestImg />
        </ItemCol>

        <ItemCol>
          <OrderDate>
            <ItemGuest>
              <h1>{user.name_customer}</h1>
              <h1>#{user.id}918282</h1>
              <h1>Joined on Aug 21th 2020</h1>
            </ItemGuest>
          </OrderDate>
        </ItemCol>

        <ItemCol>
          <CheckIn>
            <h1>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui
              adipisci vero
            </h1>
          </CheckIn>
        </ItemCol>

        <ItemCol>
          <CheckIn>
            <h1>Monday/Friday</h1>
            <p>Check Shedule</p>
          </CheckIn>
        </ItemCol>

        <ItemCol>
          <RoomType>
            {' '}
            <FaIcons.FaPhoneAlt />
            <TlfEelement>{user.tlf_customer}</TlfEelement>
          </RoomType>
        </ItemCol>

        <ItemCol>
          <h1>Active</h1>
          <FaIcons.FaEllipsisV />
        </ItemCol>
      </ItemList>
    )
  })
}

export default ListItemUser
