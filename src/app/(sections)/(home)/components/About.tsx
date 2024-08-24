import SectionButtons from '@/components/custom/SectionButtons'
import Image from 'next/image'

type Props = {}

const About = (props: Props) => {
  return (
    <div className="mt-8 flex flex-col gap-8 md:gap-12 lg:gap-16">
      <div className="grid grid-cols-1 md:grid-cols-2  gap-8 md:gap-16">
        <p className="text-gray-700  md:text-lg flex items-center justify-center text-start">
          Welcome to Ilili Dental Spa, where your smile is our top priority. Our
          team of experienced professionals, led by Dr. Arun Kumar V., is
          dedicated to providing you with the highest quality dental care in a
          comfortable and friendly environment. With our state-of-the-art
          technology and commitment to patient care, we ensure you receive the
          best treatment possible.
        </p>
        <div className="relative w-full h-48 md:h-72 rounded-lg shadow-md overflow-hidden">
          <Image
            src="/About/about_1.webp"
            alt="Dental office"
            fill={true}
            style={{ objectFit: 'cover', objectPosition: 'top' }}
            className="rounded-lg"
            loading="lazy"
          />
        </div>

        <div className="relative w-full h-48 md:h-72 rounded-lg shadow-md overflow-hidden">
          <Image
            src="/About/about_2.webp"
            alt="Dentist at work"
            fill={true}
            style={{ objectFit: 'cover', objectPosition: 'top' }}
            className="rounded-lg"
            loading="lazy"
          />
        </div>
        <p className="text-gray-700  md:text-lg flex items-center justify-center md:row-start-2 md:row-end-3 md:col-start-2 md:col-end-3 row-start-3 row-end-4 text-start">
          We are proud to be ISO 9001:2008 certified, ensuring the highest
          standards of quality and patient safety. Our clinic is conveniently
          located near the airport and railway station, with ample parking space
          available. Trust us for a wide range of dental services, delivered
          with care and expertise.
        </p>
      </div>
      <SectionButtons href="/about" textContent="Know More " />
    </div>
  )
}

export default About
