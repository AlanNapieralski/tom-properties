import type { Metadata } from 'next'
import './ui/global.css'
import { Lato } from 'next/font/google'

const lato = Lato({
  weight: ["400", "700"],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "Tom Properties",
  description: "Services for landlords, tenants and investors"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={lato.className}>{children}</body>
    </html>
  )
}
