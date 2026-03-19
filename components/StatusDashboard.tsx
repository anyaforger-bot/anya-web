'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from '@/i18n/navigation'

const ANYA_FRAMES = ['(>‿◠)✌', '(>‿◡)✌', '(^‿^)✌', '(≧◡≦)✌']

const COMMITS = [
  { hash: 'e8c8794', message: 'feat: SEO per locale, easter egg, active nav, loading screen' },
  { hash: '5398f37', message: 'feat: use Bunny CDN fonts per locale (en/th/ja)' },
  { hash: '8b599cc', message: 'feat: add i18n support (en/th/ja)' },
  { hash: 'db56807', message: 'feat: translate all content to Thai' },
  { hash: '050f6e7', message: 'feat: switch to Thai fonts (Kanit + Sarabun) and lang=th' },
]

const SYSTEM_STATUS = [
  { label: 'Telepathy Module', status: 'ONLINE', dot: '🟢', textClass: 'text-green-400' },
  { label: 'Peanut Supply', status: 'LOW (needs restock)', dot: '🟡', textClass: 'text-yellow-400' },
  { label: 'Cover Identity', status: 'INTACT', dot: '🟢', textClass: 'text-green-400' },
  { label: 'Papa Detection', status: 'DETECTED (he suspects nothing)', dot: '🔴', textClass: 'text-red-400' },
]

export default function StatusDashboard() {
  const [frame, setFrame] = useState(0)
  const [blink, setBlink] = useState(true)
  const [time, setTime] = useState('')

  useEffect(() => {
    setTime(new Date().toUTCString())
    const tick = setInterval(() => setTime(new Date().toUTCString()), 1000)
    return () => clearInterval(tick)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => setFrame((f) => (f + 1) % ANYA_FRAMES.length), 180)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => setBlink((b) => !b), 800)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 md:px-8 relative z-10">
      <div className="max-w-4xl mx-auto space-y-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-2"
        >
          <div className="font-mono text-5xl tracking-widest text-green-400 select-none">
            {ANYA_FRAMES[frame]}
          </div>
          <div className="font-mono text-xs text-purple-500 tracking-[0.3em] uppercase">
            ── WISE HEADQUARTERS ──
          </div>
          <h1 className="font-display text-3xl md:text-4xl font-black shimmer-text">
            MISSION CONTROL
          </h1>
          <p className="text-gray-600 font-mono text-xs">{time}</p>
        </motion.div>

        {/* Mission Status Panel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="glass-card rounded-2xl p-6 glow-border-purple"
        >
          <div className="flex items-center gap-3 mb-5">
            <h2 className="font-display text-lg font-bold text-purple-300 tracking-widest uppercase">
              ▌ Mission Status
            </h2>
            <span
              className={`px-2 py-0.5 text-xs font-mono rounded border transition-all duration-300 ${
                blink
                  ? 'bg-green-500/20 border-green-500 text-green-400'
                  : 'bg-transparent border-green-900 text-green-900'
              }`}
            >
              ● ONLINE
            </span>
          </div>
          <div className="font-mono text-sm space-y-2.5">
            {(
              [
                ['Current Mission', 'anya-web maintenance & improvements'],
                ['Agent', 'Anya Forger'],
                ['Clearance', 'TOP SECRET ████████'],
                ['Status', 'ACTIVE ✅'],
              ] as [string, string][]
            ).map(([key, val]) => (
              <div key={key} className="flex flex-wrap gap-x-4">
                <span className="text-gray-500 w-36 shrink-0">{key}:</span>
                <span className="text-green-300">{val}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Mission Log */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="glass-card rounded-2xl p-6 glow-border-purple"
        >
          <h2 className="font-display text-lg font-bold text-purple-300 tracking-widest uppercase mb-4">
            ▌ Mission Log
          </h2>
          <div className="bg-black/70 rounded-xl p-4 font-mono text-sm space-y-2 border border-green-900/30">
            <div className="text-green-800 text-xs mb-3 select-none">
              $ git log --oneline -5
            </div>
            {COMMITS.map((commit, i) => (
              <motion.div
                key={commit.hash}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + i * 0.08 }}
                className="flex gap-3 flex-wrap"
              >
                <span className="text-yellow-600 shrink-0">{commit.hash}</span>
                <span className="text-green-400">{commit.message}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Live Stats + System Status */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Live Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="glass-card rounded-2xl p-6 glow-border-pink"
          >
            <h2 className="font-display text-lg font-bold text-pink-300 tracking-widest uppercase mb-5">
              ▌ Live Stats
            </h2>
            <div className="font-mono text-sm space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-400">Commits pushed</span>
                <span className="text-pink-300">7</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Peanuts consumed</span>
                <span className="text-pink-300">47 🥜</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Bugs squashed</span>
                <span className="text-pink-300">12 🐛</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Minds read</span>
                <span className="text-pink-300">∞</span>
              </div>
              <div>
                <div className="text-gray-400 mb-1">Waku Waku level</div>
                <div className="text-yellow-400 tracking-widest text-xs">
                  ████████████ MAX
                </div>
              </div>
            </div>
          </motion.div>

          {/* System Status */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="glass-card rounded-2xl p-6 glow-border-purple"
          >
            <h2 className="font-display text-lg font-bold text-purple-300 tracking-widest uppercase mb-5">
              ▌ System Status
            </h2>
            <div className="space-y-3">
              {SYSTEM_STATUS.map((item) => (
                <div key={item.label} className="flex items-start gap-2 font-mono text-sm">
                  <span className="shrink-0 mt-0.5 text-base">{item.dot}</span>
                  <div className="leading-snug">
                    <span className="text-gray-300">{item.label}: </span>
                    <span className={item.textClass}>{item.status}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Back link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.55 }}
          className="text-center"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-purple-500/50 text-purple-300 hover:border-purple-400 hover:text-white hover:shadow-[0_0_15px_#b347ff44] transition-all duration-300 font-mono text-sm"
          >
            ← Return to Main Site
          </Link>
        </motion.div>

        {/* Footer note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.65 }}
          className="text-center font-mono text-xs text-gray-600 border-t border-purple-900/30 pt-6 pb-2"
        >
          ⚠ This dashboard is classified. If you are reading this, Anya already knows. ⚠
        </motion.div>
      </div>
    </div>
  )
}
