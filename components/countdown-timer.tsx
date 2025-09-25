"use client"

import { useState, useEffect } from "react"

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    // Set target date to 1 month from now
    const targetDate = new Date()
    targetDate.setMonth(targetDate.getMonth() + 1)

    const timer = setInterval(() => {
      const now = new Date().getTime()
      const distance = targetDate.getTime() - now

      if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24))
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((distance % (1000 * 60)) / 1000)

        setTimeLeft({ days, hours, minutes, seconds })
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="flex items-center justify-center space-x-8 text-white">
      <div className="text-center">
        <div className="text-4xl md:text-6xl font-bold text-white">{timeLeft.days.toString().padStart(2, "0")}</div>
        <div className="text-sm md:text-base text-gray-300 uppercase tracking-wider">Days</div>
      </div>
      <div className="text-center">
        <div className="text-4xl md:text-6xl font-bold text-white">{timeLeft.hours.toString().padStart(2, "0")}</div>
        <div className="text-sm md:text-base text-gray-300 uppercase tracking-wider">Hours</div>
      </div>
      <div className="text-center">
        <div className="text-4xl md:text-6xl font-bold text-white">{timeLeft.minutes.toString().padStart(2, "0")}</div>
        <div className="text-sm md:text-base text-gray-300 uppercase tracking-wider">Minutes</div>
      </div>
      <div className="text-center">
        <div className="text-4xl md:text-6xl font-bold text-white">{timeLeft.seconds.toString().padStart(2, "0")}</div>
        <div className="text-sm md:text-base text-gray-300 uppercase tracking-wider">Seconds</div>
      </div>
    </div>
  )
}
