'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const stats = [
  { label: 'อ่านใจ', value: 99, color: 'from-purple-500 to-violet-400', icon: '🔮' },
  { label: 'กินถั่วลิสง', value: 100, color: 'from-yellow-500 to-amber-400', icon: '🥜' },
  { label: 'ตั้งใจเรียน', value: 12, color: 'from-pink-500 to-rose-400', icon: '📚' },
  { label: 'แกล้งทำเป็นเด็กดี', value: 97, color: 'from-blue-500 to-cyan-400', icon: '😇' },
  { label: 'ความสำเร็จของภารกิจ', value: 78, color: 'from-green-500 to-emerald-400', icon: '🕵️' },
  { label: 'สร้างความวุ่นวาย', value: 95, color: 'from-red-500 to-orange-400', icon: '💥' },
]

const traits = [
  { icon: '🔮', title: 'พลังเอสเปอร์', desc: 'อ่านใจคนได้ตลอดเวลา และใช้มันอย่างรับผิดชอบ (ไม่ได้ใช้เลย)' },
  { icon: '🥜', title: 'ผู้เชี่ยวชาญถั่วลิสง', desc: 'มีความรู้ลึกซึ้งเรื่องถั่วลิสงทุกชนิด พร้อมแลกความลับชาติเพื่อของกิน' },
  { icon: '🎭', title: 'ปรมาจารย์แสร้งทำ', desc: 'แสดงเป็นเด็กธรรมดาทุกวัน ถือเป็นการแสดงระดับออสการ์' },
  { icon: '💜', title: 'ใจอ่อนในที่ลับ', desc: 'ต้องการแค่ให้ครอบครัวอยู่ด้วยกัน อย่าบอกใครนะ' },
]

function StatBar({ stat, animate }: { stat: typeof stats[0]; animate: boolean }) {
  return (
    <div className="group">
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center gap-2">
          <span className="text-lg">{stat.icon}</span>
          <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">{stat.label}</span>
        </div>
        <span className="text-sm font-bold text-purple-300">{stat.value}%</span>
      </div>
      <div className="h-2 rounded-full bg-white/5 overflow-hidden">
        <div
          className={`h-full rounded-full bg-gradient-to-r ${stat.color} transition-all duration-1000 ease-out`}
          style={{
            width: animate ? `${stat.value}%` : '0%',
            boxShadow: `0 0 10px rgba(179,71,255,0.5)`,
          }}
        />
      </div>
    </div>
  )
}

export default function About() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [animate, setAnimate] = useState(false)

  useEffect(() => {
    if (isInView) setTimeout(() => setAnimate(true), 200)
  }, [isInView])

  return (
    <section id="about" className="relative py-24 px-6" ref={ref}>
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-1/4 -left-32 w-64 h-64 rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(179,71,255,0.12) 0%, transparent 70%)', filter: 'blur(30px)' }}
        />
        <div
          className="absolute bottom-1/4 -right-32 w-64 h-64 rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(255,71,179,0.10) 0%, transparent 70%)', filter: 'blur(30px)' }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-purple-400 text-sm font-semibold uppercase tracking-widest mb-3">แฟ้มข้อมูลลับ</p>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-black text-white mb-4">
            เกี่ยวกับ <span className="shimmer-text">อาเนีย</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            แฟ้มลับของเป้าหมาย A โปรดระวังเป็นพิเศษ อย่าให้เธอจับได้ว่ากำลังอ่านอยู่ เพราะเธอรู้อยู่แล้ว
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-4">
            {traits.map((trait, i) => (
              <motion.div
                key={trait.title}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * i }}
                className="glass-card glow-border-purple rounded-2xl p-5 hover:border-purple-400/50 transition-all duration-300 group cursor-default"
              >
                <div className="flex items-start gap-4">
                  <div className="text-3xl flex-shrink-0 group-hover:animate-wiggle">{trait.icon}</div>
                  <div>
                    <h3 className="font-bold text-white mb-1 group-hover:text-purple-300 transition-colors">{trait.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{trait.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="rounded-2xl p-6 relative overflow-hidden"
              style={{ background: 'linear-gradient(135deg, rgba(124,47,247,0.2) 0%, rgba(201,64,176,0.15) 100%)', border: '1px solid rgba(179,71,255,0.3)' }}
            >
              <div className="absolute top-4 left-4 text-6xl text-purple-500/20 font-display font-black leading-none">&ldquo;</div>
              <p className="relative z-10 text-lg text-gray-200 italic leading-relaxed pt-4 pl-4">
                เฮ้ อาเนียรู้ว่าคุณกำลังคิดอะไรอยู่ คุณคิดว่าอาเนียเป็นแค่เด็กเล็กๆ นั่นแหละที่อาเนียอยากให้คิด
              </p>
              <p className="mt-3 text-purple-400 text-sm font-semibold text-right">— อาเนีย ฟอร์เจอร์ (น่าจะพูด)</p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card glow-border-purple rounded-3xl p-8"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #7c2ff7, #c940b0)' }}>
                <span className="text-sm">📊</span>
              </div>
              <h3 className="font-bold text-white">สถิติตัวละคร</h3>
              <span className="ml-auto text-xs text-purple-400 bg-purple-900/30 px-2 py-0.5 rounded-full">ลับสุดยอด</span>
            </div>

            <div className="space-y-6">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.3 + i * 0.1 }}
                >
                  <StatBar stat={stat} animate={animate} />
                </motion.div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-purple-900/50">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-400">ระดับความอันตรายโดยรวม</span>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className={`w-4 h-4 rounded-sm ${i < 4 ? 'bg-purple-500' : 'bg-purple-500/30'}`} />
                  ))}
                </div>
              </div>
              <p className="text-xs text-gray-600 mt-2">* ประเมินโดยนักวิเคราะห์ของ WISE เป้าหมายรับรู้ระดับนี้แล้ว และพอใจมาก</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
