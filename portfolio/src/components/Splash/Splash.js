import './Splash.css'
import swirl_sm from '../../assets/swirl_sm.jpg'

const Splash = () => {
  return (
    <div className='splashContainer'>
      <div className='splash'>
        <img src={swirl_sm} className='logo' alt='logo' />
      </div>
    </div>
  )
}
export default Splash
