import React from 'react'
import CountUp from 'react-countup/build/CountUp'
const Counter = ({
    startRange = 0,
    endRange = 100,
    countDuration = 5,
    countDelay = 0
    }) => {
  return (
      <CountUp start={startRange} end={endRange} duration={countDuration} delay={countDelay}/>
  )
}

export default Counter
