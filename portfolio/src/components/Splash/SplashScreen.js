import { useState, useEffect } from 'react'
import ProjectsContainer from '../ProjectsContainer/ProjectsContainer'
import Splash from './Splash'

const SplashScreen = ({isMobile}) => {
  const [width, setWidth] = useState(window.innerWidth)
  const [timePassed, setTimePassed] = useState(false)


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

  return !timePassed && !isMobile ? <Splash /> : <ProjectsContainer />
}
export default SplashScreen
