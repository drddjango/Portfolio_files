export interface TreatmentProp {
    name: string
    description: string
    duration: string
    costOther: (string | number)[]
    costIn: (string | number)[]
    benefits: string
    aftercareInstructions: string
    image: string
}

export interface CatgoryProp {
    category: string
    description: string
    treatments: TreatmentProp[]
}

export const treatments: CatgoryProp[] = [
    {
      category: 'Cosmetics',
      description:
        'Cosmetic dentistry focuses on improving the appearance of your smile.',
      treatments: [
        {
          name: 'Veneers',
          description:
            'Thin, custom-made shells of tooth-colored materials designed to cover the front surface of teeth.',
          duration: '2-3 appointments over 2-4 weeks',
          costOther: [150, 200, 'per tooth'],
          costIn: [8_000, 10_000, 'per tooth'],
          benefits:
            'Improve appearance of teeth, resist stains, last 10-15 years',
          aftercareInstructions:
            'Avoid staining foods/drinks, maintain good oral hygiene, wear nightguard if recommended',
          image: '/Treatments/veneer.webp',
        },
        {
          name: 'Teeth Whitening',
          description:
            'Professional bleaching process to lighten the color of teeth.',
          duration:
            '1-2 hours for in-office treatment; 2-4 weeks for at-home trays',
          costOther: [250, 300],
          costIn: [7_000, 10_000],
          benefits: 'Brighten smile, boost confidence, non-invasive procedure',
          aftercareInstructions:
            'Avoid staining foods/drinks for 48 hours, use sensitive toothpaste if needed',
          image: '/Treatments/teeth-whitening.webp',
        },
        {
          name: 'Tooth Jewellery',
          description:
            'Small decorative items attached to teeth for aesthetic purposes.',
          duration: '30 minutes - 1 hour',
          costOther: [40, 'per tooth'],
          costIn: [2_500, 'per tooth'],
          benefits:
            'Unique aesthetic appeal, removable, no damage to teeth if properly applied',
          aftercareInstructions:
            'Maintain regular oral hygiene, avoid excessive force when brushing decorated teeth',
          image: '/Treatments/tooth-jewellery.webp',
        },
        {
          name: 'Cosmetic/Smile Contouring',
          description: 'Reshaping of enamel to improve the appearance of teeth.',
          duration: '30 minutes - 1 hour',
          costOther: [20, 'per tooth'],
          costIn: [500, 'per tooth'],
          benefits:
            'Improve tooth shape and symmetry, painless procedure, immediate results',
          aftercareInstructions:
            'Maintain good oral hygiene, attend regular dental check-ups',
          image: '/Treatments/smile-contouring.webp',
        },
      ],
    },
    {
      category: 'Orthodontics',
      description:
        'Orthodontics is a specialized branch of dentistry that focuses on diagnosing, preventing, and treating dental and facial irregularities, primarily through the use of braces and other appliances to straighten teeth and correct misaligned jaws.',
      treatments: [
        {
          name: 'Metal Braces',
          description:
            'Traditional braces made of high-grade stainless steel brackets and wires.',
          duration: '18-24 months on average',
          costOther: [450],
          costIn: [18_000, 30_000],
          benefits:
            'Effective for complex cases, durable, less expensive than other options',
          aftercareInstructions:
            'Brush after every meal, use floss threaders, avoid hard and sticky foods',
          image: '/Treatments/metal-braces.webp',
        },
        {
          name: 'Ceramic Braces',
          description:
            'Similar to metal braces but with clear or tooth-colored brackets for a more discreet appearance.',
          duration: '18-36 months',
          costOther: [500],
          costIn: [35_000],
          benefits: 'Less noticeable than metal braces, effective for most cases',
          aftercareInstructions:
            'Brush carefully after eating, avoid staining foods and drinks, regular dental check-ups',
          image: '/Treatments/ceramic-braces.webp',
        },
        {
          name: 'Lingual Braces',
          description:
            'Custom-made braces that attach to the back (lingual side) of the teeth, making them invisible from the front.',
          duration: '18-36 months',
          costOther: [700, 600],
          costIn: [50_000],
          benefits: 'Completely hidden from view, effective for most cases',
          aftercareInstructions:
            'Use special flossing tools, may require speech adjustment period, regular adjustments',
          image: '/Treatments/lingual-braces.webp',
        },
        {
          name: 'Clear Aligners',
          description:
            'Series of custom-made, clear plastic trays that gradually move teeth into position.',
          duration: '6-18 months, depending on case complexity',
          costOther: [1_200, 1_500],
          costIn: [80_000, 1_50_000],
          benefits:
            'Nearly invisible, removable for eating and cleaning, often shorter treatment time',
          aftercareInstructions:
            'Wear 20-22 hours per day, clean aligners regularly, change trays as directed',
          image: '/Treatments/clear-aligners.webp',
        },
        {
          name: 'Removable Orthodontic Appliances',
          description:
            'Various devices used to move teeth, align jaws, or hold teeth in position, often used in conjunction with braces or as part of early intervention treatments.',
          duration:
            'Varies widely based on specific appliance and treatment needs',
          costOther: [300, 500],
          costIn: [1_500, 10_000],
          benefits:
            'Can address specific orthodontic issues, often used in phased treatment approaches',
          aftercareInstructions:
            'Wear as directed by orthodontist, clean regularly, handle with care when removing',
          image: '/Treatments/removable-orthodontics.webp',
        },
      ],
    },
    {
      category: 'Implant Dentistry',
      description:
        'Implant dentistry involves the replacement of missing teeth with artificial tooth roots.',
      treatments: [
        {
          name: 'Dental Implants',
          description:
            'Artificial tooth roots placed in the jaw to hold a replacement tooth.',
          duration: '3-6 months for entire process',
          costOther: [500, 800, 'per implant'],
          costIn: [25_000, 75_000, 'per implant'],
          benefits:
            'Look and function like natural teeth, prevent bone loss, long-lasting',
          aftercareInstructions:
            'Soft diet for a week, rinse with salt water, avoid smoking',
          image: '/Treatments/dental-implants.webp',
        },
        {
          name: 'Sinus Lift',
          description:
            'Adds bone to upper jaw in the area of molars and premolars.',
          duration: '1.5-3 hours for procedure, 4-9 months healing',
          costOther: [550, 700],
          costIn: [30_000],
          benefits: 'Allows for placement of dental implants in upper jaw',
          aftercareInstructions:
            'Avoid blowing nose or sneezing forcefully, take prescribed medications',
          image: '/Treatments/sinus-lift.webp',
        },
        {
          name: 'Bone Grafting',
          description:
            'Procedure to build up the bone in the jaw to allow for implant placement.',
          duration: '45 minutes - 2 hours for procedure, 3-6 months healing',
          costOther: [100, 800, 'depending on complexity'],
          costIn: [5_000, 30_000, 'depending on complexity'],
          benefits:
            'Provides stable foundation for implants, restores jaw structure',
          aftercareInstructions:
            'Apply ice packs, eat soft foods, avoid disturbing the surgical site',
          image: '/Treatments/bone-grafting.webp',
        },
        {
          name: 'Full Arch Rehabilitation',
          description:
            'Replacement of all teeth in an arch with implant-supported prosthesis.',
          duration: 'Several appointments over 3-8 months',
          costOther: [3_000, 4_000, 'per arch'],
          costIn: [2_00_000, 'per arch'],
          benefits:
            'Restore full function and aesthetics, improve quality of life',
          aftercareInstructions:
            'Follow specific diet instructions, maintain meticulous oral hygiene',
          image: '/Treatments/full-arch-rehab.webp',
        },
        {
          name: 'Immediate Loading of Crown',
          description:
            'Placement of a temporary crown on an implant immediately after implant surgery.',
          duration: '2-3 hours for surgery and crown placement',
          costOther: [500, 600, 'additional to standard implant cost'],
          costIn: [40_000, 'additional to standard implant cost'],
          benefits: 'Immediate aesthetic result, reduced total treatment time',
          aftercareInstructions:
            'Soft diet for 6-8 weeks, avoid applying pressure to the implant',
          image: '/Treatments/immediate-loading.webp',
        },
      ],
    },
    {
      category: 'Restorative Dentistry',
      description:
        'Restorative dentistry involves diagnosing, preventing, and treating oral diseases to restore the function and aesthetics of teeth.',
      treatments: [
        {
          name: 'Composite Fillings',
          description:
            'Tooth-colored resin used to repair decayed or damaged teeth.',
          duration: '30 minutes - 1 hour per tooth',
          costOther: [45, 70, 'per tooth'],
          costIn: [1_500, 3_000, 'per tooth'],
          benefits:
            'Natural appearance, bonds to tooth structure, preserve more tooth material',
          aftercareInstructions:
            'Avoid eating for 2-3 hours after procedure, maintain good oral hygiene',
          image: '/Treatments/composite-fillings.webp',
        },
        {
          name: 'Inlays',
          description:
            'Custom-fitted filling made of composite material, gold, or porcelain.',
          duration: '2 appointments over 2-3 weeks',
          costOther: [100, 150, 'per tooth'],
          costIn: [4_000, 'per tooth'],
          benefits:
            'Stronger than traditional fillings, preserve more tooth structure, long-lasting',
          aftercareInstructions:
            'Avoid hard foods for 24 hours, maintain regular oral hygiene',
          image: '/Treatments/inlays.webp',
        },
        {
          name: 'Onlays',
          description:
            'Similar to inlays but cover one or more cusps of a tooth.',
          duration: '2 appointments over 2-3 weeks',
          costOther: [150, 200, 'per tooth'],
          costIn: [10_000, 'per tooth'],
          benefits:
            'Preserve more tooth structure than crowns, custom-fitted, durable',
          aftercareInstructions:
            'Avoid hard foods for 24 hours, maintain regular oral hygiene',
          image: '/Treatments/onlay.webp',
        },
        {
          name: 'Crowns (Ceramic and Zirconia)',
          description: 'Cap that covers the entire visible portion of a tooth.',
          duration: '2-3 appointments over 2-4 weeks',
          costOther: [100, 150, 'per tooth'],
          costIn: [3_500, 10_000, 'per tooth'],
          benefits:
            'Restore shape, size, strength, and appearance of damaged teeth',
          aftercareInstructions:
            'Avoid sticky foods for 24 hours, use sensitive toothpaste if needed',
          image: '/Treatments/ceramic-crown.webp',
        },
      ],
    },
    {
      category: 'Oral Surgery',
      description:
        'Oral surgery involves surgical procedures performed in and around the mouth and jaw.',
      treatments: [
        {
          name: 'Tooth Extractions',
          description: 'Removal of a tooth from its socket in the bone.',
          duration: '20-40 minutes per tooth',
          costOther: [40, 150, 'per tooth'],
          costIn: [300, 1_000, 'per tooth'],
          benefits:
            'Relieve pain, prevent spread of infection, prepare for prosthetics',
          aftercareInstructions:
            'Bite on gauze, apply ice pack, avoid rinsing for 24 hours',
          image: '/Treatments/tooth-extraction.webp',
        },
        {
          name: 'Impactions',
          description:
            'Removal of teeth (often wisdom teeth) that are blocked from erupting.',
          duration: '1-2 hours for all four wisdom teeth',
          costOther: [170, 250, 'per tooth'],
          costIn: [5_000, 8_000, 'per tooth'],
          benefits: 'Prevent crowding, infection, and other complications',
          aftercareInstructions:
            'Use ice packs, eat soft foods, avoid straws for a week',
          image: '/Treatments/impactions.webp',
        },
        {
          name: 'Removal of Cysts and Lesions',
          description:
            'Surgical removal of abnormal growths in the mouth or jaw.',
          duration: '30 minutes - 1 hour',
          costOther: [200, 300, 'depending on complexity'],
          costIn: [3_000, 5_000, 'depending on complexity'],
          benefits:
            'Diagnose potential issues, prevent spread of disease, relieve discomfort',
          aftercareInstructions:
            'Rinse with salt water, avoid hot foods, take prescribed medications',
          image: '/Treatments/cysts-lesions.webp',
        },
      ],
    },
    {
      category: 'Endodontics',
      description:
        'Endodontics deals with the tooth pulp and tissues surrounding the root of a tooth.',
      treatments: [
        {
          name: 'Root Canal',
          description: 'Procedure to treat infection in the root canal system.',
          duration: '1-2 appointments, 30-90 minutes each',
          costOther: [100, 150, 'per tooth'],
          costIn: [3_000, 5_000, 'per tooth'],
          benefits:
            'Save the natural tooth, alleviate pain, prevent spread of infection',
          aftercareInstructions:
            'Avoid chewing on treated tooth until fully restored, take prescribed medications',
          image: '/Treatments/root-canal.webp',
        },
        {
          name: 'Post & Core Crowns',
          description:
            'Restoration for teeth that have undergone root canal treatment.',
          duration: '2-3 appointments over 2-4 weeks',
          costOther: [150, 200],
          costIn: [2_000],
          benefits:
            'Restore strength to weakened tooth, provide foundation for crown',
          aftercareInstructions:
            'Avoid hard foods for 24 hours, maintain good oral hygiene',
          image: '/Treatments/post-core.webp',
        },
      ],
    },
    {
      category: 'Prosthodontics',
      description:
        'Prosthodontics involves the design, manufacture, and fitting of artificial replacements for teeth and other parts of the mouth.',
      treatments: [
        {
          name: 'Complete Dentures',
          description: 'Removable replacements for all teeth in an arch.',
          duration: '4-5 appointments over 3-6 weeks',
          costOther: [360, 400, 'per tooth'],
          costIn: [15_000, 30_000, 'per tooth'],
          benefits: 'Restore ability to eat and speak, support facial structures',
          aftercareInstructions:
            'Remove and clean daily, soak overnight, regular dental check-ups',
          image: '/Treatments/complete-dentures.webp',
        },
        {
          name: 'Removable Partial Dentures',
          description: 'Replacements for some missing teeth in an arch.',
          duration: '2-4 appointments over 2-4 weeks',
          costOther: [150, 1_000],
          costIn: [1_500, 10_000],
          benefits:
            'Improve chewing ability, prevent shifting of remaining teeth',
          aftercareInstructions:
            'Remove and clean after meals, handle with care, regular adjustments',
          image: '/Treatments/partial-dentures.webp',
        },
        {
          name: 'Bridges (Ceramic and Zirconia)',
          description: 'Fixed replacement for one or more missing teeth.',
          duration: '2-3 appointments over 2-4 weeks',
          costOther: [500, 700, 'for a typical 3-unit bridge'],
          costIn: [12_000, 40_000, 'for a typical 3-unit bridge'],
          benefits:
            'Restore smile and chewing ability, prevent shifting of adjacent teeth',
          aftercareInstructions:
            'Use floss threaders for cleaning, avoid sticky foods, regular check-ups',
          image: '/Treatments/bridges.webp',
        },
      ],
    },
  ]
