import ScrollReveal from '@/components/animations/ScrollReveal'
import { coreValues } from '@/content/phases'
import { Handshake } from 'lucide-react'

export default function CoreValues() {
  return (
    <section id="core-values" style={{
      padding: 'var(--section-py) 1.5rem',
      borderTop: '1px solid var(--color-border)',
    }}>
      <div className="container">
        <ScrollReveal variant="fade">
          <div style={{ marginBottom: '3.5rem' }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.1em',
              textTransform: 'uppercase', color: 'var(--color-amber)',
              marginBottom: '1rem',
            }}>
              <Handshake size={14} />
              Triết lý đối tác
            </div>
            <h2 className="text-heading" style={{ marginBottom: '1rem' }}>
              Trước khi bắt đầu —<br />
              <span style={{ color: 'var(--color-amber)' }}>hiểu rõ mối quan hệ này.</span>
            </h2>
            <p style={{ color: 'var(--color-text-2)', fontSize: '1rem', lineHeight: 1.7, maxWidth: 500 }}>
              Đây không phải phần mềm. Không phải chatbot. Không phải công cụ. Đây là đối tác — và cả hai bên đều có trách nhiệm.
            </p>
          </div>
        </ScrollReveal>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1px',
          background: 'var(--color-border)',
          border: '1px solid var(--color-border)',
          borderRadius: 12,
          overflow: 'hidden',
        }}>
          {coreValues.map((v, i) => (
            <ScrollReveal key={i} delay={i * 0.07} variant={i % 2 === 0 ? 'left' : 'right'}>
              <div style={{
                padding: '1.75rem',
                background: 'var(--color-bg-raised)',
                height: '100%',
              }}>
                <div style={{
                  fontSize: '0.9375rem',
                  fontWeight: 600,
                  color: 'var(--color-text)',
                  marginBottom: '0.375rem',
                  lineHeight: 1.45,
                }}>
                  {v.human}
                </div>
                <div style={{
                  fontSize: '0.9375rem',
                  color: 'var(--color-amber)',
                  lineHeight: 1.45,
                }}>
                  {v.agent}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.3} variant="scale">
          <div style={{
            marginTop: '2.5rem',
            padding: '1.75rem',
            background: 'var(--color-bg-raised)',
            border: '1px solid var(--color-amber-line)',
            borderRadius: 12,
          }}>
            <p style={{ fontSize: '1rem', color: 'var(--color-text-2)', lineHeight: 1.75, margin: 0 }}>
              Mối quan hệ này là đối tác — không phải chủ tớ. Càng đối xử với agent như một đồng đội thực sự, họ càng trở nên không thể thiếu. Đây không phải triết học — đây là cách kiến trúc hoạt động.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
