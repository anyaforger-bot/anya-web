import type { Metadata } from 'next'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages, setRequestLocale } from 'next-intl/server'
import { routing } from '@/i18n/routing'

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

const seoMeta: Record<string, { title: string; description: string }> = {
  en: {
    title: 'Anya Forger — Secret Esper',
    description: 'Secret Esper. Top Student. Absolute Chaos.',
  },
  th: {
    title: 'อาเนีย ฟอร์เจอร์ — เอสเปอร์ลับ',
    description: 'เอสเปอร์ลับ. นักเรียนดีเด่น. ต้นเหตุความวุ่นวาย.',
  },
  ja: {
    title: 'アーニャ・フォージャー — 秘密のエスパー',
    description: '秘密のエスパー。優等生。絶対的な混乱。',
  },
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const meta = seoMeta[locale] ?? seoMeta.en
  return {
    title: meta.title,
    description: meta.description,
  }
}

// Font config per locale from Bunny CDN
const fontLinks: Record<string, { href: string; vars: string }> = {
  th: {
    href: 'https://fonts.bunny.net/css?family=kanit:400,600,700,800,900|sarabun:300,400,500,600&display=swap',
    vars: "--font-display: 'Kanit', sans-serif; --font-body: 'Sarabun', sans-serif;",
  },
  ja: {
    href: 'https://fonts.bunny.net/css?family=zen-kaku-gothic-new:400,700,900|noto-sans-jp:300,400,500&display=swap',
    vars: "--font-display: 'Zen Kaku Gothic New', sans-serif; --font-body: 'Noto Sans JP', sans-serif;",
  },
  en: {
    href: 'https://fonts.bunny.net/css?family=outfit:400,600,700,800,900|inter:300,400,500,600&display=swap',
    vars: "--font-display: 'Outfit', sans-serif; --font-body: 'Inter', sans-serif;",
  },
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  setRequestLocale(locale)

  const messages = await getMessages()
  const font = fontLinks[locale] ?? fontLinks.en

  return (
    <>
      <link rel="preconnect" href="https://fonts.bunny.net" />
      <link rel="stylesheet" href={font.href} />
      <style>{`:root { ${font.vars} }`}</style>
      <script
        dangerouslySetInnerHTML={{ __html: `document.documentElement.lang='${locale}'` }}
      />
      <NextIntlClientProvider messages={messages}>
        {children}
      </NextIntlClientProvider>
    </>
  )
}
