import React, { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { motion } from 'framer-motion'

import './App.css'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import { FiSettings } from 'react-icons/fi'

import { Navbar, Sidebar } from './components'
import {
  Ecommerce,
  Orders,
  Calendar,
  Employees,
  Stacked,
  Pyramid,
  Line,
  Pie,
  Kanban,
  Editor,
  Financial,
  Customers,
  Bar,
  ColorPicker,
  Area,
  ColorMapping,
} from './pages'
import { useDispatch, useSelector } from 'react-redux'
import { setAppScreen } from './redux/slices/AppSlice'

const App = () => {
  const activeMenu = useSelector((state) => state.menu.open)
  const appScreen = useSelector((state) => state.app.screen)
  const dispatch = useDispatch()

  useEffect(() => {
    const handleResize = () => {
      dispatch(setAppScreen(window.innerWidth))
    }

    window.addEventListener('resize', handleResize)

    handleResize()

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div>
      <BrowserRouter>
        <div className="relative flex overflow-hidden bg-main-bg dark:bg-main-dark-bg">
          <div className="fixed bottom-4 right-4" style={{ zIndex: 1000 }}>
            <TooltipComponent content="Settigs" position="TopCenter">
              <button
                type="button"
                className="p-3 text-3xl text-white hover:bg-light-gray hover:drop-shadow-xl"
                style={{
                  background: 'blue',
                  borderRadius: '50%',
                }}
              >
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>
          <motion.div
            className="sidebar fixed w-72 bg-white dark:bg-secondary-dark-bg"
            animate={{
              left: activeMenu ? 0 : '-18rem',
            }}
            transition={{
              ease: 'anticipate',
              duration: 0.4,
            }}
          >
            <Sidebar />
          </motion.div>
          <motion.div
            className={`min-h-screen w-full bg-main-bg dark:bg-main-bg ${
              activeMenu ? 'md:ml-72' : 'flex-2'
            }`}
            animate={{
              marginLeft: activeMenu ? '18rem' : '0',
            }}
            transition={{
              ease: 'easeInOut',
              duration: 0.4,
            }}
          >
            <div
              className={
                'navbar fixed w-full bg-main-bg dark:bg-main-dark-bg md:static'
              }
            >
              <Navbar />
            </div>
          </motion.div>
          <div>
            <Routes>
              {/* dashboard  */}
              <Route path="/" element={<Ecommerce />} />
              <Route path="/ecommerce" element={<Ecommerce />} />

              {/* pages  */}
              <Route path="/orders" element={<Orders />} />
              <Route path="/employees" element={<Employees />} />
              <Route path="/customers" element={<Customers />} />

              {/* apps  */}
              <Route path="/kanban" element={<Kanban />} />
              <Route path="/editor" element={<Editor />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/color-picker" element={<ColorPicker />} />

              {/* charts  */}
              <Route path="/line" element={<Line />} />
              <Route path="/area" element={<Area />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/financial" element={<Financial />} />
              <Route path="/color-mapping" element={<ColorMapping />} />
              <Route path="/pyramid" element={<Pyramid />} />
              <Route path="/stacked" element={<Stacked />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
