import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';


const App = () =>{

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

  const routes = (
    <Routes>
      <Route exact path='/' element={<Home />} />
      {/* <Route exact path='/projects' element={<Projects />} />
      <Route exact path='/projects/:title' element={<ProjectSolo />} />
      <Route exact path='/about-me' element={<AboutMe />} /> */}
      <Route path='*' element={{ Error }} />
    </Routes>
  )
  return (
    <div className="AppContainer">
      <Router>
        <Navbar/>
        {/* {!isMobile ? <Navbar /> : <NavbarMobile />} */}
        {/* <Logo /> */}
        {routes}
        </Router>
    </div>
  );
}

export default App;
