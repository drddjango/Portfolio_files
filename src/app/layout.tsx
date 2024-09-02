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
    'dentist',
    'dental care',
    'Ilili Dental Spa',
    'oral health',
    'dental services',
    'dental tourism',
    'Trivandrum',
    'Kananmoola dentist',
    'root canal treatment Trivandrum',
    'teeth whitening Trivandrum',
    'family dentist Kananmoola',
    'cosmetic dentistry Kerala',
    'orthodontics Trivandrum',
    'emergency dental care Trivandrum',
    'pediatric dentist Trivandrum',
    'best dentist in Trivandrum',
    'dental implants Kananmoola',
    'dental hygiene Trivandrum',
    'gum disease treatment Kerala',
    'affordable dental clinic Trivandrum',
    'dental braces Trivandrum',
    'pain-free dentistry Kananmoola',
    'tooth extraction Trivandrum',
    'dental checkup Kananmoola',
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
  return (
    <>
      <SmoothScrolling />
      <html lang="en">
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
