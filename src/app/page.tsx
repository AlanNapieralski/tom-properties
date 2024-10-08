'use client'
import AboutUs from "@/components/sections/Home/AboutUs"
import Dashboard from "@/components/sections/Home/Dashboard"
import Welcome from "@/components/sections/Home/Welcome"
import ContactUs from "@/components/sections/Home/ContactUs"

export default function Home() {

  return (
    <>
      <Welcome />
      <div className="wrapper">
        <AboutUs />
      </div>
      <Dashboard />
      <div className="wrapper">
        <ContactUs />
      </div>
    </>
  )
}
