'use client'

import { Skeleton } from '@/components/ui/skeleton'
import Image from 'next/image'
import { useState } from 'react'

interface Props {
  image: string
  alt: string
}

export const ServiceImage = ({ image, alt }: Props) => {
  const [loading, setLoading] = useState(true)

  return (
    <div className="relative w-full h-full overflow-hidden rounded-lg">
      {loading && (
        <Skeleton className="absolute inset-0 w-full h-full bg-gray-300" />
      )}
      <Image
        src={image}
        alt={alt}
        style={{ objectFit: 'cover' }}
        className={`w-full h-full transition-opacity duration-300 ${loading ? 'opacity-0' : 'opacity-100'}`}
        height={900}
        width={900}
        priority={true}
        onLoad={() => setLoading(false)}
      />
    </div>
  )
}
