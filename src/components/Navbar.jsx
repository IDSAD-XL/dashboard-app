import React, { useEffect } from 'react'
import { AiFillProfile, AiOutlineMenu } from 'react-icons/ai'
import { FiShoppingCart } from 'react-icons/fi'
import { BsChatLeft } from 'react-icons/bs'
import { Ri4KFill, RiNotification3Line } from 'react-icons/ri'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'

import avatar from '../data/avatar.jpg'
import { Cart, Chat, Notification, UserProfile } from '.'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from '../redux/slices/MenuSlice'
import { setActiveNavbar } from '../redux/slices/NavbarSlice'
import { APP_ACCENT_CSS_VAR } from '../utils/constants'

const NavButton = ({ title, cb, icon, color, dotColor }) => (
  <TooltipComponent content={title} position="BottomCenter">
    <button
      type="button"
      onClick={cb}
      style={{ color }}
      className="relative rounded-full p-3 text-xl hover:bg-light-gray"
    >
      <span
        style={{ background: dotColor }}
        className="absolute right-2 top-2 inline-flex h-2 w-2 rounded-full"
      />
      {icon}
    </button>
  </TooltipComponent>
)

const Navbar = () => {
  const activeNavbarItem = useSelector((state) => state.navbar.active)
  const dispatch = useDispatch()

  return (
    <div className="relative flex justify-between p-2 md:mx-6">
      <NavButton
        title="Menu"
        cb={() => {
          dispatch(toggleMenu())
        }}
        color={APP_ACCENT_CSS_VAR}
        icon={<AiOutlineMenu />}
      />
      <div className="flex">
        <NavButton
          title="Cart"
          cb={() => {
            dispatch(setActiveNavbar('cart'))
          }}
          color={APP_ACCENT_CSS_VAR}
          icon={<FiShoppingCart />}
        />
        <NavButton
          title="Chat"
          cb={() => {
            dispatch(setActiveNavbar('chat'))
          }}
          color={APP_ACCENT_CSS_VAR}
          dotColor="#03C9D7"
          icon={<BsChatLeft />}
        />
        <NavButton
          title="Notifications"
          cb={() => {
            dispatch(setActiveNavbar('notifications'))
          }}
          color={APP_ACCENT_CSS_VAR}
          dotColor="#03C9D7"
          icon={<RiNotification3Line />}
        />
        <TooltipComponent content="Profile" position="BottomCenter">
          <div
            className="flex cursor-pointer items-center gap-2 rounded-lg p-1 hover:bg-light-gray"
            onClick={() => {
              dispatch(setActiveNavbar('profile'))
            }}
          >
            <img src={avatar} alt="" className="h-8 w-8 rounded-full" />
            <p>
              <span className="text-gray-400">Hi, </span>
              <span className="ml-1 text-14 font-bold text-gray-400">
                Michael
              </span>
            </p>
          </div>
        </TooltipComponent>
        {activeNavbarItem === 'cart' && <Cart />}
        {activeNavbarItem === 'chat' && <Chat />}
        {activeNavbarItem === 'notifications' && <Notification />}
        {activeNavbarItem === 'profile' && <UserProfile />}
      </div>
    </div>
  )
}

export default Navbar
