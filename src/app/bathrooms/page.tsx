import TopPanel from "@/components/sections/sidePages/TopPanel"
import SidePageContactUs from "@/components/sections/sidePages/SidePageContactUs"
import { bathroomsInfo } from "@/models/content/bathrooms-content"

export default function Bathrooms() {

  return (
    <>
      <TopPanel data={bathroomsInfo} />
      <div className="wrapper flex justify-center items-center">
        <SidePageContactUs />
      </div>
    </>
  )
} 
