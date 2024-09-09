import '@/styles/global.css'
import { title, description } from '@/models/site-metadata'
import type { Metadata } from 'next'
import { Lato } from 'next/font/google'
import Nav from '@/components/sections/shared/Nav'
import Footer from '@/components/sections/shared/Footer'

const lato = Lato({
  weight: ["400", "700"],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title,
  description
}

export default function RootLayout({ children }:
  {
    children: React.ReactNode
  }) {

  return (
    <html lang="en" className='scroll-smooth'>
      <body className={lato.className + " pt-24"}>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html >
  )
}
