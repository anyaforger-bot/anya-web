'use client'

import { useState } from 'react'
import { useLocale } from 'next-intl'
import { useRouter, usePathname } from '@/i18n/navigation'
import { AnimatePresence, motion } from 'framer-motion'

const locales = [
  { code: 'en', flag: '🇬🇧', name: 'English' },
  { code: 'th', flag: '🇹🇭', name: 'ภาษาไทย' },
  { code: 'ja', flag: '🇯🇵', name: '日本語' },
]

export default function LanguageSwitcher() {
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  const current = locales.find((l) => l.code === locale) ?? locales[1]
  const others = locales.filter((l) => l.code !== locale)

  const switchLocale = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale })
    setOpen(false)
  }

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-full glass-card border border-purple-500/30 hover:border-purple-400/60 text-gray-300 hover:text-white transition-all duration-200 text-sm"
        aria-label="Switch language"
      >
        <span>{current.flag}</span>
        <span className="hidden sm:inline text-xs">{current.name}</span>
        <svg
          className={`w-3 h-3 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <AnimatePresence>
        {open && (
          <>
            <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -6 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -6 }}
              transition={{ duration: 0.15 }}
              className="absolute right-0 top-full mt-2 z-50 rounded-xl overflow-hidden border border-purple-500/30"
              style={{
                background: 'rgba(10,0,16,0.97)',
                backdropFilter: 'blur(16px)',
                minWidth: '150px',
              }}
            >
              {others.map((loc) => (
                <button
                  key={loc.code}
                  onClick={() => switchLocale(loc.code)}
                  className="w-full flex items-center gap-2.5 px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-purple-900/30 transition-colors duration-150"
                >
                  <span>{loc.flag}</span>
                  <span>{loc.name}</span>
                </button>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}
