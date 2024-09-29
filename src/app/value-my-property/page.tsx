import Image from 'next/image'
import { valuePropertyImage } from '@/models/valueProperty-content'
import ValuePropertyForm from '@/components/ui/ValuePropertyForm'

export default function ValueMyProperty() {

  const { src, alt, width, height } = valuePropertyImage

  return (
    <section className='relative h-[calc(110vh)] sm:h-[calc(100vh-6rem)]'>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className='sticky h-full inset-0 object-cover'
      />
      <div className='absolute inset-0 h-full bg-black opacity-80'></div>
      <ValuePropertyForm className='w-full sm:w-2/3 px-8 absolute pt-8 z-10 top-0 sm:top-1/2 left-1/2 transform -translate-x-1/2 sm:-translate-y-1/2 mx-auto max-w-[650px]' />
    </section>
  )
} 
