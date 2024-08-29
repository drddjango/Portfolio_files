import Image from 'next/image'
import TeamPhoto from '../../../../public/Doctors/DummyTeam.webp'
const TeamIntro = () => {
  return (
    <div className="flex flex-col gap-8">
      <div className="text-md md:text-lg">
        At Ilili Dental Spa, we are proud to have a distinguished team led by
        our esteemed founder, whose extensive experience and expertise set the
        highest standards in dental care. Our team comprises highly skilled
        doctors specializing in various fields of dentistry, supported by
        dedicated staff members who ensure every patient receives exceptional
        care. Together, we are committed to delivering comprehensive dental
        solutions with a focus on innovation and excellence.
      </div>
{/*       <div className="relative w-full h-[60svh] max-h-[800px] overflow-hidden rounded-md">
        <Image
          src={TeamPhoto}
          alt="Team Photo"
          priority={true}
          fill={true}
          className="object-cover object-top"
          placeholder="blur"
        />
      </div> */}
    </div>
  )
}

export default TeamIntro
