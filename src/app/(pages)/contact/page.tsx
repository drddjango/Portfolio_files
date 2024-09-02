import ContactForm from '@/app/(sections)/(contact)/ContactForm'
import FadeIn from '@/components/animation/FadeIn'
import Reveal from '@/components/animation/Reveal'
import { Metadata } from 'next'


type Props = {}
export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with Ilili Dental Spa, your trusted dental clinic in Kananmoola, Trivandrum. Contact us today to schedule an appointment or inquire about our dental care services.',
  keywords: [
    'Ilili Dental Spa',
    'contact',
    'dental clinic Kananmoola',
    'dentist Trivandrum',
    'dental appointment',
    'oral health consultation',
    'emergency dental care',
    'dental services Trivandrum',
    'family dentist Kerala',
  ],
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
