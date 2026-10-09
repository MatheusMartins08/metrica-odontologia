import type { AnchorHTMLAttributes, ReactNode } from "react";
import { Icon, type IconName } from "./Icon";

type Variant = "primary" | "outline" | "light" | "outline-light";

const variants: Record<Variant, string> = {
  primary: "bg-petroleo text-porcelana hover:bg-abismo",
  outline: "border border-tinta/30 text-tinta hover:border-tinta hover:bg-tinta hover:text-porcelana",
  light: "bg-porcelana text-petroleo hover:bg-agua",
  "outline-light": "border border-porcelana/35 text-porcelana hover:border-porcelana hover:bg-porcelana hover:text-petroleo",
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
