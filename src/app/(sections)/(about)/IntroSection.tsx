import CollapseIntro from './components/CollapseIntro'

type Props = {}

const IntroSection = (props: Props) => {
  return (
    <>
      <div className="hidden md:flex flex-col gap-8">
        <p className="text-md md:text-lg">
          Ilili Dental Spa, established in April 2011, stands as a premier
          multispeciality dental clinic in Trivandrum, Kerala. Under the
          leadership of Dr. Arun Kumar, an esteemed implantologist trained at
          New York University, our clinic offers a comprehensive range of
          services including implantology, cosmetic dentistry, orthodontics,
          endodontics, periodontics, and oral surgery. We pride ourselves on our
          patient-centered approach, blending cutting-edge technology with a
          tranquil, spa-like environment. Our dedication to excellence and
          patient safety is evident in our ISO 9001:2008 certification, ensuring
          the highest standards of care. With over a decade of experience, we
          aim to provide exceptional dental treatments tailored to meet each
          patient's unique needs, helping them achieve optimal oral health and a
          beautiful smile.
        </p>
        <p className="text-md md:text-lg">
          Conveniently situated in Vas Villa, Near Kannanmoola Bridge, Ilili
          Dental Spa is easily accessible to residents of Thiruvananthapuram and
          surrounding areas. The location is close to key landmarks, making it a
          convenient choice for dental care in the city. With over a decade of
          experience, we are dedicated to helping our patients achieve optimal
          oral health and beautiful smiles.
        </p>
      </div>
      <CollapseIntro />
    </>
  )
}

export default IntroSection
