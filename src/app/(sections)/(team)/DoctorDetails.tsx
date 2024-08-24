import { DoctorProp } from '@/utils/DoctorsData'
import Socials from './components/Socials'

type Props = {
  doctor: DoctorProp
}

const DoctorDetails = ({ doctor }: Props) => {
  return (
    <div className="flex flex-col gap-4 text-md md:text-lg">
      <div className="flex flex-col gap-4">
        <h3 className="text-2xl font-heading font-bold">About</h3>
        <div className="flex flex-col gap-4">
          {doctor.personalIntro.map((p, index) => (
            <p key={index}>{p}</p>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-8 md:flex-row md:justify-between">
        <div className="flex flex-col gap-4 ">
          <div className="flex flex-col gap-4">
            <h3 className="text-2xl font-heading font-bold">Specialisation</h3>
            <div>{doctor.specialisation}</div>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-2xl font-heading font-bold">Experience</h3>
            <div>{doctor.experience} years</div>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-2xl font-heading font-bold">Certifications</h3>
            <div className="flex gap-2 flex-wrap">
              {doctor.certifications.map((certification, index) => (
                <span
                  className="bg-primary px-4 py-1 rounded-full text-white"
                  key={index}
                >
                  {certification}
                </span>
              ))}
            </div>
          </div>
          {doctor.awards.length >= 1 && (
            <div className="flex flex-col gap-4">
              <h3 className="text-2xl font-heading font-bold">Awards</h3>
              <div className="flex gap-2 flex-wrap">
                {doctor.awards.map((certification, index) => (
                  <span
                    className="bg-white px-4 py-1 rounded-full text-primary border-primary border-2"
                    key={index}
                  >
                    {certification}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
        {doctor.socials.length >= 1 && (
          <div className="flex flex-col gap-4">
            <h3 className="text-2xl font-heading font-bold">Socials</h3>
            <div className="flex w-full gap-8 md:gap-12">
              {doctor.socials.map((social, index) => (
                <Socials
                  key={doctor.name + doctor.socials[index].name}
                  social={social}
                  index={index}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default DoctorDetails
