import ScrollReveal from '@/components/animations/ScrollReveal'
import { ArrowDown, Sparkles } from 'lucide-react'

export default function Hero() {
  return (
    <section style={{
      minHeight: '100svh',
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Ambient gradient background */}
      <div className="hero-gradient" aria-hidden="true" />

      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '3rem',
        maxWidth: 'var(--max-w-wide)',
        marginInline: 'auto',
        width: '100%',
        padding: 'calc(56px + 5rem) 1.5rem 5rem',
        position: 'relative',
        zIndex: 1,
      }}>
        {/* Text column */}
        <div style={{ flex: '1 1 500px', maxWidth: 560 }}>
          <ScrollReveal variant="fade">
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.1em',
              textTransform: 'uppercase', color: 'var(--color-amber)',
              marginBottom: '1.5rem',
            }}>
              <Sparkles size={12} />
              AI Agent Activation Guide
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.08}>
            <h1 className="text-display" style={{ color: 'var(--color-text)', marginBottom: '1.25rem' }}>
              Your First AI<br />
              <span style={{
                background: 'linear-gradient(135deg, var(--color-amber) 0%, var(--color-p6) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                Teammate
              </span>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.16}>
            <p style={{
              fontSize: 'clamp(1.0625rem, 2vw, 1.1875rem)',
              color: 'var(--color-text-2)',
              lineHeight: 1.7,
              maxWidth: 500,
              marginBottom: '0.75rem',
            }}>
              Just know how to be a good teammate.
            </p>
            <p style={{ fontSize: '0.9375rem', color: 'var(--color-text-3)', lineHeight: 1.6 }}>
              No coding required. No AI knowledge needed.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.24}>
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginTop: '2.5rem' }}>
              <a href="https://www.myclaw.vn/en/pricing" target="_blank" rel="noopener noreferrer" className="btn-primary">
                Start Your Free 7-Day Demo
                <ArrowDown size={14} />
              </a>
              <a href="#core-values" className="btn-ghost">Partnership Philosophy</a>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.4} variant="fade">
            <div style={{
              marginTop: '3.5rem',
              display: 'flex', alignItems: 'center', gap: '0.75rem',
              color: 'var(--color-text-3)', fontSize: '0.8125rem',
            }}>
              <div style={{
                width: 1, height: 40, background: 'linear-gradient(to bottom, transparent, var(--color-border-med))'
              }} />
              6 phases · From activation to partnership
            </div>
          </ScrollReveal>
        </div>

        {/* Visual column — ambient orb */}
        <div style={{
          flex: '0 0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }} className="hidden md:flex">
          <ScrollReveal delay={0.3} variant="scale">
            <div className="hero-orb" aria-hidden="true">
              <div className="hero-orb-spark" />
              <div className="hero-orb-ring" />
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* CSS for hiding orb on mobile */}
      <style>{`
        @media (max-width: 768px) {
          .hidden.md\\:flex { display: none !important; }
        }
        @media (min-width: 769px) {
          .hidden.md\\:flex { display: flex !important; }
        }
      `}</style>
    </section>
  )
}
