import {
  IntroSection,
  MapSection,
  MoreInfoSection,
  StatsSection,
} from '@/app/(sections)/(about)'
import FadeIn from '@/components/animation/FadeIn'
import Reveal from '@/components/animation/Reveal'
import { Metadata } from 'next'


type Props = {}
export const metadata: Metadata = {
  title: 'About',
}
const About = (props: Props) => {
  return (
    <div className="min-h-screen section-wrapper flex flex-col gap-8 place-items-center">
      <Reveal className="section-heading">
        <h1>About Us</h1>
      </Reveal>
      <FadeIn>
        <IntroSection />
      </FadeIn>
      <FadeIn>
        <StatsSection />
      </FadeIn>
      <Reveal>
        <h2 className="font-heading text-4xl md:text-5xl font-medium sm:font-bold mt-8">
          More Info
        </h2>
      </Reveal>
      <FadeIn>
        <div className="relative grid md:gap-16 gap-8 grid-cols-1 lg:grid-cols-2 w-full place-items-center">
          <MoreInfoSection />
          <div className="h-[50%] opacity-50 border-2 border-text absolute hidden md:block" />
          <MapSection />
        </div>
      </FadeIn>
    </div>
  )
}

export default About
