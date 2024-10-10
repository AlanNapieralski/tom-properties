import '@/styles/global.css'
import { title, description } from '@/models/site-metadata'
import type { Metadata } from 'next'
import { Lato } from 'next/font/google'
import Nav from '@/components/sections/shared/Nav'
import Footer from '@/components/sections/shared/Footer'
import { Toaster } from '@/components/ui/toaster'
import { SpeedInsights } from "@vercel/speed-insights/next"

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
      <body className={`${lato.className} sm:!pt-24 tracking-wider flex flex-col min-h-screen`}>
        <Nav />
        <main>{children}</main>
        <Footer />
        <Toaster />
        <SpeedInsights />
      </body>
    </html>
  )
}
