'use client'
import { preLoader } from '@/utils/Animations'
import { useGSAP } from '@gsap/react'
import { useRef } from 'react'

type Props = {}

const PreLoader = (props: Props) => {
  const parentRef = useRef<HTMLDivElement | null>(null)
  useGSAP(
    () => {
      document.body.style.overflow = 'hidden'
      parentRef.current = document.getElementById(
        'parentContainer',
      ) as HTMLDivElement
      preLoader(parentRef.current)
    },
    { scope: parentRef.current as Element },
  )
  return (
    <div
      id="slider"
      className="w-full fixed top-0 left-0 h-screen z-40 bg-primary text-white flex flex-col gap-4 justify-center place-items-center"
    >
      <div className="overflow-hidden w-fit">
        <h1
          id="text-1"
          className="font-heading text-7xl md:text-8xl tracking-[20px] font-bold"
        >
          ILILI
        </h1>
      </div>
      <div className="overflow-hidden w-fit">
        <h2 id="text-2" className="font-heading text-5xl md:text-6xl">
          Dental Spa
        </h2>
      </div>
    </div>
  )
}

export default PreLoader
