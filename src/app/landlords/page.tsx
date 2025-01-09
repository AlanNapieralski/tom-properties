import TopPanel from "@/components/sections/sidePages/TopPanel"
import SidePageContactUs from "@/components/sections/sidePages/SidePageContactUs"
import { landlordInfo } from "@/models/content/landlord-content"

export default function Landlord() {

  return (
    <>
      <TopPanel data={landlordInfo} />
      <div className="wrapper flex justify-center items-center">
        <SidePageContactUs />
      </div>
    </>
  )
} 
