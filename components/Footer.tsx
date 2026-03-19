'use client'

import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'

export default function Footer() {
  const t = useTranslations('footer')

  const links = [
    { label: t('about'), href: '#about' },
    { label: t('skills'), href: '#skills' },
    { label: t('quotes'), href: '#quotes' },
  ]

  const badges = [t('badge0'), t('badge1'), t('badge2')]

  return (
    <footer className="relative py-12 px-6 overflow-hidden">
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(179,71,255,0.5), rgba(255,71,179,0.5), transparent)' }}
      />

      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-32 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(179,71,255,0.08) 0%, transparent 70%)', filter: 'blur(20px)' }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="font-display text-xl font-black shimmer-text mb-1">{t('brand')}</p>
            <p className="text-gray-500 text-xs">{t('tagline')}</p>
          </div>

          <nav className="flex items-center gap-6">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-gray-500 hover:text-purple-400 transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            {badges.map((badge) => (
              <span
                key={badge}
                className="text-xs px-3 py-1 rounded-full bg-purple-900/30 text-purple-400 border border-purple-800/40"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>

        <div className="my-6 border-t border-white/5" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-600">
          <p>
            &copy; {new Date().getFullYear()} {t('brand')} — {t('copyright')}
          </p>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse" />
            <span>{t('telepathy')}</span>
          </div>
          <p className="text-gray-700">
            {t('attribution')}
          </p>
        </div>
      </div>
    </footer>
  )
}
