import { NavLink } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav id='navbar'>
      <h2 className='Navbar-links'>
        <ul>
          <li>
            <NavLink
              to='/'
              className={({ isActive }) => (isActive ? 'nav-link-active' : 'inactive')}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to='/projects'>Projects</NavLink>
          </li>
          <li>
            <NavLink to='/about-me'>About Me</NavLink>
          </li>
        </ul>
      </h2>
    </nav>
  )
}

export default Navbar
