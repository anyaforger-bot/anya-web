'use client'

import { useEffect, useRef } from 'react'

export default function StarField() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const stars: { x: number; y: number; r: number; alpha: number; speed: number; hue: number }[] = []
    for (let i = 0; i < 200; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.5 + 0.3,
        alpha: Math.random(),
        speed: Math.random() * 0.005 + 0.002,
        hue: Math.random() > 0.7 ? 290 : Math.random() > 0.5 ? 320 : 200,
      })
    }

    let frame: number
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      stars.forEach((s) => {
        s.alpha += s.speed
        if (s.alpha > 1) s.speed *= -1
        if (s.alpha < 0) { s.speed *= -1; s.alpha = 0 }
        ctx.beginPath()
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2)
        ctx.fillStyle = `hsla(${s.hue}, 100%, 80%, ${s.alpha})`
        ctx.shadowBlur = 6
        ctx.shadowColor = `hsla(${s.hue}, 100%, 80%, 0.8)`
        ctx.fill()
      })
      frame = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      aria-hidden="true"
    />
  )
}
