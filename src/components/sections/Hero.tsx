'use client';

import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-5 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-[rgba(245,158,11,0.06)] blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[rgba(251,191,36,0.04)] blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-[1120px] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center py-20">
        {/* Text side */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[rgba(245,158,11,0.2)] bg-[rgba(245,158,11,0.06)] mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-nova-gold animate-pulse" />
            <span className="text-xs font-semibold text-nova-gold tracking-wider uppercase font-[family-name:var(--font-heading)]">
              Cẩm Nang AI Agent
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-gradient-hero text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black font-[family-name:var(--font-heading)] tracking-tight leading-[1.1] mb-6"
          >
            Đồng Đội AI
            <br />
            Đầu Tiên Của Bạn
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="text-lg sm:text-xl text-text-secondary mb-3 max-w-lg"
          >
            Chỉ cần biết cách làm đồng đội tốt.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="text-sm text-text-muted mb-8 max-w-lg"
          >
            Không cần biết code. Không cần biết AI.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#phase-activation"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-nova-gold to-amber-DEFAULT text-space-950 font-bold text-sm sm:text-base font-[family-name:var(--font-heading)] shadow-[0_4px_20px_rgba(245,158,11,0.3)] hover:shadow-[0_6px_30px_rgba(245,158,11,0.4)] hover:-translate-y-0.5 transition-all duration-200"
            >
              Bắt Đầu Hành Trình
              <span className="text-lg">↓</span>
            </a>
          </motion.div>
        </div>

        {/* Illustration side */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="hidden lg:flex items-center justify-center"
        >
          <div className="relative w-full max-w-md aspect-square">
            {/* Glow rings */}
            <div className="absolute inset-0 rounded-full border border-[rgba(245,158,11,0.08)] animate-[spin_20s_linear_infinite]" />
            <div className="absolute inset-4 rounded-full border border-[rgba(251,191,36,0.06)] animate-[spin_15s_linear_infinite_reverse]" />

            {/* Central illustration placeholder */}
            <div className="absolute inset-8 glass-card-warm rounded-full flex items-center justify-center">
              <div className="text-center p-6">
                <div className="text-6xl mb-4">🤝</div>
                <p className="text-xs text-text-muted font-[family-name:var(--font-heading)] uppercase tracking-wider">
                  Đồng đội — Không phải công cụ
                </p>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute top-4 right-4 glass-card px-3 py-1.5 text-xs text-nova-gold font-semibold animate-bounce" style={{ animationDuration: '3s' }}>
              Partner
            </div>
            <div className="absolute bottom-8 left-0 glass-card px-3 py-1.5 text-xs text-phase-partner font-semibold animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }}>
              Growth
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 rounded-full border border-[rgba(255,255,255,0.15)] flex justify-center pt-2">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="w-1 h-2 rounded-full bg-nova-gold opacity-60"
          />
        </div>
      </motion.div>
    </section>
  );
}
