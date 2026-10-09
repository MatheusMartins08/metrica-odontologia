import type { ElementType, ReactNode } from "react";

interface RevealLinesProps {
  as?: ElementType;
  lines: ReactNode[];
  className?: string;
  id?: string;
  /** Step name when the headline belongs to the hero intro timeline. */
  intro?: string;
}

/**
 * Headline split into masked lines. The motion layer slides each line up from
 * its mask; without JS (or with reduced motion) the text is static.
 */
export function RevealLines({ as: Tag = "h2", lines, className, id, intro }: RevealLinesProps) {
  return (
    <Tag className={className} id={id} data-reveal="lines" data-intro={intro}>
      {lines.map((line, i) => (
        <span className="line" key={i}>
          <span>{line}</span>
        </span>
      ))}
    </Tag>
  );
}
