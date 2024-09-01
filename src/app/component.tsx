type ComponentType<T> = {
  [key: string]: T
}

export default function Component({ num }: ComponentType<number>) {
  const value = num ** 111

  return <h1>The number requested is {value}</h1>
}
