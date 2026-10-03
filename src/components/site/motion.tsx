"use client"

import * as React from "react"
import Lenis from "lenis"
import { usePathname } from "next/navigation"

/* ───────── 平滑滚动 ───────── */
export function SmoothScroll() {
  const pathname = usePathname()
  const lenisRef = React.useRef<Lenis | null>(null)

  React.useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    const lenis = new Lenis({ autoRaf: true, anchors: true, lerp: 0.11 })
    lenisRef.current = lenis
    return () => {
      lenis.destroy()
      lenisRef.current = null
    }
  }, [])

  React.useEffect(() => {
    lenisRef.current?.scrollTo(0, { immediate: true, force: true })
  }, [pathname])

  return null
}

/* ───────── 进场观察器（全站共享一个 IO） ───────── */
let sharedIO: IntersectionObserver | null = null
function getIO() {
  if (sharedIO) return sharedIO
  sharedIO = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (e.isIntersecting) {
          e.target.setAttribute("data-in", "")
          sharedIO?.unobserve(e.target)
        }
      }
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
  )
  return sharedIO
}

function useInView<T extends HTMLElement>() {
  const ref = React.useRef<T>(null)
  React.useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = getIO()
    io.observe(el)
    return () => io.unobserve(el)
  }, [])
  return ref
}

type RevealProps = {
  as?: React.ElementType
  variant?: "up" | "fade" | "scale"
  delay?: number
  className?: string
  style?: React.CSSProperties
  children?: React.ReactNode
  id?: string
}

export function Reveal({ as: Tag = "div", variant = "up", delay = 0, className, style, children, id }: RevealProps) {
  const ref = useInView<HTMLElement>()
  return (
    <Tag
      ref={ref}
      id={id}
      data-reveal={variant}
      className={className}
      style={{ ...style, ["--d" as string]: `${delay}ms` }}
    >
      {children}
    </Tag>
  )
}

/* 逐行遮罩揭示标题 */
export function Lines({
  as: Tag = "h2",
  lines,
  className,
  delay = 0,
}: {
  as?: React.ElementType
  lines: React.ReactNode[]
  className?: string
  delay?: number
}) {
  const ref = useInView<HTMLElement>()
  return (
    <Tag ref={ref} data-lines className={className} style={{ ["--d" as string]: `${delay}ms` }}>
      {lines.map((line, i) => (
        <span key={i} className="line-mask" style={{ ["--i" as string]: i }}>
          <span>{line}</span>
        </span>
      ))}
    </Tag>
  )
}

/* 生长细线 */
export function Rule({ className = "", delay = 0 }: { className?: string; delay?: number }) {
  const ref = useInView<HTMLDivElement>()
  return (
    <div
      ref={ref}
      data-rule
      aria-hidden
      className={`h-px w-full bg-current opacity-20 ${className}`}
      style={{ ["--d" as string]: `${delay}ms` }}
    />
  )
}

/* ───────── 数字滚动 ───────── */
export function Counter({
  value,
  duration = 1800,
  className,
}: {
  value: number
  duration?: number
  className?: string
}) {
  const ref = React.useRef<HTMLSpanElement>(null)
  React.useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    el.textContent = "0"
    let raf = 0
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        io.disconnect()
        const start = performance.now()
        const tick = (now: number) => {
          const t = Math.min(1, (now - start) / duration)
          const eased = 1 - Math.pow(1 - t, 4)
          el.textContent = String(Math.round(value * eased))
          if (t < 1) raf = requestAnimationFrame(tick)
        }
        raf = requestAnimationFrame(tick)
      },
      { threshold: 0.4 },
    )
    io.observe(el)
    return () => {
      io.disconnect()
      cancelAnimationFrame(raf)
    }
  }, [value, duration])
  return (
    <span ref={ref} className={className}>
      {value}
    </span>
  )
}

/* ───────── 滚动进度：写入 CSS 变量 --p（0→1） ─────────
   mode="track"：用于 sticky 轨道，顶部贴顶为 0，底部贴底为 1
   mode="view" ：元素进入视口底部为 0，离开视口顶部为 1 */
export function useScrollProgress<T extends HTMLElement>(
  mode: "track" | "view" = "view",
  onProgress?: (p: number) => void,
) {
  const ref = React.useRef<T>(null)
  const cb = React.useRef(onProgress)
  cb.current = onProgress

  React.useEffect(() => {
    const el = ref.current
    if (!el) return
    let raf = 0
    let last = -1
    const update = () => {
      raf = 0
      const rect = el.getBoundingClientRect()
      const vh = window.innerHeight
      const raw =
        mode === "track"
          ? -rect.top / Math.max(1, rect.height - vh)
          : (vh - rect.top) / (vh + rect.height)
      const p = Math.min(1, Math.max(0, raw))
      if (Math.abs(p - last) < 0.0005) return
      last = p
      el.style.setProperty("--p", p.toFixed(4))
      cb.current?.(p)
    }
    const request = () => {
      if (!raf) raf = requestAnimationFrame(update)
    }
    update()
    window.addEventListener("scroll", request, { passive: true })
    window.addEventListener("resize", request)
    return () => {
      window.removeEventListener("scroll", request)
      window.removeEventListener("resize", request)
      cancelAnimationFrame(raf)
    }
  }, [mode])

  return ref
}

