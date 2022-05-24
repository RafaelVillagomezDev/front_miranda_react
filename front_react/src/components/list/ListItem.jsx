import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getUserList } from '../../features/users/userSlice'
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
} from './style_list'

import * as FaIcons from 'react-icons/fa'

function ListItem() {
  const dispatch = useDispatch()
  const { users } = useSelector((state) => state.users)
  useEffect(() => {
    dispatch(getUserList())
  }, [dispatch])

  return users.map((user, index) => {
    return (
      <ItemList key={index}>
        <ItemCol key={users.id}>
          <label className="form-control">
            <input type="checkbox" name="checkbox" />
          </label>
          <ItemGuestImg />
          <ItemGuest>
            <h1>{user.name_client}</h1>
            <p>{user.num_room}</p>
          </ItemGuest>
        </ItemCol>

        <ItemCol key={users.id}>
          <OrderDate>{user.order_date} AM</OrderDate>
        </ItemCol>

        <ItemCol key={users.id}>
          <CheckIn>
            <h1>{user.date_of_entry}</h1>
            <p>9.46 PM</p>
          </CheckIn>
        </ItemCol>

        <ItemCol key={users.id}>
          <CheckIn>
            <h1>{user.date_of_exit}</h1>
            <p>9.46 PM</p>
          </CheckIn>
        </ItemCol>
        <ItemCol key={users.id}>
          <SpecialRequest>
            <h1>View Notes</h1>
          </SpecialRequest>
        </ItemCol>

        <ItemCol key={users.id}>
          <RoomType>{user.type_room}</RoomType>
        </ItemCol>

        <ItemCol key={users.id}>
          <Status>
            <h1>Refund</h1>
          </Status>
          <FaIcons.FaEllipsisV />
        </ItemCol>
      </ItemList>
    )
  })
}

export default ListItem

// return users.map((user, index) => {
//   return (
//     <ItemList key={index}>
//       {descriptions.map((item) => {
//         if (item.description === 'Guest') {
//           return (
//             <ItemCol key={item.id}>
//               <label className="form-control">
//                 <input type="checkbox" name="checkbox" />
//               </label>
//               <ItemGuestImg />
//               <ItemGuest>
//                 <h1>{user.name_client}</h1>
//                 <p>{user.num_room}</p>
//               </ItemGuest>
//             </ItemCol>
//           )
//         } else if (item.description === 'Order Date') {
//           return (
//             <ItemCol key={item.id}>
//               <OrderDate>{user.order_date} AM</OrderDate>
//             </ItemCol>
//           )
//         } else if (item.description === 'Special Request') {
//           return (
//             <ItemCol key={item.id}>
//               <SpecialRequest>
//                 <h1>View Notes</h1>
//               </SpecialRequest>
//             </ItemCol>
//           )
//         } else if (item.description === 'Room Type') {
//           return (
//             <ItemCol key={item.id}>
//               <RoomType>{user.type_room}</RoomType>
//             </ItemCol>
//           )
//         } else if (item.description === 'Status') {
//           return (
//             <ItemCol key={item.id}>
//               <Status>
//                 <h1>Refund</h1>
//               </Status>
//               <FaIcons.FaEllipsisV />
//             </ItemCol>
//           )
//         } else if (item.description === 'Check In') {
//           return (
//             <ItemCol key={item.id}>
//               <CheckIn>
//                 <h1>{user.date_of_entry}</h1>
//                 <p>9.46 PM</p>
//               </CheckIn>
//             </ItemCol>
//           )
//         } else if (item.description === 'Check Out') {
//           return (
//             <ItemCol key={item.id}>
//               <CheckIn>
//                 <h1>{user.date_of_exit}</h1>
//                 <p>9.46 PM</p>
//               </CheckIn>
//             </ItemCol>
//           )
//         }
//         return null
//       })}
//     </ItemList>
//   )
// }
