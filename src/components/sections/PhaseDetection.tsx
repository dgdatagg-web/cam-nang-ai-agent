import ScrollReveal from '@/components/animations/ScrollReveal'
import PhaseSection, { SubHead, Body } from './PhaseSection'
import BeforeAfter from '@/components/ui/BeforeAfter'
import { TruthBox } from '@/components/ui/Callouts'
import { phases } from '@/content/phases'
import { AlertCircle } from 'lucide-react'

const p = phases[3]

export default function PhaseDetection() {
  const [s0, s1, s2] = p.sections as any[]

  return (
    <PhaseSection id={p.id} number={p.number} tag={p.tag} day={p.day} accent={p.accent} title={p.title} sub={p.sub} tint="var(--color-bg-p4)" alt>
      {/* 4.1 Trạng thái rỗng */}
      <ScrollReveal variant="left">
        <div>
          <SubHead>{s0.title}</SubHead>
          <Body>{s0.body}</Body>
          <BeforeAfter before={s0.before} after={s0.after} />
        </div>
      </ScrollReveal>

      {/* 4.2 Dấu hiệu — side-by-side layout for variety */}
      <ScrollReveal variant="right">
        <div>
          <SubHead>{s1.title}</SubHead>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem', marginTop: '0.5rem' }}>
            {s1.signs.map((sign: string, i: number) => (
              <ScrollReveal key={i} delay={i * 0.05} variant="fade">
                <div style={{
                  display: 'flex', alignItems: 'flex-start', gap: '0.75rem',
                  padding: '0.875rem 1.125rem',
                  background: 'rgba(217, 64, 64, 0.04)',
                  border: '1px solid rgba(217, 64, 64, 0.1)',
                  borderRadius: 10,
                  fontSize: '0.9rem', color: 'var(--color-text-2)',
                  minHeight: 44, /* a11y touch target */
                }}>
                  <AlertCircle size={16} color="var(--color-p4)" style={{ flexShrink: 0, marginTop: 2 }} />
                  {sign}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </ScrollReveal>

      {/* 4.3 Cách xử lý */}
      <ScrollReveal variant="up">
        <div>
          <SubHead>{s2.title}</SubHead>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', margin: '0.5rem 0 1.5rem' }}>
            {s2.steps.map((step: any) => (
              <div key={step.num} style={{
                display: 'flex', gap: '1rem', alignItems: 'flex-start',
              }}>
                <div style={{
                  width: 32, height: 32, borderRadius: '50%',
                  background: 'var(--color-bg)',
                  border: '1px solid var(--color-border-med)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-amber)',
                  flexShrink: 0,
                  minWidth: 44, minHeight: 44, /* a11y touch target wrapping */
                }}>
                  {step.num}
                </div>
                <p style={{ fontSize: '0.9375rem', color: 'var(--color-text-2)', margin: 0, paddingTop: '0.35rem', lineHeight: 1.65 }}>
                  {step.text}
                </p>
              </div>
            ))}
          </div>
          <TruthBox>{s2.truth}</TruthBox>
        </div>
      </ScrollReveal>
    </PhaseSection>
  )
}
