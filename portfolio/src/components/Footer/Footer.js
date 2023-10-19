import {useState, useRef} from 'react'
import './Footer.css'
import ModalContactForm from '../Contact/ModalContactForm'

const Footer = () => {
  const ref = useRef();


  const [isModalContactFormOpen, setIsModalContactFormOpen] = useState(false)

  const modalContactFormClose = () => {
    console.log("in footer, close modal")
    setIsModalContactFormOpen(false)
  }
  const modalContactFormOpen = () => {
    setIsModalContactFormOpen(true)
  }



  return (
    <>
    <nav className='footerContainer'>
      <div className='social'>
        <button onClick={modalContactFormOpen}>
          <i className='small fas fa-envelope fa-2x'></i>
          </button>
        <a href='https://www.linkedin.com/in/cynthiaeddy'>
          <i className='small fab fa-linkedin fa-2x'></i>
        </a>
        <a href=' https://github.com/cynthiaeddy'>
          <i className='small fab fa-github fa-2x'></i>
        </a>
      </div>
      </nav>
      <ModalContactForm  isOpen={isModalContactFormOpen}
        modalContactFormClose={modalContactFormClose}/>
      </>
  )
}

export default Footer
