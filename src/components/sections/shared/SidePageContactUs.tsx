import Image from "next/image"
import InputForm from "@/components/ui/InputForm"
import Button from "@/components/ui/CustomButton"

export default function SidePageContactUs() {

  return (
    <section id="side-contact-us" className="flex flex-col gap-8 w-full pb-16">
      <h2 className="text-5xl underline text-primary font-bold flex justify-center items-center">Contact Us</h2>
      <div className="flex gap-4 h-[400px] ">
        <div className="flex-[2] px-1 h-full">
          <InputForm className="w-2/3" />
        </div>
      </div>
    </section>
  )
}
