import React, { useEffect } from 'react'
import { SiShopware } from 'react-icons/si'
import { MdOutlineCancel } from 'react-icons/md'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import { Link, NavLink } from 'react-router-dom'
import { links } from '../data/dummy'
import { useDispatch, useSelector } from 'react-redux'
import { closeMenu } from '../redux/slices/MenuSlice'

const activeLinkClassname =
  'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md m-2'
const normalLinkClassname =
  'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2'

const Sidebar = () => {
  const activeMenu = useSelector((state) => state.menu.open)
  const appSize = useSelector((state) => state.app.screen)
  const dispatch = useDispatch()

  const handleCloseSidebar = () => {
    if (appSize === 'mobile' && activeMenu) dispatch(closeMenu())
  }

  useEffect(() => {
    if (appSize === 'mobile') dispatch(closeMenu())
  }, [appSize])

  return (
    <div className="ml-3 h-screen overflow-auto pb-10 md:overflow-hidden md:hover:overflow-auto">
      <div className="mt-4 flex items-center justify-between">
        <Link
          to="/"
          onClick={handleCloseSidebar}
          className="ml-3 flex items-center gap-3 text-xl font-extrabold tracking-tight text-slate-900 dark:text-white"
        >
          <SiShopware /> <span>Shoppy</span>
        </Link>
        <TooltipComponent content="Menu" position="BottomCenter">
          <button
            type="button"
            onClick={() => {
              dispatch(closeMenu())
            }}
            className="mr-2 block rounded-full p-1 text-xl hover:bg-light-gray lg:hidden"
          >
            <MdOutlineCancel />
          </button>
        </TooltipComponent>
      </div>
      <div className="mt-10">
        {links.map((link) => (
          <div key={link.title}>
            <p className="m-3 mt-4 uppercase text-gray-400">{link.title}</p>
            {link.links.map((nestedLink) => (
              <NavLink
                to={`/${nestedLink.name}`}
                key={nestedLink.name}
                onClick={handleCloseSidebar}
                className={({ isActive }) =>
                  isActive ? activeLinkClassname : normalLinkClassname
                }
              >
                {nestedLink.icon}
                <span className="capitalize">{nestedLink.name}</span>
              </NavLink>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Sidebar
