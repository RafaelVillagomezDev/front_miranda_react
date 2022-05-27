import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { deleteUser, fetchUserList, postUser } from './UserApi'

const initialState = {
  users: [],
  status: 'idk',
}
//Funcion asincrona obtener usuarios
export const getUserList = createAsyncThunk('user/fetchUser', async () => {
  return await fetchUserList()
})

export const delUser = createAsyncThunk('user/deleteUser', async () => {
  return await deleteUser()
})

export const addUser = createAsyncThunk('user/postUser', async () => {
  return await postUser()
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
      .addCase(delUser.fulfilled, (state, action) => {
        state.status = 'success'
        state.users = action.payload
      })
      .addCase(addUser.fulfilled, (state, action) => {
        state.status = 'success'
        state.users = action.payload
      })
  },
})

export default userSlice.reducer
