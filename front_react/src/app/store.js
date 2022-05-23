import { configureStore } from '@reduxjs/toolkit'
import contactSlice from '../features/contact/contactSlice'
import roomSlice from '../features/rooms/roomSlice'
import userSlice from '../features/users/userSlice'

export const store = configureStore({
  reducer: {
    users: userSlice,
    rooms: roomSlice,
    contact: contactSlice,
  },
})
