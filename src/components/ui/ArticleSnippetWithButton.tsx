import Button from '@/components/ui/CustomButton'

export default function ArticleSnippetWithButton({ title, text, action, buttonTitle }: { title: string, text: string, action: string | (() => void), buttonTitle: string }) {

  const type = typeof action === 'function' ? 'button' : 'link'

  return (
    <section className="mb-16">
      <article className="flex flex-col gap-2 w-[700px]">
        <h2 className="text-4xl underline font-bold">{title}</h2>
        <p className="text-lg">{text}</p>
        <Button
          type={type}
          action={action}
          className="btn flex justify-self-end my-2 w-36 ml-auto"
        >{buttonTitle}</Button>
      </article>
    </section>
  )
}
