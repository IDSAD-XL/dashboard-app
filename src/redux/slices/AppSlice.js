import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  screen: 'desktop',
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
  },
})

// Action creators are generated for each case reducer function
export const { setAppScreen } = appSlice.actions

export default appSlice.reducer
