'use client'
import Image from 'next/image'
import { welcomeImages as image } from '@/models/homeContent'
import { useEffect, useState, useRef } from 'react'

export default function TopPanel({ title }: { title: string }) {

  const { src, alt, width, height } = image[0]

  const [isMount, setIsMount] = useState(false)
  const [isAnimated, setIsAnimated] = useState(false)
  const imageRef = useRef<HTMLImageElement | null>(null)

  useEffect(() => {
    setIsMount(true)
  }, [])

  useEffect(() => {
    const image = imageRef.current

    if (image) {
      image.addEventListener('transitionend', () => setIsAnimated(true))
      return () => image.removeEventListener('transitionend', () => setIsAnimated(true))
    }

    return
  }, [])


  return (
    <section className='flex h-96 justify-start items-center w-full gap-x-8 bg-primary py-3 p-20 shadow-bottom mb-16'>
      <Image
        ref={imageRef}
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={`z-10 h-full object-cover w-[700px] rounded-lg transition-transform duration-700 ease-out ${isMount ? 'translate-x-[0%] opacity-100' : 'translate-x-[-120%] opacity-0'}`}
      />

      <h1
        className={`text-6xl text-secondary font-bold uppercase text-nowrap opacity-0 transition-transform duration-500 ease-out ${isAnimated ? `translate-x-[0%] opacity-100` : `translate-x-[calc(-100%-32px)] `}`}
      >{title}
      </h1>

    </section>
  )
}
