'use client'
import { useEffect, useState } from 'react'

const MapSection = () => {
  const [mapDimension, setMapDimension] = useState({ width: 0, height: 0 })

  useEffect(() => {
    if (window.innerWidth < 768) {
      setMapDimension({ width: 300, height: 300 })
    } else {
      setMapDimension({ width: 600, height: 450 })
    }
  }, [])
  return (
    <div className="flex flex-col gap-8 justify-center place-items-center overflow-hidden rounded-md">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3945.983134170688!2d76.92853357659286!3d8.50101779702687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05bb928b305045%3A0xaf979f461325ff39!2sILILI%20Dental%20Spa!5e0!3m2!1sen!2sin!4v1721561247566!5m2!1sen!2sin"
        width={mapDimension.width}
        height={mapDimension.height}
        style={{ border: '0' }}
        allowFullScreen={false}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  )
}

export default MapSection
