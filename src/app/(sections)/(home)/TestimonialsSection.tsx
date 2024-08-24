import FadeIn from '@/components/animation/FadeIn'
import Reveal from '@/components/animation/Reveal'

import Testimonials from './components/Testimonials'

type Props = {}

const TestimonialsSection = (props: Props) => {
  return (
    <section id="testimonials" className="section-wrapper text-center">
      <Reveal className="section-heading">
        <h1>Testimonials</h1>
      </Reveal>
      <FadeIn>
        <Testimonials />
      </FadeIn>
    </section>
  )
}

export default TestimonialsSection
