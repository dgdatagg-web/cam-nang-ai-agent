import ScrollReveal from '@/components/animations/ScrollReveal'
import PhaseSection, { SubHead, Body } from './PhaseSection'
import { TruthBox } from '@/components/ui/Callouts'
import { phases } from '@/content/phases'
import { TrendingUp, TrendingDown, Zap, MessageCircle, GitFork } from 'lucide-react'

const p = phases[5] as any

// Status icon mapping
const statusIcons: Record<string, { icon: typeof Zap; color: string }> = {
  active: { icon: Zap, color: 'var(--color-p1)' },
  warning: { icon: MessageCircle, color: 'var(--color-p4)' },
  decision: { icon: GitFork, color: 'var(--color-p6)' },
}

export default function PhaseJourney() {
  return (
    <PhaseSection id={p.id} number={p.number} tag={p.tag} day={p.day} accent={p.accent} title={p.title} sub={p.sub} tint="var(--color-bg-p6)" alt>
      {/* Timeline — dramatic card treatment */}
      <ScrollReveal variant="fade">
        <SubHead>Ba giai đoạn của hành trình</SubHead>
      </ScrollReveal>

      <div className="journey-timeline" style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        {p.timeline.map((item: any, i: number) => {
          const { icon: Icon, color } = statusIcons[item.status] || statusIcons.active
          const stageClass = item.status === 'active' ? 'journey-stage-active'
            : item.status === 'warning' ? 'journey-stage-warning'
            : 'journey-stage-decision'

          return (
            <div key={i}>
              <ScrollReveal delay={i * 0.12} variant={i === 0 ? 'left' : i === 1 ? 'right' : 'scale'}>
                <div className={`journey-stage ${stageClass}`}>
                  <div style={{
                    display: 'flex', alignItems: 'center', gap: '0.75rem',
                    marginBottom: '0.75rem',
                  }}>
                    <div style={{
                      width: 36, height: 36, borderRadius: 10,
                      background: `${color}15`,
                      border: `1px solid ${color}30`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      flexShrink: 0,
                    }}>
                      <Icon size={16} color={color} />
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
                  <p style={{ fontSize: '0.9rem', color: 'var(--color-text-2)', lineHeight: 1.65, margin: 0, paddingLeft: '3rem' }}>
                    {item.desc}
                  </p>

                  {/* Active stage gets a glow bar */}
                  {item.status === 'active' && (
                    <div style={{
                      marginTop: '1rem',
                      height: 3,
                      borderRadius: 2,
                      background: `linear-gradient(90deg, ${item.accent}, transparent)`,
                      opacity: 0.5,
                    }} />
                  )}
                </div>
              </ScrollReveal>

              {/* Connector between stages */}
              {i < p.timeline.length - 1 && (
                <div className="journey-connector" aria-hidden="true">
                  <div style={{
                    width: 1, height: 24,
                    background: `linear-gradient(to bottom, ${item.accent}40, ${p.timeline[i + 1].accent}40)`,
                  }} />
                </div>
              )}
            </div>
          )
        })}
      </div>

      {/* Fork — dramatic split */}
      <ScrollReveal variant="scale">
        <div>
          <SubHead>Ngã ba quyết định</SubHead>
          <div className="fork-dramatic">
            {/* Renew */}
            <div className="fork-card-renew">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.25rem' }}>
                <TrendingUp size={18} color="var(--color-p5)" />
                <span style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--color-p5)' }}>
                  {p.fork.renew.title}
                </span>
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
                {p.fork.renew.items.map((item: string, i: number) => (
                  <li key={i} style={{
                    fontSize: '0.9rem', color: 'var(--color-text-2)',
                    display: 'flex', alignItems: 'flex-start', gap: '0.625rem',
                    lineHeight: 1.55,
                  }}>
                    <span style={{
                      width: 6, height: 6, borderRadius: '50%',
                      background: 'var(--color-p5)',
                      flexShrink: 0, marginTop: '0.45rem',
                    }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Divider */}
            <div className="fork-dramatic-divider" aria-hidden="true" />

            {/* Leave */}
            <div className="fork-card-leave">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.25rem' }}>
                <TrendingDown size={18} color="var(--color-p4)" />
                <span style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--color-p4)' }}>
                  {p.fork.leave.title}
                </span>
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
                {p.fork.leave.items.map((item: string, i: number) => (
                  <li key={i} style={{
                    fontSize: '0.9rem', color: 'var(--color-text-2)',
                    display: 'flex', alignItems: 'flex-start', gap: '0.625rem',
                    lineHeight: 1.55,
                  }}>
                    <span style={{
                      width: 6, height: 6, borderRadius: '50%',
                      background: 'var(--color-p4)',
                      flexShrink: 0, marginTop: '0.45rem',
                      opacity: 0.6,
                    }} />
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
            padding: '1.5rem',
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
