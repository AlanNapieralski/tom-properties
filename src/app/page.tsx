'use client'
import AboutUs from "@/components/sections/AboutUs"
import Dashboard from "@/components/sections/Dashboard"
import Nav from "@/components/sections/shared/Nav"
import Welcome from "@/components/sections/Welcome"
import ContactUs from "@/components/sections/ContactUs"
import Footer from "@/components/sections/shared/Footer"

export default function Home() {

  return (
    <>
      <Nav />
      <Welcome />
      <div className="wrapper">
        <AboutUs />
      </div>
      <Dashboard />
      <div className="wrapper">
        <ContactUs />
      </div>
      <Footer />
    </>
  );
}
