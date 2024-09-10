import TopPanel from "@/components/sections/shared/TopPanel"
import SidePageContactUs from "@/components/sections/shared/SidePageContactUs"
import { landlordInfo } from "@/models/landlord-content"

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
