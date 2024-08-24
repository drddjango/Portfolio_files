import gsap from 'gsap'
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime'

export const navbarAnimation = (navbar: HTMLDivElement) => {
  let timer: NodeJS.Timeout | undefined
  const handleScroll = (self: ScrollTrigger) => {
    clearTimeout(timer)
    if (self.direction === -1) {
      gsap.to(navbar, { yPercent: 0, duration: 0.5 })
    } else if (self.direction === 1) {
      gsap.to(navbar, { yPercent: -100, duration: 0.5 })
    }

    timer = setTimeout(() => {
      gsap.to(navbar, { yPercent: 0, duration: 0.5 })
    }, 300)
  }
  gsap.to(navbar, {
    yPercent: 0,
    duration: 0.5,
    scrollTrigger: {
      trigger: document.body,
      start: 'top top',
      end: 'bottom bottom',
      onUpdate: (self) => handleScroll(self),
    },
  })
}

export const preLoader = (mainContainer: HTMLDivElement) => {
  const tl = gsap.timeline({
    defaults: { duration: 0.92, ease: 'power4.inOut' },
  })
  tl.from(mainContainer, {
    opacity: 0,
    duration: 0,
  })
  .to(mainContainer, {
    opacity: 1
  })
    .from(['#text-1', '#text-2'], {
      opacity: 0,
      yPercent: '100',
      duration: 1.6,
      stagger: 0.3,
    })
    .to(['#text-1', '#text-2'], {
      opacity: 0,
      xPercent: '-100',
      duration: 1.6,
      stagger: 0.3,
    })
    .to(
      '#slider',
      {
        xPercent: '-100',
        onComplete: () => {
          document.body.style.overflow = 'unset'
        },
      },
      '-=0.8',
    )
}

export const heroAnimation = () => {
  gsap.set('.hero-image', { opacity: 0 })
  gsap.set('.hero-content', { opacity: 0, y: 100 })
  gsap.set('.sub-content', { opacity: 0, y: 100 })
  gsap.set('.explore-buttons', { opacity: 0, y: 100 })
  const tl = gsap.timeline({
    paused: true,
    defaults: { duration: 1, ease: 'power4.inOut' },
  })
  tl.to('.hero-image', { opacity: 1 })
  tl.to('.hero-content', { opacity: 1, y: 0 }, '-=0.75')
  tl.to('.sub-content', { opacity: 1, y: 0 }, '-=0.75')
  tl.to('.explore-buttons', { opacity: 1, y: 0 }, '-=0.8')

  tl.play()
}

export const pageIn = () => {
  const container = document.querySelector('#transition')
  const t1 = gsap.timeline()
  t1.set(container, {
    opacity: 0,
  }).to(container, {
    opacity: 1,
    onStart: () => window.scrollTo(0, 0),
  })
}
export const pageOut = (href: string, router:AppRouterInstance) => {
  const container = document.querySelector('#transition')
  const t1 = gsap.timeline()
  t1.set(container, {
    opacity: 1,
  }).to(container, {
    opacity: 0,
    onComplete: () => router.push(href),
  })
}
