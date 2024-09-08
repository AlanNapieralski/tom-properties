import Image from 'next/image'
import { valuePropertyImage } from '@/models/valueProperty-content'
import ValuePropertyForm from '@/components/ui/ValuePropertyForm'

export default function ValueMyProperty() {

  const { src, alt, width, height } = valuePropertyImage

  return (
    <section className='h-screen'>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className='sticky h-full inset-0 object-cover'
      />
      <div className='absolute inset-0 h-full bg-black opacity-80'></div>
      <ValuePropertyForm className='absolute flex justify-center items-center z-10 inset-0 mx-auto w-[800px]' />
    </section>
  )
} 
