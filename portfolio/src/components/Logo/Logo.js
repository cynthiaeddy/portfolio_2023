import { useState } from 'react'
import './Logo.css'
import logo from '../../assets/swirl_sm.jpg'

const Logo = ({ isMobile }) => {
  const [, setHover] = useState(false)

  return (
    <section className='logo logoContainer'>
      {isMobile ? (
        <img className='logo-mobile' src={logo} alt='logo' />
      ) : (
        <img
          src={logo}
          className='logo'
          alt='logo'
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        />
      )}
    </section>
  )
}

export default Logo
