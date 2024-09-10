import TopPanel from "@/components/sections/shared/TopPanel"
import SidePageContactUs from "@/components/sections/shared/SidePageContactUs"
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