export function ScrollScene({
  mode = "view",
  className,
  style,
  children,
}: {
  mode?: "track" | "view"
  className?: string
  style?: React.CSSProperties
  children?: React.ReactNode
}) {
  const ref = useScrollProgress<HTMLDivElement>(mode)
  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  )
}

/* ───────── 磁吸 ───────── */
export function Magnetic({
  children,
  strength = 0.28,
  className = "",
}: {
  children: React.ReactNode
  strength?: number
  className?: string
}) {
  const ref = React.useRef<HTMLSpanElement>(null)
  React.useEffect(() => {
    const el = ref.current
    if (!el) return
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    const move = (e: MouseEvent) => {
      const r = el.getBoundingClientRect()
      const x = (e.clientX - (r.left + r.width / 2)) * strength
      const y = (e.clientY - (r.top + r.height / 2)) * strength
      el.style.transition = "transform .15s ease-out"
      el.style.transform = `translate3d(${x}px, ${y}px, 0)`
    }
    const leave = () => {
      el.style.transition = "transform .8s cubic-bezier(.16,1,.3,1)"
      el.style.transform = "translate3d(0,0,0)"
    }
    el.addEventListener("mousemove", move)
    el.addEventListener("mouseleave", leave)
    return () => {
      el.removeEventListener("mousemove", move)
      el.removeEventListener("mouseleave", leave)
    }
  }, [strength])
  return (
    <span ref={ref} className={`inline-block will-change-transform ${className}`}>
      {children}
    </span>
  )
}

/* 进入视口后沿 X 轴生长的任意元素（进度条等） */
export function Grow({
  className,
  style,
  delay = 0,
}: {
  className?: string
  style?: React.CSSProperties
  delay?: number
}) {
  const ref = useInView<HTMLDivElement>()
  return <div ref={ref} data-rule aria-hidden className={className} style={{ ...style, ["--d" as string]: `${delay}ms` }} />
}

/* ───────── 图纸网格上的红色流动脉冲 ───────── */
export function GridPulse({ cell = 80, className = "" }: { cell?: number; className?: string }) {
  const ref = React.useRef<HTMLCanvasElement>(null)
  React.useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return
    let w = 0
    let h = 0
    let raf = 0
    let visible = true
    const dpr = Math.min(2, window.devicePixelRatio || 1)
    type Pulse = { horizontal: boolean; line: number; pos: number; speed: number; len: number }
    const pulses: Pulse[] = []
    const resize = () => {
      w = canvas.clientWidth
      h = canvas.clientHeight
      canvas.width = w * dpr
      canvas.height = h * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }
    const spawn = () => {
      const horizontal = Math.random() > 0.4
      const count = Math.floor((horizontal ? h : w) / cell)
      pulses.push({
        horizontal,
        line: Math.floor(Math.random() * (count + 1)) * cell,
        pos: -200,
        speed: 2.2 + Math.random() * 3.2,
        len: 90 + Math.random() * 160,
      })
    }
    let frame = 0
    const tick = () => {
      raf = requestAnimationFrame(tick)
      if (!visible) return
      frame++
      if (frame % 26 === 0 && pulses.length < 9) spawn()
      ctx.clearRect(0, 0, w, h)
      for (let i = pulses.length - 1; i >= 0; i--) {
        const p = pulses[i]
        p.pos += p.speed
        const max = p.horizontal ? w : h
        if (p.pos - p.len > max) {
          pulses.splice(i, 1)
          continue
        }
        const x0 = p.horizontal ? p.pos - p.len : p.line
        const y0 = p.horizontal ? p.line : p.pos - p.len
        const x1 = p.horizontal ? p.pos : p.line
        const y1 = p.horizontal ? p.line : p.pos
        const g = ctx.createLinearGradient(x0, y0, x1, y1)
        g.addColorStop(0, "rgba(225,10,31,0)")
        g.addColorStop(1, "rgba(225,10,31,.85)")
        ctx.strokeStyle = g
        ctx.lineWidth = 1.5
        ctx.beginPath()
        ctx.moveTo(x0 + 0.5, y0 + 0.5)
        ctx.lineTo(x1 + 0.5, y1 + 0.5)
        ctx.stroke()
        ctx.fillStyle = "#e10a1f"
        ctx.fillRect(x1 - 2, y1 - 2, 5, 5)
      }
    }
    resize()
    const io = new IntersectionObserver(([e]) => (visible = e.isIntersecting))
    io.observe(canvas)
    window.addEventListener("resize", resize)
    raf = requestAnimationFrame(tick)
    return () => {
      cancelAnimationFrame(raf)
      io.disconnect()
      window.removeEventListener("resize", resize)
    }
  }, [cell])
  return <canvas ref={ref} aria-hidden className={`pointer-events-none absolute inset-0 h-full w-full ${className}`} />
}
