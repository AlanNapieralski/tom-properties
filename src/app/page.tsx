import Component from "./component"

export default function Home() {
  const number = 5

  return (
    <>
      <h1>This is the index page</h1>
      <Component num={number} />
    </>
  )
}

