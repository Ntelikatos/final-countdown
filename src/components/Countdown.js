import React, { useContext } from 'react'
import Anime from 'react-anime'
import { MainContext } from './App'

function Pad(number, size) {
  var s = String(number)
  while (s.length < (size || 2)) {
    s = '0' + s
  }
  return s
}

const Countdown = () => {
  const { days, hours, minutes, seconds, isLoading } = useContext(MainContext)

  return (
    <React.Fragment>
      <div className='container u--center-flex'>
        {isLoading ? (
          <span style={{ fontSize: 80 }}>Loading...</span>
        ) : (
          <Anime
            easing='easeInBounce'
            direction='reverse'
            duration={900}
            scale={[1, 0.5]}
          >
            <div className='container__timer u--center-flex e--glass'>
              <div className='container__item'>
                <span>Days</span>
                <h1>{Pad(days, 2)}</h1>
              </div>
              <span className='container__seperator'>:</span>
              <div className='container__item'>
                <span>Hours</span>
                <h1>{Pad(hours, 2)}</h1>
              </div>
              <span className='container__seperator'>:</span>
              <div className='container__item'>
                <span>Minutes</span>
                <h1>{Pad(minutes, 2)}</h1>
              </div>
              <span className='container__seperator'>:</span>
              <div className='container__item'>
                <span>Seconds</span>
                <h1>{Pad(seconds, 2)}</h1>
              </div>
            </div>
          </Anime>
        )}
      </div>
    </React.Fragment>
  )
}

export default Countdown
