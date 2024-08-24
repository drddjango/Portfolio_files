'use client'
import { useRef, useState } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
interface Props {
  children: React.ReactNode
  className?: string
}
const Reveal = ({ children, className }: Props) => {
  const ref = useRef(null)
  const mainRef = useRef(null)
  const [hasAnimated, setHasAnimated] = useState(false)

  useGSAP(
    () => {
      const element = ref.current
      const mainElement = mainRef.current

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !hasAnimated) {
            gsap.to(mainElement, {
              opacity: 1,
              y: 0,
              duration: 0.3,
              ease: 'power4.inOut',
              stagger: 0.1,
            })
          }
          setHasAnimated(true)
        },
        { threshold: 0.1 },
      )

      observer.observe(element!)

      return () => observer.disconnect()
    },
    { dependencies: [ref] },
  )

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <div
        ref={mainRef}
        style={{
          opacity: 0,
          transform: 'translateY(75px)',
          transition: 'opacity 0.5s, transform 0.5s',
        }}
      >
        {children}
      </div>
    </div>
  )
}

export default Reveal
