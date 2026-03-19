interface BeforeAfterProps {
  before: { label: string; text: string }
  after:  { label: string; text: string }
}

export default function BeforeAfter({ before, after }: BeforeAfterProps) {
  return (
    <div className="ba-grid">
      <div className="ba-cell ba-cell-bad">
        <div style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-p4)', marginBottom: '0.625rem' }}>
          {before.label}
        </div>
        <p style={{ fontSize: '0.9rem', color: 'var(--color-text-2)', margin: 0, lineHeight: 1.6 }}>
          {before.text}
        </p>
      </div>
      <div className="ba-cell ba-cell-good">
        <div style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-p5)', marginBottom: '0.625rem' }}>
          {after.label}
        </div>
        <p style={{ fontSize: '0.9rem', color: 'var(--color-text-2)', margin: 0, lineHeight: 1.6 }}>
          {after.text}
        </p>
      </div>
    </div>
  )
}
