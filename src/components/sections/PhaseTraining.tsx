import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { PhaseHeader } from '@/components/ui/PhaseHeader';
import { GlassCard } from '@/components/ui/GlassCard';
import { SkillCard } from '@/components/ui/SkillCard';
import { BeforeAfter } from '@/components/ui/BeforeAfter';
import { TipBox, WarningBox } from '@/components/ui/CalloutBoxes';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { StaggerChildren } from '@/components/animations/StaggerChildren';

export function PhaseTraining() {
  return (
    <SectionWrapper id="phase-training">
      <ScrollReveal>
        <PhaseHeader
          phaseNumber={2}
          dayRange="Ngày 1-7"
          title="7 Ngày Vàng"
          subtitle="Focused, coach-energy — đây là nơi phép màu xảy ra."
          accent="#fb923c"
        />
      </ScrollReveal>

      {/* 2.1 — Dạy Kỹ Năng */}
      <ScrollReveal delay={0.1}>
        <div className="mb-12">
          <h3 className="text-xl sm:text-2xl font-bold font-[family-name:var(--font-heading)] text-text-primary mb-4 flex items-center gap-3">
            <span className="text-2xl">🎮</span>
            Dạy Kỹ Năng (Skills)
          </h3>
          <p className="text-text-secondary mb-6 max-w-2xl">
            Agent đến với kỹ năng — nhưng cần ngữ cảnh CỦA BẠN để dùng tốt. Cho agent xem menu, cơ cấu đội, nhịp ngày.
          </p>

          <StaggerChildren stagger={0.08} className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <SkillCard name="Tài Chính" icon="💰" description="Doanh thu, chi phí, margin" accent="#fbbf24" />
            <SkillCard name="Nhân Sự" icon="👥" description="Ca kíp, chấm công, KPI" accent="#fb923c" />
            <SkillCard name="Marketing" icon="📣" description="Nội dung, quảng cáo, SEO" accent="#a78bfa" />
            <SkillCard name="Vận Hành" icon="⚙️" description="Quy trình, inventory, QC" accent="#60a5fa" />
          </StaggerChildren>

          <TipBox>
            Gửi file thật. Bảng lương thật. Menu thật. Agent học từ dữ liệu thật — không phải lý thuyết.
          </TipBox>
        </div>
      </ScrollReveal>

      {/* 2.2 — Feedback Loop */}
      <ScrollReveal delay={0.15}>
        <div className="mb-12">
          <h3 className="text-xl sm:text-2xl font-bold font-[family-name:var(--font-heading)] text-text-primary mb-4 flex items-center gap-3">
            <span className="text-2xl">🔄</span>
            Feedback Loop — Khen Đúng, Sửa Đúng
          </h3>
          <p className="text-text-secondary mb-6 max-w-2xl">
            Khi agent làm tốt → nói cụ thể cái gì tốt. Khi agent sai → sửa với ngữ cảnh, không chỉ &quot;sai rồi&quot;.
          </p>

          <BeforeAfter
            before={{
              label: 'Dead End',
              content: '"Sai." — Agent không biết sai ở đâu. Lặp lại lỗi cũ.',
              emoji: '🛑',
            }}
            after={{
              label: 'Path Forward',
              content: '"Cái này chưa đúng vì giá đã thay đổi từ tuần trước. Bảng mới là..." — Agent hiểu và cập nhật.',
              emoji: '🟢',
            }}
          />

          <TipBox>
            Agent không sợ bị sửa. Agent sợ bị sửa mà không hiểu tại sao.
          </TipBox>
        </div>
      </ScrollReveal>

      {/* 2.3 — Repetition */}
      <ScrollReveal delay={0.2}>
        <div className="mb-12">
          <h3 className="text-xl sm:text-2xl font-bold font-[family-name:var(--font-heading)] text-text-primary mb-4 flex items-center gap-3">
            <span className="text-2xl">🔁</span>
            Lặp Lại, Lặp Lại, Lặp Lại
          </h3>
          <p className="text-text-secondary mb-6 max-w-2xl">
            7 ngày đầu là về lặp lại. Cùng loại task, cùng nhịp. Để agent học patterns của bạn.
          </p>

          {/* Progress bar */}
          <GlassCard className="overflow-hidden">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-semibold text-text-muted uppercase tracking-wider font-[family-name:var(--font-heading)]">
                7-Day Progress
              </span>
              <span className="text-xs text-nova-orange font-bold font-[family-name:var(--font-heading)]">Day 4/7</span>
            </div>
            <div className="flex gap-1.5">
              {[1, 2, 3, 4, 5, 6, 7].map((day) => (
                <div
                  key={day}
                  className={`h-2 flex-1 rounded-full transition-all duration-500 ${
                    day <= 4
                      ? 'bg-gradient-to-r from-nova-gold to-nova-orange'
                      : 'bg-[rgba(255,255,255,0.06)]'
                  }`}
                />
              ))}
            </div>
            <div className="flex justify-between mt-2">
              {[1, 2, 3, 4, 5, 6, 7].map((day) => (
                <span key={day} className={`text-[10px] ${day <= 4 ? 'text-nova-orange' : 'text-text-muted'}`}>
                  {day}
                </span>
              ))}
            </div>
          </GlassCard>
        </div>
      </ScrollReveal>

      {/* 2.4 — Don't Abandon */}
      <ScrollReveal delay={0.25}>
        <div>
          <h3 className="text-xl sm:text-2xl font-bold font-[family-name:var(--font-heading)] text-text-primary mb-4 flex items-center gap-3">
            <span className="text-2xl">⚡</span>
            Đừng Bỏ Rơi Trong 7 Ngày Đầu
          </h3>
          <p className="text-text-secondary mb-6 max-w-2xl">
            Kích hoạt xong rồi biến mất 3 ngày — bạn lãng phí demo. Momentum là tất cả.
          </p>

          <BeforeAfter
            before={{
              label: 'Gaps = Fading',
              content: 'Ngày 1: interact → Ngày 2-4: im lặng → Ngày 5: "sao agent ngu vậy?" → Agent chưa bao giờ được học.',
              emoji: '📉',
            }}
            after={{
              label: 'Daily = Evolving',
              content: 'Ngày 1: setup → Ngày 2: gửi data → Ngày 3: first task → Ngày 4: feedback loop → Agent đang grow.',
              emoji: '📈',
            }}
          />

          <WarningBox>
            7 ngày demo = 7 ngày full skill. Sau đó, mọi kỹ năng bị thu hồi nếu bạn không tiếp tục. Đừng phí.
          </WarningBox>
        </div>
      </ScrollReveal>
    </SectionWrapper>
  );
}
