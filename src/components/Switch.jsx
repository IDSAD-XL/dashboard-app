import React, { useState } from 'react'
import { motion } from 'framer-motion'

const Switch = ({ name, id, checked = false, cb }) => {
  const [isMouseDown, setIsMouseDown] = useState(false)

  return (
    <>
      <input
        type="checkbox"
        checked={checked}
        name={name}
        id={id}
        style={{
          width: '1px',
          height: '1px',
          position: 'absolute',
          visibility: 'hidden',
        }}
        onChange={() => {}}
      />
      <label
        htmlFor={id}
        className={`relative block cursor-pointer rounded-full ${
          checked ? 'bg-green-400' : 'bg-gray-400'
        }`}
        style={{
          width: '46px',
          height: '22px',
          transition: '.2s ease background-color',
        }}
        onClick={cb}
        onMouseDown={() => {
          setIsMouseDown(true)
        }}
        onMouseUp={() => {
          setIsMouseDown(false)
        }}
        onMouseLeave={() => {
          setIsMouseDown(false)
        }}
      >
        <motion.span
          className="relative flex items-center justify-center rounded-full bg-white"
          style={{
            y: 2,
            x: 2,
            width: 18,
            height: 18,
          }}
          transition={{
            ease: 'easeInOut',
            duration: 0.2,
          }}
          animate={{
            x: checked ? (isMouseDown ? 19 : 26) : 2,
            width: isMouseDown ? 25 : 18,
            height: isMouseDown ? 14 : 18,
            y: isMouseDown ? 4 : 2,
          }}
        >
          <motion.span
            className={`absolute ${checked ? 'bg-green-400' : 'bg-gray-400'}`}
            style={{
              width: 10,
              height: 2,
              background: '',
              transformOrigin: '50% 50%',
            }}
            animate={{
              rotate: isMouseDown ? 0 : checked ? 45 : 45,
              width: !isMouseDown && checked ? 4 : 10,
              x: !isMouseDown && checked ? -3 : 0,
              y: !isMouseDown && checked ? 1 : 0,
            }}
          />
          <motion.span
            className={`absolute ${checked ? 'bg-green-400' : 'bg-gray-400'}`}
            style={{
              width: 10,
              height: 2,
              background: '',
              transformOrigin: '50% 50%',
            }}
            animate={{
              rotate: isMouseDown ? 0 : -45,
              x: !isMouseDown && checked ? 2 : 0,
            }}
          />
        </motion.span>
      </label>
    </>
  )
}

export default Switch
