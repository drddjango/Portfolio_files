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
    <div className="w-full h-full overflow-hidden rounded-lg">
      {loading && <Skeleton className="w-full h-full" />}
      <Image
        src={image}
        alt={alt}
        style={{ objectFit: 'cover' }}
        className="w-full"
        height={900}
        width={900}
        priority={true}
        onLoadingComplete={() => setLoading(false)}
      />
    </div>
  )
}
