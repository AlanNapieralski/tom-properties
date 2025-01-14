import Image from "next/image"
import Button from '@/components/ui/CustomButton'

export default function Dashboard() {

  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-2 gap-4 px-6">

      <div className="relative h-64 lg:h-96 group">
        <Image
          src='/assets/images/dashboard/red.jpg'
          alt="red brick properties"
          width={1999}
          height={1372}
          className="object-cover object-center w-full h-full rounded-md shadow-md"
        />
        <div className="absolute inset-0 bg-red-900 bg-blend-lighten transition duration-300 ease-in-out opacity-40 group-hover:opacity-20 hover:bg-blend-darken rounded-md"></div>
        <div className="absolute flex flex-col inset-0 items-center justify-center gap-8">
          <h2 className="text-5xl text-center sm:text-6xl font-bold text-white drop-shadow-lg underline ">For Landlords</h2>
          <Button name="Services for Landlords" buttonType="link" action="/landlords" theme="light" className="border-none">Read More</Button>
        </div>
      </div>
      <div className="relative h-64 lg:h-96 group">
        <Image
          src='/assets/images/dashboard/blue.jpg'
          alt="modern properties"
          width={720}
          height={475}
          className="object-cover object-center w-full h-full rounded-md shadow-md"
        />
        <div className="absolute inset-0 bg-blue-900 bg-blend-lighten transition duration-300 ease-in-out opacity-40 group-hover:opacity-20 hover:bg-blend-darken rounded-md"></div>
        <div className="absolute flex flex-col inset-0 items-center justify-center gap-8">
          <h2 className="text-5xl text-center sm:text-6xl px-2 font-bold text-white drop-shadow-lg underline ">For Tenants</h2>
          <Button name="Services for Tenants" buttonType="link" action="/tenants" theme="light" className="border-none">Read More</Button>
        </div>
      </div>
      <div className="relative h-64 lg:h-96 group">
        <Image
          src='/assets/images/dashboard/green.jpg'
          alt="futuristic sustainable properties"
          width={1500}
          height={844}
          className="object-cover object-center w-full h-full rounded-md"
        />
        <div className="absolute inset-0 bg-green-900 bg-blend-lighten transition duration-300 ease-in-out opacity-40 group-hover:opacity-20 hover:bg-blend-darken rounded-md shadow-md"></div>
        <div className="absolute flex flex-col inset-0 items-center justify-center gap-8">
          <h2 className="text-5xl text-center sm:text-6xl font-bold text-white drop-shadow-lg underline ">For investors</h2>
          <Button name="Services for Investors" buttonType="link" action="/investors" theme="light" className="border-none">Read More</Button>
        </div>
      </div>
      <div className="relative h-64 lg:h-96 group">
        <Image
          src='/assets/images/dashboard/orange.jpg'
          alt="uk properties"
          width={1024}
          height={683}
          className="object-cover object-center w-full h-full rounded-md shadow-md"
        />
        <div className="absolute inset-0 bg-orange-900 bg-blend-lighten transition duration-300 ease-in-out opacity-40 group-hover:opacity-20 hover:bg-blend-darken rounded-md"></div>
        <div className="absolute flex flex-col inset-0 items-center justify-center gap-8">
          <h2 className="text-5xl text-center break-words mx-auto sm:text-6xl lg:text-5xl xl:text-6xl  font-bold text-white drop-shadow-lg underline ">Value my Property</h2>
          <Button name="Valuate my property service" buttonType="link" action="/value-my-property" theme="light" className="border-none">Read More</Button>
        </div>
      </div>
    </section>
  )
}
