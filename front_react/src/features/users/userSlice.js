import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { fetchUserList } from './UserApi'

const initialState = {
  users: [],
  status: 'idk',
}
//Funcion asincrona obtener usuarios
export const getUserList = createAsyncThunk('user/fetchUser', async () => {
  return await fetchUserList()
})

export const userSlice = createSlice({
  name: 'userSlice',
  initialState,

  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUserList.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(getUserList.fulfilled, (state, action) => {
        state.status = 'success'
        state.users = action.payload
      })
      .addCase(getUserList.rejected, (state) => {
        state.status = 'failed'
      })
  },
})

export default userSlice.reducer
