export interface Category {
    title: string
    description: string
    services: string[]
    image: string
}
export const homeTreatmentData: Category[] = [
    {
      title: 'Cosmetics Denstistry',
      description:
        'We offer a wide range of cosmetic dentistry services to help patients maintain their healthy teeth.',
      services: [
        'Veneers',
        'Teeth Whitening',
        'Tooth Jewellery',
        'Smile Contouring',
      ],
      image:
        '/Treatments/teeth-whitening.webp',
    },
    {
      title: 'Restorative Dentistry',
      description:
        'We specialize in restorative dentistry which restores the function and aesthetics of teeth.',
      services: ['Composite Fillings', 'Inlays', 'OnLays', 'Crowns'],
      image:
        '/Treatments/inlays.webp',
    },
    {
      title: 'Implant Dentistry',
      description:
        'We specialize in treatments that replace missing teeth with artificial tooth roots.',
      services: [
        'Dental Implants',
        'Sinus Lift',
        'Bone Grafting',
        'Arch Rehabilitation',
      ],
      image:
        '/Treatments/dental-implants.webp',
    },
  ]
