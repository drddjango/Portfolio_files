'use client'
import { useRef, useState } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
const FadeIn = ({ children }: { children: React.ReactNode }) => {
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
              duration: 1,
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
    <div ref={ref} className="w-full">
      <div ref={mainRef} style={{ opacity: 0 }}>
        {children}
      </div>
    </div>
  )
}

export default FadeIn
