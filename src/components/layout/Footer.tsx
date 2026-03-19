import ScrollReveal from '@/components/animations/ScrollReveal'
import { Zap, ExternalLink } from 'lucide-react'

export default function Footer() {
  return (
    <>
      {/* Footer CTA */}
      <section id="footer-cta" style={{
        padding: 'var(--section-py) 1.5rem',
        borderTop: '1px solid var(--color-border)',
        background: 'var(--color-bg-raised)',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Subtle gradient behind CTA */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse at center, rgba(232, 160, 32, 0.04) 0%, transparent 70%)',
        }} aria-hidden="true" />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <ScrollReveal variant="scale">
            <h2 className="text-heading" style={{ marginBottom: '1rem' }}>
              Sẵn sàng gặp đồng đội của bạn?
            </h2>
            <p style={{ color: 'var(--color-text-2)', fontSize: '1rem', lineHeight: 1.7, maxWidth: 420, margin: '0 auto 2.5rem' }}>
              Không cần thẻ. Không cần code. Chỉ cần bắt đầu nói chuyện.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.1} variant="up">
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              <a href="https://t.me/Nova_superagent_bot" target="_blank" rel="noopener noreferrer" className="btn-primary">
                <Zap size={16} />
                Kích hoạt Agent — Bắt đầu 7 ngày demo
              </a>
              <a href="https://trolythongminh.io.vn" className="btn-ghost">
                <ExternalLink size={14} />
                Tìm hiểu thêm
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        borderTop: '1px solid var(--color-border)',
        padding: '2rem 1.5rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '1rem',
        maxWidth: 'var(--max-w-wide)',
        marginInline: 'auto',
        width: '100%',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <svg width="16" height="16" viewBox="0 0 18 18" fill="none" aria-hidden="true">
            <path d="M9 2l1.8 3.6L15 7l-3 3 .6 4.2L9 12l-3.6 2.2L6 9.6 3 7l4.2-1.4L9 2Z" fill="var(--color-amber)"/>
          </svg>
          <span style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-text)' }}>
            Trợ Lý Thông Minh
          </span>
        </div>
        <div style={{ display: 'flex', gap: '1.5rem' }}>
          <a href="https://trolythongminh.io.vn" style={{ fontSize: '0.8125rem', color: 'var(--color-text-3)', textDecoration: 'none', minHeight: 44, display: 'flex', alignItems: 'center' }}>
            Trang chủ
          </a>
          <a href="https://trolythongminh.io.vn/blog" style={{ fontSize: '0.8125rem', color: 'var(--color-text-3)', textDecoration: 'none', minHeight: 44, display: 'flex', alignItems: 'center' }}>
            Blog
          </a>
          <a href="https://t.me/Nova_superagent_bot" target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.8125rem', color: 'var(--color-text-3)', textDecoration: 'none', minHeight: 44, display: 'flex', alignItems: 'center' }}>
            Liên hệ
          </a>
        </div>
        <p style={{ fontSize: '0.75rem', color: 'var(--color-text-3)', margin: 0 }}>
          © 2026 Do Ngoc Minh
        </p>
      </footer>
    </>
  )
}
