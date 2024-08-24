import Image from 'next/image'

interface StarProps {
  filled: boolean
  half: boolean
}
const StarIcon = ({ filled, half }: StarProps) => {
  return (
    <svg
      className={`w-5 h-5 ${
        filled ? 'text-yellow-400' : half ? 'text-yellow-400' : 'text-gray-300'
      }`}
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="half">
          <stop offset="50%" stopColor="currentColor" />
          <stop offset="50%" stopColor="transparent" stopOpacity="1" />
        </linearGradient>
      </defs>
      <path
        fill={half ? 'url(#half)' : 'currentColor'}
        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
      />
    </svg>
  )
}

interface Props {
  rating: number
  reviewCount: number
}
const GoogleReviewSummary = ({ rating, reviewCount }: Props) => {
  const fullStars = Math.floor(rating)
  const hasHalfStar = rating % 1 >= 0.5

  return (
    <div className="bg-white p-8 md:p-4 rounded-lg shadow-lg grid grid-cols-1 lg:flex md:justify-between gap-4">
      <div className="flex items-center gap-2 w-full flex-wrap justify-center lg:justify-normal">
        <span className="text-3xl font-bold text-gray-800">
          {rating.toFixed(1)}
        </span>
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <StarIcon
              key={i}
              filled={i < fullStars}
              half={i === fullStars && hasHalfStar}
            />
          ))}
        </div>
        <span className="text-sm text-gray-600">{reviewCount} reviews on</span>
        {/* <img src={'/google.png'} alt="Google" loading="lazy" className="h-10" /> */}
        <Image
          src="/google.png"
          alt="Google logo"
          width={120} // Adjust width according to the image size
          height={40} // Adjust height according to the image size
          className="h-10"
          loading="lazy" // Next.js handles lazy loading by default, so this can be omitted
        />
      </div>
      <a
        href="https://www.google.com/search?hl=en-IN&gl=in&q=ILILI+Dental+Spa,+Vas+Villa,+Bridge,+near+Kannanmoola,+Kannammoola,+Thiruvananthapuram,+Kerala+695024&ludocid=12652756801438482233&lsig=AB86z5V1ou8Rvf7QizGAt_XciUCQ#lrd=0x3b05bb928b305045:0xaf979f461325ff39,3"
        target="_blank"
        rel="noopener noreferrer"
        className="px-6 py-3 w-fit mx-auto text-nowrap h-fit bg-primary border-2 border-primary text-white font-bold rounded-lg shadow-md hover:bg-white  hover:text-primary transition duration-300"
      >
        Review us on Google
      </a>
    </div>
  )
}

export default GoogleReviewSummary
