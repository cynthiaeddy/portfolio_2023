import { useState, useEffect } from 'react'
import './Logo.css'
import swirl_sm from '../../assets/swirl_sm.jpg'

const Logo = () => {
  const [width, setWidth] = useState(window.innerWidth)
  const [hover, setHover] = useState(false)
  let isMobile
  width <= 600 ? (isMobile = true) : (isMobile = false)

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange)

    return () => {
      window.removeEventListener('resize', handleWindowSizeChange)
    }
  }, [])
  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth)
  }

  return (
    <section className='splash logo logoContainer'>
      {isMobile ? (
        <img className='mobile' src={swirl_sm} alt='logo' />
      ) : (
        <img
          src={swirl_sm}
          className='swirl'
          alt='logo'
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        />
      )}
    </section>
  )
}

export default Logo
