import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { fetchUserList } from './UserApi'

const initialState = {
  users: [],
  status: 'idle',
}

export const getUserList = createAsyncThunk('user/fetchUser', async () => {
  return await fetchUserList()
})

export const userSlice = createSlice({
  name: 'users',
  initialState,

  reducers: {},
})
