interface TimelineSegment {
  dayRange: string;
  title: string;
  description: string;
  icon: string;
  status: 'active' | 'warning' | 'decision';
  color: string;
}

interface TimelineRoadmapProps {
  segments: TimelineSegment[];
}

export function TimelineRoadmap({ segments }: TimelineRoadmapProps) {
  return (
    <div className="relative my-8">
      {/* Connecting line */}
      <div className="absolute left-5 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[rgba(255,255,255,0.1)] via-[rgba(245,158,11,0.3)] to-[rgba(255,255,255,0.1)] md:-translate-x-px" />

      <div className="space-y-8 md:space-y-12">
        {segments.map((seg, i) => (
          <div key={i} className={`relative flex items-start gap-6 md:gap-0 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
            {/* Node */}
            <div className="absolute left-5 md:left-1/2 -translate-x-1/2 z-10">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-lg border-2"
                style={{
                  backgroundColor: `${seg.color}15`,
                  borderColor: `${seg.color}60`,
                  boxShadow: `0 0 20px ${seg.color}20`,
                }}
              >
                {seg.icon}
              </div>
            </div>

            {/* Content */}
            <div className={`ml-16 md:ml-0 md:w-[45%] ${i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
              <div
                className="glass-card p-5 transition-all duration-200 hover:-translate-y-0.5"
                style={{ borderColor: `${seg.color}20` }}
              >
                <span
                  className="text-xs font-bold uppercase tracking-widest font-[family-name:var(--font-heading)] block mb-2"
                  style={{ color: seg.color }}
                >
                  {seg.dayRange}
                </span>
                <h4 className="text-base font-bold font-[family-name:var(--font-heading)] text-text-primary mb-2">
                  {seg.title}
                </h4>
                <p className="text-sm text-text-muted leading-relaxed">{seg.description}</p>
              </div>
            </div>

            {/* Spacer for alternating layout */}
            <div className="hidden md:block md:w-[45%]" />
          </div>
        ))}
      </div>
    </div>
  );
}
