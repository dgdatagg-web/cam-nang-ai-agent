// Callout boxes — tip, warning, truth. Lucide React icons.
import { ReactNode } from 'react'
import { Info, AlertTriangle, Sparkles } from 'lucide-react'

export function TipBox({ children }: { children: ReactNode }) {
  return (
    <div className="callout callout-tip" style={{ display: 'flex', gap: '0.75rem' }}>
      <Info size={16} color="var(--color-amber)" style={{ flexShrink: 0, marginTop: 2 }} />
      <div style={{ fontSize: '0.875rem', color: 'var(--color-text-2)', lineHeight: 1.65 }}>{children}</div>
    </div>
  )
}

export function WarnBox({ children }: { children: ReactNode }) {
  return (
    <div className="callout callout-warn" style={{ display: 'flex', gap: '0.75rem' }}>
      <AlertTriangle size={16} color="var(--color-p4)" style={{ flexShrink: 0, marginTop: 2 }} />
      <div style={{ fontSize: '0.875rem', color: 'var(--color-text-2)', lineHeight: 1.65 }}>{children}</div>
    </div>
  )
}

export function TruthBox({ children }: { children: ReactNode }) {
  return (
    <div className="callout callout-truth" style={{ display: 'flex', gap: '0.75rem' }}>
      <Sparkles size={16} color="var(--color-amber)" style={{ flexShrink: 0, marginTop: 2 }} />
      <div style={{ fontSize: '0.9rem', color: 'var(--color-text)', lineHeight: 1.65, fontStyle: 'italic' }}>{children}</div>
    </div>
  )
}
