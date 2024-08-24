'use client'
import { ReactLenis } from 'lenis/react'

const SmoothScrolling = () => {
  return (
    <ReactLenis
      options={{
        prevent(node) {
          return (
            node.id === 'slider' ||
            node.id === 'desktop-menu' ||
            node.id === 'mobile-menu' ||
            node.id === 'treatment' ||
            node.id === 'overlay'
          )
        },
      }}
      root
    />
  )
}

export default SmoothScrolling
