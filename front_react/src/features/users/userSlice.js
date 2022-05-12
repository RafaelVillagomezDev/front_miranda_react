import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
  users: [],
  status: 'idle',
}

export const getUserList = createAsyncThunk('user/fetchUser', async () => {
  return await fetchUserList()
})

export const userSlice = createSlice({
  name: 'user',
  initialState,

  reducers: {},
})
