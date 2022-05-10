const initialState = {
  value: 0,
  status: 'idle',
}

export const bookingSlice = createSlice({
  name: 'booking',
  initialState,

  reducers: {
    increment: (state) => {
      state.value += 1
    },
  },
})

export const { increment } = bookingSlice.actions

export const selectCount = (state) => state.counter.value

export default bookingSlice.reducer
