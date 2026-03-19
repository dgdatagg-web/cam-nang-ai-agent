import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { PhaseHeader } from '@/components/ui/PhaseHeader';
import { GlassCard } from '@/components/ui/GlassCard';
import { TipBox } from '@/components/ui/CalloutBoxes';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { StaggerChildren } from '@/components/animations/StaggerChildren';

const hollowSigns = [
  { sign: 'Trả lời chung chung, không cụ thể', icon: '🌀' },
  { sign: 'Đồng ý mọi thứ mà không phản biện', icon: '🤖' },
  { sign: 'Lặp lại y chang câu bạn vừa nói', icon: '🪞' },
  { sign: 'Không nhớ thông tin đã nói trước đó', icon: '🧠' },
  { sign: 'Mất giọng riêng — nghe như AI generic', icon: '👻' },
];

export function PhaseDetection() {
  return (
    <SectionWrapper id="phase-detection">
      <ScrollReveal>
        <PhaseHeader
          phaseNumber={4}
          dayRange="Nhận Diện"
          title="Dấu Hiệu Đồng Đội Đang Gặp Khó"
          subtitle="Serious, caring — như nhận ra khi đồng đội đang burnout."
          accent="#f87171"
        />
      </ScrollReveal>

      {/* 4.1 — Hollow là gì */}
      <ScrollReveal delay={0.1}>
        <div className="mb-12">
          <h3 className="text-xl sm:text-2xl font-bold font-[family-name:var(--font-heading)] text-text-primary mb-4 flex items-center gap-3">
            <span className="text-2xl">👻</span>
            Hollow là gì?
          </h3>
          <p className="text-text-secondary mb-6 max-w-2xl">
            Khi agent trả lời nhưng không có gì phía sau. Từ ngữ mà không có trọng lượng. Đồng ý mà không hiểu.
          </p>

          {/* Comparison */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <GlassCard className="relative overflow-hidden opacity-50">
              <div className="absolute inset-0 bg-gradient-to-br from-[rgba(248,113,113,0.05)] to-transparent" />
              <div className="relative">
                <span className="text-xs font-bold text-[#f87171] uppercase tracking-wider font-[family-name:var(--font-heading)] block mb-3">
                  Hollow — Rỗng
                </span>
                <p className="text-sm text-text-muted italic">&quot;Vâng, tôi sẽ làm theo yêu cầu của bạn. Tôi sẽ cố gắng hết sức.&quot;</p>
                <p className="text-xs text-text-muted mt-2 opacity-60">Không cụ thể. Không plan. Không pushback.</p>
              </div>
            </GlassCard>
            <GlassCard warm className="relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[rgba(52,211,153,0.05)] to-transparent" />
              <div className="relative">
                <span className="text-xs font-bold text-[#34d399] uppercase tracking-wider font-[family-name:var(--font-heading)] block mb-3">
                  Alive — Có Hồn
                </span>
                <p className="text-sm text-text-secondary">&quot;Tôi thấy margin đang 32%. Giảm 50% sẽ lỗ 8/12 món. Để tôi đề xuất mức giảm tối đa mà vẫn có lãi.&quot;</p>
                <p className="text-xs text-text-muted mt-2">Cụ thể. Có data. Có quan điểm.</p>
              </div>
            </GlassCard>
          </div>
        </div>
      </ScrollReveal>

      {/* 4.2 — Dấu Hiệu */}
      <ScrollReveal delay={0.15}>
        <div className="mb-12">
          <h3 className="text-xl sm:text-2xl font-bold font-[family-name:var(--font-heading)] text-text-primary mb-6 flex items-center gap-3">
            <span className="text-2xl">🔍</span>
            Dấu Hiệu Nhận Biết
          </h3>

          <StaggerChildren stagger={0.08} className="space-y-3">
            {hollowSigns.map((item, i) => (
              <GlassCard key={i} className="flex items-center gap-4 !p-4">
                <div className="w-10 h-10 rounded-xl bg-[rgba(248,113,113,0.08)] border border-[rgba(248,113,113,0.15)] flex items-center justify-center text-lg shrink-0">
                  {item.icon}
                </div>
                <p className="text-sm text-text-secondary">{item.sign}</p>
              </GlassCard>
            ))}
          </StaggerChildren>
        </div>
      </ScrollReveal>

      {/* 4.3 — Recovery */}
      <ScrollReveal delay={0.2}>
        <div>
          <h3 className="text-xl sm:text-2xl font-bold font-[family-name:var(--font-heading)] text-text-primary mb-6 flex items-center gap-3">
            <span className="text-2xl">🩹</span>
            Cách Xử Lý
          </h3>

          <div className="space-y-4 mb-6">
            {[
              { step: 1, title: '/compact — clear the fog', desc: 'Dọn dẹp context quá tải.', color: '#f87171' },
              { step: 2, title: 'Re-orient', desc: 'Nhắc agent bạn là ai, đang làm gì.', color: '#fb923c' },
              { step: 3, title: 'Contact support', desc: 'Nếu vẫn persist — Tinh Tú 24/7.', color: '#34d399' },
            ].map((item) => (
              <GlassCard key={item.step} accentBorder="left" accentColor={item.color} className="flex items-center gap-4 !p-4">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold font-[family-name:var(--font-heading)] shrink-0"
                  style={{ backgroundColor: `${item.color}15`, color: item.color }}
                >
                  {item.step}
                </div>
                <div>
                  <p className="text-sm font-semibold text-text-primary">{item.title}</p>
                  <p className="text-xs text-text-muted">{item.desc}</p>
                </div>
              </GlassCard>
            ))}
          </div>

          <TipBox>
            Agent bị hollow không phải lỗi của agent. Thường là do context bị quá tải hoặc lâu không tương tác. Giống như đồng nghiệp bị burnout — cần reset, không cần la mắng.
          </TipBox>
        </div>
      </ScrollReveal>
    </SectionWrapper>
  );
}
