'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const skills = [
  {
    icon: '🔮',
    title: 'Mind Reading',
    subtitle: 'Esper Ability Lv. MAX',
    description: 'Full telepathic access to all nearby thought streams. No encryption can stop her. WISE has tried.',
    tags: ['Telepathy', 'Always On', 'Undetectable'],
    color: 'purple',
    gradient: 'from-purple-600 to-violet-500',
    glow: 'rgba(139,92,246,0.4)',
    level: 10,
  },
  {
    icon: '🕵️',
    title: 'Infiltration',
    subtitle: 'Cover Identity Specialist',
    description: 'Successfully maintained a fake family cover for months. No one suspects a thing. Not even her parents.',
    tags: ['Undercover', 'Deep Cover', 'Family Unit'],
    color: 'blue',
    gradient: 'from-blue-600 to-cyan-500',
    glow: 'rgba(59,130,246,0.4)',
    level: 8,
  },
  {
    icon: '😇',
    title: 'Acting Innocent',
    subtitle: 'Oscar-Worthy Performance',
    description: 'Can deploy the power of "big eyes and a cute smile" to escape virtually any situation. 97% success rate.',
    tags: ['Deception', 'Cuteness', 'Plausible Deniability'],
    color: 'pink',
    gradient: 'from-pink-600 to-rose-500',
    glow: 'rgba(236,72,153,0.4)',
    level: 9,
  },
  {
    icon: '⚡',
    title: 'Waku Waku Detection',
    subtitle: 'Excitement Radar',
    description: 'Sixth sense for detecting incoming excitement, adventure, and spy action. Activates before the mission briefing ends.',
    tags: ['Sixth Sense', 'Adventure', 'Pure Hype'],
    color: 'yellow',
    gradient: 'from-yellow-500 to-amber-400',
    glow: 'rgba(234,179,8,0.4)',
    level: 10,
  },
  {
    icon: '🥜',
    title: 'Peanut Expertise',
    subtitle: 'World-Class Connoisseur',
    description: 'Encyclopedic knowledge of peanut varieties, preparations, and optimal consumption contexts. It is a skill. Stop judging.',
    tags: ['Nutrition', 'Strategy', 'Motivation'],
    color: 'orange',
    gradient: 'from-orange-500 to-amber-500',
    glow: 'rgba(249,115,22,0.4)',
    level: 10,
  },
  {
    icon: '💥',
    title: 'Chaos Generation',
    subtitle: 'Natural Talent',
    description: 'Passive ability. Any normal situation within a 10-meter radius is spontaneously transformed into a comedic disaster.',
    tags: ['Passive', 'AoE', 'Cannot Be Disabled'],
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
      {/* BG decoration */}
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
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-pink-400 text-sm font-semibold uppercase tracking-widest mb-3">Skill Tree</p>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-black text-white mb-4">
            Anya&apos;s <span className="shimmer-text">Abilities</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            All skills verified by WISE agents in the field. Results may vary. WISE accepts no liability for peanut-related incidents.
          </p>
        </motion.div>

        {/* Skill cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.08 * i }}
              className="group relative glass-card rounded-2xl p-6 overflow-hidden transition-all duration-300 hover:scale-[1.02] cursor-default"
              style={{
                borderColor: 'rgba(179,71,255,0.15)',
              }}
            >
              {/* Hover glow bg */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                style={{ background: `radial-gradient(circle at 50% 0%, ${skill.glow} 0%, transparent 70%)` }}
              />

              {/* Top accent line */}
              <div
                className="absolute top-0 left-6 right-6 h-px opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: `linear-gradient(90deg, transparent, ${skill.glow.replace('0.4', '0.8')}, transparent)` }}
              />

              <div className="relative z-10">
                {/* Icon + level */}
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

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {skill.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`text-xs px-2 py-0.5 rounded-full border ${colorMap[skill.color]}`}
                    >
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
