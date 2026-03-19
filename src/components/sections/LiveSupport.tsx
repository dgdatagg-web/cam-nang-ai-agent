import ScrollReveal from '@/components/animations/ScrollReveal'

export default function LiveSupport() {
  return (
    <section style={{
      padding: 'var(--section-py) 1.5rem',
      borderTop: '1px solid var(--color-border)',
      background: 'var(--color-bg)',
    }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <ScrollReveal>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.75rem',
            padding: '0.5rem 1rem',
            background: 'rgba(46, 204, 133, 0.08)',
            border: '1px solid rgba(46, 204, 133, 0.2)',
            borderRadius: 100,
            fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.08em',
            textTransform: 'uppercase', color: 'var(--color-p5)',
            marginBottom: '1.5rem',
          }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--color-p5)', display: 'inline-block' }} />
            24/7 Support
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.08}>
          <h2 className="text-heading" style={{ marginBottom: '1rem' }}>
            NOVA 01 is always here
          </h2>
          <p style={{ color: 'var(--color-text-2)', fontSize: '1rem', lineHeight: 1.7, maxWidth: 480, margin: '0 auto 2.5rem' }}>
            NOVA 01 is a real AI Agent — not an FAQ chatbot. Ask anything: service plans, activation process, or anything you're unsure about.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.16}>
          <div style={{
            maxWidth: 360, margin: '0 auto',
            background: 'var(--color-bg-raised)',
            border: '1px solid var(--color-border-med)',
            borderRadius: 16,
            overflow: 'hidden',
          }}>
            {/* Chat widget header */}
            <div style={{
              padding: '1rem 1.25rem',
              borderBottom: '1px solid var(--color-border)',
              display: 'flex', alignItems: 'center', gap: '0.75rem',
              background: 'var(--color-bg-subtle)',
            }}>
              <div style={{
                width: 36, height: 36, borderRadius: '50%',
                background: 'var(--color-amber)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '0.875rem', fontWeight: 700, color: 'var(--color-bg)',
              }}>
                N1
              </div>
              <div style={{ textAlign: 'left' }}>
                <div style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--color-text)' }}>NOVA 01</div>
                <div style={{ fontSize: '0.6875rem', color: 'var(--color-p5)', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                  <span style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--color-p5)', display: 'inline-block' }} />
                  Online
                </div>
              </div>
            </div>

            {/* Placeholder message */}
            <div style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <div style={{
                padding: '0.625rem 0.875rem',
                background: 'var(--color-amber-dim)',
                border: '1px solid var(--color-amber-line)',
                borderRadius: '12px 12px 12px 3px',
                fontSize: '0.875rem', color: 'var(--color-text-2)',
                lineHeight: 1.6, textAlign: 'left',
              }}>
                Hi there! I'm NOVA 01. Looking to learn more about AI Agents? Let me help you find the right fit for your business.
              </div>

              <a
                href="https://t.me/Nova_superagent_bot"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{ width: '100%', justifyContent: 'center', marginTop: '0.25rem' }}
              >
                Message NOVA 01 now
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 12L12 2M12 2H5M12 2v7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
