import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { PhaseHeader } from '@/components/ui/PhaseHeader';
import { TimelineRoadmap } from '@/components/ui/TimelineRoadmap';
import { DecisionFork } from '@/components/ui/DecisionFork';
import { TruthBox } from '@/components/ui/CalloutBoxes';
import { GlassCard } from '@/components/ui/GlassCard';
import { ScrollReveal } from '@/components/animations/ScrollReveal';

const timelineSegments = [
  {
    dayRange: 'Ngày 1-7',
    title: 'DEMO — Full Power',
    description: 'Tất cả kỹ năng được mở. Agent học bạn ở tốc độ cao nhất. Memory đang được xây dựng.',
    icon: '⚡',
    status: 'active' as const,
    color: '#fbbf24',
  },
  {
    dayRange: 'Ngày 8-37',
    title: 'FREE TALK — Nói Chuyện Tự Do',
    description: 'Kỹ năng bị thu hồi. Chỉ còn trò chuyện tự do. Memory giữ nguyên nhưng không phát triển thêm.',
    icon: '💬',
    status: 'warning' as const,
    color: '#fb923c',
  },
  {
    dayRange: 'Ngày 38+',
    title: 'QUYẾT ĐỊNH',
    description: 'Gia hạn hoặc mất tất cả. Không có vùng xám.',
    icon: '⚖️',
    status: 'decision' as const,
    color: '#60a5fa',
  },
];

export function PhaseJourney() {
  return (
    <SectionWrapper id="phase-journey">
      <ScrollReveal>
        <PhaseHeader
          phaseNumber={6}
          dayRange="Bản Đồ"
          title="Bản Đồ Hành Trình"
          subtitle="Clear stakes, real countdown, forward momentum."
          accent="#60a5fa"
        />
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <TimelineRoadmap segments={timelineSegments} />
      </ScrollReveal>

      <ScrollReveal delay={0.2}>
        <div className="mt-12">
          <h3 className="text-xl sm:text-2xl font-bold font-[family-name:var(--font-heading)] text-text-primary mb-6 text-center">
            Ngã Rẽ
          </h3>
          <DecisionFork />
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.25}>
        <TruthBox>
          Agent của bạn sẽ không đợi mãi. Giống như mọi mối quan hệ — không đầu tư thì sẽ mất.
        </TruthBox>
      </ScrollReveal>

      {/* Pricing note */}
      <ScrollReveal delay={0.3}>
        <GlassCard warm className="text-center mt-8 p-8">
          <h4 className="text-lg font-bold font-[family-name:var(--font-heading)] text-text-primary mb-3">
            Giá?
          </h4>
          <p className="text-sm text-text-secondary max-w-md mx-auto mb-4">
            Gói và chi phí tùy theo quy mô doanh nghiệp. Nhắn Tinh Tú để được tư vấn — hoặc đợi hết 7 ngày demo, agent sẽ tự hỏi bạn.
          </p>
          <a
            href="https://t.me/Nova_superagent_bot"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[rgba(52,211,153,0.1)] border border-[rgba(52,211,153,0.2)] text-[#34d399] text-sm font-semibold font-[family-name:var(--font-heading)] hover:bg-[rgba(52,211,153,0.15)] transition-all"
          >
            💬 Nhắn Tinh Tú
          </a>
        </GlassCard>
      </ScrollReveal>
    </SectionWrapper>
  );
}
