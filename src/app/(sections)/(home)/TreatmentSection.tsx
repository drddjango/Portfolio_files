import FadeIn from '@/components/animation/FadeIn'
import Reveal from '@/components/animation/Reveal'

import Treatments from './components/Treatments'

type Props = {}

const TreatmentSection = (props: Props) => {
  return (
    <section
      id="treatments"
      className="section-wrapper min-h-screen text-center"
    >
      <Reveal className="section-heading">
        <h1>Treatments</h1>
      </Reveal>
      <FadeIn>
        <Treatments />
      </FadeIn>
    </section>
  )
}

export default TreatmentSection
