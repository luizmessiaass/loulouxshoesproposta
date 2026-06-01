type Props = {
  eyebrow?: string;
  title: string;
  accent: string;
  subtitle?: string;
};

export function SectionHeader({ eyebrow, title, accent, subtitle }: Props) {
  return (
    <header className="space-y-3">
      {eyebrow && (
        <span className="inline-block text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
          {eyebrow}
        </span>
      )}
      <h2 className="font-display text-4xl sm:text-5xl font-semibold leading-[1.02] tracking-tight text-balance">
        {title} <span className="text-muted-foreground">{accent}</span>
      </h2>
      {subtitle && (
        <p className="text-sm sm:text-base text-muted-foreground max-w-prose leading-relaxed">{subtitle}</p>
      )}
    </header>
  );
}
