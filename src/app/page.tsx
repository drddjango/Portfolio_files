import { Metadata } from 'next'
import {
  AboutSection,
  ContactSection,
  HeroSection,
  TeamSection,
  TestimonialsSection,
  TreatmentSection,
} from './(sections)/(home)'

export const metadata: Metadata = {
  title: 'Welcome to ILILI Dental Spa',
  alternates: {
    canonical: `https://www.ililidentalspa.com/`,
  },
  keywords: [
    'dental clinic',
    'dentist',
    'dental care',
    'Ilili Dental Spa',
    'oral health',
    'dental services',
    'dental tourism',
    'Trivandrum',
    'Kannammoola dentist',
    'root canal treatment Trivandrum',
    'teeth whitening Trivandrum',
    'family dentist Kannammoola',
    'cosmetic dentistry Kerala',
    'orthodontics Trivandrum',
    'emergency dental care Trivandrum',
    'pediatric dentist Trivandrum',
    'best dentist in Trivandrum',
    'dental implants Kannammoola',
    'dental hygiene Trivandrum',
    'gum disease treatment Kerala',
    'affordable dental clinic Trivandrum',
    'dental braces Trivandrum',
    'pain-free dentistry Kannammoola',
    'tooth extraction Trivandrum',
    'dental checkup Kannammoola',
    'oral surgery Trivandrum',
    'Ilili Dental Spa services',
    'top dental clinic Kerala',
    'dental consultation Trivandrum',
  ],
}

export default function Home() {
  return (
    <div className="w-full h-auto bg-primary-foreground">
      <HeroSection />
      <AboutSection />
      <TeamSection />
      <TreatmentSection />
      <TestimonialsSection />
      <ContactSection />
    </div>
  )
}
