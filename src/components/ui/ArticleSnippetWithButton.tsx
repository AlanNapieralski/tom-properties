export default function ArticleSnippetWithButton({ title, text, transitionClasses }: { title: string, text: string, transitionClasses: string }) {

  return (
    <article className={`flex flex-col gap-2 w-[700px] ${transitionClasses}`}>
      <h1 className="text-5xl font-bold text-secondary mb-4">{title}</h1>
      <p className="text-lg text-secondary">{text}</p>
    </article>
  )
}
