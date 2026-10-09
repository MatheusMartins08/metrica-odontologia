import {
  SIGNATURE_PATH,
  SYMBOL_AXIS_PATH,
  SYMBOL_HALVES_PATH,
  WORDMARK_PATH,
  WORDMARK_STROKE,
} from "./logo-geometry";

interface LogoProps {
  /** "wordmark": MÉTRICA only · "full": wordmark + signature · "symbol": the M with the midline */
  variant?: "wordmark" | "full" | "symbol";
  className?: string;
  /** Accessible name. Pass an empty string when the logo sits inside an already-labelled link. */
  title?: string;
}

const VIEWBOX = {
  wordmark: "-3 -12 166.5 39",
  full: "-3 -12 166.5 52",
  symbol: "0 0 64 64",
} as const;

export function Logo({ variant = "wordmark", className, title = "Métrica Odontologia Contemporânea" }: LogoProps) {
  const a11y = title ? { role: "img" as const, "aria-label": title } : { "aria-hidden": true as const };

  return (
    <svg viewBox={VIEWBOX[variant]} className={className} xmlns="http://www.w3.org/2000/svg" focusable="false" {...a11y}>
      {variant === "symbol" ? (
        <>
          <path d={SYMBOL_HALVES_PATH} fill="currentColor" />
          <path d={SYMBOL_AXIS_PATH} fill="currentColor" opacity={0.55} />
        </>
      ) : (
        <>
          <path
            d={WORDMARK_PATH}
            fill="none"
            stroke="currentColor"
            strokeWidth={WORDMARK_STROKE}
            strokeMiterlimit={1.5}
          />
          {variant === "full" && <path d={SIGNATURE_PATH} fill="currentColor" />}
        </>
      )}
    </svg>
  );
}
