'use client'

import { useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion'

const taglines = [
  'Secret Esper.',
  'Top Student.',
  'Absolute Chaos.',
]

const floatingEmojis = ['⭐', '💜', '✨', '🌸', '💫', '🔮', '🌙']

export default function Hero() {
  const [currentTagline, setCurrentTagline] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [particles, setParticles] = useState<{ id: number; emoji: string; x: number; duration: number; size: number; delay: number }[]>([])
  const particleId = useRef(0)

  // Typewriter effect
  useEffect(() => {
    const target = taglines[currentTagline]
    let timeout: ReturnType<typeof setTimeout>

    if (!isDeleting && displayText.length < target.length) {
      timeout = setTimeout(() => setDisplayText(target.slice(0, displayText.length + 1)), 80)
    } else if (!isDeleting && displayText.length === target.length) {
      timeout = setTimeout(() => setIsDeleting(true), 1800)
    } else if (isDeleting && displayText.length > 0) {
      timeout = setTimeout(() => setDisplayText(displayText.slice(0, -1)), 40)
    } else if (isDeleting && displayText.length === 0) {
      setIsDeleting(false)
      setCurrentTagline((prev) => (prev + 1) % taglines.length)
    }

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, currentTagline])

  // Spawn floating particles every 2s
  useEffect(() => {
    const interval = setInterval(() => {
      const id = particleId.current++
      setParticles((prev) => [
        ...prev.slice(-12),
        {
          id,
          emoji: floatingEmojis[Math.floor(Math.random() * floatingEmojis.length)],
          x: Math.random() * 100,
          duration: 4 + Math.random() * 4,
          size: 14 + Math.random() * 20,
          delay: 0,
        },
      ])
    }, 1200)
    return () => clearInterval(interval)
  }, [])

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-6"
      style={{
        background: 'radial-gradient(ellipse at 50% 30%, #2d006088 0%, #0a0010 65%)',
      }}
    >
      {/* Floating emoji particles */}
      {particles.map((p) => (
        <span
          key={p.id}
          className="pointer-events-none fixed"
          style={{
            left: `${p.x}%`,
            bottom: '-40px',
            fontSize: `${p.size}px`,
            animation: `emojiFloat ${p.duration}s ease-in forwards`,
            '--duration': `${p.duration}s`,
            '--size': `${p.size}px`,
            zIndex: 2,
          } as React.CSSProperties}
        >
          {p.emoji}
        </span>
      ))}

      {/* Decorative rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <div className="w-[600px] h-[600px] rounded-full border border-purple-500/10 animate-spin-slow" />
        <div className="absolute w-[400px] h-[400px] rounded-full border border-pink-500/10" style={{ animation: 'spin 12s linear infinite reverse' }} />
      </div>

      {/* Glowing orb */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(179,71,255,0.15) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card glow-border-purple text-sm text-purple-300 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
          <span>Eden Academy • Class 1 • Codename: TWILIGHT&apos;s Daughter</span>
        </motion.div>

        {/* Main name */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black mb-6 leading-none"
        >
          <span className="shimmer-text">Anya</span>
          <br />
          <span className="text-white">Forger</span>
        </motion.h1>

        {/* Typewriter tagline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="h-14 flex items-center justify-center mb-8"
        >
          <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-neon-pink">
            {displayText}
            <span className="inline-block w-0.5 h-8 bg-pink-400 ml-1 animate-pulse" />
          </p>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
          className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Age 6. Student at the prestigious Eden Academy. Loves peanuts.{' '}
          <span className="text-purple-400">Secretly knows your every thought.</span>
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#about"
            className="group relative px-8 py-3.5 rounded-full font-semibold text-white overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_#b347ff66]"
            style={{ background: 'linear-gradient(135deg, #7c2ff7, #c940b0)' }}
          >
            <span className="relative z-10">Discover Anya</span>
            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>
          <a
            href="#quotes"
            className="px-8 py-3.5 rounded-full font-semibold text-purple-300 border border-purple-500/50 hover:border-purple-400 hover:text-white hover:bg-purple-900/20 transition-all duration-300"
          >
            WAKU WAKU! ✨
          </a>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-8 text-center"
        >
          {[
            { label: 'Minds Read', value: '∞' },
            { label: 'Peanuts Consumed', value: '9,999+' },
            { label: 'Imperial Scholar', value: 'Almost' },
            { label: 'Chaos Level', value: 'MAX' },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col items-center">
              <span className="text-2xl font-black shimmer-text">{stat.value}</span>
              <span className="text-xs text-gray-500 mt-1 uppercase tracking-widest">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-600 text-xs"
      >
        <span className="uppercase tracking-widest">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-purple-500/50 to-transparent animate-bounce-slow" />
      </motion.div>
    </section>
  )
}
