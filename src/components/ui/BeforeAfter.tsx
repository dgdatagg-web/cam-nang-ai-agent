interface BeforeAfterProps {
  before: { label: string; content: string; emoji: string };
  after: { label: string; content: string; emoji: string };
}

export function BeforeAfter({ before, after }: BeforeAfterProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
      <div className="glass-card p-5 border-l-[3px] border-[rgba(239,68,68,0.4)]">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-lg">{before.emoji}</span>
          <span className="text-xs font-bold uppercase tracking-wider text-[#f87171] font-[family-name:var(--font-heading)]">
            {before.label}
          </span>
        </div>
        <p className="text-sm text-text-muted leading-relaxed">{before.content}</p>
      </div>
      <div className="glass-card-warm p-5 border-l-[3px] border-[rgba(52,211,153,0.5)]">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-lg">{after.emoji}</span>
          <span className="text-xs font-bold uppercase tracking-wider text-[#34d399] font-[family-name:var(--font-heading)]">
            {after.label}
          </span>
        </div>
        <p className="text-sm text-text-secondary leading-relaxed">{after.content}</p>
      </div>
    </div>
  );
}
