'use client';

import { useActivePhase } from '@/hooks/useActivePhase';

const phases = [
  { label: 'Kích Hoạt', color: '#fbbf24' },
  { label: 'Huấn Luyện', color: '#fb923c' },
  { label: 'Tối Ưu', color: '#a78bfa' },
  { label: 'Nhận Diện', color: '#f87171' },
  { label: 'Đối Tác', color: '#34d399' },
  { label: 'Hành Trình', color: '#60a5fa' },
];

export function Navbar() {
  const activePhase = useActivePhase();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[rgba(11,15,26,0.92)] backdrop-blur-[14px] border-b border-[rgba(255,255,255,0.06)]">
      <div className="mx-auto max-w-[1120px] px-5 h-14 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2">
          <span className="text-lg">✦</span>
          <span className="font-bold text-sm font-[family-name:var(--font-heading)] tracking-tight text-text-primary">
            Cẩm Nang <span className="text-nova-gold">AI Agent</span>
          </span>
        </a>

        {/* Phase dots — desktop */}
        <div className="hidden md:flex items-center gap-1.5">
          {phases.map((phase, i) => {
            const isActive = activePhase === i + 1;
            const isCompleted = activePhase > i + 1;
            return (
              <a
                key={i}
                href={`#phase-${['activation', 'training', 'optimize', 'detection', 'partnership', 'journey'][i]}`}
                className="group flex items-center gap-1.5 px-2 py-1 rounded-full transition-all duration-200"
                title={phase.label}
              >
                <div
                  className="w-2 h-2 rounded-full transition-all duration-300"
                  style={{
                    backgroundColor: isActive
                      ? phase.color
                      : isCompleted
                      ? `${phase.color}80`
                      : 'rgba(255,255,255,0.15)',
                    boxShadow: isActive ? `0 0 8px ${phase.color}60` : 'none',
                  }}
                />
                <span
                  className={`text-[10px] font-semibold font-[family-name:var(--font-heading)] uppercase tracking-wider transition-all duration-200 ${
                    isActive ? 'opacity-100' : 'opacity-0 w-0 overflow-hidden group-hover:opacity-60 group-hover:w-auto'
                  }`}
                  style={{ color: isActive ? phase.color : 'rgba(255,255,255,0.5)' }}
                >
                  {phase.label}
                </span>
              </a>
            );
          })}
        </div>

        {/* CTA */}
        <a
          href="#phase-activation"
          className="hidden sm:inline-flex items-center px-4 py-2 rounded-xl bg-gradient-to-r from-nova-gold to-amber-DEFAULT text-space-950 text-xs font-bold font-[family-name:var(--font-heading)] shadow-[0_2px_12px_rgba(245,158,11,0.2)] hover:-translate-y-0.5 transition-all"
        >
          Bắt Đầu
        </a>
      </div>

      {/* Phase bar — mobile */}
      {activePhase > 0 && (
        <div className="md:hidden px-5 pb-2 flex gap-1">
          {phases.map((phase, i) => (
            <div
              key={i}
              className="h-0.5 flex-1 rounded-full transition-all duration-500"
              style={{
                backgroundColor:
                  activePhase > i
                    ? phase.color
                    : activePhase === i + 1
                    ? `${phase.color}60`
                    : 'rgba(255,255,255,0.06)',
              }}
            />
          ))}
        </div>
      )}
    </nav>
  );
}
