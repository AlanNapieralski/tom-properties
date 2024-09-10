import TopPanel from "@/components/sections/shared/TopPanel"
import SidePageContactUs from "@/components/sections/shared/SidePageContactUs"
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
