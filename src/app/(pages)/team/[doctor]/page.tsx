import { DoctorDetails, DoctorImage } from '@/app/(sections)/(team)'
import { doctorsData } from '@/utils/DoctorsData'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'


interface Props {
  params: {
    doctor: string
  }
}
export async function generateStaticParams() {
  const doctors = doctorsData

  return doctors.map((doctor) => {
    doctor: doctor.url
  })
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { doctor } = params
  const currentDoctor = doctorsData.find(
    (doctorData) => doctorData.url === doctor,
  )
  if (!currentDoctor) {
    return {
      title: 'Doctor Not Found - Ilili Dental Spa',
      description: 'The doctor you are looking for could not be found.',
    }
  }

  return {
    title: `${currentDoctor.name} - ${currentDoctor.specialisation}`,
    description: `Meet Dr. ${currentDoctor.name}, a skilled ${currentDoctor.specialisation} at Ilili Dental Spa in Kananmoola, Trivandrum.`,
    keywords: [
      'Ilili Dental Spa',
      'dentist',
      currentDoctor.name,
      currentDoctor.specialisation,
      'dental care',
      'oral health',
      'dental services',
      'Trivandrum dentist',
      'dental clinic Kananmoola',
    ],
  }
}
const Doctor = ({ params }: Props) => {
  const { doctor } = params
  const currentDoctor = doctorsData.find(
    (doctorData) => doctorData.url === doctor,
  )
  if (!currentDoctor) notFound()
  return (
    <div className="min-h-screen bg-bg">
      <div className="section-wrapper flex flex-col gap-8 place-items-start">
        <h1 className="section-heading">{currentDoctor?.name}</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16">
          <DoctorImage doctor={currentDoctor} />
          <DoctorDetails doctor={currentDoctor} />
        </div>
      </div>
    </div>
  )
}

export default Doctor
