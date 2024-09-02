import { useRef, useEffect } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { MenuLinks as Links, menuLinks } from '@/utils/NavData'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import Image from 'next/image'

type Props = {
  onClose: () => void
  toggle: boolean
}
const MobileMenu = ({ onClose, toggle }: Props) => {
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
        defaults: {
          duration: 0.92,
          ease: 'power4.inOut',
        },
      })
      tl.current
        .to(menu, { x: 0 })
        .to('.nav_list', { x: 0, opacity: 1 }, '-=0.4')
        .to('.close_btn', { x: 0, duration: 1.4 }, '-=1.1')
        .to('.contact_card', { x: 0, duration: 1.4 }, '-=1.5')
    },
    { scope: menuRef },
  )

  useEffect(() => {
    toggle ? tl.current?.play() : tl.current?.reverse()
  }, [toggle])

  return (
    <div
      className="flex md:hidden translate-x-[-100vw] flex-col w-full h-full bg-primary-foreground gap-4 fixed top-0 left-0 z-[100000] overflow-y-auto"
      ref={menuRef}
      id="mobile-menu"
    >
      <div
        className="close_btn w-full min-h-[8svh] flex justify-center place-items-center bg-primary border-b-2 shadow-sm text-white"
        onClick={onClose}
      >
        <span className="text-md sm:text-lg ">Close</span>
      </div>
      <ul className="nav_list w-full flex flex-col p-2 gap-2 sm:p-4 sm:gap-4 justify-center place-items-center">
        {menuLinks.map((item) => (
          <MenuLinks key={item.id} item={item} onClick={onClose} />
        ))}
      </ul>
      <div className="contact_card w-full h-full  bg-center bg-cover bg-no-repeat flex flex-col justify-center place-items-center relative text-center">
        <div className="absolute inset-0 z-[-1]">
          <Image
            src="/Background/menu_img.webp"
            alt="Background"
            fill={true}
            loading="lazy"
            style={{ objectFit: 'cover' }}
            quality={100}
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
          />
        </div>
        <div className="m-4 flex flex-col justify-center w-fit place-items-center  p-8 gap-4 bg-[rgba(255,255,255,0.3)] backdrop-blur-[10px] shadow-md relative rounded-md">
          <h3 className="font-heading text-3xl sm:text-4xl font-bold">
            Contact
          </h3>
          <p className="text-md sm::text-lg">
            Vas Villa, Near Kannammoola Bridge, Thiruvananthapuram, Kerala -
            695024
          </p>

          <a href="tel:04712743311">
            <p className="text-md sm:text-lg">0471 274 3311</p>
          </a>
          <a href="mailto:drarun_70@yahoo.com">
            <p className="text-md sm:text-lg">drarun_70@yahoo.com</p>
          </a>
        </div>
      </div>
    </div>
  )
}

export default MobileMenu

interface MenuLinksProps {
  item: Links
  onClick: () => void
}
const MenuLinks = ({ item, onClick }: MenuLinksProps) => {
  const pathName = usePathname()
  const active = pathName === item.link
  return (
    <li className="w-[80%]">
      <Link
        className={cn('block w-full text-center uppercase', {
          'bg-primary text-white shadow-lg': active,
        })}
        onClick={onClick}
        href={item.link}
      >
        <div className="p-2 sm:p-4 text-md sm:text-lg uppercase">
          {item.title}
        </div>
      </Link>
    </li>
  )
}
