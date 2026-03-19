import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { PhaseHeader } from '@/components/ui/PhaseHeader';
import { GlassCard } from '@/components/ui/GlassCard';
import { ChatBubble } from '@/components/ui/ChatBubble';
import { BeforeAfter } from '@/components/ui/BeforeAfter';
import { TipBox } from '@/components/ui/CalloutBoxes';
import { ScrollReveal } from '@/components/animations/ScrollReveal';

export function PhaseOptimize() {
  return (
    <SectionWrapper id="phase-optimize" darkAlt>
      <ScrollReveal>
        <PhaseHeader
          phaseNumber={3}
          dayRange="Ngày 7-30"
          title="Bí Kíp Nâng Cấp"
          subtitle="Insider knowledge — tricks-of-the-trade từ những người đi trước."
          accent="#a78bfa"
        />
      </ScrollReveal>

      {/* 3.1 — Lệnh Quan Trọng */}
      <ScrollReveal delay={0.1}>
        <div className="mb-12">
          <h3 className="text-xl sm:text-2xl font-bold font-[family-name:var(--font-heading)] text-text-primary mb-6 flex items-center gap-3">
            <span className="text-2xl">⌨️</span>
            Lệnh Quan Trọng
          </h3>

          {/* /compact */}
          <GlassCard accentBorder="left" accentColor="#a78bfa" className="mb-6">
            <div className="mb-4">
              <code className="text-lg font-bold text-[#a78bfa] font-[family-name:var(--font-heading)]">/compact</code>
              <span className="text-sm text-text-muted ml-3">Dọn dẹp trí nhớ ngắn hạn khi agent bắt đầu lú</span>
            </div>
            <BeforeAfter
              before={{
                label: 'Before',
                content: 'Agent trả lời lú, lặp lại, không nhớ context 😵',
                emoji: '🌫️',
              }}
              after={{
                label: 'After',
                content: 'Agent clear, focus, trả lời đúng trọng tâm ✨',
                emoji: '🔮',
              }}
            />
          </GlassCard>

          {/* /remember */}
          <GlassCard accentBorder="left" accentColor="#a78bfa" className="mb-6">
            <div className="mb-4">
              <code className="text-lg font-bold text-[#a78bfa] font-[family-name:var(--font-heading)]">/remember</code>
              <span className="text-sm text-text-muted ml-3">Lưu thông tin quan trọng vào trí nhớ dài hạn</span>
            </div>
            <ChatBubble
              messages={[
                { sender: 'user', text: 'Menu mới có 3 món chay: Bún Chay, Phở Chay, Cơm Chay' },
                { sender: 'agent', text: 'Đã lưu. Từ giờ tôi sẽ nhớ menu chay khi khách hỏi.' },
              ]}
            />
          </GlassCard>

          {/* /forget */}
          <GlassCard accentBorder="left" accentColor="#a78bfa" className="mb-6">
            <div className="mb-4">
              <code className="text-lg font-bold text-[#a78bfa] font-[family-name:var(--font-heading)]">/forget</code>
              <span className="text-sm text-text-muted ml-3">Xóa thông tin agent đã nhớ sai</span>
            </div>
            <ChatBubble
              messages={[
                { sender: 'user', text: 'Quên đi bảng giá cũ tôi gửi hôm qua' },
                { sender: 'agent', text: 'Đã xóa. Gửi bảng mới khi bạn sẵn sàng.' },
              ]}
            />
          </GlassCard>
        </div>
      </ScrollReveal>

      {/* 3.2 — Reset vs Sửa */}
      <ScrollReveal delay={0.15}>
        <div className="mb-12">
          <h3 className="text-xl sm:text-2xl font-bold font-[family-name:var(--font-heading)] text-text-primary mb-4 flex items-center gap-3">
            <span className="text-2xl">🔀</span>
            Khi Nào Nên Reset vs Khi Nào Nên Sửa
          </h3>

          <GlassCard className="p-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[rgba(167,139,250,0.1)] border border-[rgba(167,139,250,0.2)] flex items-center justify-center text-sm shrink-0">
                  🎯
                </div>
                <div>
                  <p className="text-sm font-semibold text-text-primary mb-1">Agent nhầm một thứ cụ thể?</p>
                  <p className="text-sm text-text-muted">→ Sửa trực tiếp. Nói rõ cái gì sai, cái gì đúng.</p>
                </div>
              </div>
              <div className="h-px bg-[rgba(255,255,255,0.06)]" />
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[rgba(167,139,250,0.1)] border border-[rgba(167,139,250,0.2)] flex items-center justify-center text-sm shrink-0">
                  🔄
                </div>
                <div>
                  <p className="text-sm font-semibold text-text-primary mb-1">Agent lú hết mọi thứ?</p>
                  <p className="text-sm text-text-muted">→ <code className="text-[#a78bfa]">/compact</code> rồi nhắc lại context quan trọng.</p>
                </div>
              </div>
            </div>
          </GlassCard>
        </div>
      </ScrollReveal>

      {/* 3.3 — 80/20 */}
      <ScrollReveal delay={0.2}>
        <div className="mb-12">
          <h3 className="text-xl sm:text-2xl font-bold font-[family-name:var(--font-heading)] text-text-primary mb-4 flex items-center gap-3">
            <span className="text-2xl">📊</span>
            Nguyên Tắc 80/20
          </h3>
          <p className="text-text-secondary mb-6 max-w-2xl">
            80% giá trị của agent đến từ 20% kỹ năng. Tìm 20% đó. Đầu tư gấp đôi.
          </p>

          {/* Visual: highlighted vs dimmed skill cards */}
          <div className="grid grid-cols-5 gap-2">
            {['💰', '👥', '📣', '⚙️', '📋'].map((icon, i) => (
              <div
                key={i}
                className={`aspect-square rounded-xl flex items-center justify-center text-2xl transition-all ${
                  i < 2
                    ? 'glass-card-warm border-[rgba(167,139,250,0.3)] scale-105'
                    : 'glass-card opacity-30'
                }`}
              >
                {icon}
              </div>
            ))}
          </div>
          <p className="text-xs text-text-muted text-center mt-3">Tìm 2 kỹ năng mạnh nhất → double down</p>
        </div>
      </ScrollReveal>

      {/* 3.4 — Share plans */}
      <ScrollReveal delay={0.25}>
        <div>
          <h3 className="text-xl sm:text-2xl font-bold font-[family-name:var(--font-heading)] text-text-primary mb-4 flex items-center gap-3">
            <span className="text-2xl">📅</span>
            Nói Cho Agent Biết Kế Hoạch
          </h3>
          <p className="text-text-secondary mb-4 max-w-2xl">
            Share kế hoạch tuần. Mục tiêu. Ưu tiên. Agent có context &gt; agent không có context. Luôn luôn.
          </p>
          <TipBox>
            Mỗi thứ Hai, gửi agent kế hoạch tuần. Chỉ cần 3-5 dòng. Agent sẽ nhớ và chủ động nhắc bạn khi cần.
          </TipBox>
        </div>
      </ScrollReveal>
    </SectionWrapper>
  );
}
