import CarouselSection from './CarouselSection'
import GoogleReviewSummary from './GoogleReviewSummary'

type Props = {}

const Testimonials = (props: Props) => {
  return (
    <div className="mt-8 flex flex-col gap-4 md:gap-16 h-fit justify-between">
      <div className="text-md md:text-lg text-start">
        At Ilili Dental Spa, we believe in providing exceptional care and
        creating a positive experience for every patient. Our dedicated team of
        dental professionals strives to deliver personalized and high-quality
        treatments that exceed expectations. But don't just take our word for
        it—hear directly from our satisfied patients who have experienced our
        commitment to excellence firsthand.
      </div>
      <CarouselSection />
      <GoogleReviewSummary rating={4.6} reviewCount={38} />
    </div>
  )
}

export default Testimonials
