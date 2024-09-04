import AboutUs from "./components/AboutUs"
import Dashboard from "./components/Dashboard"
import Drawer from "./components/Drawer"
import Nav from "./components/shared/Nav"
import Welcome from "./components/Welcome"

export default function Home() {
  return (
    <Drawer Trigger={Nav}>
      <Welcome></Welcome>
      <div className="wrapper">
        <AboutUs />
      </div>
      <Dashboard />
    </Drawer>
  )
}
