'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslations } from 'next-intl'
import LanguageSwitcher from './LanguageSwitcher'

const SECTIONS = ['hero', 'about', 'skills', 'quotes']

export default function Navbar() {
  const t = useTranslations('navbar')
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState<string>('')
  const observerRef = useRef<IntersectionObserver | null>(null)

  const navLinks = [
    { href: '#about', label: t('about'), id: 'about' },
    { href: '#skills', label: t('skills'), id: 'skills' },
    { href: '#quotes', label: t('quotes'), id: 'quotes' },
  ]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sectionEls = SECTIONS.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[]

    observerRef.current = new IntersectionObserver(
      (entries) => {
        // Pick the entry with largest intersection ratio that is intersecting
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        if (visible.length > 0) {
          setActiveSection(visible[0].target.id)
        }
      },
      { threshold: [0.2, 0.5], rootMargin: '-10% 0px -10% 0px' },
    )

    sectionEls.forEach((el) => observerRef.current!.observe(el))
    return () => observerRef.current?.disconnect()
  }, [])

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#0a0010]/80 backdrop-blur-md border-b border-purple-900/40' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="font-display text-xl font-bold shimmer-text">
          {t('brand')}
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id
            return (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm transition-colors duration-200 relative group ${
                  isActive ? 'text-purple-400' : 'text-gray-300 hover:text-neon-purple'
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 h-px bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300 ${
                    isActive ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </a>
            )
          })}
          <a
            href="#quotes"
            className="px-4 py-1.5 text-sm rounded-full border border-purple-500/50 text-purple-300 hover:border-purple-400 hover:text-white hover:shadow-[0_0_15px_#b347ff44] transition-all duration-300"
          >
            {t('wakuWaku')}
          </a>
          <LanguageSwitcher />
        </div>

        {/* Mobile right side */}
        <div className="flex md:hidden items-center gap-3">
          <LanguageSwitcher />
          <button
            className="text-gray-300 hover:text-white"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 flex flex-col gap-1.5">
              <span className={`h-0.5 bg-current transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`h-0.5 bg-current transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
              <span className={`h-0.5 bg-current transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0a0010]/95 backdrop-blur-md border-b border-purple-900/40"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    className={`transition-colors py-1 ${
                      isActive ? 'text-purple-400 underline underline-offset-4' : 'text-gray-300 hover:text-purple-400'
                    }`}
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                )
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
