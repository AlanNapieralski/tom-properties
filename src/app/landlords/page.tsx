import LandlordInformation from "@/components/sections/Landlords/LandlordInformation"
import TopPanel from "@/components/sections/shared/TopPanel"

export default function Landlords() {

  return (
    <>
      <TopPanel />
      <div className="wrapper">
        <LandlordInformation />
      </div>
    </>
  )
} 
