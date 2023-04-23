import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
const MotionAppear = ({ className, delay = 0.1, children }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  return (
    <motion.div
      ref={ref}
      animate={{
        opacity: isInView && 1,
        x: isInView && 0,
        rotateX: isInView && 0,
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
      className={'motion-item' + className}
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
