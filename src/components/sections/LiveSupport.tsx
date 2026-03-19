import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { GlassCard } from '@/components/ui/GlassCard';
import { ScrollReveal } from '@/components/animations/ScrollReveal';

export function LiveSupport() {
  return (
    <SectionWrapper id="live-support" darkAlt>
      <ScrollReveal>
        <div className="text-center max-w-lg mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-[family-name:var(--font-heading)] text-text-primary mb-4">
            Hỗ Trợ 24/7
          </h2>
          <p className="text-text-secondary mb-8">
            Tinh Tú Luôn Ở Đây
          </p>

          <GlassCard warm className="text-left">
            <div className="flex items-center gap-3 mb-4 pb-3 border-b border-[rgba(255,255,255,0.06)]">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-nova-gold to-nova-orange flex items-center justify-center text-lg">
                ⭐
              </div>
              <div>
                <p className="text-sm font-bold font-[family-name:var(--font-heading)] text-text-primary">Tinh Tú</p>
                <p className="text-xs text-[#34d399]">Online</p>
              </div>
            </div>

            <div className="space-y-3 mb-4">
              <div className="flex justify-start">
                <div className="max-w-[80%] px-4 py-2.5 rounded-2xl rounded-bl-md bg-[rgba(245,158,11,0.08)] border border-[rgba(245,158,11,0.12)] text-sm text-text-secondary">
                  Chào bạn! Tôi là Tinh Tú — AI Agent thật, không phải chatbot FAQ. Hỏi gì cũng được. 🌟
                </div>
              </div>
            </div>

            <a
              href="https://t.me/Nova_superagent_bot"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center px-6 py-3 rounded-xl bg-gradient-to-r from-nova-gold to-amber-DEFAULT text-space-950 font-bold text-sm font-[family-name:var(--font-heading)] hover:-translate-y-0.5 transition-all shadow-[0_4px_20px_rgba(245,158,11,0.2)]"
            >
              Nhắn Tinh Tú Ngay
            </a>
          </GlassCard>

          <p className="text-xs text-text-muted mt-4">
            Tinh Tú là AI Agent thật — không phải chatbot FAQ. Hỏi gì cũng được.
          </p>
        </div>
      </ScrollReveal>
    </SectionWrapper>
  );
}
