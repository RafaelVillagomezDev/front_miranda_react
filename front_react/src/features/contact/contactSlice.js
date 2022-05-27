import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { deleteContact, fetchContact, postContact } from './ContactApi'
const initialState = {
  contact: [],
  status: 'idk',
}

export const getContact = createAsyncThunk('contact/fechContact', async () => {
  return await fetchContact()
})

export const delContact = createAsyncThunk('contact/fechContact', async () => {
  return await deleteContact()
})

export const postContactt = createAsyncThunk(
  'contact/fechContact',
  async () => {
    return await postContact()
  },
)

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
    //No entiendo xq falla
    // .addCase(delContact.fulfilled, (state, action) => {
    //   state.status = action.payload
    // })
    // .addCase(postContactt.fulfilled, (state, action) => {
    //   state.status = 'sucess'
    //   state.contact = action.payload
    // })
  },
})

export default contactSlice.reducer
