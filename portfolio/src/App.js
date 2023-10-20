import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbars/Navbar'
import NavbarMobile from './components/Navbars/NavbarMobile'

import Logo from './components/Logo/Logo'
import ProjectsContainer from './components/ProjectsContainer/ProjectsContainer'
import SplashScreen from './components/Splash/SplashScreen'
import Footer from './components/Footer/Footer'
import Project from './components/Project/Project'

const App = () => {
  const [width, setWidth] = useState(window.innerWidth)
  let isMobile
  width <= 600 ? (isMobile = true) : (isMobile = false)

  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange)

    return () => {
      window.removeEventListener('resize', handleWindowSizeChange)
    }
  }, [])

  let routes = (
    <Routes>
      <Route exact path='/' element={<SplashScreen isMobile={isMobile} />} />
      <Route exact path='/projects' element={<ProjectsContainer />} />
      <Route exact path='/projects/:title' element={<Project />} />
      {/* <Route exact path='/about-me' element={<AboutMe />} /> */}
    </Routes>
  )
  return (
    <div className='appContainer'>
      <Router>
        {!isMobile ? <Navbar /> : <NavbarMobile />}
        <Logo isMobile={isMobile} />
        {routes}
      </Router>
      <Footer />
    </div>
  )
}

export default App
