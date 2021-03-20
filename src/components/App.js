import React, { useEffect, useState } from 'react'

/*eslint no-extend-native: ["error", { "exceptions": ["Number"] }]*/
Number.prototype.pad = function (size) {
  var s = String(this)
  while (s.length < (size || 2)) {
    s = '0' + s
  }
  return s
}

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [days, setDays] = useState(0)
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)

  const updateDateDiff = (dateFrom) => {
    const dateTo = new Date()

    const diffTime = Math.abs(dateTo.getTime() - dateFrom.getTime())

    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24))
    const diffHours = Math.floor(
      (diffTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    )
    const diffMinutes = Math.floor((diffTime % (1000 * 60 * 60)) / (1000 * 60))
    const diffSeconds = Math.floor((diffTime % (1000 * 60)) / 1000)

    setDays(diffDays)
    setHours(diffHours)
    setMinutes(diffMinutes)
    setSeconds(diffSeconds)

    setIsLoading(false)
  }

  useEffect(() => {
    const timer = setInterval(() => updateDateDiff(new Date('9/1/2021')), 1000)

    return () => clearInterval(timer)
  })

  return (
    <div className='container u--center'>
      {isLoading ? (
        <span style={{ fontSize: 80 }}>Loading...</span>
      ) : (
        <div className='container__timer u--center e--glass'>
          <div className='container__item'>
            <span>Days</span>
            <h1>{days.pad()}</h1>
          </div>
          <span className='container__seperator'>:</span>
          <div className='container__item'>
            <span>Hours</span>
            <h1>{hours.pad()}</h1>
          </div>
          <span className='container__seperator'>:</span>
          <div className='container__item'>
            <span>Minutes</span>
            <h1>{minutes.pad()}</h1>
          </div>
          <span className='container__seperator'>:</span>
          <div className='container__item'>
            <span>Seconds</span>
            <h1>{seconds.pad()}</h1>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
