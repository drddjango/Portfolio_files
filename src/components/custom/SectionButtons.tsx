'use client'

import { ArrowRight } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { pageOut } from '@/utils/Animations'
import { cn } from '@/lib/utils'

type Props = {
  href: string
  textContent: string
  className?: string
}

const SectionButtons = ({ href, textContent, className }: Props) => {
  const router = useRouter()
  const navigateHandler = () => {
    pageOut(href, router)
  }
  return (
    <button
      className={cn(
        'px-6 py-3 bg-primary border-2 border-primary text-white font-bold rounded-lg shadow-md hover:bg-white hover:text-primary transition duration-300',
        className,
      )}
      onClick={navigateHandler}
    >
      {textContent} <ArrowRight className="inline w-4 h-4 md:h-6 md:w-6 ml-2" />
    </button>
  )
}

export default SectionButtons
