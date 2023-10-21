import { useState } from 'react'
import './Logo.css'
import logo from '../../assets/swirl_sm.jpg'

const Logo = ({ isMobile }) => {
  const [, setHover] = useState(false)

  return (
    <>
      {isMobile ? (
        <section className='mobile logoContainer'>
          <img className='mobile-logo' src={logo} alt='logo' />
        </section>
      ) : (
        <section className='logo logoContainer'>
          <img
            src={logo}
            className='logo'
            alt='logo'
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          />
        </section>
      )}
    </>
  )
}

export default Logo
