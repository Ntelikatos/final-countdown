import React, { useEffect, useState } from 'react'
import CountDown from './Countdown'
import '../styles/main.scss'

const MainContext = React.createContext()

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
    <MainContext.Provider value={{ days, hours, minutes, seconds, isLoading }}>
      <div>
        <CountDown></CountDown>
      </div>
    </MainContext.Provider>
  )
}

export { App, MainContext }
