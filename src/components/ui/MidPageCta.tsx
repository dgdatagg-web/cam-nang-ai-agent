// Mid-page CTA — conversion point between major sections
import { Zap } from 'lucide-react'
import ScrollReveal from '@/components/animations/ScrollReveal'

interface MidPageCtaProps {
  headline: string
  sub: string
  ctaText?: string
}

export default function MidPageCta({
  headline,
  sub,
  ctaText = 'Bắt đầu 7 ngày demo miễn phí',
}: MidPageCtaProps) {
  return (
    <div className="mid-cta">
      <div className="container">
        <ScrollReveal variant="scale">
          <h3 className="text-subheading" style={{ marginBottom: '0.5rem', color: 'var(--color-text)' }}>
            {headline}
          </h3>
          <p style={{ fontSize: '0.9375rem', color: 'var(--color-text-2)', marginBottom: '1.5rem', lineHeight: 1.7 }}>
            {sub}
          </p>
          <a
            href="https://t.me/Nova_superagent_bot"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            <Zap size={16} />
            {ctaText}
          </a>
        </ScrollReveal>
      </div>
    </div>
  )
}
