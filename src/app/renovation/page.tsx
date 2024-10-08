import TopPanel from "@/components/sections/sidePages/TopPanel"
import SidePageContactUs from "@/components/sections/sidePages/SidePageContactUs"
import { renovationInfo } from "@/models/renovation-content"

export default function Renovation() {

  return (
    <>
      <TopPanel data={renovationInfo} />
      <div className="wrapper flex justify-center items-center">
        <SidePageContactUs />
      </div>
    </>
  )
} 
