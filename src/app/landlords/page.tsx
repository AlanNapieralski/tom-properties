import TopPanel from "@/components/sections/shared/TopPanel"
import SidePageContactUs from "@/components/sections/shared/SidePageContactUs"
import { main, landlordInfo } from "@/models/landlord-content"
import ArticleSnippetWithButton from "@/components/ui/ArticleSnippetWithButton"

export default function Landlords() {

  return (
    <>
      <TopPanel title={main.title} />
      <div className="wrapper">
        <ArticleSnippetWithButton title={landlordInfo.title} text={landlordInfo.text} buttonTitle="Interested?" action="#side-contact-us" />
        <SidePageContactUs />
      </div>
    </>
  )
} 
