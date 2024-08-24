'use client'
import FadeIn from '@/components/animation/FadeIn'
import { treatments } from '@/utils/TreatmentsData'
import { useEffect, useState } from 'react'
import Services from './Services'
import { isUserInIndia } from '@/lib/utils'

type Props = {}

const TreatmentsSection = (props: Props) => {
  const [userInIndia, setUserInIndia] = useState(true)
  const fetchLocation = () => {
    const response = isUserInIndia()
    console.log(response)
    setUserInIndia(response)
  }

  useEffect(() => {
    fetchLocation()
  }, [])

  return (
    <>
      <FadeIn>
        <p className="text-md md:text-lg">
          At Ilili Dental Spa, we offer a comprehensive range of dental services
          designed to meet all your oral health needs. Our team of highly
          skilled professionals is dedicated to providing you with the highest
          quality of care in a comfortable and welcoming environment. From
          routine check-ups and cleanings to advanced restorative and cosmetic
          procedures, we are committed to helping you achieve and maintain a
          healthy, beautiful smile. Explore our list of treatments to learn more
          about the services we provide and how we can assist you in your
          journey to optimal dental health.
        </p>
      </FadeIn>
      <div className="flex flex-col gap-14 md:mt-8 mb-8">
        {treatments.map((treatment) => (
          <FadeIn key={treatment.category}>
            <div key={treatment.category} className="flex flex-col gap-4">
              <h1 className="text-3xl font-bold ">{treatment.category}</h1>
              <p className="text-md md:text-lg">{treatment.description}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {treatment.treatments.map((service) => {
                  return (
                    <Services
                      key={service.name}
                      service={service}
                      isInIndia={userInIndia}
                    />
                  )
                })}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </>
  )
}

export default TreatmentsSection
