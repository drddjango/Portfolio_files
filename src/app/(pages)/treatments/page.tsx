import { TreatmentsSection } from '@/app/(sections)/(treatments)'
import Reveal from '@/components/animation/Reveal'
import { Metadata } from 'next'

type Props = {}

export const metadata: Metadata = {
  title: 'Dental Treatments ',
  description:
    'Explore the wide range of dental treatments offered at Ilili Dental Spa in Kannammoola, Trivandrum. Our services include teeth whitening, root canal therapy, dental implants, cosmetic dentistry, and more.',
  keywords: [
    'Ilili Dental Spa',
    'dental treatments',
    'dental care Kannammoola',
    'dentist Trivandrum',
    'cosmetic dentistry',
    'teeth whitening',
    'root canal treatment',
    'dental implants',
    'oral surgery Trivandrum',
    'family dentist Kerala',
  ],
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
