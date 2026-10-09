import type { AnchorHTMLAttributes, ReactNode } from "react";
import { Icon, type IconName } from "./Icon";

type Variant = "primary" | "outline" | "light" | "outline-light";

const variants: Record<Variant, string> = {
  primary: "bg-musgo text-linho hover:bg-grafite",
  outline: "border border-grafite/30 text-grafite hover:border-grafite hover:bg-grafite hover:text-linho",
  light: "bg-linho text-musgo hover:bg-creme",
  "outline-light": "border border-linho/35 text-linho hover:border-linho hover:bg-linho hover:text-musgo",
};

interface ButtonLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  variant?: Variant;
  icon?: IconName;
  children: ReactNode;
}

/** Pill CTA rendered as a link (all CTAs on this page navigate: anchors, WhatsApp or phone). */
export function ButtonLink({
  href,
  variant = "primary",
  icon = "arrowRight",
  className = "",
  children,
  ...rest
}: ButtonLinkProps) {
  const external = href.startsWith("http");

  return (
    <a
      href={href}
      className={`btn ${variants[variant]} ${className}`}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...rest}
    >
      <span>{children}</span>
      <Icon name={icon} size={18} className="btn-arrow shrink-0" />
      {external && <span className="sr-only"> (abre em nova aba)</span>}
    </a>
  );
}
