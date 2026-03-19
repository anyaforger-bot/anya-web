'use client'

import { useEffect, useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLocale } from 'next-intl'

const KONAMI = [
  'ArrowUp', 'ArrowUp',
  'ArrowDown', 'ArrowDown',
  'ArrowLeft', 'ArrowRight',
  'ArrowLeft', 'ArrowRight',
  'b', 'a',
]

const messages: Record<string, string> = {
  en: "🔮 Anya read your mind! You were thinking about peanuts, weren't you? HEH.",
  th: "🔮 อาเนียอ่านใจได้! คุณกำลังคิดถึงถั่วลิสงอยู่ใช่ไหม? เฮ้",
  ja: "🔮 アーニャはあなたの心を読んだ！ピーナッツのことを考えていたでしょ？ヘッ。",
}

export default function EasterEgg() {
  const locale = useLocale()
  const [show, setShow] = useState(false)
  const [keys, setKeys] = useState<string[]>([])

  const onKey = useCallback((e: KeyboardEvent) => {
    setKeys((prev) => {
      const next = [...prev, e.key].slice(-KONAMI.length)
      if (next.join(',') === KONAMI.join(',')) {
        setShow(true)
      }
      return next
    })
  }, [])

  useEffect(() => {
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onKey])

  const message = messages[locale] ?? messages.en

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black/70 backdrop-blur-sm"
          onClick={() => setShow(false)}
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0, y: 40 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: -20 }}
            transition={{ type: 'spring', damping: 14, stiffness: 200 }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-md mx-6 px-8 py-7 rounded-2xl text-center"
            style={{
              background: 'linear-gradient(135deg, #1a0030 0%, #2d0050 50%, #1a0030 100%)',
              boxShadow:
                '0 0 0 1px rgba(179,71,255,0.6), 0 0 30px rgba(179,71,255,0.4), 0 0 80px rgba(179,71,255,0.2), inset 0 0 40px rgba(179,71,255,0.05)',
            }}
          >
            {/* Neon border glow pulse */}
            <div
              className="absolute inset-0 rounded-2xl pointer-events-none animate-pulse"
              style={{ boxShadow: '0 0 20px rgba(179,71,255,0.5), 0 0 60px rgba(236,72,153,0.2)' }}
            />

            <p className="text-4xl mb-4">⭐</p>
            <p
              className="font-display text-base md:text-lg leading-relaxed"
              style={{
                color: '#e0b8ff',
                textShadow: '0 0 10px rgba(179,71,255,0.8), 0 0 20px rgba(179,71,255,0.4)',
              }}
            >
              {message}
            </p>
            <button
              onClick={() => setShow(false)}
              className="mt-6 px-5 py-1.5 text-sm rounded-full border border-purple-500/60 text-purple-300 hover:text-white hover:border-purple-400 transition-all duration-200"
              style={{ textShadow: '0 0 8px rgba(179,71,255,0.6)' }}
            >
              HEH
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
