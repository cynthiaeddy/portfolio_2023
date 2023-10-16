import './Footer.css'

const Footer = () => {
  return (
    <nav className='footerContainer'>
      <div className='social'>
        <a href='mailto:cynthiaeddynyc@gmail.com'>
          <i className='small fas fa-envelope fa-2x'></i>
        </a>
        <a href='https://www.linkedin.com/in/cynthiaeddy'>
          <i className='small fab fa-linkedin fa-2x'></i>
        </a>
        <a href=' https://github.com/cynthiaeddy'>
          <i className='small fab fa-github fa-2x'></i>
        </a>
      </div>
    </nav>
  )
}

export default Footer
