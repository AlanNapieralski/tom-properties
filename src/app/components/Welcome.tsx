import Image from 'next/image'

export default function Welcome() {

  return (
    <section className="flex flex-col">
      {/*  NOTE: Make an overlay and fix the text size to be smoothly adjusting to the image  */}
      <div className='absolute blue opacity-20 w-full h-full'></div>
      <div className='relative'>
        <h1 className='absolute max-w-full w-full top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bold text-5xl flex items-center justify-center text-white' >Main Welcome text on the page</h1>

        <Image
          src="/assets/images/welcome-image.jpeg"
          alt='properties'
          width={1366}
          height={788}
          className='max-w-full w-full h-[700px] object-cover object-center'
        />
      </div>

      <div className="flex">
        <p>Lorem ipsum</p>
        <p>Lorem ipsum</p>
        <p>Lorem ipsum</p>
      </div>
    </section >
  )
}
