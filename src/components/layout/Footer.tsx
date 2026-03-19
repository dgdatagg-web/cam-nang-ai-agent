import { ScrollReveal } from '@/components/animations/ScrollReveal';

export function Footer() {
  return (
    <footer className="relative py-20 px-5 bg-[#050912] overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-[rgba(245,158,11,0.04)] blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-[1120px] text-center">
        <ScrollReveal>
          <h2 className="text-gradient-hero text-3xl sm:text-4xl md:text-5xl font-black font-[family-name:var(--font-heading)] tracking-tight mb-6">
            Sẵn Sàng Gặp
            <br />
            Đồng Đội Của Bạn?
          </h2>

          <a
            href="https://t.me/Nova_superagent_bot"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-10 py-5 rounded-2xl bg-gradient-to-r from-nova-gold to-amber-DEFAULT text-space-950 font-bold text-base sm:text-lg font-[family-name:var(--font-heading)] shadow-[0_6px_30px_rgba(245,158,11,0.3)] hover:shadow-[0_8px_40px_rgba(245,158,11,0.4)] hover:-translate-y-1 transition-all duration-200"
          >
            Kích Hoạt Agent — Bắt Đầu 7 Ngày Demo
          </a>

          <p className="text-sm text-text-muted mt-6">
            Không cần thẻ. Không cần code. Chỉ cần bắt đầu nói chuyện.
          </p>
        </ScrollReveal>

        <div className="mt-16 pt-8 border-t border-[rgba(255,255,255,0.06)]">
          <p className="text-xs text-text-muted">
            © 2026 Do Ngoc Minh — Project Nova
          </p>
          <p className="text-xs text-text-muted mt-1">
            <a href="https://trolythongminh.io.vn" className="hover:text-nova-gold transition-colors">
              trolythongminh.io.vn
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
