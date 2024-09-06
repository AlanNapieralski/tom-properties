import Image from 'next/image'
import { welcomeImages as image } from '@/models/homeContent'

export default function TopPanel() {

  const { src, alt, width, height } = image[0]

  return (
    <section className='flex h-80 justify-start items-center w-full gap-x-8 bg-primary py-3 p-20 shadow-bottom'>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className='h-full object-cover w-[700px] rounded-lg '
      />

      <h1 className='text-6xl text-secondary font-bold uppercase text-nowrap'>For Landlords</h1>
    </section>
  )
}
