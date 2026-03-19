import ScrollReveal from '@/components/animations/ScrollReveal'
import PhaseSection, { SubHead, Body } from './PhaseSection'
import BeforeAfter from '@/components/ui/BeforeAfter'
import { TipBox, WarnBox } from '@/components/ui/Callouts'
import { phases } from '@/content/phases'

const p = phases[1]

export default function PhaseTraining() {
  const [s0, s1, s2, s3] = p.sections as any[]
  const SKILLS: string[] = s0.skills

  return (
    <PhaseSection id={p.id} number={p.number} tag={p.tag} day={p.day} accent={p.accent} title={p.title} sub={p.sub} tint="var(--color-bg-p2)" alt>
      {/* 2.1 Dạy kỹ năng */}
      <ScrollReveal variant="left">
        <div>
          <SubHead>{s0.title}</SubHead>
          <Body>{s0.body}</Body>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.625rem', marginTop: '1.25rem' }}>
            {SKILLS.map((skill, i) => (
              <ScrollReveal key={skill} delay={i * 0.06} variant="scale">
                <div style={{
                  padding: '0.625rem 1.25rem',
                  background: 'var(--color-bg)',
                  border: '1px solid var(--color-border-med)',
                  borderRadius: 8,
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  color: 'var(--color-text)',
                  transition: 'border-color 0.2s ease',
                }}>
                  {skill}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </ScrollReveal>

      {/* 2.2 Phản hồi */}
      <ScrollReveal variant="right">
        <div>
          <SubHead>{s1.title}</SubHead>
          <Body>{s1.body}</Body>
          <BeforeAfter before={s1.before} after={s1.after} />
          <div style={{ marginTop: '1rem' }}>
            <TipBox>{s1.tip}</TipBox>
          </div>
        </div>
      </ScrollReveal>

      {/* 2.3 Lặp lại */}
      <ScrollReveal variant="up">
        <div>
          <SubHead>{s2.title}</SubHead>
          <Body>{s2.body}</Body>
          {/* Day progress visual — enhanced */}
          <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', marginTop: '1rem' }}>
            {Array.from({ length: 7 }).map((_, i) => (
              <div key={i} style={{
                flex: 1, minWidth: 40, height: 44,
                background: `rgba(217, 112, 64, ${0.15 + i * 0.12})`,
                border: '1px solid var(--color-border)',
                borderRadius: 8,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '0.6875rem', fontWeight: 700,
                color: i < 3 ? 'var(--color-text-3)' : i < 6 ? 'var(--color-text-2)' : 'var(--color-p2)',
                transition: 'transform 0.2s ease',
              }}>
                Ngày {i + 1}
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>

      {/* 2.4 Đừng bỏ rơi */}
      <ScrollReveal variant="scale">
        <div>
          <SubHead>{s3.title}</SubHead>
          <Body>{s3.body}</Body>
          <WarnBox>{s3.warn}</WarnBox>
        </div>
      </ScrollReveal>
    </PhaseSection>
  )
}
