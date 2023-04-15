import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  active: null,
}

export const navbarSlice = createSlice({
  name: 'navbar',
  initialState,
  reducers: {
    setActiveNavbar: (state, action) => {
      state.active = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setActiveNavbar } = navbarSlice.actions

export default navbarSlice.reducer
