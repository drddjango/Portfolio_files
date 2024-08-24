'use client'
import CountUp from 'react-countup'

type Props = {
  start: number
  end: number
}

const Count = ({ start, end }: Props) => {
  return (
    <>
      <CountUp start={start} end={end} />+
    </>
  )
}

export default Count
