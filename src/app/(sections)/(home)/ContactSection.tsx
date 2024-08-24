import Reveal from '@/components/animation/Reveal'
import SectionButtons from '@/components/custom/SectionButtons'

import Image from 'next/image'

type Props = {}

const ContactSection = (props: Props) => {
  return (
    <section id="contact" className="section-wrapper text-center">
      <div className="bg-secondary flex flex-col h-fit md:grid  md:grid-cols-3 md:h-[30svh] overflow-hidden shadow-md rounded-md max-w-[1150px] mx-auto">
        <div className="w-full relative overflow-hidden h-[40svh] md:h-auto md:col-span-1">
          <Image
            src={'/Background/contact.webp'}
            alt="girl smiling"
            fill={true}
            loading="lazy"
            style={{
              objectFit: 'cover',
              objectPosition: 'center center',
            }}
          />
          <div className="absolute inset-0 bg-primary opacity-20" />
        </div>
        <div className="flex flex-col gap-4 justify-center place-items-center md:col-span-2 mt-4 p-4">
          <Reveal>
            <h1 className="font-heading text-2xl md:text-3xl font-bold">
              Have an enquiry?
            </h1>
          </Reveal>
          <Reveal className={'text-sm font-medium md:font-normal md:text-md'}>
            <p>
              Reach us at{' '}
              <a
                href="tel:04712743311"
                className="text-primary font-extrabold underline hover:text-blue-500"
              >
                0471-2743311
              </a>{' '}
              or{' '}
              <a
                href="mailto:drarun_70@yahoo.com"
                target="_blank"
                className="text-primary font-extrabold underline hover:text-blue-500"
              >
                drarun_70@yahoo.com
              </a>
            </p>
            <p>Or, click below to send us a message directly.</p>
            <SectionButtons
              href="/contact"
              textContent="Contact Now"
              className="w-fit mx-auto md:w-full my-8"
            />
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
