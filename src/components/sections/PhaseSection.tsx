import { ReactNode } from 'react'
import ScrollReveal from '@/components/animations/ScrollReveal'

interface PhaseSectionProps {
  id: string
  number: number
  tag: string
  day: string
  accent: string
  title: string
  sub: string
  alt?: boolean
  tint?: string  // Phase-tinted background (e.g., 'var(--color-bg-p1)')
  children: ReactNode
}

export default function PhaseSection({
  id, number, tag, day, accent, title, sub, alt = false, tint, children
}: PhaseSectionProps) {
  const bgColor = tint
    ? tint
    : alt ? 'var(--color-bg-raised)' : 'var(--color-bg)'

  return (
    <section
      id={id}
      style={{
        padding: 'var(--section-py) 1.5rem',
        borderTop: '1px solid var(--color-border)',
        background: bgColor,
        position: 'relative',
      }}
    >
      {/* Subtle phase accent line at top */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: 2,
        background: `linear-gradient(90deg, transparent 0%, ${accent} 50%, transparent 100%)`,
        opacity: 0.3,
      }} aria-hidden="true" />

      <div className="container">
        {/* Phase header */}
        <ScrollReveal variant="fade">
          <div style={{ marginBottom: '3rem' }}>
            <div style={{
              display: 'flex', alignItems: 'center', gap: '0.75rem',
              marginBottom: '1.25rem', flexWrap: 'wrap',
            }}>
              {/* Number badge */}
              <div style={{
                width: 32, height: 32, borderRadius: 8,
                background: accent, display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '0.8125rem', fontWeight: 800, color: 'var(--color-bg)',
                flexShrink: 0,
              }}>
                {number}
              </div>
              {/* Phase tag */}
              <span style={{
                fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.08em',
                textTransform: 'uppercase', color: accent,
              }}>
                {tag}
              </span>
              <span style={{
                fontSize: '0.6875rem', fontWeight: 600, letterSpacing: '0.06em',
                textTransform: 'uppercase', color: 'var(--color-text-3)',
                padding: '0.25rem 0.65rem',
                border: '1px solid var(--color-border)',
                borderRadius: 100,
                minHeight: 28,
                display: 'inline-flex',
                alignItems: 'center',
              }}>
                {day}
              </span>
            </div>

            <h2 className="text-heading" style={{ marginBottom: '0.5rem' }}>{title}</h2>
            <p style={{ fontSize: '1rem', color: 'var(--color-text-2)', margin: 0 }}>{sub}</p>
          </div>
        </ScrollReveal>

        {/* Phase content */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
          {children}
        </div>
      </div>
    </section>
  )
}

// Reusable subsection heading
export function SubHead({ children }: { children: ReactNode }) {
  return (
    <h3 className="text-subheading" style={{ marginBottom: '0.875rem', color: 'var(--color-text)' }}>
      {children}
    </h3>
  )
}

// Reusable body text
export function Body({ children, style = {} }: { children: ReactNode; style?: React.CSSProperties }) {
  return (
    <p style={{ fontSize: '1rem', color: 'var(--color-text-2)', lineHeight: 1.75, marginBottom: '1rem', ...style }}>
      {children}
    </p>
  )
}
