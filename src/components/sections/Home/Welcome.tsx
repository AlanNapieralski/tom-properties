import Image from 'next/image'
import { useState, useEffect } from 'react'
import { welcome, welcomeImages as images } from '@/models/home-content'

export default function Welcome() {

  const [index, setIndex] = useState(0);
  const wholeStrip = welcome.strip.secondary.concat(welcome.strip.main)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex(prevIndex => 1 - prevIndex)
    }, 8000)
    return () => {
      clearInterval(timer);
    }
  }, [])

  return (
    <section className="flex flex-col h-[calc(88vh-6rem)]">
      <div className='relative overflow-hidden h-full'>
        <div className='absolute inset-0 h-full'>
          {images.map((img, idx) => (
            <Image
              key={idx}
              {...img}
              className={`absolute inset-0 w-full h-full object-cover object-center opacity-0 transition-opacity duration-2000 ease-in-out ${index === idx ? "opacity-100" : "opacity-0"}`}
            />
          ))}
        </div>
        <div className='absolute inset-0 bg-gradient-to-b from-primary via-primary to-transparent opacity-30'></div>
        <h1 className="absolute inset-x-0 top-56 font-bold text-5xl text-white drop-shadow-lg mx-8 text-center">
          {welcome.title}
        </h1>
      </div>

      <div className="hidden lg:flex lg:flex-1 justify-center items-center py-2 bg-primary text-secondary h-12">
        {wholeStrip.map((word, index) => (
          <div key={index} className='flex justify-center items-center'>
            <p className='text-2xl px-4 font-bold'>{word}</p>
            {wholeStrip.length - 1 === index ? null : <div className="dot-white"></div>}
          </div>
        ))}
      </div>
      <div className='lg:hidden lg:justify-around'>
        <div className="flex lg:flex-1 justify-center items-center py-2 bg-primary text-secondary h-12">
          {welcome.strip.secondary.map((word, index) => (
            <div key={index} className='flex justify-center items-center'>
              <p className='text-lg text-center sm:text-2xl px-4 font-bold'>{word}</p>
              {welcome.strip.secondary.length - 1 === index ? null : <div className="dot-white"></div>}
            </div>
          ))}
        </div>
        <div className="flex lg:flex-1 justify-center items-center py-2 bg-primary text-secondary h-12">
          {welcome.strip.main.map((word, index) => (
            <div key={index} className='flex justify-center items-center'>
              <p className='text-lg text-center text-wrap sm:text-2xl px-4 font-bold'>{word}</p>
              {welcome.strip.main.length - 1 === index ? null : <div className="dot-white"></div>}
            </div>
          ))}
        </div>
      </div>

    </section >
  )
}
