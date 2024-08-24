import {
  SiFacebook,
  SiInstagram,
  SiLinkedin,
  SiX,
} from '@icons-pack/react-simple-icons'

type Props = {
  social: {
    name: string
    url: string
  }
  index: number
}

const Socials = ({ social, index }: Props) => {
  const getSocialIcon = (name: string) => {
    switch (name.toLowerCase()) {
      case 'facebook':
        return <SiFacebook />
      case 'twitter':
        return <SiX />
      case 'instagram':
        return <SiInstagram />
      case 'linkedin':
        return <SiLinkedin />
      default:
        return null
    }
  }
  return (
    <span className="" key={index}>
      <a
        href={social.url}
        target="_blank"
        className=""
        aria-label={social.name}
      >
        {getSocialIcon(social.name)}
      </a>
    </span>
  )
}

export default Socials
