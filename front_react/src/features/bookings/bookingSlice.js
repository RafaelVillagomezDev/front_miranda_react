import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { fetchBookings } from './BookingApi'

const initialState = {
  bookings: [],
  status: 'idk',
}

export const getBookings = createAsyncThunk('user/fetchBookings', async () => {
  return await fetchBookings()
})

export const bookingSlice = createSlice({
  name: 'booking',
  initialState,

  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBookings.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(getBookings.fulfilled, (state, action) => {
        state.status = 'success'
        state.bookings = action.payload
      })
      .addCase(getBookings.rejected, (state) => {
        state.status = 'failed'
      })
  },
})

export default bookingSlice.reducer
