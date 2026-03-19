'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const skills = [
  {
    icon: '🔮',
    title: 'อ่านใจ',
    subtitle: 'พลังเอสเปอร์ ระดับ MAX',
    description: 'เข้าถึงความคิดทุกคนในรัศมีได้ทันที ไม่มีการเข้ารหัสใดหยุดได้ WISE พยายามแล้ว',
    tags: ['เทเลพาธี', 'เปิดตลอดเวลา', 'ตรวจจับไม่ได้'],
    color: 'purple',
    gradient: 'from-purple-600 to-violet-500',
    glow: 'rgba(139,92,246,0.4)',
    level: 10,
  },
  {
    icon: '🕵️',
    title: 'แทรกซึม',
    subtitle: 'ผู้เชี่ยวชาญตัวตนปลอม',
    description: 'รักษาตัวตนครอบครัวปลอมมาหลายเดือนโดยไม่มีใครสงสัย แม้แต่พ่อแม่เองก็ไม่รู้',
    tags: ['ใต้ดิน', 'ปกปิดลึก', 'หน่วยครอบครัว'],
    color: 'blue',
    gradient: 'from-blue-600 to-cyan-500',
    glow: 'rgba(59,130,246,0.4)',
    level: 8,
  },
  {
    icon: '😇',
    title: 'แกล้งทำเป็นเด็กดี',
    subtitle: 'การแสดงระดับออสการ์',
    description: 'ใช้พลัง "ตาโตน่ารัก" หลุดจากทุกสถานการณ์ได้ อัตราความสำเร็จ 97%',
    tags: ['หลอกลวง', 'น่ารัก', 'ปฏิเสธได้เสมอ'],
    color: 'pink',
    gradient: 'from-pink-600 to-rose-500',
    glow: 'rgba(236,72,153,0.4)',
    level: 9,
  },
  {
    icon: '⚡',
    title: 'เรดาร์วากูวากู',
    subtitle: 'ตรวจจับความตื่นเต้น',
    description: 'สัมผัสที่หกสำหรับความตื่นเต้น การผจญภัย และการสอดแนม ทำงานก่อนบรีฟมิชชันจะจบ',
    tags: ['สัมผัสที่หก', 'การผจญภัย', 'ฮาร์ปบริสุทธิ์'],
    color: 'yellow',
    gradient: 'from-yellow-500 to-amber-400',
    glow: 'rgba(234,179,8,0.4)',
    level: 10,
  },
  {
    icon: '🥜',
    title: 'ผู้เชี่ยวชาญถั่วลิสง',
    subtitle: 'ระดับโลก',
    description: 'มีความรู้ครบถ้วนเรื่องถั่วลิสงทุกสายพันธุ์ วิธีปรุง และบริบทที่เหมาะสม นี่คือทักษะ อย่าตัดสิน',
    tags: ['โภชนาการ', 'กลยุทธ์', 'แรงจูงใจ'],
    color: 'orange',
    gradient: 'from-orange-500 to-amber-500',
    glow: 'rgba(249,115,22,0.4)',
    level: 10,
  },
  {
    icon: '💥',
    title: 'สร้างความวุ่นวาย',
    subtitle: 'พรสวรรค์ตามธรรมชาติ',
    description: 'ทักษะ passive สถานการณ์ปกติในรัศมี 10 เมตร จะถูกแปลงเป็นหายนะตลกขบขันโดยอัตโนมัติ',
    tags: ['Passive', 'AoE', 'ปิดไม่ได้'],
    color: 'red',
    gradient: 'from-red-600 to-orange-500',
    glow: 'rgba(239,68,68,0.4)',
    level: 9,
  },
]

const colorMap: Record<string, string> = {
  purple: 'bg-purple-900/30 text-purple-300 border-purple-700/40',
  blue: 'bg-blue-900/30 text-blue-300 border-blue-700/40',
  pink: 'bg-pink-900/30 text-pink-300 border-pink-700/40',
  yellow: 'bg-yellow-900/30 text-yellow-300 border-yellow-700/40',
  orange: 'bg-orange-900/30 text-orange-300 border-orange-700/40',
  red: 'bg-red-900/30 text-red-300 border-red-700/40',
}

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="skills" className="relative py-24 px-6" ref={ref}>
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(179,71,255,0.4), transparent)' }}
        />
        <div
          className="absolute bottom-0 left-0 right-0 h-px"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(255,71,179,0.4), transparent)' }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-pink-400 text-sm font-semibold uppercase tracking-widest mb-3">ต้นไม้ทักษะ</p>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-black text-white mb-4">
            ความสามารถของ<span className="shimmer-text">อาเนีย</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            ทักษะทั้งหมดได้รับการยืนยันจากเจ้าหน้าที่ WISE ในสนาม ผลลัพธ์อาจแตกต่างกัน WISE ไม่รับผิดชอบเหตุการณ์เกี่ยวกับถั่วลิสง
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.08 * i }}
              className="group relative glass-card rounded-2xl p-6 overflow-hidden transition-all duration-300 hover:scale-[1.02] cursor-default"
              style={{ borderColor: 'rgba(179,71,255,0.15)' }}
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                style={{ background: `radial-gradient(circle at 50% 0%, ${skill.glow} 0%, transparent 70%)` }}
              />
              <div
                className="absolute top-0 left-6 right-6 h-px opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: `linear-gradient(90deg, transparent, ${skill.glow.replace('0.4', '0.8')}, transparent)` }}
              />

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl flex-shrink-0 group-hover:animate-wiggle"
                    style={{ background: `linear-gradient(135deg, ${skill.glow}, ${skill.glow.replace('0.4', '0.2')})`, border: `1px solid ${skill.glow.replace('0.4', '0.5')}` }}
                  >
                    {skill.icon}
                  </div>
                  <div className="flex gap-0.5 mt-1">
                    {[...Array(10)].map((_, idx) => (
                      <div
                        key={idx}
                        className={`w-1.5 h-5 rounded-sm transition-all duration-300 ${idx < skill.level ? `bg-gradient-to-t ${skill.gradient}` : 'bg-white/10'}`}
                      />
                    ))}
                  </div>
                </div>

                <h3 className="font-bold text-white text-lg mb-0.5 group-hover:text-purple-200 transition-colors">{skill.title}</h3>
                <p className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: skill.glow.replace('0.4', '0.9') }}>
                  {skill.subtitle}
                </p>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">{skill.description}</p>

                <div className="flex flex-wrap gap-1.5">
                  {skill.tags.map((tag) => (
                    <span key={tag} className={`text-xs px-2 py-0.5 rounded-full border ${colorMap[skill.color]}`}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
