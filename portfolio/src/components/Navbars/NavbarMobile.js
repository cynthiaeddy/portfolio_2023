import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'
import MenuButton from './MenuButton'

const NavbarMobile = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
      <nav id='navbar-mobile'>
        <div className='navbar-mobile_menu' onClick={toggleMenu}>
          <MenuButton isOpen={isMenuOpen} />
        </div>
        <ul className={`navbar-mobile ${isMenuOpen ? 'active' : 'not-active'}`}>
          <li>
            <h2>
              <NavLink to='/projects'>Projects</NavLink>
            </h2>
          </li>
          <li>
            <h2>
              <NavLink to='/about-me'>About Me</NavLink>
            </h2>
          </li>
        </ul>
      </nav>
  )
}
export default NavbarMobile
