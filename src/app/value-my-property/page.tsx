import Image from 'next/image'
import { valuePropertyImage } from '@/models/valueProperty-content'
import ValuePropertyForm from '@/components/ui/ValuePropertyForm'

export default function ValueMyProperty() {

  const { src, alt, width, height } = valuePropertyImage

  return (
    <section className='relative h-[calc(100vh-6rem)]'>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className='sticky h-full inset-0 object-cover'
      />
      <div className='absolute inset-0 h-full bg-black opacity-80'></div>
      <ValuePropertyForm className='absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mx-auto w-[800px]' />
    </section>
  )
} 
