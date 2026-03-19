'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface StaggerChildrenProps {
  children: React.ReactNode;
  stagger?: number;
  className?: string;
}

export function StaggerChildren({ children, stagger = 0.1, className = '' }: StaggerChildrenProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={{
        visible: { transition: { staggerChildren: stagger } },
        hidden: {},
      }}
      className={className}
    >
      {Array.isArray(children)
        ? children.map((child, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
              }}
            >
              {child}
            </motion.div>
          ))
        : children}
    </motion.div>
  );
}
