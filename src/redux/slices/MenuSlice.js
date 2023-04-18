import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  open: true,
}

export const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    toggleMenu: (state) => {
      state.open = !state.open
    },
    closeMenu: (state) => {
      state.open = false
    },
    openMenu: (state) => {
      state.open = true
    },
  },
})

// Action creators are generated for each case reducer function
export const { toggleMenu, closeMenu, openMenu } = menuSlice.actions

export default menuSlice.reducer
