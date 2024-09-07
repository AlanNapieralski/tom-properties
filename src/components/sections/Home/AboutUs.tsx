import Image from "next/image";
import { aboutUs } from "@/models/home-content";
import Button from '@/components/ui/CustomButton'

export default function AboutUs() {
  // NOTE: be consistent with margins and paddings. Figure it out
  return (
    <section id='about-us' className="flex mb-16 gap-8">
      <div className="flex-1 h-96">
        <Image
          src='/assets/images/aboutus.jpg'
          alt="picture of us"
          width={612}
          height={408}
          className="object-cover w-full h-full rounded shadow-2xl"
        />
      </div>
      <div className="flex-1 flex flex-col">
        <p className="text-xl font-bold text-primary-background">About Us</p>
        <h2 className="text-4xl font-bold pb-2 uppercase">{aboutUs.title}</h2>
        <p className="pb-10 break-words">{aboutUs.text}</p>
        <Button type='link' action='#contact-us' className="w-1/3 mt-auto">Contact Us</Button>
      </div>
    </section>
  )
}
