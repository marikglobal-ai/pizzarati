import type { Metadata } from 'next'
import { Inter, Cormorant_Garamond } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter'
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-title'
})

export const metadata: Metadata = {
  title: 'Pizzarati',
  description: 'Premium Italian Pizza'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  )
}
