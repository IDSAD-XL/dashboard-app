import React from 'react'
import { motion } from 'framer-motion'
const MotionAppear = ({ className, delay = 0.1, children }) => {
  return (
    <motion.div
      animate={{
        opacity: 1,
        x: 0,
        rotateX: 0,
      }}
      transition={{
        delay: delay,
        opacity: {
          duration: 0.3,
          ease: 'linear',
        },
        x: {
          duration: 0.5,
          ease: 'anticipate',
        },
        rotateX: {
          duration: 0.7,
          ease: 'easeOut',
        },
      }}
      className={className}
      style={{
        opacity: 0,
        x: 50,
        transformOrigin: '50% 50px',
        rotateX: -50,
      }}
    >
      {children}
    </motion.div>
  )
}

export default MotionAppear
