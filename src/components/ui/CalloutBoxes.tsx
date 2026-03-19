interface TipBoxProps {
  children: React.ReactNode;
}

export function TipBox({ children }: TipBoxProps) {
  return (
    <div className="relative my-6 p-5 sm:p-6 rounded-2xl bg-[rgba(245,158,11,0.05)] border-l-[3px] border-amber-DEFAULT">
      <div className="flex items-start gap-3">
        <span className="text-xl shrink-0 mt-0.5">💡</span>
        <div className="text-sm sm:text-base text-text-secondary leading-relaxed">{children}</div>
      </div>
    </div>
  );
}

export function WarningBox({ children }: TipBoxProps) {
  return (
    <div className="relative my-6 p-5 sm:p-6 rounded-2xl bg-[rgba(239,68,68,0.05)] border-l-[3px] border-[#ef4444]">
      <div className="flex items-start gap-3">
        <span className="text-xl shrink-0 mt-0.5">⚠️</span>
        <div className="text-sm sm:text-base text-text-secondary leading-relaxed">{children}</div>
      </div>
    </div>
  );
}

export function TruthBox({ children }: TipBoxProps) {
  return (
    <div className="relative my-6 p-5 sm:p-6 rounded-2xl bg-[rgba(251,191,36,0.06)] border-l-[3px] border-nova-gold">
      <div className="flex items-start gap-3">
        <span className="text-xl shrink-0 mt-0.5">✦</span>
        <div className="text-sm sm:text-base text-text-secondary leading-relaxed italic">{children}</div>
      </div>
    </div>
  );
}
