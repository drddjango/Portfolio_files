import { SiFacebook, SiInstagram, SiX } from '@icons-pack/react-simple-icons'
import TransitionLink from './TransitionLink'
import Image from 'next/image'

const Footer = () => {
  return (
    <>
      <div className="bg-primary text-white w-full flex flex-col justify-center place-items-center p-8 gap-8 font-medium">
        <div className="max-w-[1150px] w-full grid md:grid-cols-3 gap-4 md:gap-8">
          <div className=" flex flex-col gap-8">
            <div className="font-heading flex flex-col gap-2">
              <p className="uppercase text-5xl tracking-[10px] font-medium">
                Ilili
              </p>
              <p className="text-sm font-medium uppercase tracking-[5px] text-nowrap">
                Dental Spa
              </p>
            </div>
            <div>
              <p>Vas Villa, Near Kannammoola Bridge</p>
              <p> Thiruvananthapuram,</p>
              <p>Kerala - 695024</p>
            </div>
          </div>
          <div className="flex flex-col gap-4 md:text-center">
            <h2 className="font-bold font-heading text-2xl">Quick Links</h2>
            <ul className="flex flex-col gap-1 text-sm font-medium">
              <li className="hover:underline">
                <TransitionLink href="/">Home</TransitionLink>
                {/* <TransitionLink href='/'>Home</TransitionLink> */}
              </li>
              <li className="hover:underline">
                <TransitionLink href="/about">About Us</TransitionLink>
              </li>
              <li className="hover:underline">
                <TransitionLink href="/team">Meet Our Team</TransitionLink>
              </li>
              <li className="hover:underline">
                <TransitionLink href="/treatments">Treatments</TransitionLink>
              </li>
              <li className="hover:underline">
                <TransitionLink href="/contact">Contact</TransitionLink>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-4 md:place-items-center">
            <h2 className="font-bold font-heading text-2xl">Socials</h2>
            <ul className="flex gap-4">
              <li>
                <a
                  href="https://www.facebook.com/profile.php?id=100064073911629"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline"
                  aria-label="Facebook"
                >
                  <SiFacebook />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/IliliDentalSpa/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline"
                  aria-label="Instagram"
                >
                  <SiInstagram />
                </a>
              </li>
              {/*               <li>
                <a
                  href="https://twitter.com/IliliDentalSpa"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline"
                  aria-label="Twitter"
                >
                  <SiX />
                </a>
              </li> */}
            </ul>
          </div>
        </div>
        <div className="border-t-2 border-white max-w-[1150px] w-full pt-8 m-auto text-center">
          <div className="font-heading font-bold">
            <p>
              &#169; Copyright {new Date().getFullYear()} By Dr. Arun V. | All
              Rights
            </p>
            <p>Reserved | MSME Number: UDYAM-KL-12-0028821</p>
            <p className="mt-5 flex items-center justify-center gap-2">
              Designed & Developed by{' '}
              <a
                href="https://www.ernyg.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:brightness-90"
              >
                <Image
                  src="/logo.svg"
                  alt="ernyg Logo"
                  width={24}
                  height={24}
                  className="h-5 w-auto object-contain"
                  priority
                />
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
