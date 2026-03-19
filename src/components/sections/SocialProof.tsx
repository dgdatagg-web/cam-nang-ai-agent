// Social proof — real results, no fake names
// These are real outcomes, presented honestly without fake identities
import ScrollReveal from '@/components/animations/ScrollReveal'
import { TrendingUp, Clock, Brain } from 'lucide-react'

const results = [
  {
    icon: Clock,
    stat: '3 phút',
    label: 'Kích hoạt xong',
    desc: 'Không cần cài đặt phức tạp. Trả lời 5–7 câu hỏi — agent bắt đầu làm việc ngay.',
    color: 'var(--color-p1)',
  },
  {
    icon: TrendingUp,
    stat: '7 ngày',
    label: 'Demo toàn lực',
    desc: 'Toàn bộ kỹ năng mở trong 7 ngày đầu. Đủ thời gian để thấy giá trị thật.',
    color: 'var(--color-p2)',
  },
  {
    icon: Brain,
    stat: '24/7',
    label: 'Đồng đội luôn sẵn sàng',
    desc: 'Agent nhớ bối cảnh, nhớ đội ngũ, nhớ quy trình. Như đồng nghiệp thật — nhưng không bao giờ nghỉ phép.',
    color: 'var(--color-p5)',
  },
]

export default function SocialProof() {
  return (
    <section style={{
      padding: 'var(--section-py) 1.5rem',
      borderTop: '1px solid var(--color-border)',
      background: 'var(--color-bg)',
    }}>
      <div className="container-wide">
        <ScrollReveal variant="fade">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.1em',
              textTransform: 'uppercase', color: 'var(--color-amber)',
              marginBottom: '1rem',
            }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--color-amber)', display: 'inline-block' }} />
              Tại sao chọn đồng đội AI
            </div>
            <h2 className="text-heading">
              Không phải lời hứa.<br />
              <span style={{ color: 'var(--color-amber)' }}>Đây là thực tế.</span>
            </h2>
          </div>
        </ScrollReveal>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '1rem',
        }}>
          {results.map((r, i) => {
            const Icon = r.icon
            return (
              <ScrollReveal key={i} delay={i * 0.1} variant={i === 0 ? 'left' : i === 2 ? 'right' : 'up'}>
                <div style={{
                  padding: '2rem',
                  background: 'var(--color-bg-raised)',
                  border: '1px solid var(--color-border)',
                  borderRadius: 12,
                  height: '100%',
                }}>
                  <div style={{
                    width: 40, height: 40, borderRadius: 10,
                    background: `color-mix(in srgb, ${r.color} 10%, transparent)`,
                    border: `1px solid color-mix(in srgb, ${r.color} 20%, transparent)`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    marginBottom: '1.25rem',
                  }}>
                    <Icon size={18} color={r.color} />
                  </div>
                  <div style={{
                    fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                    fontWeight: 800,
                    color: r.color,
                    letterSpacing: '-0.02em',
                    lineHeight: 1,
                    marginBottom: '0.25rem',
                  }}>
                    {r.stat}
                  </div>
                  <div style={{
                    fontSize: '0.9375rem',
                    fontWeight: 600,
                    color: 'var(--color-text)',
                    marginBottom: '0.75rem',
                  }}>
                    {r.label}
                  </div>
                  <p style={{
                    fontSize: '0.875rem',
                    color: 'var(--color-text-2)',
                    lineHeight: 1.65,
                    margin: 0,
                  }}>
                    {r.desc}
                  </p>
                </div>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
