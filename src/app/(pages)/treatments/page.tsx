import { TreatmentsSection } from '@/app/(sections)/(treatments)'
import Reveal from '@/components/animation/Reveal'
import { Metadata } from 'next'


type Props = {}

export const metadata: Metadata = {
  title: 'Treatments',
}

const Treatments = (props: Props) => {
  return (
    <div className="min-h-screen section-wrapper flex flex-col gap-8 place-items-center">
      <Reveal className="section-heading">
        <h1 className="text-text">Treatments</h1>
      </Reveal>
      <TreatmentsSection />
    </div>
  )
}

export default Treatments
