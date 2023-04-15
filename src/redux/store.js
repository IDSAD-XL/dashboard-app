import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './slices/CartSlice'
import chatSlice from './slices/ChatSlice'
import notificationsSlice from './slices/NotificationsSlice'
import userSlice from './slices/UserSlice'
import menuSlice from './slices/MenuSlice'
import navbarSlice from './slices/NavbarSlice'
import appSlice from './slices/AppSlice'

export const store = configureStore({
  reducer: {
    app: appSlice,
    cart: cartSlice,
    chat: chatSlice,
    notifications: notificationsSlice,
    user: userSlice,
    menu: menuSlice,
    navbar: navbarSlice,
  },
})
