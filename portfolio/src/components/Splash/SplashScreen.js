import { useState, useEffect } from 'react'
import Projects from '../Projects/Projects'
import Splash from './Splash'

const SplashScreen = () => {
  const [width, setWidth] = useState(window.innerWidth)
  const [timePassed, setTimePassed] = useState(false)
  let isMobile
  width <= 768 ? (isMobile = true) : (isMobile = false)

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange)
    const timer = setTimeout(() => {
      setTimePassed(true)
    }, 5500)
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange)
      clearTimeout(timer)
    }
  }, [])

  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth)
  }

  return !timePassed && !isMobile ? <Splash /> : <Projects />
}
export default SplashScreen
