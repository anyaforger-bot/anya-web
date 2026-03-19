'use client'

import { motion } from 'framer-motion'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Quotes', href: '#quotes' },
]

export default function Footer() {
  return (
    <footer className="relative py-12 px-6 overflow-hidden">
      {/* Top border line */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(179,71,255,0.5), rgba(255,71,179,0.5), transparent)' }}
      />

      {/* Subtle background glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-32 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(179,71,255,0.08) 0%, transparent 70%)', filter: 'blur(20px)' }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo + tagline */}
          <div className="text-center md:text-left">
            <p className="font-display text-xl font-black shimmer-text mb-1">Anya Forger</p>
            <p className="text-gray-500 text-xs">Secret Esper · Eden Academy · WISE Adjacent</p>
          </div>

          {/* Nav links */}
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

          {/* Badges */}
          <div className="flex items-center gap-3">
            {['Esper', 'Spy Kid', 'Peanut Fan'].map((badge) => (
              <span
                key={badge}
                className="text-xs px-3 py-1 rounded-full bg-purple-900/30 text-purple-400 border border-purple-800/40"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="my-6 border-t border-white/5" />

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-600">
          <p>
            &copy; {new Date().getFullYear()} Anya Forger. All thoughts reserved (and already read).
          </p>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse" />
            <span>Telepathy online — she knows you&apos;re here</span>
          </div>
          <p className="text-gray-700">
            Original characters © Tatsuya Endo / Shueisha
          </p>
        </div>
      </div>
    </footer>
  )
}
