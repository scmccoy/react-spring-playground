import React, { useState, useCallback } from 'react'
import { useSpring, animated } from 'react-spring'
import './App.css';

function Pop() {
  const [count, set] = useState(0)
  // useCallback is not performant here
  const increment = useCallback(() => set(count => count + 1), [])
  const { scale } = useSpring({
    from: { scale: 0 },
    to: [{ immediate: true, scale: 1.5 }, { immediate: false, scale: 1 }]
  })

  return (
    <animated.div className="counter" style={{ transform: scale.interpolate(s => `scale(${s})`) }} onClick={increment}>
      {count}
    </animated.div>
  )
}

export default Pop;