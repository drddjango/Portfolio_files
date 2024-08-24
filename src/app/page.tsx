import {
  AboutSection,
  ContactSection,
  HeroSection,
  TeamSection,
  TestimonialsSection,
  TreatmentSection,
} from './(sections)/(home)'

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
