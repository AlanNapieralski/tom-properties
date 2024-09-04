import Image from "next/image";

export default function AboutUs() {

  return (
    <section className="flex mb-16 gap-8">
      <div className="flex-1 h-96">
        <Image
          src='/assets/images/aboutus.jpg'
          alt="picture of us"
          width={612}
          height={408}
          className="object-cover w-full h-full rounded shadow-2xl"
        />
      </div>
      <div className="flex-1 flex flex-col">
        <p className="text-xl font-semibold text-accent">About us</p>
        <h2 className="text-4xl font-semibold pb-2 uppercase">who we are</h2>
        <p className="pb-10 break-words">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi dolor cupiditate quae, necessitatibus delectus nesciunt esse quam. Temporibus esse dolorem mollitia dicta numquam, autem delectus quaerat eum voluptatum omnis animi molestias eveniet sunt quibusdam sit velit facilis sed aut optio molestiae a odit, obcaecati nostrum. Veniam excepturi accusamus, recusandae quasi maiores commodi dolorem doloremque corrupti dicta blanditiis voluptas error quaerat possimus, perferendis sint nihil debitis. Sed, voluptate, alias totam ducimus expedita pariatur doloremque repellat labore quis, odio amet. Voluptatibus, voluptatem.</p>
        <button className="btn w-1/3 bg-primary hover:bg-primary-content text-white text-lg font-semibold shadow-lg">Contact Us</button>
      </div>
    </section>
  )
}
