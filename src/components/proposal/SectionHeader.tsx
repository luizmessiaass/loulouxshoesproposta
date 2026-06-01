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
        <span className="inline-block text-xs uppercase tracking-[0.2em] text-muted-foreground">
          {eyebrow}
        </span>
      )}
      <h2 className="text-4xl sm:text-5xl font-semibold leading-[1.05] tracking-tight text-balance">
        {title} <span className="text-accent">{accent}</span>
      </h2>
      {subtitle && (
        <p className="text-sm sm:text-base text-muted-foreground max-w-prose">{subtitle}</p>
      )}
    </header>
  );
}
