import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { fetchRooms } from './RoomApi'

const initialState = {
  rooms: [],
  status: 'idk',
}

export const getRooms = createAsyncThunk('room/fetchRoom', async () => {
  return await fetchRooms()
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
  },
})

export default roomSlice.reducer
