'use client'
import { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import { navbarAnimation } from '@/utils/Animations'
import { Menu as MenuIcon } from 'lucide-react'
import MobileMenu from './NavMenu/MobileMenu'
import TransitionLink from './TransitionLink'
const MobileNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const navRef = useRef(null)

  const openMenu = () => {
    setMenuOpen(true)
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

  useGSAP(
    () => {
      const navbar = navRef.current
      navbarAnimation(navbar!)
    },
    { dependencies: [] },
  )

  return (
    <>
      <nav
        ref={navRef}
        className="flex md:hidden h-[10svh] justify-between place-items-center bg-primary-foreground fixed left-0 right-0 top-0 z-20 shadow-md"
      >
        <div className="flex flex-col justify-center place-items-center p-5 font-heading">
          <TransitionLink href="/">
            <p className="uppercase text-[1.5rem] sm:text-[1.8rem] tracking-[10px] font-bold text-center">
              Ilili
            </p>
            <p className="text-[0.6rem] sm:text-[0.7rem] font-bold uppercase tracking-[5px] text-nowrap">
              Dental Spa
            </p>
          </TransitionLink>
        </div>
        <div
          className="min-w-[80px] sm:min-w-[100px]  font-heading font-bold text-md sm:text-lg h-[10svh] flex justify-center place-items-center cursor-pointer bg-primary text-white "
          onClick={openMenu}
        >
          <MenuIcon size={24} />
        </div>
      </nav>
      <MobileMenu onClose={closeMenu} toggle={menuOpen} />
    </>
  )
}

export default MobileNavbar
