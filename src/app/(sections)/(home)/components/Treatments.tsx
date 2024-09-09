import SectionButtons from '@/components/custom/SectionButtons'
import { Category, homeTreatmentData } from '@/utils/homePageTreatments'
import { PlusIcon } from 'lucide-react'
import Image from 'next/image'

type Props = {}

const Treatments = (props: Props) => {
  return (
    <div className="flex flex-col gap-12">
      <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {homeTreatmentData.map((treatment, index) => (
          <Treatment key={index} treatment={treatment} number={index + 1} />
        ))}
      </div>
      <SectionButtons
        href="/treatments"
        textContent="View All"
        className="hidden md:block"
      />
    </div>
  )
}

export default Treatments

const Treatment = ({
  treatment,
  number,
}: {
  treatment: Category
  number: number
}) => {
  return (
    <>
      <div className="relative group overflow-hidden rounded-md shadow-md md:hover:shadow-lg transition-all duration-300 hover:transform md:hover:scale-[1.01] w-full bg-secondary flex flex-col gap-4 md:gap-8">
        <div className="relative overflow-hidden">
          <div className="w-full aspect-square h-40 xl:h-52">
            <Image
              src={treatment.image}
              fill={true}
              loading="lazy"
              alt={treatment.title}
              style={{ objectFit: 'cover', objectPosition: 'center' }}
              className="object-cover transition-transform duration-300 md:group-hover:scale-[1.03]"
            />
          </div>
          <div className="absolute inset-0 transition-all duration-300 bg-black opacity-0 md:opacity-10 md:group-hover:opacity-0" />
        </div>
        <div className="p-4 flex flex-col justify-center">
          <h1 className="text-2xl font-heading font-bold">{treatment.title}</h1>
          <p className="tracking-tight mt-4 ">{treatment.description}</p>
          <ul className="hidden relative md:grid grid-cols-2 mt-8 ">
            <li className="text-6xl h-4 w-4 absolute top-[50%] left-[50%] translate-x-[-75%] translate-y-[-70%] opacity-50 font-extralight font-sans">
              <PlusIcon />
            </li>
            {treatment.services.map((service) => (
              <li
                key={treatment.title + service}
                className="min-h-[10svh] p-2 flex justify-center place-items-center border-2 border-transparent"
              >
                <div>{service}</div>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex justify-center place-items-center mb-8 px-4 md:hidden">
          <SectionButtons
            href="/treatments"
            textContent="Learn More"
            className="block md:hidden"
          />
        </div>
      </div>
    </>
  )
}
