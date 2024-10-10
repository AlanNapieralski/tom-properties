import Image from "next/image"
import Article from "@/components/ui/article"

const LegalTemplate = ({ title }: { title: string }) => {

  const articles = [
    {
      title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, earum.',
      p: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem numquam quidem aut commodi ex dolorem voluptates itaque iure voluptatum ullam. Vero pariatur ullam voluptas quod quae voluptate, molestiae ea, in omnis molestias magnam. Molestias reiciendis molestiae ullam eius porro hic. Minima fugit dolores esse temporibus ipsum debitis officia corrupti maiores.'
    },
    {
      title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, earum.',
      p: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem numquam quidem aut commodi ex dolorem voluptates itaque iure voluptatum ullam. Vero pariatur ullam voluptas quod quae voluptate, molestiae ea, in omnis molestias magnam. Molestias reiciendis molestiae ullam eius porro hic. Minima fugit dolores esse temporibus ipsum debitis officia corrupti maiores.'
    },
    {
      title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, earum.',
      p: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem numquam quidem aut commodi ex dolorem voluptates itaque iure voluptatum ullam. Vero pariatur ullam voluptas quod quae voluptate, molestiae ea, in omnis molestias magnam. Molestias reiciendis molestiae ullam eius porro hic. Minima fugit dolores esse temporibus ipsum debitis officia corrupti maiores.',
    }
  ]

  const width = 1920
  const height = 960

  return (
    <>
      <div className="relative mb-16 h-64 max-h-64 text-center">
        <Image
          src={'/assets/images/legal.jpg'}
          alt={'photo'}
          width={width}
          height={height}
          objectFit="cover"
          className='h-full w-full overflow-hidden'
        />
        <div className="absolute inset-0 h-full bg-black opacity-30 "></div>
        <h1 className="absolute inset-0 flex items-center justify-center text-8xl text-white drop-shadow-lg">{title}</h1>
      </div>
      <div className="wrapper flex flex-col justify-center items-center gap-8">
        {articles.map((article, index) => (
          <Article key={index} {...article} />
        ))}
      </div>
    </>
  )
}

export default LegalTemplate
