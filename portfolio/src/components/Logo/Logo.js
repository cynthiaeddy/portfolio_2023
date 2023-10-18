import { useState } from 'react'
import './Logo.css'
import swirl_sm from '../../assets/swirl_sm.jpg'

const Logo = ({ isMobile }) => {

  const [hover, setHover] = useState(false)

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
