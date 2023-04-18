import React from 'react'
import { MdOutlineCancel } from 'react-icons/md'
import { themeColors } from '../data/dummy'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import { BsCheck } from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux'
import { toggleAppMode, setAppAccent } from '../redux/slices/AppSlice'
import Switch from './Switch'

const ThemeSettings = () => {
  const currentTheme = useSelector((state) => state.app.mode)
  const currentAccent = useSelector((state) => state.app.accent)
  const dispatch = useDispatch()
  const setColor = (color) => dispatch(setAppAccent(color))
  const toggleTheme = () => dispatch(toggleAppMode())

  return (
    <div className="nav-item fixed right-0 top-0 w-screen bg-half-transparent">
      <div className="dark:[#484B52] float-right h-screen w-400 bg-white dark:text-gray-200">
        <div className="ml-4 flex items-center justify-between p-4">
          <p className="text-lg font-semibold">Settings</p>
          <button
            type="button"
            onClick={() => {}}
            className="p-3 text-2xl hover:bg-light-gray hover:drop-shadow-xl"
            style={{ color: 'rgb(153, 171, 180)', borderRadius: '50%' }}
          >
            <MdOutlineCancel />
          </button>
        </div>
        <div className="ml-4 flex-col border-t-1 border-color p-4">
          <p className="text-lg font-semibold">Theme Options</p>
          <div className="mt-4">
            <Switch checked={currentTheme === 'dark'} cb={toggleTheme} />
          </div>
          <div className="mt-4">
            <input
              type="radio"
              id="light"
              name="theme"
              value="light"
              className="cursor-pointer"
              checked={true}
              onClick={() => {}}
            />
            <label htmlFor="light" className="text-md ml-2 cursor-pointer">
              Light
            </label>
          </div>
          <div className="mt-4">
            <input
              type="radio"
              id="dark"
              name="theme"
              value="dark"
              className="cursor-pointer"
              checked={true}
              onClick={() => {}}
            />
            <label htmlFor="dark" className="text-md ml-2 cursor-pointer">
              Dark
            </label>
          </div>
        </div>
        <div className="ml-4 flex-col border-t-1 border-color p-4">
          <p className="text-lg font-semibold">Theme Colors</p>
          <div className="flex gap-3">
            {themeColors.map((item, index) => (
              <TooltipComponent
                key={index}
                content={item.name}
                position="TopCenter"
              >
                <div className="relative mt-2 cursor-pointer items-center">
                  <button
                    className="h-10 w-10 cursor-pointer rounded-full"
                    type="button"
                    style={{ backgroundColor: item.color }}
                    onClick={() => {}}
                  >
                    <BsCheck
                      className={`ml-2 text-2xl text-white ${
                        item.color === currentAccent ? 'block' : 'hidden'
                      }`}
                    />
                  </button>
                </div>
              </TooltipComponent>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ThemeSettings
