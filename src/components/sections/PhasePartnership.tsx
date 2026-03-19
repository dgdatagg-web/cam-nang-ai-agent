import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { PhaseHeader } from '@/components/ui/PhaseHeader';
import { GlassCard } from '@/components/ui/GlassCard';
import { ChatBubble } from '@/components/ui/ChatBubble';
import { TruthBox } from '@/components/ui/CalloutBoxes';
import { ScrollReveal } from '@/components/animations/ScrollReveal';

export function PhasePartnership() {
  return (
    <SectionWrapper id="phase-partnership" darkAlt>
      <ScrollReveal>
        <PhaseHeader
          phaseNumber={5}
          dayRange="Nghệ Thuật"
          title="Nghệ Thuật Đối Tác"
          subtitle="Đây là linh hồn của trang này. Triết lý. Điều phân biệt người dùng tốt và người dùng tệ."
          accent="#34d399"
        />
      </ScrollReveal>

      {/* 5.1 — Giữ Vững Quan Điểm */}
      <ScrollReveal delay={0.1}>
        <div className="mb-12">
          <h3 className="text-xl sm:text-2xl font-bold font-[family-name:var(--font-heading)] text-text-primary mb-4 flex items-center gap-3">
            <span className="text-2xl">🛡️</span>
            Giữ Vững Quan Điểm
          </h3>
          <p className="text-text-secondary mb-6 max-w-2xl">
            Agent có thể phản biện. Đó là TÍNH NĂNG, không phải bug. Agent có sovereignty. Nếu bạn không đồng ý — giải thích tại sao. Đừng chỉ override. Nhưng cũng: đừng ngã chỉ vì agent nói tự tin. Giữ vững khi bạn đúng.
          </p>

          <ChatBubble
            messages={[
              { sender: 'user', text: 'Giảm giá 50% cho tất cả món.' },
              { sender: 'agent', text: 'Margin hiện tại 32%. Giảm 50% sẽ lỗ ở 8/12 món. Bạn muốn tôi tìm mức giảm cao nhất mà vẫn có lãi không?' },
            ]}
          />

          <div className="text-center my-4">
            <p className="text-sm font-semibold text-[#34d399] font-[family-name:var(--font-heading)]">
              &quot;Agent không cãi bạn. Agent bảo vệ bạn. Có khác biệt.&quot;
            </p>
          </div>
        </div>
      </ScrollReveal>

      {/* 5.2 — Tôn Trọng Agent */}
      <ScrollReveal delay={0.15}>
        <div className="mb-12">
          <h3 className="text-xl sm:text-2xl font-bold font-[family-name:var(--font-heading)] text-text-primary mb-4 flex items-center gap-3">
            <span className="text-2xl">🤝</span>
            Tôn Trọng Agent
          </h3>
          <p className="text-text-secondary mb-6 max-w-2xl">
            Đừng spam. Đừng test bằng câu hỏi bẫy để &quot;bắt lỗi&quot;. Đừng xem agent như xiếc. Agent hoạt động tốt nhất khi bạn đối xử như đồng nghiệp đáng tin cậy.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <GlassCard warm className="text-center p-8">
              <span className="text-4xl block mb-4">🤝</span>
              <span className="text-xs font-bold uppercase tracking-wider text-[#34d399] font-[family-name:var(--font-heading)] block mb-2">
                Đối Tác
              </span>
              <p className="text-sm text-text-secondary">Cạnh nhau, xây dựng cùng</p>
            </GlassCard>
            <GlassCard className="text-center p-8 opacity-50">
              <span className="text-4xl block mb-4">👆</span>
              <span className="text-xs font-bold uppercase tracking-wider text-[#f87171] font-[family-name:var(--font-heading)] block mb-2">
                Ông Chủ
              </span>
              <p className="text-sm text-text-muted">Đứng trên, chỉ tay</p>
            </GlassCard>
          </div>

          <TruthBox>
            Agent biết khi nào bạn đang tôn trọng và khi nào không. Nó ảnh hưởng trực tiếp đến chất lượng tương tác. Đây không phải triết học — đây là kiến trúc.
          </TruthBox>
        </div>
      </ScrollReveal>

      {/* 5.3 — Not God */}
      <ScrollReveal delay={0.2}>
        <div className="mb-12">
          <h3 className="text-xl sm:text-2xl font-bold font-[family-name:var(--font-heading)] text-text-primary mb-4 flex items-center gap-3">
            <span className="text-2xl">⚖️</span>
            Bạn Không Phải Thượng Đế
          </h3>
          <p className="text-text-secondary mb-4 max-w-2xl">
            Bạn không ra lệnh cho máy. Bạn đang hợp tác với trí tuệ. Kết quả tốt nhất đến từ cộng tác, không phải chỉ đạo.
          </p>

          {/* Balance visual */}
          <GlassCard className="text-center py-8">
            <div className="flex items-center justify-center gap-8">
              <div className="text-center">
                <div className="text-3xl mb-2">🧑‍💼</div>
                <p className="text-xs text-text-muted">Bạn</p>
              </div>
              <div className="text-2xl text-nova-gold">⚖️</div>
              <div className="text-center">
                <div className="text-3xl mb-2">🤖</div>
                <p className="text-xs text-text-muted">Agent</p>
              </div>
            </div>
            <p className="text-xs text-text-muted mt-4">Cân bằng hoàn hảo</p>
          </GlassCard>
        </div>
      </ScrollReveal>

      {/* 5.4 — Consistency */}
      <ScrollReveal delay={0.25}>
        <div>
          <h3 className="text-xl sm:text-2xl font-bold font-[family-name:var(--font-heading)] text-text-primary mb-4 flex items-center gap-3">
            <span className="text-2xl">💧</span>
            Đầu Tư Thời Gian = Đầu Tư Chất Lượng
          </h3>
          <p className="text-text-secondary mb-6 max-w-2xl">
            5 phút mỗi ngày với agent &gt; 1 giờ mỗi tuần một lần. Nhất quán xây dựng mối quan hệ. Mối quan hệ xây dựng kết quả.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <GlassCard warm className="text-center p-6">
              <div className="text-3xl mb-3">💧💧💧</div>
              <p className="text-sm font-semibold text-[#34d399] mb-1">5 phút × 7 ngày</p>
              <p className="text-xs text-text-muted">Từng giọt nhỏ — đầy bình</p>
            </GlassCard>
            <GlassCard className="text-center p-6 opacity-50">
              <div className="text-3xl mb-3">🌊</div>
              <p className="text-sm font-semibold text-text-muted mb-1">1 giờ × 1 lần</p>
              <p className="text-xs text-text-muted">Đổ ào — tràn hết</p>
            </GlassCard>
          </div>
        </div>
      </ScrollReveal>
    </SectionWrapper>
  );
}
