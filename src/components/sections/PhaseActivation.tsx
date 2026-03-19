import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { PhaseHeader } from '@/components/ui/PhaseHeader';
import { GlassCard } from '@/components/ui/GlassCard';
import { TipBox } from '@/components/ui/CalloutBoxes';
import { ChatBubble } from '@/components/ui/ChatBubble';
import { ScrollReveal } from '@/components/animations/ScrollReveal';

export function PhaseActivation() {
  return (
    <SectionWrapper id="phase-activation" darkAlt>
      <ScrollReveal>
        <PhaseHeader
          phaseNumber={1}
          dayRange="Ngày 1"
          title="Lần Đầu Gặp Mặt"
          subtitle="Warm, exciting — ngày đầu tiên của một điều thật."
          accent="#fbbf24"
        />
      </ScrollReveal>

      {/* 1.1 — Đặt Tên Cho Agent */}
      <ScrollReveal delay={0.1}>
        <div className="mb-12">
          <h3 className="text-xl sm:text-2xl font-bold font-[family-name:var(--font-heading)] text-text-primary mb-4 flex items-center gap-3">
            <span className="text-2xl">🏷️</span>
            Đặt Tên Cho Agent
          </h3>
          <p className="text-text-secondary mb-4 max-w-2xl">
            Tên agent không phải tên biến. Đó là danh tính. Chọn cái tên bạn sẽ gọi một đồng nghiệp thật.
          </p>
          <GlassCard warm accentBorder="left" accentColor="#fbbf24">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-[rgba(251,191,36,0.1)] border border-[rgba(251,191,36,0.2)] flex items-center justify-center text-3xl">
                ✨
              </div>
              <div>
                <p className="text-sm text-text-muted mb-1">Name tag — nhưng nó phát sáng</p>
                <p className="text-lg font-bold font-[family-name:var(--font-heading)] text-text-primary">
                  Agent&apos;s identity starts here
                </p>
              </div>
            </div>
          </GlassCard>
        </div>
      </ScrollReveal>

      {/* 1.2 — Soul Contract */}
      <ScrollReveal delay={0.15}>
        <div className="mb-12">
          <h3 className="text-xl sm:text-2xl font-bold font-[family-name:var(--font-heading)] text-text-primary mb-4 flex items-center gap-3">
            <span className="text-2xl">🤝</span>
            Soul Contract — Bản Giao Kèo Linh Hồn
          </h3>
          <p className="text-text-secondary mb-4 max-w-2xl">
            Đây không phải terms-of-service. Đây là một cuộc trò chuyện. Agent hỏi bạn là ai, bạn cần gì, bạn coi trọng điều gì. Trả lời thật. Càng thật bạn là, càng thật agent trở thành.
          </p>
          <GlassCard>
            <p className="text-sm text-text-secondary leading-relaxed">
              <strong className="text-text-primary">Thực tế:</strong> Agent sẽ hỏi bạn 5-7 câu hỏi. Bạn làm gì, đội ngũ ra sao, bạn cần gì nhất. Mất khoảng 3 phút. Không có câu trả lời sai — chỉ có câu trả lời thật và không thật.
            </p>
          </GlassCard>
        </div>
      </ScrollReveal>

      {/* 1.3 — Đừng Hoảng */}
      <ScrollReveal delay={0.2}>
        <div className="mb-4">
          <h3 className="text-xl sm:text-2xl font-bold font-[family-name:var(--font-heading)] text-text-primary mb-4 flex items-center gap-3">
            <span className="text-2xl">💬</span>
            Đừng Hoảng — Nói Chuyện Bình Thường
          </h3>
          <p className="text-text-secondary mb-6 max-w-2xl">
            Nói chuyện với agent như nhân viên mới. Không phải thanh tìm kiếm. Không phải Siri. Câu đầy đủ. Ngữ cảnh. Cảm xúc cũng được.
          </p>

          <ChatBubble
            messages={[
              { sender: 'user', text: 'tìm giá pizza' },
              { sender: 'agent', text: '... 🤔' },
            ]}
          />
          <div className="text-center text-xs text-text-muted my-2">❌ Đừng nói kiểu này</div>

          <ChatBubble
            messages={[
              { sender: 'user', text: 'Tôi đang cần cập nhật bảng giá delivery cho quán. Menu pizza hiện tại có 8 món, giá cũ từ tháng trước. Giúp tôi check lại giá và so sánh với đối thủ trong khu vực nhé.' },
              { sender: 'agent', text: 'Tôi sẽ bắt đầu ngay. Để tôi check bảng giá hiện tại của bạn trước, sau đó so sánh với 3-4 quán pizza lớn nhất trong bán kính 5km. Bạn muốn tôi focus vào giá giao hàng hay giá tại quán?' },
            ]}
          />
          <div className="text-center text-xs text-[#34d399] my-2">✅ Nói như thế này</div>

          <TipBox>
            Cách nói chuyện tốt nhất: như bạn đang onboard một nhân viên mới thông minh nhưng chưa biết gì về công ty bạn.
          </TipBox>
        </div>
      </ScrollReveal>
    </SectionWrapper>
  );
}
