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

export const metadata: Metadata = {
  title: {
    default: `Ilili Dental Spa`,
    template: `%s | Ilili Dental Spa`,
  },
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
