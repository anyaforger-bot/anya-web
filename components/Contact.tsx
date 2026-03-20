'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useTranslations } from 'next-intl'

const socialCards = [
  {
    key: 'github',
    icon: '🐙',
    color: { bg: 'rgba(139,92,246,0.08)', border: 'rgba(139,92,246,0.35)', glow: 'rgba(139,92,246,0.25)', text: 'rgb(196,181,253)', badge: 'bg-purple-900/40 text-purple-300' },
    href: 'https://github.com/anyaforger-bot',
  },
  {
    key: 'twitter',
    icon: '🐦',
    color: { bg: 'rgba(59,130,246,0.08)', border: 'rgba(59,130,246,0.35)', glow: 'rgba(59,130,246,0.25)', text: 'rgb(147,197,253)', badge: 'bg-blue-900/40 text-blue-300' },
    href: '#',
  },
  {
    key: 'eden',
    icon: '🏫',
    color: { bg: 'rgba(236,72,153,0.08)', border: 'rgba(236,72,153,0.35)', glow: 'rgba(236,72,153,0.25)', text: 'rgb(249,168,212)', badge: 'bg-pink-900/40 text-pink-300' },
    href: '#eden-portal',
  },
]

export default function Contact() {
  const t = useTranslations('contact')
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="contact" className="relative py-24 px-6" ref={ref}>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(45,0,96,0.35) 0%, transparent 65%)' }}
      />

      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-pink-400 text-sm font-semibold uppercase tracking-widest mb-3">{t('sectionLabel')}</p>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-black text-white mb-4">
            {t('titlePrefix')}<span className="shimmer-text">{t('titleHighlight')}</span>{t('titleSuffix')}
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">{t('subtitle')}</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {socialCards.map((card, i) => {
            const isExternal = card.href.startsWith('http')
            return (
              <motion.a
                key={card.key}
                href={card.href}
                target={isExternal ? '_blank' : undefined}
                rel={isExternal ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * i }}
                whileHover={{ scale: 1.04, y: -4 }}
                whileTap={{ scale: 0.97 }}
                className="group relative rounded-2xl p-6 flex flex-col items-center text-center cursor-pointer overflow-hidden transition-all duration-300"
                style={{
                  background: card.color.bg,
                  border: `1px solid ${card.color.border}`,
                }}
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl"
                  style={{ boxShadow: `0 0 40px ${card.color.glow} inset` }}
                />

                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {card.icon}
                </div>

                <h3
                  className="font-display font-black text-xl mb-1"
                  style={{ color: card.color.text }}
                >
                  {t(`${card.key}Title`)}
                </h3>

                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {t(`${card.key}Desc`)}
                </p>

                <span className={`text-xs px-3 py-1 rounded-full font-semibold ${card.color.badge}`}>
                  {t(`${card.key}Tag`)}
                </span>
              </motion.a>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-14 text-center"
        >
          <div
            className="inline-block rounded-2xl px-8 py-6 max-w-2xl w-full"
            style={{
              background: 'linear-gradient(135deg, rgba(124,47,247,0.1) 0%, rgba(201,64,176,0.08) 100%)',
              border: '1px solid rgba(179,71,255,0.25)',
            }}
          >
            <p className="text-3xl mb-3">📡</p>
            <p className="font-display font-black text-xl text-white mb-1">{t('telepathyTitle')}</p>
            <p className="text-gray-400 text-sm">{t('telepathyDesc')}</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
