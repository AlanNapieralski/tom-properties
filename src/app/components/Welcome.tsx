import Image from 'next/image'

export default function Welcome() {

  return (
    <section className="flex flex-col pb-16">
      <div className='relative overflow-hidden'>
        <div className='absolute inset-0 bg-gradient-to-b from-primary via-primary to-transparent opacity-30'></div>
        <h1 className="absolute inset-x-0 top-56 flex items-center justify-center font-bold text-5xl text-white drop-shadow-lg">
          Main Welcome Text on the Page
        </h1>

        <Image
          src="/assets/images/welcome-image.jpeg"
          alt='properties'
          width={1366}
          height={788}
          className='max-w-full w-full h-[650px] object-cover object-center'
        />
      </div>

      <div className="flex justify-center items-center py-2 bg-primary text-white shadow-bottom">
        <p className='px-4 font-semibold uppercase'>lorem ipsum</p>
        <div className="dot-white"></div>
        <p className='px-4 font-semibold uppercase'>LOREM IPSUM</p>
        <div className="dot-white"></div>
        <p className='px-4 font-semibold uppercase'>LOREM IPSUM</p>
      </div>

    </section >
  )
}
