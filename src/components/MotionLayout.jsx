import React, { useEffect } from 'react'
import { stagger, useAnimate, useInView } from 'framer-motion'

const staggerItems = stagger(0.1, { startDelay: 0.2 })

const MotionLayout = ({ className, children }) => {
  const [scope, animate] = useAnimate()
  const inView = useInView(scope)

  useEffect(() => {
    animate(
      '.motion-item',
      {
        opacity: inView ? 1 : 0,
        x: inView ? 0 : 50,
        transformOrigin: '50% 50px',
        rotateX: inView ? 0 : -50,
      },
      {
        delay: staggerItems,
      },
    )
  }, [inView])

  return (
    <div ref={scope} className={className}>
      {children}
    </div>
  )
}

export default MotionLayout
