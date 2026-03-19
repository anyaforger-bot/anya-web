'use client'

import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'

const quotes = [
  {
    text: 'เฮ้',
    context: 'พูดหลังจากอ่านใจใครบางคนแล้วพบว่าเขาก็ชอบถั่วลิสงเหมือนกัน',
    mood: 'ยิ้มเยาะ',
    emoji: '😏',
    color: 'purple',
  },
  {
    text: 'วากูวากู!',
    context: 'เมื่อรู้ว่าทริปทัศนศึกษาของโรงเรียนอาจเกี่ยวข้องกับงานสอดแนม',
    mood: 'ตื่นเต้น',
    emoji: '⚡',
    color: 'yellow',
  },
  {
    text: 'อาเนียไม่ใช่เด็ก อาเนียคือสายลับ!',
    context: 'จริงทั้งสองอย่าง อาเนียยึดมั่นในความจริงทั้งสองพร้อมกัน',
    mood: 'มุ่งมั่น',
    emoji: '🕵️',
    color: 'blue',
  },
  {
    text: 'อาเนียทำได้!',
    context: 'ก่อนแทบทุกภารกิจ อัตราความสำเร็จ: ไม่น่าจะเป็นไปได้ทางสถิติ แต่สม่ำเสมอ',
    mood: 'มั่นใจ',
    emoji: '💪',
    color: 'pink',
  },
  {
    text: 'ถั่วลิสงคืออาหารสมอง',
    context: 'เหตุผลที่ใช้กินถั่วลิสงแทนการเรียน พ่อเห็นด้วยเพื่อให้เธอหยุดพูด',
    mood: 'ฉลาด',
    emoji: '🥜',
    color: 'orange',
  },
  {
    text: 'พ่อคือคนเท่ที่สุดในโลก',
    context: 'อาเนียเป็นคนเดียวที่รู้ว่าประโยคนี้จริงแค่ไหน',
    mood: 'น่ารัก',
    emoji: '💜',
    color: 'pink',
  },
  {
    text: 'ปฏิบัติการครอบครัว เริ่ม!',
    context: 'indirectly มั่นใจว่าครอบครัวปลอมจะอยู่ด้วยกันตลอดไป',
    mood: 'ภารกิจ',
    emoji: '🎯',
    color: 'green',
  },
  {
    text: 'อาเนียจะเป็นนักเรียนจักรพรรดิ!',
    context: 'ประกาศดังๆ เวลาเรียนไม่ได้เพิ่มขึ้น แต่การกินถั่วลิสงเพิ่มขึ้นมาก',
    mood: 'ทะเยอทะยาน',
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
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 50% 100%, rgba(45,0,96,0.4) 0%, transparent 60%)' }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-3">คำพูดอมตะของอาเนีย</p>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-black text-white mb-4">
            คำคม<span className="shimmer-text">สุดอมตะ</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            รวบรวมจากบันทึกภาคสนาม บันทึก Eden Academy และบันทึกการเฝ้าระวังของ WISE ที่น่าเป็นห่วงมาก
          </p>
        </motion.div>

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
                <div className="text-3xl mb-3">{quote.emoji}</div>

                <blockquote
                  className="font-display font-bold text-xl leading-tight mb-3"
                  style={{ color: colors.text }}
                >
                  &ldquo;{quote.text}&rdquo;
                </blockquote>

                <span className={`inline-block text-xs px-2 py-0.5 rounded-full font-medium ${colors.badge} mb-3`}>
                  #{quote.mood}
                </span>

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
                    กดเพื่อดูบริบท →
                  </p>
                )}
              </motion.div>
            )
          })}
        </div>

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
            <div className="absolute top-4 left-6 text-8xl text-purple-500/10 font-display font-black leading-none select-none">&ldquo;</div>
            <div className="absolute bottom-4 right-6 text-8xl text-pink-500/10 font-display font-black leading-none select-none rotate-180">&rdquo;</div>

            <div className="relative z-10">
              <div className="text-4xl mb-4">🌟</div>
              <p className="font-display text-2xl sm:text-3xl md:text-4xl font-black text-white leading-tight mb-4">
                &ldquo;ถึงภารกิจของพ่อจะอันตรายแค่ไหน อาเนียก็จะปกป้องครอบครัวของเราเสมอ&rdquo;
              </p>
              <p className="text-purple-300 font-semibold">— อาเนีย ฟอร์เจอร์</p>
              <p className="text-gray-500 text-xs mt-1">ความคิดภายใน ลับสุดยอด โปรดเพิกเฉย</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
