'use client'
import { useGSAP } from '@gsap/react'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { MenuLinks as Links, menuLinks } from '@/utils/NavData'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import Image from 'next/image'
type Props = {
  onClose: () => void
  toggle: boolean
}

const NavMenu = ({ onClose, toggle }: Props) => {
  const menuRef = useRef<HTMLDivElement | null>(null)
  const tl = useRef<GSAPTimeline | null>(null)

  useGSAP(
    () => {
      const menu = menuRef.current

      gsap.set('.contact_card', { x: '-120%' })
      gsap.set('.close_btn', { x: '-120%' })
      gsap.set('.nav_list', { x: '-20%', opacity: 0 })
      tl.current = gsap.timeline({
        paused: true,
        defaults: { duration: 0.92, ease: 'power4.inOut' },
      })
      tl.current
        .to(menu, { x: 0, duration: 0.92 })
        .to('.nav_list', { x: 0, opacity: 1, duration: 0.92 }, '-=0.5')
        .to('.contact_card', { x: 0, duration: 1.4 }, '-=1.2')
        .to('.close_btn', { x: 0, duration: 0.2, ease: 'expo.inOut' }, '-=0.5')
    },
    { scope: menuRef },
  )
  useEffect(() => {
    toggle ? tl.current?.play() : tl.current?.reverse()
  }, [toggle])

  return (
    <div
      className="hidden translate-x-[-100vw] md:flex w-screen h-screen overflow-y-hidden bg-primary-foreground justify-between fixed top-0 left-0 z-[1000000]"
      ref={menuRef}
      id="desktop-menu"
    >
      <div
        onClick={onClose}
        className="close_btn text-white w-[6vw] hover:w-[8vw] transition-all duration-500 flex justify-center place-items-center cursor-pointer bg-primary absolute left-0 top-0 bottom-0 z-20"
      >
        <span className="transform rotate-90 text-lg lg:text-xl">Close</span>
      </div>
      <div className="contact_card w-full pl-[6vw] z-[15] flex flex-col justify-center place-items-center relative">
        <div className="absolute inset-0 z-[-1]">
          <Image
            src="/Background/menu_img.webp"
            alt="Background"
            fill={true}
            loading="lazy"
            style={{ objectFit: 'cover' }}
            quality={100}
          />
        </div>
        <div className="flex flex-col justify-center place-items-center bg-[rgba(255,255,255,0.3)] backdrop-blur-[10px] shadow-md relative gap-5 p-5 lg:p-10 rounded-lg">
          <h3 className="font-heading text-4xl lg:text-5xl font-bold">
            Contact
          </h3>
          <p className="text-md lg:text-lg  pb-2">
            <span className="font-bold">Address:</span> Vas Villa, Near
            Kannammoola Bridge,
            <br /> Thiruvananthapuram, Kerala - 695024
          </p>
          <a href="tel:04712743311" className="hover:text-white ">
            <p className="text-md lg:text-lg  pb-2">
              <span className="font-bold">Ph:</span> 0471 274 3311
            </p>
          </a>
          <a href="mailto:drarun_70@yahoo.com" className="hover:text-white">
            <p className="text-md lg:text-lg">
              <span className="font-bold">Email:</span>drarun_70@yahoo.com
            </p>
          </a>
        </div>
      </div>
      <ul className="nav_list w-[55vw] flex flex-col justify-around p-8 overflow-hidden">
        {menuLinks.map((item) => (
          <MenuLinks key={item.id} item={item} onClick={onClose} />
        ))}
      </ul>
    </div>
  )
}

export default NavMenu

interface MenuLinksProps {
  item: Links
  onClick: () => void
}
const MenuLinks = ({ item, onClick }: MenuLinksProps) => {
  const pathName = usePathname()
  const active = pathName === item.link
  return (
    <li
      className={cn('cursor-pointer transition-all  duration-300 ', {
        'hover:bg-primary hover:shadow-md': !active,
      })}
    >
      <Link
        onClick={onClick}
        href={item.link}
        className={cn(
          'block p-8 text-xl uppercase transition-all ease-in-out duration-300 hover:text-white',
          {
            'bg-primary text-white shadow-lg': active,
            'hover:scale-[0.98]': !active,
          },
        )}
      >
        {item.title}
      </Link>
    </li>
  )
}
