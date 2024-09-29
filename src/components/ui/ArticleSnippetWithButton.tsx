export default function ArticleSnippetWithButton({ title, text, transitionClasses }: { title: string, text: string, transitionClasses: string }) {

  return (
    <article className={`flex flex-col gap-4 xl:min-w-[460px] max-w-[700px] my-8 ${transitionClasses}`}>
      <h1 className="text-4xl sm:text-5xl font-bold text-secondary text-center xl:text-start">{title}</h1>
      <p className="sm:text-lg text-secondary text-center xl:text-start">{text}</p>
    </article>
  )
}
