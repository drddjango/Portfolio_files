
import Hero from './components/Hero'

type Props = {}

const HeroSection = (props: Props) => {
  return (
    <section id="hero" className="flex text-white">
      <Hero />
    </section>
  )
}

export default HeroSection
