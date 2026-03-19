interface SkillCardProps {
  name: string;
  icon: string;
  description: string;
  accent?: string;
}

export function SkillCard({ name, icon, description, accent = '#fb923c' }: SkillCardProps) {
  return (
    <div
      className="glass-card p-5 transition-all duration-200 hover:-translate-y-1 hover:border-[rgba(255,255,255,0.15)] cursor-default"
    >
      <div className="flex items-start gap-3">
        <div
          className="shrink-0 w-10 h-10 rounded-xl flex items-center justify-center text-lg"
          style={{ backgroundColor: `${accent}15`, border: `1px solid ${accent}30` }}
        >
          {icon}
        </div>
        <div>
          <h4 className="text-sm font-bold font-[family-name:var(--font-heading)] text-text-primary mb-1">
            {name}
          </h4>
          <p className="text-xs text-text-muted leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
}
