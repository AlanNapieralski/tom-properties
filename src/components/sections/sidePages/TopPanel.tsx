'use client'
import Image from 'next/image'
import { welcomeImages as image } from '@/models/content/home-content'
import { useEffect, useState, useRef } from 'react'
import ArticleSnippetWithButton from '@/components/ui/ArticleSnippetWithButton'

type TopPanelProps = {
  data: {
    title: string
    text: string
  }
}

export default function TopPanel({ data }: TopPanelProps) {

  const { src, alt, width, height } = image[0]

  const [isMount, setIsMount] = useState(false)
  const [isAnimated, setIsAnimated] = useState(false)
  const imageRef = useRef<HTMLImageElement | null>(null)

  useEffect(() => {
    setIsMount(true)
  }, [])

  useEffect(() => {
    const image = imageRef.current

    if (window.innerWidth < 1280) {
      setIsAnimated(true)
      return
    }

    if (image) {
      image.addEventListener('transitionend', () => setIsAnimated(true))
      return () => image.removeEventListener('transitionend', () => setIsAnimated(true))
    }

    return
  }, [])



  return (
    <section className='flex flex-col xl:flex-row mx-auto min-h-[30rem] max-h-fit justify-start xl:justify-center items-center w-full gap-x-8 bg-primary py-8 px-8 shadow-bottom mb-16'>
      <Image
        ref={imageRef}
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={`z-10 h-full object-cover w-[700px] rounded-lg transition-transform duration-700 ease-out ${isMount ? 'xl:translate-x-[0%] xl:opacity-100' : 'xl:translate-x-[-120%] xl:opacity-0'}`}
      />
      <ArticleSnippetWithButton
        title={data.title}
        text={data.text}
        transitionClasses={`transition-transform duration-500 ease-out ${isAnimated ? `xl:translate-x-[0%] xl:opacity-100` : `xl:translate-x-[calc(-100%-32px)] xl:opacity-0`}`}
      />
    </section>
  )
}
