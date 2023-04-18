import React from 'react'
import { MdOutlineCancel } from 'react-icons/md'
import { themeColors } from '../data/dummy'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import { BsCheck } from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux'
import {
  toggleAppMode,
  setAppAccent,
  toggleSettingsMenu,
} from '../redux/slices/AppSlice'
import Switch from './Switch'
import { motion } from 'framer-motion'

const ThemeSettings = () => {
  const currentTheme = useSelector((state) => state.app.mode)
  const currentAccent = useSelector((state) => state.app.accent)
  const isOpen = useSelector((state) => state.app.settingsOpen)
  const dispatch = useDispatch()
  const setColor = (color) => dispatch(setAppAccent(color))
  const toggleTheme = () => dispatch(toggleAppMode())

  return (
    <motion.div
      className="nav-item fixed right-0 top-0 w-screen bg-half-transparent"
      animate={
        isOpen
          ? {
              opacity: 1,
              animationDelay: '0s',
            }
          : {
              pointerEvents: 'none',
              opacity: 0,
              animationDelay: '.3s',
            }
      }
    >
      <motion.div
        className="dark:[#484B52] w-300 float-right h-screen bg-white dark:bg-main-dark-bg dark:text-gray-200"
        animate={{
          x: isOpen ? '0' : '100%',
          transition: {
            ease: 'anticipate',
            duration: 0.5,
          },
        }}
      >
        <div className="ml-4 flex items-center justify-between p-4">
          <p className="text-lg font-semibold">Settings</p>
          <button
            type="button"
            onClick={() => {
              dispatch(toggleSettingsMenu())
            }}
            className="p-3 text-2xl hover:bg-light-gray hover:drop-shadow-xl"
            style={{ color: 'rgb(153, 171, 180)', borderRadius: '50%' }}
          >
            <MdOutlineCancel />
          </button>
        </div>
        <div className="ml-4 flex-col border-t-1 border-color p-4">
          <p className="text-lg font-semibold">Theme Options</p>
          <div className="mt-4 flex w-full items-center justify-between">
            <span className="font-semibold">Dark mode</span>
            <Switch checked={currentTheme === 'dark'} cb={toggleTheme} />
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
                    onClick={() => {
                      setColor(item.color)
                    }}
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
      </motion.div>
    </motion.div>
  )
}

export default ThemeSettings
