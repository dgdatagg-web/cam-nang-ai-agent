'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'left' | 'right';
  className?: string;
}

export function ScrollReveal({ children, delay = 0, direction = 'up', className = '' }: ScrollRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        y: direction === 'up' ? 24 : 0,
        x: direction === 'left' ? -24 : direction === 'right' ? 24 : 0,
      }}
      animate={isInView ? { opacity: 1, y: 0, x: 0 } : undefined}
      transition={{ duration: 0.7, ease: 'easeOut', delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
