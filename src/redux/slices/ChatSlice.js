import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment } = chatSlice.actions

export default chatSlice.reducer
