import Image from 'next/image'
import { valuePropertyImage } from '@/models/valuePropertyContent'
import RootLayout from '../layout'

export default function ValueMyProperty() {

  const { src, alt, width, height } = valuePropertyImage

  return (
    <RootLayout navPosition='fixed'>
      <section className='h-screen'>
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className='sticky h-full inset-0 object-cover'
        />
      </section>
    </RootLayout>
  )
} 
