interface SectionLabelProps {
  index: string;
  label: string;
  tone?: "light" | "dark";
  className?: string;
}

/** Mono "measurement" label that opens each section: index, label and a ticked rule. */
export function SectionLabel({ index, label, tone = "light", className = "" }: SectionLabelProps) {
  const color = tone === "dark" ? "text-salvia" : "text-tinta";

  return (
    <div className={`flex items-end gap-4 ${color} ${className}`} data-reveal="fade">
      <p className="eyebrow shrink-0">
        <span aria-hidden="true">{index} — </span>
        {label}
      </p>
      <span aria-hidden="true" className="rule-ticks mb-[0.3em] h-1.5 w-full max-w-40 opacity-40" data-reveal="rule" />
    </div>
  );
}
