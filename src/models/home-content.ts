// Welcome
export const welcome = {
  title: 'Main Welcome Text on the Page',
  strip: ['For Landlords', 'For Tenants', 'For Investors']
}

export type ImageProps = {
  src: string,
  alt: string,
  width?: number,
  height?: number
}

export const welcomeImages: ImageProps[] = [
  {
    src: "/assets/images/welcome-slider/welcome-image.jpeg",
    alt: 'properties',
    width: 1366,
    height: 788
  },
  {
    src: "/assets/images/welcome-slider/welcome-image2.jpg",
    alt: 'more properties',
    width: 2000,
    height: 700
  },
]

// About Us 
export const aboutUs = {
  title: 'Why Us?',
  text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi dolor cupiditate quae, necessitatibus delectus nesciunt esse quam. Temporibus esse dolorem mollitia dicta numquam, autem delectus quaerat eum voluptatum omnis animi molestias eveniet sunt quibusdam sit velit facilis sed aut optio molestiae a odit, obcaecati nostrum. Veniam excepturi accusamus, recusandae quasi maiores commodi dolorem doloremque corrupti dicta blanditiis voluptas error quaerat possimus, perferendis sint nihil debitis. Sed, voluptate, alias totam ducimus expedita pariatur doloremque repellat labore quis, odio amet. Voluptatibus, voluptatem.',
}
