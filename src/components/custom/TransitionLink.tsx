'use client'
import { cn } from '@/lib/utils'
import { pageOut } from '@/utils/Animations'
import { usePathname, useRouter } from 'next/navigation'

type Props = {
  href: string
  className?: string
  children: React.ReactNode
}

const TransitionLink = ({ href, className, children }: Props) => {
  const pathName = usePathname()
  const router = useRouter()
  const handleClick = () => {
    if (pathName === href) return
    pageOut(href, router)
  }
  return (
    <div className={cn('cursor-pointer', className)} onClick={handleClick}>
      {children}
    </div>
  )
}

export default TransitionLink
