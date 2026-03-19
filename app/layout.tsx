import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Anya Forger — Secret Esper',
  description: 'Secret Esper. Top Student. Absolute Chaos.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html suppressHydrationWarning>
      <body className="bg-[#0a0010] text-white antialiased">{children}</body>
    </html>
  )
}
