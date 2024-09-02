'use client'

import SkeletonCard from '@/components/custom/SkeletonCard'
import { Skeleton } from '@/components/ui/skeleton'
import { formatPrice } from '@/lib/utils'
import { TreatmentProp } from '@/utils/TreatmentsData'
import { Check } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

interface Props {
  service: TreatmentProp
  benefits: string[]
  instructions: string[]
  isInIndia: boolean
}
export const Service = ({
  service,
  benefits,
  instructions,
  isInIndia,
}: Props) => {
  const [loading, setLoading] = useState(true)

  return (
    <>
      <div className="relative w-full h-full overflow-hidden rounded-lg">
        {loading && <SkeletonCard />}
        <Image
          src={service.image}
          alt={service.name}
          style={{ objectFit: 'cover' }}
          className={`w-full h-full transition-opacity duration-300 ${loading ? 'opacity-0' : 'opacity-100'}`}
          height={900}
          width={900}
          priority={true}
          onLoad={() => setLoading(false)}
        />
      </div>
      {!loading && (
        <div className="flex flex-col gap-4 ">
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
      )}
    </>
  )
}
