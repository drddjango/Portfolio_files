export interface NavLink {
    id: string
    title: string
    sectionId: string
}
export interface MenuLinks {
    id: string
    title: string
    link: string
}
 export const homeNavLinks: NavLink[]  = [
    {
      id: '#hero',
      title: 'Home',
      sectionId: 'hero',
    },

    {
      id: '#about',
      title: 'About',
      sectionId: 'about',
    },
    {
      id: '#team',
      title: 'Team',
      sectionId: 'team',
    },
    {
      id: '#treatments',
      title: 'Treatments',
      sectionId: 'treatments',
    },
    {
      id: '#testimonials',
      title: 'Testimonials',
      sectionId: 'testimonials',
    },
  ]

  export const menuLinks: MenuLinks[] = [
    {
      id: 'Home1',
      title: 'Home',
      link: '/',
    },

    {
      id: 'About1',
      title: 'About',
      link: '/about',
    },
    {
      id: 'Team1',
      title: 'Team',
      link: '/team',
    },
    {
      id: 'Treatments1',
      title: 'Treatments',
      link: '/treatments',
    },
    {
      id: 'Contact1',
      title: 'Contact',
      link: '/contact',
    },
  ]
