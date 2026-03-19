import ScrollReveal from '@/components/animations/ScrollReveal'
import PhaseSection, { SubHead, Body } from './PhaseSection'
import ChatMockup from '@/components/ui/ChatMockup'
import { TipBox, TruthBox } from '@/components/ui/Callouts'
import { phases } from '@/content/phases'

const p = phases[0]

export default function PhaseActivation() {
  const [s0, s1, s2] = p.sections as any[]

  return (
    <PhaseSection id={p.id} number={p.number} tag={p.tag} day={p.day} accent={p.accent} title={p.title} sub={p.sub} tint="var(--color-bg-p1)">
      {/* 1.1 Đặt tên */}
      <ScrollReveal variant="left">
        <div>
          <SubHead>{s0.title}</SubHead>
          <Body>{s0.body}</Body>
          <TipBox>{s0.tip}</TipBox>
        </div>
      </ScrollReveal>

      {/* 1.2 Cuộc trò chuyện đầu tiên */}
      <ScrollReveal variant="right">
        <div>
          <SubHead>{s1.title}</SubHead>
          <Body>{s1.body}</Body>
          <TruthBox>{s1.truth}</TruthBox>
        </div>
      </ScrollReveal>

      {/* 1.3 Nói chuyện bình thường */}
      <ScrollReveal variant="up">
        <div>
          <SubHead>{s2.title}</SubHead>
          <Body>{s2.body}</Body>
          <ChatMockup
            agentName="Agent"
            agentInitial="A"
            label={s2.chat.label}
            messages={s2.chat.messages}
          />
        </div>
      </ScrollReveal>
    </PhaseSection>
  )
}
