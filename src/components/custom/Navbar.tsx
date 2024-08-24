'use client'
import { usePathname } from 'next/navigation'
import { useRef, useState } from 'react'
import { useLenis } from 'lenis/react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { homeNavLinks, NavLink } from '@/utils/NavData'
import { cn } from '@/lib/utils'
import { navbarAnimation } from '@/utils/Animations'
import { Menu as MenuIcon } from 'lucide-react'
import NavMenu from './NavMenu/NavMenu'
import TransitionLink from './TransitionLink'
gsap.registerPlugin(ScrollTrigger)

type Props = {}

const Navbar = (props: Props) => {
  const pathName = usePathname()
  const [menuOpen, setMenuOpen] = useState<boolean>(false)
  const [currentSection, setCurrentSection] = useState<string>('hero')
  const navRef = useRef<HTMLDivElement | null>(null)
  const lenis = useLenis()

  const navigationHandler = (target: string) => {
    setCurrentSection(target.split('#')[1])
    function raf(time: number) {
      lenis!.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
    lenis!.scrollTo(target, { duration: 1, easing: (t) => t * (2 - t) })
  }

  const openMenu = () => {
    setMenuOpen(!menuOpen)
    setTimeout(() => {
      document.body.style.overflow = 'hidden'
    }, 800)
  }

  const closeMenu = () => {
    setMenuOpen(false)
    setTimeout(() => {
      document.body.style.overflow = 'unset'
    }, 800)
  }

  const handleScroll = () => {
    if (window.scrollY === 0) {
      setCurrentSection('hero')
    }
  }

  useGSAP(
    () => {
      window.addEventListener('scroll', handleScroll)

      const navbar = navRef.current
      navbarAnimation(navbar!)

      if (pathName === '/') {
        const sections = document.querySelectorAll('.section-wrapper')
        const hero = document.querySelector('#hero')
        const sectionsArray = Array.from(sections)
        sectionsArray.push(hero!)
        const options = {
          threshold: 0.2,
        }

        const callback = (entries: IntersectionObserverEntry[]) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              if (entry.target.id === 'contact') return
              setCurrentSection(entry.target.id)
            }
          })
        }

        const observer = new IntersectionObserver(callback, options)
        sectionsArray.forEach((section) => {
          observer.observe(section)
        })
      }

      return () => {
        window.removeEventListener('scroll', handleScroll)
      }
    },
    { dependencies: [] },
  )

  return (
    <>
      <nav
        ref={navRef}
        className="hidden md:flex fixed top-0 left-0 right-0  h-[10svh] justify-between place-items-center bg-primary-foreground z-20 shadow-md"
      >
        <div className="flex flex-col justify-center place-items-center p-5 lg:p-10 font-heading">
          <TransitionLink href="/">
            <p className="uppercase text-[2rem] tracking-[10px] font-bold text-center">
              Ilili
            </p>
            <p className="text-[0.7rem] font-bold uppercase tracking-[5px] text-nowrap">
              Dental Spa
            </p>
          </TransitionLink>
        </div>
        {pathName === '/' && (
          <ul className="flex w-full justify-around place-items-center text-md lg:text-lg">
            {homeNavLinks.map((item) => (
              <NavLinks
                key={item.id}
                item={item}
                onClick={navigationHandler}
                active={currentSection === item.sectionId ? 'text-primary' : ''}
              />
            ))}
          </ul>
        )}
        <div
          onClick={openMenu}
          className="min-w-[100px] lg:min-w-[150px] font-heading font-bold  lg:text-lg h-[10svh] flex justify-center place-items-center cursor-pointer bg-primary-foreground hover:bg-primary hover:text-white transition-all duration-300"
        >
          <MenuIcon size={28} />
        </div>
      </nav>
      <NavMenu onClose={closeMenu} toggle={menuOpen} />
    </>
  )
}

export default Navbar

const NavLinks = ({
  item,
  onClick,
  active,
}: {
  item: NavLink
  onClick: Function
  active: string
}) => {
  return (
    <li
      className={cn(
        'cursor-pointer p-2 hover:text-primary font-heading transition-all duration-300',
        active,
      )}
      onClick={() => onClick(item.id)}
    >
      <div>{item.title}</div>
    </li>
  )
}
