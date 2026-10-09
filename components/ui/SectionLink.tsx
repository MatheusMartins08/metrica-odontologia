import Link from "next/link";
import type { AnchorHTMLAttributes } from "react";

interface SectionLinkProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> {
  id: string;
  /** On the landing page a plain hash keeps native smooth scrolling; elsewhere we route home first. */
  onHome: boolean;
}

export function SectionLink({ id, onHome, ...rest }: SectionLinkProps) {
  return onHome ? <a href={`#${id}`} {...rest} /> : <Link href={`/#${id}`} {...rest} />;
}
