'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useTranslations } from 'next-intl'

const colorMap: Record<string, string> = {
  purple: 'bg-purple-900/30 text-purple-300 border-purple-700/40',
  blue: 'bg-blue-900/30 text-blue-300 border-blue-700/40',
  pink: 'bg-pink-900/30 text-pink-300 border-pink-700/40',
  yellow: 'bg-yellow-900/30 text-yellow-300 border-yellow-700/40',
  orange: 'bg-orange-900/30 text-orange-300 border-orange-700/40',
  red: 'bg-red-900/30 text-red-300 border-red-700/40',
}

export default function Skills() {
  const t = useTranslations('skills')
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  const skills = [
    {
      icon: '🔮',
      title: t('skill0Title'),
      subtitle: t('skill0Subtitle'),
      description: t('skill0Desc'),
      tags: [t('skill0Tag0'), t('skill0Tag1'), t('skill0Tag2')],
      color: 'purple',
      gradient: 'from-purple-600 to-violet-500',
      glow: 'rgba(139,92,246,0.4)',
      level: 10,
    },
    {
      icon: '🕵️',
      title: t('skill1Title'),
      subtitle: t('skill1Subtitle'),
      description: t('skill1Desc'),
      tags: [t('skill1Tag0'), t('skill1Tag1'), t('skill1Tag2')],
      color: 'blue',
      gradient: 'from-blue-600 to-cyan-500',
      glow: 'rgba(59,130,246,0.4)',
      level: 8,
    },
    {
      icon: '😇',
      title: t('skill2Title'),
      subtitle: t('skill2Subtitle'),
      description: t('skill2Desc'),
      tags: [t('skill2Tag0'), t('skill2Tag1'), t('skill2Tag2')],
      color: 'pink',
      gradient: 'from-pink-600 to-rose-500',
      glow: 'rgba(236,72,153,0.4)',
      level: 9,
    },
    {
      icon: '⚡',
      title: t('skill3Title'),
      subtitle: t('skill3Subtitle'),
      description: t('skill3Desc'),
      tags: [t('skill3Tag0'), t('skill3Tag1'), t('skill3Tag2')],
      color: 'yellow',
      gradient: 'from-yellow-500 to-amber-400',
      glow: 'rgba(234,179,8,0.4)',
      level: 10,
    },
    {
      icon: '🥜',
      title: t('skill4Title'),
      subtitle: t('skill4Subtitle'),
      description: t('skill4Desc'),
      tags: [t('skill4Tag0'), t('skill4Tag1'), t('skill4Tag2')],
      color: 'orange',
      gradient: 'from-orange-500 to-amber-500',
      glow: 'rgba(249,115,22,0.4)',
      level: 10,
    },
    {
      icon: '💥',
      title: t('skill5Title'),
      subtitle: t('skill5Subtitle'),
      description: t('skill5Desc'),
      tags: [t('skill5Tag0'), t('skill5Tag1'), t('skill5Tag2')],
      color: 'red',
      gradient: 'from-red-600 to-orange-500',
      glow: 'rgba(239,68,68,0.4)',
      level: 9,
    },
  ]

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
          <p className="text-pink-400 text-sm font-semibold uppercase tracking-widest mb-3">{t('sectionLabel')}</p>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-black text-white mb-4">
            {t('titlePrefix')}<span className="shimmer-text">{t('titleHighlight')}</span>{t('titleSuffix')}
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            {t('subtitle')}
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
