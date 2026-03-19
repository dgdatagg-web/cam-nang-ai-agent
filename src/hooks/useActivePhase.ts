'use client';

import { useState, useEffect } from 'react';

const PHASE_IDS = [
  'phase-activation',
  'phase-training',
  'phase-optimize',
  'phase-detection',
  'phase-partnership',
  'phase-journey',
];

export function useActivePhase(): number {
  const [activePhase, setActivePhase] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const idx = PHASE_IDS.indexOf(entry.target.id);
            if (idx !== -1) setActivePhase(idx + 1);
          }
        }
      },
      { rootMargin: '-40% 0px -40% 0px', threshold: 0 }
    );

    const timeout = setTimeout(() => {
      PHASE_IDS.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.observe(el);
      });
    }, 100);

    return () => {
      clearTimeout(timeout);
      observer.disconnect();
    };
  }, []);

  return activePhase;
}
