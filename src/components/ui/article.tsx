const Article = (props: { title: string, p: string }) => {

  return (
    <section className="flex flex-col gap-2">
      <h2 className="flex flex-col text-2xl font-bold gap-2">{props.title}</h2>
      <p>{props.p}</p>
    </section>
  )
}


export default Article
