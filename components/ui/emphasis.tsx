import { Fragment, type ReactNode } from "react";

/** Turns "text *emphasis* text" into text with an italic serif accent. */
export function withEmphasis(text: string): ReactNode {
  return text.split("*").map((part, i) =>
    i % 2 === 1 ? (
      <em key={i} className="italic">
        {part}
      </em>
    ) : (
      <Fragment key={i}>{part}</Fragment>
    ),
  );
}
