'use client'
import AboutUs from "@/components/sections/Home/AboutUs"
import Dashboard from "@/components/sections/Home/Dashboard"
import Nav from "@/components/sections/shared/Nav"
import Welcome from "@/components/sections/Home/Welcome"
import ContactUs from "@/components/sections/Home/ContactUs"
import Footer from "@/components/sections/shared/Footer"

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
