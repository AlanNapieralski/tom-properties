import Image from "next/image";
import { aboutUs } from "@/models/content/home-content";
import Button from '@/components/ui/CustomButton'

export default function AboutUs() {
  return (
    <section id='about-us' className="flex flex-col lg:flex-row gap-8 py-20">
      <div className="lg:flex-1 w-full h-64 md:h-80 lg:h-96">
        <Image
          src='/assets/images/aboutus.jpg'
          alt="picture of us"
          width={612}
          height={408}
          className="object-cover w-full md:w-auto md:mx-auto h-full rounded shadow-2xl"
        />
      </div>
      <div className="md:flex-1 flex flex-col justify-between">
        <div>
          <h2 className="text-4xl font-bold pb-2 w-fit mx-auto lg:mx-0">{aboutUs.title}</h2>
          <p className="lg:text-normal xl:text-lg pb-8 break-words">{aboutUs.text}</p>
        </div>
        <Button buttonType="link" action='#contact-us' className="w-1/2 sm:w-1/3 h-16 lg:h-12 mx-auto lg:mr-auto lg:mx-0">Contact Us</Button>
      </div>
    </section>
  )
}
