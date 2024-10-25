import { StaticImageData } from 'next/image'
export interface DoctorProp {
  url: string
  name: string
  certifications: string[]
  experience: number
  specialisation: string
  personalIntro: string[]
  awards: string[]
  photo: string | StaticImageData
  socials: {
    name: string
    url: string
  }[]
}
export const doctorsData: DoctorProp[] = [
  {
    url: 'dr_arun_kumar_vidyadharan',
    name: 'Dr. Arun Kumar Vidyadharan',
    certifications: ['DDS', 'MDS', 'BDS'],
    experience: 28,
    specialisation: 'Implantologist and Endodontist',
    personalIntro: [
      'Dr. Arun Kumar Vidyadharan, the founder of our clinic, is an experienced and compassionate Implantologist/Endodontist with a proven track record of delivering high-quality dentistry and enhancing patient treatments. He graduated with a BDS from Dr. MGR Medical University, India, in 1996, and completed his MDS in Endodontics from the same university in 2003. Dr. Vidyadharan further advanced his expertise with a 2-year residency program in Implant Dentistry at New York University College of Dentistry, USA, in 2010.',

      'In addition to his clinical expertise, Dr. Vidyadharan is a prolific researcher with numerous publications in leading dental journals. His contributions to the field of dentistry have been widely recognized, solidifying his reputation as a thought leader. Beyond his research, he is deeply committed to community service, dedicating significant time to volunteer work and making a meaningful impact on the communities he serves.',

      'Fluent in English, Hindi, Malayalam, and Tamil, Dr. Vidyadharan is a licensed Consultant Implantologist in Qatar, Oman, and Dubai, bringing extensive international experience as a dentist and speaker. His unwavering dedication to excellence in patient care and his passion for advancing dental knowledge have established our clinic as a trusted provider of exceptional dental services.',
    ],
    awards: ['Best Outgoing Post Graduate'],
    photo: '/Doctors/dr_arun_kumar_vidyadharan.webp',
    socials: [
      {
        name: 'Facebook',
        url: 'https://www.facebook.com/arun.kumarjango',
      },
      {
        name: 'Instagram',
        url: 'https://www.instagram.com/django_arun/',
      },
    ],
  },
  {
    url: 'dr_vinod_nair_sreekumar',
    name: 'Dr. Vinod Nair Sreekumar',
    certifications: [
      'BDS',
      'MDS',
      'FICOI',
      'MFDSRCSI',
      'MFDSRCSED',
      'MFDSRCSENG',
      'Ph.D',
    ],
    experience: 14,
    specialisation: 'Oral and Maxillofacial Surgery ',
    personalIntro: [
      'Dr. Vinod Nair S, an esteemed professional in the field of dentistry, holds a Ph.D. in Cancer Research from Saveetha Medical University and completed his post-graduation in Oral and Maxillofacial Surgery from Kerala University of Health Sciences. In 2020, he obtained a Fellowship from the International Congress of Implantologists, USA, followed by earning the MFD RCSI from the Royal College of Surgeons, Ireland in 2021, and the MFD RCS from the Royal College of Surgeons, Edinburgh and England in 2022.',
      'Dr. Nair specializes in Orthognathic Surgery, Maxillofacial Trauma, Head and Neck Oncology, and Maxillofacial Implants. His dedication to his field and patients is evident in his role as a Consultant Maxillofacial Surgeon at Sree Ramakrishna Mission Hospital, where he continues to provide exceptional care and advanced surgical treatments.',
    ],
    awards: ['Winner of 7 National Awards', '1 Patent'],
    photo: '/Doctors/dr_vinod.webp',
    socials: [],
  },

  {
    url: 'dr_anju_jinendra',
    name: 'Dr. Anju Jinendra.A',
    certifications: ['BDS'],
    experience: 9,
    specialisation: 'General Dentistry',
    personalIntro: [
      'Dr. Anju Jinendra, a passionate and dedicated dentist, brings 9 years of experience in providing comprehensive and personalized dental care to patients of all ages, from young children to elderly adults. Excelling in Restorative Dentistry, Cosmetic Dentistry, Crown and Bridges, Dental Extractions, Orthodontic Case Follow-up, and assisting in Implant Surgeries, Dr. Jinendra is committed to delivering top-notch dental services. Her dedication to excellence and patient care has earned her a reputation for providing exceptional dental treatments.',
    ],
    awards: [],
    photo: '/Doctors/dr_anju_jinendra.webp',
    socials: [
      {
        name: 'Facebook',
        url: 'https://www.facebook.com/anju.jinendra',
      },
      {
        name: 'Instagram',
        url: 'https://www.instagram.com/anjuvipz/',
      },
    ],
  },
  {
    url: 'dr_subi_e_s',
    name: 'Dr. Subi E.S.',
    certifications: ['BDS'],
    experience: 8,
    specialisation: 'General Dentistry',
    personalIntro: [
      'Dr. Subi E. S., a skilled and compassionate dentist, brings 8 years of expertise in general dentistry, providing high-quality dental care for patients of all ages. Specializing in Root Canal Treatments (RCT), Post and Core procedures, Crown and Bridge restorative work, as well as Surgical Extractions, Dr. Subi is committed to enhancing his patients oral health and delivering personalized care. His proficiency in these areas, combined with a patient-centered approach, has earned him a reputation for excellence and a deep sense of trust among his patients.',
    ],
    awards: [],
    photo: '/Doctors/dr_subi_e_s.webp',
    socials: [],
  },
  {
    url: 'dr_archana_ab',
    name: 'Dr. Archana AB',
    certifications: ['BDS', 'MDS', 'Periodontics and Implantology'],
    experience: 7,
    specialisation: 'Periodontics and Implantology',
    personalIntro: [
      'Dr. Archana is a compassionate and highly skilled professional specializing in Periodontics and Implantology. With a strong commitment to patient-focused care, she has built a reputation for providing excellent dental treatments through her empathetic approach. She completed both her graduation and post-graduation in Periodontics and Implantology from the esteemed Government Dental College, Trivandrum.',

      'Throughout her career, she has gained comprehensive experience in a range of dental procedures, including scaling and root planing, extractions, pediatric patient management, crown lengthening, pocket therapies, and minimally invasive surgeries. She has honed her skills through 3 years of junior residency and 1 year of senior residency, allowing her to expertly handle complex dental cases with precision.',

      'In addition to her clinical expertise, Dr. Archana is passionate about continuous learning and advancing her knowledge in the field. She is dedicated to staying up-to-date with the latest innovations in dentistry, ensuring that her patients receive the best possible care. Her commitment to excellence has made her a trusted professional in the field of Periodontics and Implantology.',
    ],
    awards: [],
    photo: '/Doctors/dr_archana_ab.webp',
    socials: [],
  },
  {
    url: 'dr_devika_sg',
    name: 'Dr. Devika SG',
    certifications: ['BDS', 'Fellowship in Dental surgery and Endodontics '],
    experience: 4,
    specialisation: 'General Dentistry',
    personalIntro: [
      'Dr. Devika SG is proficient in performing single-sitting Root Canal Treatments, Post and Cores, Crown and Bridges, and Extractions. With 4 years of experience in dentistry, Dr. Devika excels at identifying and effectively treating dental abnormalities. Known for her meticulous attention to detail and patient-centered approach, she is committed to providing exceptional dental care. Dr. Devika continually updates her skills and knowledge to stay abreast of the latest advancements in dental treatments, ensuring her patients receive the best possible care. Her dedication to excellence and compassionate care has earned her the trust and appreciation of her patients.',
    ],
    awards: [],
    photo: '/Doctors/dr_devika.webp',
    socials: [
      {
        name: 'Instagram',
        url: 'https://www.instagram.com/sivadevika/',
      },
    ],
  },
]
