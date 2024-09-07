import '@/styles/global.css'
import { title, description } from '@/models/metadata'
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

export default function RootLayout({ children, navPosition = "sticky" }:
  {
    children: React.ReactNode
    navPosition: 'sticky' | 'fixed'
  }) {
  return (
    <html lang="en">
      <body className={lato.className}>
        <Nav className={navPosition} />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
