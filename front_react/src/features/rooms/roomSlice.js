import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { deleteRoom, fetchRooms } from './RoomApi'

const initialState = {
  rooms: [],
  status: 'idk',
}

export const getRooms = createAsyncThunk('room/fetchRoom', async () => {
  return await fetchRooms()
})

export const delRoom = createAsyncThunk('room/deleteRoom', async (id) => {
  return await deleteRoom(id)
})
//Le pasamos obj
export const postRoom = createAsyncThunk('room/postRoom', async (obj) => {
  return await postRoom(obj)
})

export const roomSlice = createSlice({
  name: 'roomSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getRooms.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(getRooms.fulfilled, (state, action) => {
        state.status = 'success'
        state.rooms = action.payload
      })
      .addCase(getRooms.rejected, (state) => {
        state.status = 'failed'
      })
      .addCase(delRoom.fulfilled, (state, action) => {
        state.status = action.payload
      })
  },
})

export default roomSlice.reducer
