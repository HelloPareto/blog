import * as React from "react"
import { readingTime } from 'reading-time-estimator'

const TimeToRead = (wordCount) => {
  const result = readingTime()
  return (
    <span>
      4 min
    </span>
  )
}
