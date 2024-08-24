import ContactForm from '@/app/(sections)/(contact)/ContactForm'
import FadeIn from '@/components/animation/FadeIn'
import Reveal from '@/components/animation/Reveal'
import { Metadata } from 'next'


type Props = {}
export const metadata: Metadata = {
  title: 'Contact Us',
}

const Contact = (props: Props) => {
  return (
    <div className="h-fit bg-bg section-wrapper flex flex-col gap-8 place-items-center">
      <Reveal className="section-heading">
        <h1 className="text-text">Contact Us</h1>
      </Reveal>
      <FadeIn>
        <ContactForm />
      </FadeIn>
    </div>
  )
}

export default Contact
