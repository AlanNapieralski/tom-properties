import TopPanel from "@/components/sections/sidePages/TopPanel"
import SidePageContactUs from "@/components/sections/sidePages/SidePageContactUs"
import { tenantInfo } from "@/models/tenant-content"

export default function Tenants() {

  return (
    <>
      <TopPanel data={tenantInfo} />
      <div className="wrapper flex justify-center items-center">
        <SidePageContactUs />
      </div>
    </>
  )
} 
