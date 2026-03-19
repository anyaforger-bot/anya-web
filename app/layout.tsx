import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Anya Forger — Secret Esper',
  description: 'Secret Esper. Top Student. Absolute Chaos.',
  openGraph: {
    title: 'Anya Forger — Secret Esper',
    description: 'WAKU WAKU! Welcome to the official Anya Forger experience.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="bg-[#0a0010] text-white antialiased">{children}</body>
    </html>
  )
}
