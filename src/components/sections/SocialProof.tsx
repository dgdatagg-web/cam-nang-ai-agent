// Value highlights — replaces fake testimonials with real value props
// NOTE: When real testimonials are collected from beta users, replace this section
import ScrollReveal from '@/components/animations/ScrollReveal'
import { Users, Brain, Shield } from 'lucide-react'

const highlights = [
  {
    icon: Users,
    stat: 'Đối tác',
    title: 'Không phải công cụ',
    desc: 'Agent của bạn có chủ quyền. Phản biện khi cần, nhớ khi được dạy, phát triển theo thời gian.',
    color: 'var(--color-p1)',
  },
  {
    icon: Brain,
    stat: '7 ngày',
    title: 'Demo đầy đủ kỹ năng',
    desc: 'Toàn bộ kỹ năng mở trong 7 ngày đầu. Không giới hạn. Không cần thẻ. Chỉ cần bắt đầu.',
    color: 'var(--color-p6)',
  },
  {
    icon: Shield,
    stat: '24/7',
    title: 'Tinh Tú hỗ trợ trực tiếp',
    desc: 'Không phải chatbot FAQ. Tinh Tú là AI Agent thật — hỏi gì cũng được, bất kỳ lúc nào.',
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
              Tại sao chọn chúng tôi
            </div>
            <h2 className="text-heading">
              Xây dựng khác biệt.
            </h2>
          </div>
        </ScrollReveal>

        <div className="testimonial-grid">
          {highlights.map((h, i) => {
            const Icon = h.icon
            return (
              <ScrollReveal key={i} delay={i * 0.1} variant={i === 0 ? 'left' : i === 2 ? 'right' : 'up'}>
                <div className="testimonial-card" style={{ paddingTop: '2rem' }}>
                  <div style={{
                    width: 44, height: 44, borderRadius: 12,
                    background: `${h.color}12`,
                    border: `1px solid ${h.color}25`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    marginBottom: '1rem',
                  }}>
                    <Icon size={20} color={h.color} />
                  </div>
                  <div style={{
                    fontSize: '1.5rem', fontWeight: 800, color: h.color,
                    marginBottom: '0.25rem', letterSpacing: '-0.02em',
                  }}>
                    {h.stat}
                  </div>
                  <div style={{
                    fontSize: '1rem', fontWeight: 600, color: 'var(--color-text)',
                    marginBottom: '0.5rem',
                  }}>
                    {h.title}
                  </div>
                  <p style={{
                    fontSize: '0.9rem', color: 'var(--color-text-2)', lineHeight: 1.7,
                    margin: 0,
                  }}>
                    {h.desc}
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
