import FadeIn from '@/components/animation/FadeIn'
import Reveal from '@/components/animation/Reveal'
import Team from './components/Team'

type Props = {}

const TeamSection = (props: Props) => {
  return (
    <section id="team" className="section-wrapper min-h-screen text-center">
      <Reveal className="section-heading">
        <h1>Meet Our Team</h1>
      </Reveal>
      <FadeIn>
        <Team />
      </FadeIn>
    </section>
  )
}

export default TeamSection
