import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { deleteBooking, fetchBookings } from './BookingApi'

const initialState = {
  bookings: [],
  status: 'idk',
}

export const getBookings = createAsyncThunk(
  'booking/fetchBookings',
  async () => {
    return await fetchBookings()
  },
)

export const delBookings = createAsyncThunk(
  'booking/deleteBookings',
  async () => {
    return await deleteBooking()
  },
)

export const postBookings = createAsyncThunk(
  'booking/postBookings',
  async () => {
    return await postBookings()
  },
)

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
      .addCase(delBookings.fulfilled, (state, action) => {
        state.bookings = action.payload
      })
      .addCase(postBookings.fulfilled, (state, action) => {
        state.bookings = action.payload
      })
  },
})

export default bookingSlice.reducer
