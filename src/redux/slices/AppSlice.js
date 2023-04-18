import { createSlice } from '@reduxjs/toolkit'
import { themeColors } from '../../data/dummy'

const initialState = {
  screen: 'desktop',
  mode: true,
  accent: themeColors[0].color,
}

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setAppScreen: (state, action) => {
      const w = action.payload
      if (w < 760) state.screen = 'mobile'
      else if (w < 1240) state.screen = 'tablet'
      else state.screen = 'desktop'
    },
    setAppMode: (state, action) => {
      state.mode = action.payload
      localStorage.setItem('theme', action.payload)
    },
    setAppAccent: (state, action) => {
      state.accentColor = action.payload
      localStorage.setItem('theme-accent', action.payload)
    },
    toggleAppMode: (state) => {
      state.mode = state.mode === 'light' ? 'dark' : 'light'
    },
  },
})

// Action creators are generated for each case reducer function
export const { setAppScreen, setAppAccent, setAppMode, toggleAppMode } =
  appSlice.actions

export default appSlice.reducer
