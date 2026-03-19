// Enhanced scroll-reveal with animation variants
// Variants: 'up' (default), 'left', 'right', 'scale', 'fade'
'use client'
import { useEffect, useRef } from 'react'

type Variant = 'up' | 'left' | 'right' | 'scale' | 'fade'

const variantClass: Record<Variant, string> = {
  up: 'reveal-up',
  left: 'reveal-left',
  right: 'reveal-right',
  scale: 'reveal-scale',
  fade: 'reveal-fade',
}

export default function ScrollReveal({
  children,
  delay = 0,
  variant = 'up',
  className = '',
}: {
  children: React.ReactNode
  delay?: number
  variant?: Variant
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.transitionDelay = delay ? `${delay}s` : ''
          el.classList.add('visible')
          observer.unobserve(el)
        }
      },
      { rootMargin: '-60px 0px' }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [delay])

  return (
    <div ref={ref} className={`reveal ${variantClass[variant]} ${className}`}>
      {children}
    </div>
  )
}
