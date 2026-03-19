interface PhaseHeaderProps {
  phaseNumber: number;
  dayRange: string;
  title: string;
  subtitle: string;
  accent: string;
}

export function PhaseHeader({ phaseNumber, dayRange, title, subtitle, accent }: PhaseHeaderProps) {
  return (
    <div className="mb-12 md:mb-16">
      <div className="flex items-center gap-3 mb-4">
        <span
          className="inline-flex items-center justify-center w-10 h-10 rounded-full text-sm font-bold font-[family-name:var(--font-heading)]"
          style={{ backgroundColor: `${accent}20`, color: accent, border: `1px solid ${accent}40` }}
        >
          {phaseNumber}
        </span>
        <span
          className="text-xs font-semibold uppercase tracking-[3px] font-[family-name:var(--font-heading)]"
          style={{ color: accent }}
        >
          {dayRange}
        </span>
      </div>
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-[family-name:var(--font-heading)] tracking-tight text-text-primary mb-3">
        {title}
      </h2>
      <p className="text-base sm:text-lg text-text-secondary max-w-2xl">{subtitle}</p>
    </div>
  );
}
