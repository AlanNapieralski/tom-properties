import Image from "next/image"
import InputForm from "@/components/ui/InputForm"

export default function ContactUs() {

  return (
    <section id="contact-us" className="flex flex-col gap-8 w-full pb-16 pt-16">
      <h2 className="text-4xl font-bold text-center drop-shadow-lg underline">Contact Us</h2>
      <div className="flex gap-4 h-[450px] ">
        <div className="flex-1 h-full hidden lg:block">
          <Image
            src='/assets/images/contact-us.jpg'
            alt="something"
            width={1500}
            height={1000}
            className="object-cover object-center h-full rounded-lg shadow-lg"
          />
        </div>
        <div className="flex-[2] px-1 h-full">
          <InputForm submitStyle="lg:ml-0" />
        </div>
      </div>
    </section>
  )
}
