'use client'
import { pageIn } from '@/utils/Animations'
import { useGSAP } from '@gsap/react'
import { usePathname } from 'next/navigation'
import { useRef } from 'react'

type Props = {
  children: React.ReactNode
}

const PageTransition = ({ children }: Props) => {
  const pathName = usePathname()
  const containerRef = useRef(null)
  useGSAP(
    () => {
      const container = containerRef.current
      if (!container) return
      pageIn()
    },
    { scope: containerRef, dependencies: [pathName] },
  )
  return (
    <div ref={containerRef} id="transition" className="overflow-x-hidden">
      {children}
    </div>
  )
}

export default PageTransition
