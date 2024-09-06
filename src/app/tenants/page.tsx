import TopPanel from "@/components/sections/shared/TopPanel"
import SidePageContactUs from "@/components/sections/shared/SidePageContactUs"
import { main, tenantInfo } from "@/models/tenantContent"
import ArticleSnippetWithButton from "@/components/ui/ArticleSnippetWithButton"

export default function Landlords() {

  return (
    <>
      <TopPanel title={main.title} />
      <div className="wrapper">
        <ArticleSnippetWithButton title={tenantInfo.title} text={tenantInfo.text} buttonTitle="Interested?" action="#side-contact-us" />
        <SidePageContactUs />
      </div>
    </>
  )
} 
