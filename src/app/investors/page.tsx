import TopPanel from "@/components/sections/sidePages/TopPanel"
import SidePageContactUs from "@/components/sections/sidePages/SidePageContactUs"
import { investorsInfo } from "@/models/investors-content"

export default function Investor() {

  return (
    <>
      <TopPanel data={investorsInfo} />
      <div className="wrapper flex justify-center items-center">
        <SidePageContactUs />
      </div>
    </>
  )
} 
