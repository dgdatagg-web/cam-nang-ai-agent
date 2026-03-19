import ScrollReveal from '@/components/animations/ScrollReveal'
import PhaseSection, { SubHead, Body } from './PhaseSection'
import ChatMockup from '@/components/ui/ChatMockup'
import BeforeAfter from '@/components/ui/BeforeAfter'
import { TipBox, TruthBox } from '@/components/ui/Callouts'
import { phases } from '@/content/phases'

const p = phases[4]

export default function PhasePartnership() {
  const [s0, s1, s2] = p.sections as any[]

  return (
    <PhaseSection id={p.id} number={p.number} tag={p.tag} day={p.day} accent={p.accent} title={p.title} sub={p.sub} tint="var(--color-bg-p5)">
      {/* 5.1 Phản biện là tính năng */}
      <ScrollReveal variant="left">
        <div>
          <SubHead>{s0.title}</SubHead>
          <Body>{s0.body}</Body>
          <ChatMockup agentName="Agent" agentInitial="A" messages={s0.chat.messages} />
          <div style={{ marginTop: '1rem' }}>
            <TruthBox>{s0.truth}</TruthBox>
          </div>
        </div>
      </ScrollReveal>

      {/* 5.2 Tôn trọng — centered highlight layout */}
      <ScrollReveal variant="scale">
        <div style={{
          padding: '2.5rem',
          background: 'var(--color-bg-raised)',
          border: '1px solid var(--color-border)',
          borderRadius: 16,
        }}>
          <SubHead>{s1.title}</SubHead>
          <Body>{s1.body}</Body>
          <BeforeAfter before={s1.before} after={s1.after} />
          <div style={{ marginTop: '1rem' }}>
            <TipBox>{s1.tip}</TipBox>
          </div>
        </div>
      </ScrollReveal>

      {/* 5.3 5 phút mỗi ngày */}
      <ScrollReveal variant="right">
        <div>
          <SubHead>{s2.title}</SubHead>
          <Body>{s2.body}</Body>

          {/* Visual: daily drops vs weekly dump */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1px', background: 'var(--color-border)', border: '1px solid var(--color-border)', borderRadius: 12, overflow: 'hidden' }}>
            <div style={{ padding: '1.5rem', background: 'rgba(46, 204, 133, 0.04)' }}>
              <div style={{ fontSize: '0.6875rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-p5)', marginBottom: '0.75rem' }}>
                Nhất quán mỗi ngày
              </div>
              <div style={{ display: 'flex', gap: '0.375rem', alignItems: 'flex-end', height: 48 }}>
                {[2, 3, 3.5, 4, 4.5, 5, 6].map((h, i) => (
                  <div key={i} style={{
                    flex: 1,
                    height: `${h * 7}px`,
                    background: `rgba(46, 204, 133, ${0.2 + i * 0.1})`,
                    borderRadius: '4px 4px 0 0',
                    transition: 'height 0.3s ease',
                  }} />
                ))}
              </div>
            </div>
            <div style={{ padding: '1.5rem', background: 'rgba(92,88,82,0.08)' }}>
              <div style={{ fontSize: '0.6875rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-text-3)', marginBottom: '0.75rem' }}>
                Tập trung một lần/tuần
              </div>
              <div style={{ display: 'flex', gap: '0.375rem', alignItems: 'flex-end', height: 48 }}>
                {[1, 1, 1, 1, 1, 1, 8].map((h, i) => (
                  <div key={i} style={{
                    flex: 1,
                    height: `${h * 7}px`,
                    background: i === 6 ? 'rgba(92,88,82,0.35)' : 'rgba(92,88,82,0.12)',
                    borderRadius: '4px 4px 0 0',
                  }} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </PhaseSection>
  )
}
