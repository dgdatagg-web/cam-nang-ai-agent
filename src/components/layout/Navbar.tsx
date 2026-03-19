'use client'
import { useEffect, useState } from 'react'
import { Sparkles, Zap } from 'lucide-react'

const PHASE_IDS = ['core-values', 'phase-1', 'phase-2', 'phase-3', 'phase-4', 'phase-5', 'phase-6']

export default function Navbar() {
  const [active, setActive] = useState(0)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = PHASE_IDS.indexOf(entry.target.id)
            if (idx !== -1) setActive(idx)
          }
        })
      },
      { rootMargin: '-40% 0px -40% 0px' }
    )
    const timeout = setTimeout(() => {
      PHASE_IDS.forEach((id) => {
        const el = document.getElementById(id)
        if (el) observer.observe(el)
      })
    }, 100)
    return () => { clearTimeout(timeout); observer.disconnect() }
  }, [])

  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
      borderBottom: scrolled ? '1px solid var(--color-border)' : '1px solid transparent',
      background: scrolled ? 'rgba(12,13,15,0.96)' : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      transition: 'background 0.2s ease, border-color 0.2s ease',
    }}>
      <div style={{
        maxWidth: 'var(--max-w-wide)', marginInline: 'auto',
        padding: '0 1.5rem',
        height: 56,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        {/* Logo */}
        <a href="https://trolythongminh.io.vn" style={{
          fontWeight: 700, fontSize: '0.9375rem', color: 'var(--color-text)',
          textDecoration: 'none', letterSpacing: '-0.01em',
          display: 'flex', alignItems: 'center', gap: '0.5rem',
        }}>
          <Sparkles size={18} color="var(--color-amber)" />
          Trợ Lý Thông Minh
        </a>

        {/* Phase dots — desktop — 44px touch targets */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }} aria-label="Giai đoạn">
          {PHASE_IDS.slice(1).map((id, i) => (
            <a
              key={id}
              href={`#${id}`}
              aria-label={`Giai đoạn ${i + 1}`}
              style={{
                width: 44, height: 44,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                borderRadius: '50%',
              }}
            >
              <span style={{
                width: 8, height: 8, borderRadius: '50%',
                display: 'block',
                background: active === i + 1 ? 'var(--color-amber)' : 'var(--color-border-med)',
                boxShadow: active === i + 1 ? '0 0 10px var(--color-amber)' : 'none',
                transition: 'background 0.2s ease, box-shadow 0.2s ease',
              }} />
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a href="https://t.me/Nova_superagent_bot" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ padding: '0.5rem 1.125rem', fontSize: '0.8125rem' }}>
          <Zap size={14} />
          Bắt đầu
        </a>
      </div>

      {/* Mobile progress bar */}
      <div style={{ height: 2, background: 'var(--color-border)', position: 'relative' }}>
        <div style={{
          position: 'absolute', left: 0, top: 0, height: '100%',
          background: 'var(--color-amber)',
          width: `${(active / (PHASE_IDS.length - 1)) * 100}%`,
          transition: 'width 0.3s ease',
        }} />
      </div>
    </header>
  )
}
