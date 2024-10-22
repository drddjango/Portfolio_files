import SectionButtons from '@/components/custom/SectionButtons'
import TransitionLink from '@/components/custom/TransitionLink'
import Image from 'next/image'
import drArun from '../../../../../public/Doctors/dr_arun_kumar_vidyadharan.webp'
import drVinod from '../../../../../public/Doctors/dr_vinod.webp'
import drAnju from '../../../../../public/Doctors/dr_anju_jinendra.webp'
import drDevika from '../../../../../public/Doctors/dr_devika.webp'
import drArchana from '../../../../../public/Doctors/dr_archana_ab.webp'
import drSubi from '../../../../../public/Doctors/dr_subi_e_s.webp'
type Props = {}

const Team = (props: Props) => {
  return (
    <div className="mt-8 flex flex-col gap-8">
      <div className="text-md md:text-lg text-start">
        At Ilili Dental Spa, our team of highly skilled and compassionate
        professionals is dedicated to providing exceptional dental care. Each
        team member brings a wealth of experience and expertise, ensuring that
        our patients receive the best possible treatment in a friendly and
        welcoming environment. From our dentists to our hygienists and support
        staff, everyone at Ilili Dental Spa is committed to making your visit as
        comfortable and pleasant as possible.
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16">
        <div className="grid grid-cols-2 gap-4">
          <TransitionLink
            href="/team/dr_arun_kumar_vidyadharan"
            className="relative overflow-hidden bg-cover aspect-[1] rounded-md cursor-pointer"
          >
            <Image
              src={drArun}
              alt="Dr Arun"
              fill={true}
              className="transition-all duration-300 hover:scale-[1.04]"
              style={{ objectFit: 'cover', objectPosition: 'top' }}
              loading="lazy"
              placeholder="blur"
            />
          </TransitionLink>

          <TransitionLink
            href="/team/dr_vinod_nair_sreekumar"
            className="relative overflow-hidden bg-cover aspect-[1] rounded-md cursor-pointer"
          >
            <Image
              src={drVinod}
              alt="Dr Vinod"
              fill={true}
              className="transition-all duration-300 hover:scale-[1.04]"
              style={{ objectFit: 'cover', objectPosition: 'top' }}
              loading="lazy"
              placeholder="blur"
            />
          </TransitionLink>

          <TransitionLink
            href="/team/dr_anju_jinendra"
            className="relative overflow-hidden bg-cover aspect-[1] rounded-md cursor-pointer"
          >
            <Image
              src={drAnju}
              alt="Dr Anju"
              fill={true}
              className="transition-all duration-300 hover:scale-[1.04]"
              style={{ objectFit: 'cover', objectPosition: 'top' }}
              loading="lazy"
              placeholder="blur"
            />
          </TransitionLink>

          <TransitionLink
            href="/team/dr_subi_e_s"
            className="relative overflow-hidden bg-cover aspect-[1] rounded-md cursor-pointer"
          >
            <Image
              src={drSubi}
              alt="Dr Subi ES"
              fill={true}
              className="transition-all duration-300 hover:scale-[1.04]"
              style={{ objectFit: 'cover', objectPosition: 'top' }}
              loading="lazy"
              placeholder="blur"
            />
          </TransitionLink>
          <TransitionLink
            href="/team/dr_archana_ab"
            className="relative overflow-hidden bg-cover aspect-[1] rounded-md cursor-pointer"
          >
            <Image
              src={drArchana}
              alt="Dr Archana"
              fill={true}
              className="transition-all duration-300 hover:scale-[1.04]"
              style={{ objectFit: 'cover', objectPosition: 'top' }}
              loading="lazy"
              placeholder="blur"
            />
          </TransitionLink>
          <TransitionLink
            href="/team/dr_devika_sg"
            className="relative overflow-hidden bg-cover aspect-[1] rounded-md cursor-pointer "
          >
            <Image
              src={drDevika}
              alt="Dr Devika"
              fill={true}
              className="transition-all duration-300 hover:scale-[1.04]"
              style={{ objectFit: 'cover', objectPosition: 'top' }}
              loading="lazy"
              placeholder="blur"
            />
          </TransitionLink>
          <div className="hidden sm:flex lg:hidden flex-col justify-center place-items-center gap-4 md:gap-8">
            <div className="text-md md:text-lg">
              Get to know the amazing people behind our clinic and discover
              their expertise and commitment to your smile.
            </div>
            <SectionButtons href="/team" textContent="Meet Our Team" />
          </div>
        </div>
        <div className="flex sm:hidden lg:flex flex-col justify-center place-items-center gap-4 md:gap-8">
          <div className="text-md md:text-lg">
            Get to know the amazing people behind our clinic and discover their
            expertise and commitment to your smile.
          </div>
          <SectionButtons href="/team" textContent="Meet Our Team" />
        </div>
      </div>
    </div>
  )
}

export default Team
