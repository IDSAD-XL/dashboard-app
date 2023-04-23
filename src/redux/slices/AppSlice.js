import { createSlice } from '@reduxjs/toolkit'
import { themeColors } from '../../data/dummy'

const initialState = {
  screen: 'desktop',
  mode: 'light',
  accent: themeColors[0].color,
  settingsOpen: false,
}

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setAppScreen: (state, action) => {
      const w = action.payload
      if (w < 768) state.screen = 'mobile'
      else if (w < 1240) state.screen = 'tablet'
      else state.screen = 'desktop'
    },
    setAppMode: (state, action) => {
      state.mode = action.payload
      localStorage.setItem('appMode', action.payload)
    },
    setAppAccent: (state, action) => {
      state.accent = action.payload
      localStorage.setItem('appAccent', action.payload)
    },
    toggleAppMode: (state) => {
      state.mode = state.mode === 'light' ? 'dark' : 'light'
      localStorage.setItem('appMode', state.mode)
    },
    toggleSettingsMenu: (state) => {
      state.settingsOpen = !state.settingsOpen
    },
  },
})

// Action creators are generated for each case reducer function
export const {
  setAppScreen,
  setAppAccent,
  setAppMode,
  toggleAppMode,
  toggleSettingsMenu,
} = appSlice.actions

export default appSlice.reducer
