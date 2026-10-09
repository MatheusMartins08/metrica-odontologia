import type { SVGProps } from "react";

/** Local line-icon set: 24px grid, 1.25 stroke, square-ish terminals. */
const paths = {
  arrowRight: <path d="M4 12h15.5M13.5 6l6 6-6 6" />,
  arrowLeft: <path d="M20 12H4.5M10.5 6l-6 6 6 6" />,
  arrowUpRight: <path d="M7 17 17 7M8.5 7H17v8.5" />,
  plus: <path d="M12 4v16M4 12h16" />,
  phone: (
    <path d="M6.6 3.75h2.7l1.35 4.05-2.02 1.35a11.3 11.3 0 0 0 6.22 6.22l1.35-2.02 4.05 1.35v2.7a1.85 1.85 0 0 1-1.85 1.85A15.6 15.6 0 0 1 4.75 5.6 1.85 1.85 0 0 1 6.6 3.75Z" />
  ),
  whatsapp: (
    <>
      <path d="M4.2 19.8 5.4 16A8.25 8.25 0 1 1 8.4 19l-4.2.8Z" />
      <path d="M9.3 8.4c-.4 1.9 1.6 5.4 4.4 6.3.8.2 1.6-.3 1.9-1l-1.5-1-1 .7c-.9-.4-1.9-1.4-2.3-2.3l.7-1-1-1.5c-.6.1-1.1.4-1.2.8Z" />
    </>
  ),
  instagram: (
    <>
      <rect x="4" y="4" width="16" height="16" rx="4.5" />
      <circle cx="12" cy="12" r="3.6" />
      <path d="M16.9 7.1h.01" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s6.5-5.6 6.5-11a6.5 6.5 0 1 0-13 0c0 5.4 6.5 11 6.5 11Z" />
      <circle cx="12" cy="10" r="2.3" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="8.25" />
      <path d="M12 7.5V12l3 2" />
    </>
  ),
  star: (
    <path d="m12 3.6 2.47 5.3 5.78.7-4.27 3.96 1.12 5.72L12 16.4l-5.1 2.88 1.12-5.72L3.75 9.6l5.78-.7L12 3.6Z" />
  ),
  menu: <path d="M3.5 8.5h17M3.5 15.5h17" />,
  close: <path d="m5.5 5.5 13 13M18.5 5.5l-13 13" />,
} as const;

export type IconName = keyof typeof paths;

interface IconProps extends Omit<SVGProps<SVGSVGElement>, "name"> {
  name: IconName;
  size?: number;
  filled?: boolean;
}

export function Icon({ name, size = 20, filled = false, className, ...rest }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill={filled ? "currentColor" : "none"}
      stroke={filled ? "none" : "currentColor"}
      strokeWidth={1.25}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      className={className}
      {...rest}
    >
      {paths[name]}
    </svg>
  );
}
