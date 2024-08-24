import FadeIn from '@/components/animation/FadeIn'
import Reveal from '@/components/animation/Reveal'

import About from './components/About'

type Props = {}

const AboutSection = (props: Props) => {
  return (
    <section id="about" className="section-wrapper min-h-screen text-center">
      <Reveal className="section-heading">
        <h1>About Us</h1>
      </Reveal>
      <FadeIn>
        <About />
      </FadeIn>
    </section>
  )
}

export default AboutSection
