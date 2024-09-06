import Image from "next/image";

export default function Dashboard() {

  return (
    <section className="grid grid-cols-2 grid-rows-2 gap-4 px-4 mb-16">

      <div className="relative h-96 group">
        <Image
          src='/assets/images/dashboard/red.jpg'
          alt="red brick properties"
          width={1999}
          height={1372}
          className="object-cover object-center w-full h-full rounded-md shadow-md"
        />
        <div className="absolute inset-0 bg-red-900 bg-blend-lighten transition duration-300 ease-in-out opacity-40 group-hover:opacity-20 hover:bg-blend-darken rounded-md"></div>
        <div className="absolute flex flex-col inset-0 items-center justify-center gap-8">
          <h2 className="text-6xl font-bold text-white drop-shadow-2xl underline">For Landlords</h2>
          <button className="btn bg-secondary text-primary hover:bg-primary hover:text-secondary font-bold border-none">Read more</button>
        </div>
      </div>
      <div className="relative h-96 group">
        <Image
          src='/assets/images/dashboard/blue.jpg'
          alt="modern properties"
          width={720}
          height={475}
          className="object-cover object-center w-full h-full rounded-md shadow-md"
        />
        <div className="absolute inset-0 bg-blue-900 bg-blend-lighten transition duration-300 ease-in-out opacity-40 group-hover:opacity-20 hover:bg-blend-darken rounded-md"></div>
        <div className="absolute flex flex-col inset-0 items-center justify-center gap-8">
          <h2 className="text-6xl font-bold text-white drop-shadow-lg underline">For Tenants</h2>
          <button className="btn bg-secondary text-primary hover:bg-primary hover:text-secondary font-bold border-none">Read more</button>
        </div>
      </div>
      <div className="relative h-96 group">
        <Image
          src='/assets/images/dashboard/green.jpg'
          alt="futuristic sustainable properties"
          width={1500}
          height={844}
          className="object-cover object-center w-full h-full rounded-md"
        />
        <div className="absolute inset-0 bg-green-900 bg-blend-lighten transition duration-300 ease-in-out opacity-40 group-hover:opacity-20 hover:bg-blend-darken rounded-md shadow-md"></div>
        <div className="absolute flex flex-col inset-0 items-center justify-center gap-8">
          <h2 className="text-6xl font-bold text-white drop-shadow-lg underline">For investors</h2>
          <button className="btn bg-secondary text-primary hover:bg-primary hover:text-secondary font-bold border-none">Read more</button>
        </div>
      </div>
      <div className="relative h-96 group">
        <Image
          src='/assets/images/dashboard/orange.jpg'
          alt="uk properties"
          width={1024}
          height={683}
          className="object-cover object-center w-full h-full rounded-md shadow-md"
        />
        <div className="absolute inset-0 bg-orange-900 bg-blend-lighten transition duration-300 ease-in-out opacity-40 group-hover:opacity-20 hover:bg-blend-darken rounded-md"></div>
        <div className="absolute flex flex-col inset-0 items-center justify-center gap-8">
          <h2 className="text-6xl font-bold text-white drop-shadow-lg underline">Value my Property</h2>
          <button className="btn bg-secondary text-primary hover:bg-primary hover:text-secondary font-bold border-none">Read more</button>
        </div>
      </div>
    </section>
  )
}
