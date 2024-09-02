import TransitionLink from '@/components/custom/TransitionLink'
import { doctorsData } from '@/utils/DoctorsData'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'

type Props = {}

const DoctorsIntro = (props: Props) => {
  return (
    <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {doctorsData.map((doctor, index) => (
        <TransitionLink
          key={index}
          className="shadow-md w-full h-[35svh] cursor-pointer flex flex-col relative group rounded-md"
          href={`/team/${doctor.url}`}
        >
          <div className="w-full h-full bg-cover rounded-md overflow-hidden">
            <Image
              src={doctor.photo}
              alt={doctor.name}
              width={500}
              height={500}
              style={{ objectFit: 'cover' }}
              className="object-cover md:group-hover:scale-[1.04] transition-all duration-300"
            />
          </div>
          <div className="absolute rounded-br-md rounded-tl-md bottom-0 right-0 bg-white px-6 py-3 md:group-hover:px-8 md:group-hover:py-4 md:transition-all duration-300 flex gap-4">
            {doctor.name}
            <div className="opacity-0 md:group-hover:opacity-100 transition-all duration-300">
              <ArrowRight className="inline w-4 h-4 md:h-6 md:w-6 ml-2" />
            </div>
          </div>
        </TransitionLink>
      ))}
    </div>
  )
}

export default DoctorsIntro
