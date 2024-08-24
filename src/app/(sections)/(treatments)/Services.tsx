import { Card, CardDescription, CardTitle } from '@/components/ui/card'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { formatPrice } from '@/lib/utils'
import { TreatmentProp } from '@/utils/TreatmentsData'
import { ArrowRight, Check } from 'lucide-react'
import Image from 'next/image'

type Props = {
  service: TreatmentProp
  isInIndia: boolean
}

const Services = ({ service, isInIndia }: Props) => {
  const benefits = service.benefits.split(',')
  const instructions = service.aftercareInstructions.split(',')
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Card className="shadow-lg rounded-lg p-8 cursor-pointer hover:scale-[1.03] transition-all duration-300 flex flex-col gap-8 border-2 border-text relative h-full">
            <CardTitle className="text-xl md:text-2xl font-heading font-bold text-center">
              {service.name}
            </CardTitle>
            <CardDescription className="text-lg font-heading">
              {service.description}
            </CardDescription>
            <div className="mt-auto self-end flex items-center gap-2 text-sm font-medium">
              Know More
              <ArrowRight size={16} />
            </div>
          </Card>
        </DialogTrigger>
        <DialogContent
          id="treatment"
          className="bg-gray-100 p-4 md:p-8 max-w-[90vw] md:max-w-[70vw] lg:max-w-[50vw] xl:max-w-[40vw] max-h-[70vh] rounded-lg overflow-y-scroll"
        >
          <DialogHeader>
            <DialogTitle className="font-heading font-bold text-3xl md:text-5xl my-4">
              {service.name}
            </DialogTitle>
            <DialogDescription className="text-start text-wrap text-md md:text-lg ">
              {service.description}
            </DialogDescription>
            <div className="w-full h-full overflow-hidden rounded-lg">
              <Image
                src={service.image}
                alt={service.name}
                style={{ objectFit: 'cover' }}
                className="w-full"
                height={900}
                width={900}
                priority={true}
              />
            </div>
          </DialogHeader>
          <div className="flex flex-col gap-4">
            <h2 className="mt-2 text-bold text-gray-900/80 font-bold text-md md:text-xl underline">
              Duration
            </h2>
            <div className="">{service.duration}</div>
            <h2 className="mt-2 text-bold text-gray-900/80 font-bold text-md md:text-xl underline">
              Benefits
            </h2>
            <div className="flex flex-col gap-2 ">
              {benefits.map((benefit, index) => (
                <div className="flex items-center gap-2" key={index}>
                  <Check />
                  <p className="capitalize">{benefit.trim()}</p>
                </div>
              ))}
            </div>
            <h2 className="mt-2 text-bold text-gray-900/80 font-bold text-md md:text-xl underline">
              After-Care Instructions
            </h2>
            <div className="flex flex-col gap-2 ">
              {instructions.map((instruction, index) => (
                <div className="flex items-center gap-2" key={index}>
                  <p className="capitalize">{instruction.trim()}</p>
                </div>
              ))}
            </div>
            <h2 className="mt-2 text-bold text-gray-900/80 font-bold text-md md:text-xl underline">
              Average Cost
            </h2>
            <div className="mb-4">
              {formatPrice(
                isInIndia ? service.costIn : service.costOther,
                isInIndia,
              )}{' '}
              <span className="text-xs font-bold opacity-80">(approx)</span>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default Services
