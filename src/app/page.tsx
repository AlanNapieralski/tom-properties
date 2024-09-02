import Drawer from "./components/Drawer"
import Nav from "./components/shared/Nav"
import Welcome from './components/Welcome'

export default function Home() {
  return (
    <>
      <Drawer Trigger={Nav}>
        <Welcome></Welcome>
      </Drawer>
    </>
  )
}
