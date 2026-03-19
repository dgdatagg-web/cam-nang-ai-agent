// Sticky CTA bar — appears after scrolling past hero
'use client'
import { useEffect, useState } from 'react'
import { Zap } from 'lucide-react'

export default function StickyCtaBar() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      // Show after scrolling past hero (100svh)
      setVisible(window.scrollY > window.innerHeight * 0.8)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className={`sticky-cta ${visible ? 'visible' : ''}`} role="complementary" aria-label="Activate Agent">
      <div className="sticky-cta-inner">
        <div>
          <div style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--color-text)' }}>
            Ready to meet your teammate?
          </div>
          <div style={{ fontSize: '0.8125rem', color: 'var(--color-text-3)' }}>
            7-day free demo · No credit card needed
          </div>
        </div>
        <a
          href="https://www.myclaw.vn/en/pricing"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
          style={{ whiteSpace: 'nowrap' }}
        >
          <Zap size={16} />
          Start 7-day demo
        </a>
      </div>
    </div>
  )
}
