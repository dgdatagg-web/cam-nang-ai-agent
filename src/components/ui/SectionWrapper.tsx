interface SectionWrapperProps {
  id: string;
  children: React.ReactNode;
  darkAlt?: boolean;
  className?: string;
}

export function SectionWrapper({ id, children, darkAlt = false, className = '' }: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={`relative py-20 px-5 sm:py-28 md:py-32 ${
        darkAlt ? 'bg-[#0e1422]' : 'bg-[#0b0f1a]'
      } ${className}`}
    >
      <div className="mx-auto max-w-[1120px]">{children}</div>
    </section>
  );
}
