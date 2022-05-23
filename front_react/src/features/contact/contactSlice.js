import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
const initialState = {
  contact: [],
  status: 'idk',
}

export const getContact = createAsyncThunk('contact/fechContact', async () => {
  return await fetchContact()
})

export const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getContact.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(getContact.fulfilled, (state, action) => {
        state.status = 'sucess'
        state.contact = action.payload
      })
      .addCase(getContact.rejected, (state) => {
        state.status = 'failed'
      })
  },
})

export default contactSlice.reducer
