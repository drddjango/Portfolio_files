import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Footer from '@/components/custom/Footer'
import Navbar from '@/components/custom/Navbar'
import SmoothScrolling from '@/components/custom/SmoothScrolling'
import MobileNavbar from '@/components/custom/MobileNavbar'
import PreLoader from '@/components/custom/PreLoader'
import PageTransition from '@/components/custom/PageTransition'
import { Toaster } from '@/components/ui/toaster'

const inter = Inter({ subsets: ['latin'] })
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl!),
  title: {
    default: `Welcome to Ilili Dental Spa`,
    template: `%s | ILILI Dental Spa`,
  },
  twitter: {
    card: 'summary_large_image',
  },
  alternates: {
    canonical: `${baseUrl}/`,
  },
  // icons: {
  //   apple: '/favicon.ico',
  //   icon: '/favicon.ico',
  // },
  description:
    'Ilili Dental Spa provides top-quality dental care with a team of experienced professionals. Visit us today for a healthier smile.',
  keywords: [
    'dental clinic',
    'dental clinic Pettah',
    'dental clinic Kannammoola',
    'dentist',
    'dental care',
    'Ilili Dental Spa',
    'oral health',
    'dental services',
    'dental tourism',
    'Trivandrum',
    'Kannammoola dentist',
    'Pettah dentist',
    'root canal treatment Trivandrum',
    'teeth whitening Trivandrum',
    'family dentist Kannammoola',
    'family dentist Pettah',
    'cosmetic dentistry Kerala',
    'cosmetic dentistry Pettah',
    'orthodontics Trivandrum',
    'orthodontics Pettah',
    'emergency dental care Trivandrum',
    'pediatric dentist Trivandrum',
    'best dentist in Trivandrum',
    'dental implants Kannammoola',
    'dental implants Pettah',
    'dental hygiene Trivandrum',
    'gum disease treatment Kerala',
    'affordable dental clinic Trivandrum',
    'dental braces Trivandrum',
    'pain-free dentistry Kannammoola',
    'tooth extraction Trivandrum',
    'dental checkup Kannammoola',
    'dental checkup Pettah',
    'oral surgery Trivandrum',
    'Ilili Dental Spa services',
    'top dental clinic Kerala',
    'dental consultation Trivandrum',
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Dentist',
    name: 'Ilili Dental Spa',
    image: `${baseUrl}/About/about_2.webp`,
    url: 'https://ililidentalspa.com',
    telephone: '+91 0471-2743311',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Vas Villa, Near Kannammoola Bridge',
      addressLocality: 'Thiruvananthapuram',
      addressRegion: 'Kerala',
      postalCode: '695024',
      addressCountry: 'IN',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '19:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '09:00',
        closes: '12:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Sunday',
        opens: '00:00',
        closes: '00:00',
        description: 'Closed',
      },
    ],
    priceRange: '₹500 - ₹30,000+',
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 8.50120978795707,
      longitude: 76.93114140351712,
    },
    sameAs: [
      'https://www.facebook.com/Ililidentalspa',
      'https://www.instagram.com/IliliDentalSpa/',
    ],
  }
  return (
    <>
      <SmoothScrolling />
      <html lang="en">
        <head>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
          />
        </head>
        <body className={inter.className}>
          <div className="relative" id="parentContainer" style={{ opacity: 0 }}>
            <PreLoader />
            <MobileNavbar />
            <Navbar />
            <PageTransition>
              {children}
              <Footer />
            </PageTransition>
          </div>
          <Toaster />
        </body>
      </html>
    </>
  )
}
