import AboutUs from "./components/AboutUs"
import Dashboard from "./components/Dashboard"
import Drawer from "./components/Drawer"
import Nav from "./components/shared/Nav"
import Welcome from "./components/Welcome"
import ContactUs from "./components/ContactUs"
import Footer from "./components/shared/Footer"

export default function Home() {
  return (
    <Drawer Trigger={Nav}>
      <Welcome></Welcome>
      <div className="wrapper">
        <AboutUs />
      </div>
      <Dashboard />
      <div className="wrapper">
        <ContactUs />
      </div>
      <Footer />
    </Drawer>
  )
}
