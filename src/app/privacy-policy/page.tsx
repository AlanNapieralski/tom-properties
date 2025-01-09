import { title } from "@/models/site-metadata"
import ArticleSection from "@/components/sections/sidePages/ArticleSection"
import { articles } from "@/models/content/privacy-content"

export default function Privacy() {

    return (
        <div className="small-wrapper flex flex-col justify-center gap-4 mt-12 mb-24">
            <h1 className="text-4xl font-bold self-center mb-4">Privacy Policy of {title}</h1>
            {articles.map((article, index) => {
                return <ArticleSection key={index} title={article.title} sections={article.articles}></ArticleSection>
            })}
        </div>
    )
} 
