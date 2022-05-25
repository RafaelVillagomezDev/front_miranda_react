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
  PriceRate,
  RoomType,
  Status,
  SubPrice,
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
        <ItemCol>
          <label className="form-control">
            <input type="checkbox" name="checkbox" />
          </label>
          <ItemGuestImg />
        </ItemCol>

        <ItemCol>
          <OrderDate>
            <ItemGuest>
              <p>#{room.id}233445</p>
              <h1>{room.type_id}</h1>
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
          <RoomType>
            <PriceRate>
              {room.rate}$<SubPrice>/Night</SubPrice>
            </PriceRate>
          </RoomType>
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
