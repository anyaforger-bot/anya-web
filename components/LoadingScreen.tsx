'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function LoadingScreen() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return
    const seen = sessionStorage.getItem('anya-loaded')
    if (!seen) {
      setVisible(true)
      sessionStorage.setItem('anya-loaded', '1')
      const t = setTimeout(() => setVisible(false), 1500)
      return () => clearTimeout(t)
    }
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="fixed inset-0 z-[300] flex flex-col items-center justify-center bg-[#0a0010]"
        >
          {/* Spinning star */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
            className="text-5xl mb-6 select-none"
            style={{ filter: 'drop-shadow(0 0 12px rgba(179,71,255,0.9))' }}
          >
            ⭐
          </motion.div>

          {/* WAKU WAKU shimmer text */}
          <p
            className="font-display text-2xl font-bold tracking-widest uppercase"
            style={{
              background: 'linear-gradient(90deg, #b347ff 0%, #ff79c6 40%, #b347ff 60%, #7c3aed 100%)',
              backgroundSize: '200% auto',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              animation: 'shimmer 1.5s linear infinite',
              textShadow: 'none',
            }}
          >
            WAKU WAKU...
          </p>

          <style>{`
            @keyframes shimmer {
              0% { background-position: 200% center; }
              100% { background-position: -200% center; }
            }
          `}</style>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
