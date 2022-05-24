import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getRooms } from '../../features/rooms/roomSlice'
import {
  CheckIn,
  ItemCol,
  ItemGuest,
  ItemGuestImg,
  ItemList,
  OrderDate,
  RoomType,
  SpecialRequest,
  Status,
} from '../list/style_list'
import * as FaIcons from 'react-icons/fa'

function ListItemRoom() {
  const dispatch = useDispatch()
  const rooms = useSelector((state) => state.rooms.rooms)
  useEffect(() => {
    dispatch(getRooms())
  }, [dispatch])

  return rooms.map((room, index) => {
    return (
      <ItemList key={index}>
        <ItemCol key={rooms.id}>
          <label className="form-control">
            <input type="checkbox" name="checkbox" />
          </label>
          <ItemGuestImg />
        </ItemCol>

        <ItemCol>
          <OrderDate>
            <ItemGuest>
              <h1>{room.id}</h1>
              <p>{room.type_id}</p>
            </ItemGuest>
          </OrderDate>
        </ItemCol>

        <ItemCol>
          <CheckIn>
            <h1>{room.bed_type}</h1>
          </CheckIn>
        </ItemCol>

        <ItemCol>
          <CheckIn>
            <h1>{room.room_floor}</h1>
          </CheckIn>
        </ItemCol>
        <ItemCol>{room.facilities}</ItemCol>

        <ItemCol>
          <RoomType>{room.rate}</RoomType>
        </ItemCol>

        <ItemCol>
          <Status>
            <h1>{room.status}</h1>
          </Status>
          <FaIcons.FaEllipsisV />
        </ItemCol>
      </ItemList>
    )
  })
}

export default ListItemRoom
