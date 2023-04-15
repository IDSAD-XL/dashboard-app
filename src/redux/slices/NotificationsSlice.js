import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const notificationsSlice = createSlice({
  name: 'notifications',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment } = notificationsSlice.actions

export default notificationsSlice.reducer
