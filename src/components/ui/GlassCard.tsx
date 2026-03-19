interface GlassCardProps {
  children: React.ReactNode;
  warm?: boolean;
  hoverLift?: boolean;
  accentBorder?: 'top' | 'left';
  accentColor?: string;
  className?: string;
}

export function GlassCard({
  children,
  warm = false,
  hoverLift = false,
  accentBorder,
  accentColor,
  className = '',
}: GlassCardProps) {
  const borderStyle = accentBorder && accentColor
    ? accentBorder === 'left'
      ? { borderLeft: `3px solid ${accentColor}` }
      : { borderTop: `3px solid ${accentColor}` }
    : undefined;

  return (
    <div
      className={`${warm ? 'glass-card-warm' : 'glass-card'} p-6 sm:p-8 ${
        hoverLift ? 'transition-transform duration-200 hover:-translate-y-1' : ''
      } ${className}`}
      style={borderStyle}
    >
      {children}
    </div>
  );
}
