import React from 'react'
import { Skeleton } from '../ui/skeleton'

const SkeletonCard = () => {
  return (
    <div className="flex flex-col space-y-3 justify-center">
      <Skeleton className=" w-full h-[400px] bg-gray-300 mx-auto" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[50%] bg-gray-300" />
        <Skeleton className="h-4 w-[45%] bg-gray-300" />
      </div>
    </div>
  )
}

export default SkeletonCard
