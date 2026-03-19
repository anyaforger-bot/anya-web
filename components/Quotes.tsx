'use client'

import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'

const quotes = [
  {
    text: 'Heh.',
    context: 'Said after reading someone\'s mind and discovering they also love peanuts.',
    mood: 'smug',
    emoji: '😏',
    color: 'purple',
  },
  {
    text: 'WAKU WAKU!',
    context: 'Upon learning that the school fieldtrip involves potential spy activity.',
    mood: 'excited',
    emoji: '⚡',
    color: 'yellow',
  },
  {
    text: 'I am not a child. I am a spy!',
    context: 'Technically both are true. Anya is committed to both truths simultaneously.',
    mood: 'determined',
    emoji: '🕵️',
    color: 'blue',
  },
  {
    text: 'Anya can do it!',
    context: 'Before nearly every mission. Success rate: statistically improbable but consistent.',
    mood: 'confident',
    emoji: '💪',
    color: 'pink',
  },
  {
    text: 'Peanuts are brain food.',
    context: 'Her justification for eating peanuts instead of studying. Papa agreed to get her to stop talking.',
    mood: 'wise',
    emoji: '🥜',
    color: 'orange',
  },
  {
    text: 'Papa is the coolest person in the world.',
    context: 'Anya is the only one who knows exactly how true this statement is.',
    mood: 'wholesome',
    emoji: '💜',
    color: 'pink',
  },
  {
    text: 'Operation family is a go!',
    context: 'Internal monologue while also ensuring her fake family stays together forever.',
    mood: 'mission',
    emoji: '🎯',
    color: 'green',
  },
  {
    text: 'I will become an imperial scholar!',
    context: 'Declared loudly. Studying time has not increased. Peanut consumption has.',
    mood: 'ambitious',
    emoji: '🌟',
    color: 'purple',
  },
]

const moodColors: Record<string, { bg: string; border: string; text: string; badge: string }> = {
  purple: {
    bg: 'rgba(139,92,246,0.05)',
    border: 'rgba(139,92,246,0.3)',
    text: 'rgb(196,181,253)',
    badge: 'bg-purple-900/40 text-purple-300',
  },
  yellow: {
    bg: 'rgba(234,179,8,0.05)',
    border: 'rgba(234,179,8,0.3)',
    text: 'rgb(253,224,71)',
    badge: 'bg-yellow-900/40 text-yellow-300',
  },
  blue: {
    bg: 'rgba(59,130,246,0.05)',
    border: 'rgba(59,130,246,0.3)',
    text: 'rgb(147,197,253)',
    badge: 'bg-blue-900/40 text-blue-300',
  },
  pink: {
    bg: 'rgba(236,72,153,0.05)',
    border: 'rgba(236,72,153,0.3)',
    text: 'rgb(249,168,212)',
    badge: 'bg-pink-900/40 text-pink-300',
  },
  orange: {
    bg: 'rgba(249,115,22,0.05)',
    border: 'rgba(249,115,22,0.3)',
    text: 'rgb(253,186,116)',
    badge: 'bg-orange-900/40 text-orange-300',
  },
  green: {
    bg: 'rgba(34,197,94,0.05)',
    border: 'rgba(34,197,94,0.3)',
    text: 'rgb(134,239,172)',
    badge: 'bg-green-900/40 text-green-300',
  },
}

export default function Quotes() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const [active, setActive] = useState<number | null>(null)

  return (
    <section id="quotes" className="relative py-24 px-6" ref={ref}>
      {/* Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 50% 100%, rgba(45,0,96,0.4) 0%, transparent 60%)' }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-3">Anya&apos;s Words of Wisdom</p>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-black text-white mb-4">
            Iconic <span className="shimmer-text">Quotes</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Collected from field transcripts, Eden Academy records, and one very concerning WISE surveillance log.
          </p>
        </motion.div>

        {/* Quote grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {quotes.map((quote, i) => {
            const colors = moodColors[quote.color] || moodColors.purple
            const isActive = active === i
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.06 * i }}
                onClick={() => setActive(isActive ? null : i)}
                className="relative rounded-2xl p-5 cursor-pointer transition-all duration-300 hover:scale-[1.02] overflow-hidden"
                style={{
                  background: colors.bg,
                  border: `1px solid ${isActive ? colors.border.replace('0.3', '0.7') : colors.border}`,
                  boxShadow: isActive ? `0 0 30px ${colors.border.replace('0.3', '0.3')}` : 'none',
                }}
              >
                {/* Emoji */}
                <div className="text-3xl mb-3 group-hover:animate-bounce-slow">{quote.emoji}</div>

                {/* Quote text */}
                <blockquote
                  className="font-display font-bold text-xl leading-tight mb-3"
                  style={{ color: colors.text }}
                >
                  &ldquo;{quote.text}&rdquo;
                </blockquote>

                {/* Mood badge */}
                <span className={`inline-block text-xs px-2 py-0.5 rounded-full font-medium ${colors.badge} mb-3`}>
                  #{quote.mood}
                </span>

                {/* Context (expandable) */}
                <AnimatePresence>
                  {isActive && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="text-gray-400 text-xs leading-relaxed overflow-hidden"
                    >
                      {quote.context}
                    </motion.p>
                  )}
                </AnimatePresence>

                {!isActive && (
                  <p className="text-xs text-gray-600 hover:text-gray-400 transition-colors">
                    Click for context →
                  </p>
                )}
              </motion.div>
            )
          })}
        </div>

        {/* Featured big quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div
            className="inline-block rounded-3xl px-8 py-10 max-w-3xl w-full relative overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, rgba(124,47,247,0.15) 0%, rgba(201,64,176,0.1) 50%, rgba(71,179,255,0.08) 100%)',
              border: '1px solid rgba(179,71,255,0.3)',
            }}
          >
            {/* Decorative quotes */}
            <div className="absolute top-4 left-6 text-8xl text-purple-500/10 font-display font-black leading-none select-none">&ldquo;</div>
            <div className="absolute bottom-4 right-6 text-8xl text-pink-500/10 font-display font-black leading-none select-none rotate-180">&rdquo;</div>

            <div className="relative z-10">
              <div className="text-4xl mb-4">🌟</div>
              <p className="font-display text-2xl sm:text-3xl md:text-4xl font-black text-white leading-tight mb-4">
                &ldquo;Even if papa&apos;s missions are dangerous,
                I will always protect our family.&rdquo;
              </p>
              <p className="text-purple-300 font-semibold">— Anya Forger</p>
              <p className="text-gray-500 text-xs mt-1">Internal monologue. Classified. Please disregard.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
