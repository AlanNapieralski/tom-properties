import TopPanel from "@/components/sections/shared/TopPanel"
import SidePageContactUs from "@/components/sections/shared/SidePageContactUs"
import { main, investorsInfo } from "@/models/investors-content"
import ArticleSnippetWithButton from "@/components/ui/ArticleSnippetWithButton"

export default function Landlords() {

  return (
    <>
      <TopPanel title={main.title} />
      <div className="wrapper">
        <ArticleSnippetWithButton title={investorsInfo.title} text={investorsInfo.text} buttonTitle="Interested?" action="#side-contact-us" />
        <SidePageContactUs />
      </div>
    </>
  )
} 
