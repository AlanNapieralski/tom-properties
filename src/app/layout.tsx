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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={lato.className}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  )
}
