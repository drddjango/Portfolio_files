import { DoctorsIntro, TeamIntro } from '@/app/(sections)/(team)'
import FadeIn from '@/components/animation/FadeIn'
import Reveal from '@/components/animation/Reveal'
import { Metadata } from 'next'


type Props = {}

export const metadata: Metadata = {
  title: 'The Team',
}

const Team = (props: Props) => {
  return (
    <div className="min-h-screen section-wrapper flex flex-col gap-8 place-items-center">
      <Reveal className="section-heading">
        <h1 className="text-text">Meet Our Team</h1>
      </Reveal>
      <FadeIn>
        <TeamIntro />
      </FadeIn>
      <Reveal className={'w-full text-start mt-16 lg:mt-24'}>
        <h2 className="font-heading text-4xl md:text-5xl font-medium sm:font-bold w-full text-start ">
          Dentists
        </h2>
      </Reveal>
      <FadeIn>
        <DoctorsIntro />
      </FadeIn>
    </div>
  )
}

export default Team
