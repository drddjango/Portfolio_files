'use client'

import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'
import { ArrowDown } from 'lucide-react'
import { useLenis } from 'lenis/react'
import { useGSAP } from '@gsap/react'
import { heroAnimation } from '@/utils/Animations'

type Props = {}

const Hero = (props: Props) => {
  const [image, setImage] = useState('md')
  const lenis = useLenis()

  const scrollToSection = (target: string) => {
    function raf(time: number) {
      lenis?.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    lenis?.scrollTo(target, { duration: 1, easing: (t) => t * (2 - t) })
  }

  useEffect(() => {
    const windowWidth = window.innerWidth
    if (windowWidth < 769) {
      setImage('sm')
    }
  }, [])

  useGSAP(
    () => {
      heroAnimation()
    },
    { dependencies: ['#hero'] },
  )

  return (
    <div
      className={cn(
        'w-full h-[100svh] md:h-screen relative bg-cover bg-center sm:bg-fixed hero-image',
        image === 'sm' ? 'bg-parallax_sm' : 'bg-parallax_md',
      )}
    >
      <div className="absolute inset-0 bg-black opacity-50" />
      <div className="absolute bottom-0 left-0 p-8 overflow-hidden hero-content">
        <div className="text-left">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight font-heading">
            Enhancing Smiles
            <br />
            with Precision Care
          </h1>
          <p className="text-md sm:text-lg md:text-lg mt-4 w-[100%] md:w-[70%] sub-content">
            Providing expert dental care for healthy, beautiful smiles. Our team
            of experienced doctors is dedicated to ensuring your dental health
            and comfort.
          </p>
          <div className="mt-6 space-x-4 explore-buttons">
            <button
              className="px-6 py-3 bg-primary border-2 border-primary text-white font-bold rounded-lg shadow-md hover:bg-white  hover:text-primary transition duration-300 text-sm md:text-lg"
              onClick={() => scrollToSection('#contact')}
            >
              Get In Touch
            </button>
            <button
              className="px-6 py-3 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-primary transition duration-300 text-sm md:text-lg"
              onClick={() => scrollToSection('#about')}
            >
              Learn More <ArrowDown className="inline w-4 h-4 ml-2" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
