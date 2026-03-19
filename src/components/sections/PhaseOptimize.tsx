import ScrollReveal from '@/components/animations/ScrollReveal'
import PhaseSection, { SubHead, Body } from './PhaseSection'
import ChatMockup from '@/components/ui/ChatMockup'
import { TipBox } from '@/components/ui/Callouts'
import { phases } from '@/content/phases'
import { Terminal } from 'lucide-react'

const p = phases[2]

export default function PhaseOptimize() {
  const [s0, s1] = p.sections as any[]
  const COMMANDS: any[] = s0.commands

  return (
    <PhaseSection id={p.id} number={p.number} tag={p.tag} day={p.day} accent={p.accent} title={p.title} sub={p.sub} tint="var(--color-bg-p3)">
      {/* 3.1 Ba lệnh */}
      <ScrollReveal variant="fade">
        <SubHead>{s0.title}</SubHead>
      </ScrollReveal>

      {COMMANDS.map((cmd: any, i: number) => (
        <ScrollReveal key={cmd.cmd} delay={i * 0.1} variant={i === 0 ? 'left' : i === 1 ? 'up' : 'right'}>
          <div className="card" style={{ padding: '1.5rem', borderColor: 'var(--color-border-med)' }}>
            {/* Command tag */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
              <Terminal size={14} color="var(--color-p3)" style={{ flexShrink: 0 }} />
              <code style={{
                fontFamily: '"SF Mono", "Fira Code", "Consolas", monospace',
                fontSize: '0.875rem', fontWeight: 700,
                color: 'var(--color-p3)',
                background: 'rgba(139, 124, 248, 0.1)',
                padding: '0.25rem 0.625rem',
                borderRadius: 6,
                border: '1px solid rgba(139, 124, 248, 0.2)',
              }}>
                {cmd.cmd}
              </code>
              <span style={{ fontWeight: 600, fontSize: '0.9375rem', color: 'var(--color-text)' }}>
                {cmd.name}
              </span>
            </div>
            <p style={{ fontSize: '0.9rem', color: 'var(--color-text-2)', lineHeight: 1.7, marginBottom: '1.25rem' }}>
              {cmd.desc}
            </p>
            <ChatMockup agentName="Agent" agentInitial="A" messages={cmd.chat.messages} />
          </div>
        </ScrollReveal>
      ))}

      {/* 3.2 80/20 */}
      <ScrollReveal variant="scale">
        <div>
          <SubHead>{s1.title}</SubHead>
          <Body>{s1.body}</Body>
          <TipBox>{s1.tip}</TipBox>
        </div>
      </ScrollReveal>
    </PhaseSection>
  )
}
