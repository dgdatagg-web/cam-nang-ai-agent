import ScrollReveal from '@/components/animations/ScrollReveal'
import PhaseSection, { SubHead } from './PhaseSection'
import { TruthBox } from '@/components/ui/Callouts'
import { phases } from '@/content/phases'
import { ArrowUpRight, ArrowDownRight, Zap, MessageCircle, GitFork } from 'lucide-react'

const p = phases[5] as any

export default function PhaseJourney() {
  return (
    <PhaseSection id={p.id} number={p.number} tag={p.tag} day={p.day} accent={p.accent} title={p.title} sub={p.sub} tint="var(--color-bg-p6)" alt>
      {/* Timeline — dramatic card treatment */}
      <ScrollReveal variant="fade">
        <SubHead>Ba giai đoạn của hành trình</SubHead>
      </ScrollReveal>

      <div className="journey-timeline" style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        {p.timeline.map((item: any, i: number) => (
          <ScrollReveal key={i} delay={i * 0.15} variant={i === 0 ? 'left' : i === 1 ? 'right' : 'scale'}>
            <div className={`journey-stage ${
              item.status === 'active' ? 'journey-stage-active' :
              item.status === 'warning' ? 'journey-stage-warning' :
              'journey-stage-decision'
            }`}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                {/* Stage icon */}
                <div style={{
                  width: 40, height: 40, borderRadius: 10,
                  background: `${item.accent}15`,
                  border: `1px solid ${item.accent}30`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  {i === 0 && <Zap size={18} color={item.accent} />}
                  {i === 1 && <MessageCircle size={18} color={item.accent} />}
                  {i === 2 && <GitFork size={18} color={item.accent} />}
                </div>

                <div>
                  <span style={{
                    fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.08em',
                    textTransform: 'uppercase', color: item.accent,
                    display: 'block',
                  }}>
                    {item.days}
                  </span>
                  <span style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--color-text)' }}>
                    {item.name}
                  </span>
                </div>
              </div>
              <p style={{ fontSize: '0.9rem', color: 'var(--color-text-2)', lineHeight: 1.65, margin: 0 }}>
                {item.desc}
              </p>

              {/* Active stage glow indicator */}
              {item.status === 'active' && (
                <div style={{
                  marginTop: '1rem',
                  padding: '0.5rem 0.75rem',
                  background: 'rgba(232, 160, 32, 0.06)',
                  border: '1px solid rgba(232, 160, 32, 0.15)',
                  borderRadius: 6,
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  color: 'var(--color-amber)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.375rem',
                }}>
                  <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--color-amber)', display: 'inline-block' }} />
                  Bạn đang ở đây
                </div>
              )}
            </div>

            {/* Connector between stages */}
            {i < p.timeline.length - 1 && (
              <div className="journey-connector">
                <svg width="2" height="24" viewBox="0 0 2 24">
                  <line x1="1" y1="0" x2="1" y2="24" stroke="var(--color-border-med)" strokeWidth="2" strokeDasharray="4 4" />
                </svg>
              </div>
            )}
          </ScrollReveal>
        ))}
      </div>

      {/* Fork — dramatic treatment */}
      <ScrollReveal variant="scale">
        <div>
          <SubHead>Ngã ba quyết định</SubHead>
          <div className="fork-dramatic">
            {/* Renew path */}
            <div className="fork-card-renew">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.25rem', color: 'var(--color-p5)' }}>
                <ArrowUpRight size={18} />
                <span style={{ fontWeight: 700, fontSize: '1rem' }}>{p.fork.renew.title}</span>
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
                {p.fork.renew.items.map((item: string, i: number) => (
                  <li key={i} style={{
                    fontSize: '0.9rem', color: 'var(--color-text-2)', display: 'flex', alignItems: 'flex-start', gap: '0.625rem',
                    lineHeight: 1.5,
                  }}>
                    <span style={{
                      width: 20, height: 20, borderRadius: '50%',
                      background: 'rgba(46, 204, 133, 0.1)',
                      border: '1px solid rgba(46, 204, 133, 0.25)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '0.625rem', color: 'var(--color-p5)',
                      flexShrink: 0, marginTop: 2,
                    }}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Divider */}
            <div className="fork-dramatic-divider" />

            {/* Leave path */}
            <div className="fork-card-leave">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.25rem', color: 'var(--color-p4)' }}>
                <ArrowDownRight size={18} />
                <span style={{ fontWeight: 700, fontSize: '1rem' }}>{p.fork.leave.title}</span>
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
                {p.fork.leave.items.map((item: string, i: number) => (
                  <li key={i} style={{
                    fontSize: '0.9rem', color: 'var(--color-text-2)', display: 'flex', alignItems: 'flex-start', gap: '0.625rem',
                    lineHeight: 1.5,
                  }}>
                    <span style={{
                      width: 20, height: 20, borderRadius: '50%',
                      background: 'rgba(217, 64, 64, 0.08)',
                      border: '1px solid rgba(217, 64, 64, 0.2)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '0.625rem', color: 'var(--color-p4)',
                      flexShrink: 0, marginTop: 2,
                    }}>✕</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Truth + Pricing */}
      <ScrollReveal variant="up">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <TruthBox>{p.truth}</TruthBox>
          <div style={{
            padding: '1.25rem 1.5rem',
            background: 'var(--color-bg-raised)',
            border: '1px solid var(--color-border)',
            borderRadius: 10,
            fontSize: '0.9rem',
            color: 'var(--color-text-2)',
            lineHeight: 1.7,
          }}>
            {p.pricing}
          </div>
        </div>
      </ScrollReveal>
    </PhaseSection>
  )
}
