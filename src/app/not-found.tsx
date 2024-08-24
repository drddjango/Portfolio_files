import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { Frown } from 'lucide-react'
import Link from 'next/link'

type Props = {}

const NotFound = (props: Props) => {
  return (
    <div className="min-h-screen bg-blue-50 flex items-center justify-center px-4">
      <div className="max-w-lg w-full bg-white rounded-lg shadow-md p-8 text-center">
        <Frown className="mx-auto text-primary w-24 h-24 mb-6" />
        <h1 className="text-3xl md:text-4xl text-gray-800 mb-4 font-heading font-bold">
          Oops! Page Not Found
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8">
          Looks like this page took an unexpected trip to the dentist!
        </p>
        <p className="text-gray-500 mb-8">
          Don't worry, our homepage is still cavity-free and waiting for your
          visit.
        </p>
        <Link
          href="/"
          className={cn(buttonVariants({ size: 'lg' }), 'text-lg bg-primary')}
        >
          Go back
        </Link>
      </div>
    </div>
  )
}

export default NotFound
