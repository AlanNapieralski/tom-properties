import Image from 'next/image'
import { useState, useEffect } from 'react'
import { welcome, welcomeImages as images } from '@/models/home-content'

export default function Welcome() {

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex(prevIndex => 1 - prevIndex)
    }, 8000)
    return () => {
      clearInterval(timer);
    }
  }, [])

  return (
    <section className="flex flex-col mb-16 h-[calc(88vh-6rem)]">
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
        <h1 className="absolute inset-x-0 top-56 flex items-center justify-center font-bold text-5xl text-white drop-shadow-lg">
          {welcome.title}
        </h1>
      </div>

      <div className="flex justify-center items-center py-2 bg-primary text-secondary shadow-bottom h-20">
        {welcome.strip.map((word, index) => (
          <>
            <p className='text-2xl px-4 font-bold uppercase'>{word}</p>
            {welcome.strip.length - 1 === index ? null : <div className="dot-white"></div>}
          </>
        ))}
      </div>

    </section >
  )
}
