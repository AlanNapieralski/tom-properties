type ArticleSectionProps = {
  title: string | null,
  sections: string[]
}

const ArticleSection = (props: ArticleSectionProps) => {

  return (
    <>
      <h2 className="text-2xl font-bold">{props.title}</h2>
      {props.sections.map((section, index) => <p key={index}>{section}</p>)}
    </>
  )
}

export default ArticleSection
