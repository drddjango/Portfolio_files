import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const isUserInIndia = () => {
  //   try {
  //     const response = await axios.get('https://ipapi.co/json/')
  //     if (response.data.country_code === 'IN') {
  //       return true
  //     } else {
  //       return false
  //     }
  //   } catch (error) {
  //     console.error('Error in fetching location: ', error)
  //   }
  const language = navigator.language
  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone

  return (language.toLowerCase().startsWith('hi') ||
    language.toLowerCase().startsWith('en-in') ||
    timeZone.toLowerCase().includes('calcutta') ||
    timeZone.toLowerCase().includes('india')) as boolean
}

export const formatPrice = (price: (string | number)[], isInIndia: boolean) => {
  const currency = isInIndia ? 'INR' : 'USD'
  const locale = isInIndia ? 'en-IN' : 'en-US'

  const formatter = new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
    maximumFractionDigits: 0,
  })

  if (price.length > 1 && typeof price[1] === 'number') {
    const per = price[2] ? price[2] : ' '
    let lower = formatter.format(price[0] as number)
    let upper = formatter.format(price[1])

    return `${lower} - ${upper} ${per}`
  } else {
    let cost = formatter.format(price[0] as number)
    const per = price[1] ? price[1] : ' '

    return `${cost} ${per}`
  }
}
