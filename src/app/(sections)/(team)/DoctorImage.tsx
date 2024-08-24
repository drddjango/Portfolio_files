import { DoctorProp } from '@/utils/DoctorsData'
import Image from 'next/image'

type Props = {
  doctor: DoctorProp
}

const DoctorImage = ({ doctor }: Props) => {
  return (
    <div className="flex flex-col gap-8">
      <div className="overflow-hidden rounded-md ">
        <Image
          alt={doctor.name}
          src={doctor.photo}
          style={{ objectFit: 'cover', objectPosition: 'center' }}
          className="rounded-md"
          width={600}
          height={900}
          priority={true}
        />
      </div>
    </div>
  )
}

export default DoctorImage
