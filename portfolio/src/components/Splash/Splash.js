import './Splash.css'
import swirl_sm from '../../assets/swirl_sm.jpg'

const Splash = () => {
  return (
    <div className='splash-container'>
      <div className='splash logo'>
        <div className='homeLogo swirl_sm'>
          <img src={swirl_sm} className='swirl' alt='logo' />
        </div>
      </div>
    </div>
  )
}
export default Splash
