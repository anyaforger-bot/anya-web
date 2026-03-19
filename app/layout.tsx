import type { Metadata } from 'next'
import { Kanit, Sarabun } from 'next/font/google'
import './globals.css'

const kanit = Kanit({
  subsets: ['thai', 'latin'],
  weight: ['400', '600', '700', '800', '900'],
  variable: '--font-display',
  display: 'swap',
})

const sarabun = Sarabun({
  subsets: ['thai', 'latin'],
  weight: ['300', '400', '500', '600'],
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
    <html lang="th" className={`${kanit.variable} ${sarabun.variable}`}>
      <body className="bg-[#0a0010] text-white antialiased">{children}</body>
    </html>
  )
}
