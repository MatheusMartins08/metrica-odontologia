"use client";

import { useCallback, useEffect, useRef, useState, type MouseEvent } from "react";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/brand/Logo";
import { Icon } from "@/components/ui/Icon";
import { SectionLink } from "@/components/ui/SectionLink";
import { nav, site, whatsappLink } from "@/lib/site";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("inicio");
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const onHome = usePathname() === "/";

  // Solid background once the page leaves the very top.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight the section currently crossing the middle of the viewport.
  useEffect(() => {
    const sections = nav
      .map(({ id }) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const close = useCallback((restoreFocus = true) => {
    setOpen(false);
    if (restoreFocus) toggleRef.current?.focus();
  }, []);

  // Section picked in the drawer, scrolled to once the drawer has closed and released the scroll lock.
  const pendingSection = useRef<string | null>(null);

  const goToSection = (e: MouseEvent<HTMLAnchorElement>, id: string) => {
    // Off the landing page the link routes home with the hash; only the drawer needs closing.
    if (onHome) {
      // The native jump would run while the drawer is still inert and locking scroll, which some
      // mobile browsers drop; scroll ourselves after the drawer has closed instead.
      e.preventDefault();
      pendingSection.current = id;
    }
    close(false);
  };

  // Mobile menu: scroll lock, Escape, focus trap.
  useEffect(() => {
    if (!open) return;
    const root = document.documentElement;
    root.style.overflow = "hidden";

    // The toggle (now "Fechar menu") lives in the header, so it joins the trap explicitly.
    const focusables = () => [
      ...(toggleRef.current ? [toggleRef.current] : []),
      ...Array.from(menuRef.current?.querySelectorAll<HTMLElement>("a[href], button:not([disabled])") ?? []),
    ];
    // Wait for the drawer's visibility transition to start before moving focus into it.
    const focusTimer = window.setTimeout(() => focusables()[1]?.focus(), 50);

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        close();
        return;
      }
      if (e.key !== "Tab") return;
      const items = focusables();
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last?.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      window.clearTimeout(focusTimer);
      root.style.overflow = "";
      document.removeEventListener("keydown", onKey);
    };
  }, [open, close]);

  // Runs after the scroll-lock cleanup above, so the page can scroll again.
  useEffect(() => {
    const id = pendingSection.current;
    if (open || !id) return;
    pendingSection.current = null;
    const target = document.getElementById(id);
    if (!target) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    // scroll-margin-top on [id] keeps the section clear of the fixed header.
    target.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
    history.pushState(null, "", `#${id}`);
  }, [open]);

  // Close the drawer if the viewport grows into the desktop layout.
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 80rem)");
    const onChange = () => mq.matches && setOpen(false);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const solid = scrolled && !open;

  return (
    <>
    <header
      data-intro="header"
      className={`fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color,box-shadow,backdrop-filter] duration-400 ease-out-strong ${
        solid
          ? "border-tinta/12 bg-porcelana/88 shadow-[0_10px_30px_-24px_rgba(10,42,49,0.45)] backdrop-blur-md"
          : "border-transparent bg-porcelana/0"
      }`}
    >
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-10 focus:bg-petroleo focus:px-4 focus:py-2 focus:text-porcelana"
      >
        Pular para o conteúdo
      </a>

      <div
        className={`container-page flex items-center justify-between gap-6 transition-[height] duration-400 ease-out-strong ${
          solid ? "h-18 xl:h-19" : "h-20"
        }`}
      >
        <SectionLink id="inicio" onHome={onHome} className="relative z-10 -my-2 py-2" aria-label="Métrica Odontologia Contemporânea — início">
          <Logo
            variant="wordmark"
            title=""
            className={`h-auto w-[7.5rem] transition-colors duration-300 sm:w-[8.5rem] ${open ? "text-porcelana" : "text-tinta"}`}
          />
        </SectionLink>

        <nav aria-label="Principal" className="hidden xl:block">
          <ul className="flex items-center gap-8 text-[0.9rem]">
            {nav.map((item) => (
              <li key={item.id}>
                <SectionLink
                  id={item.id}
                  onHome={onHome}
                  aria-current={active === item.id ? "true" : undefined}
                  className={`link-line transition-colors ${active === item.id ? "text-tinta" : "text-ardosia hover:text-tinta"}`}
                >
                  {item.label}
                </SectionLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="relative z-10 flex items-center gap-3">
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className={`btn hidden min-h-11! py-2.5! pl-5! pr-4! text-[0.88rem] sm:inline-flex ${
              open ? "bg-porcelana text-petroleo" : "bg-petroleo text-porcelana hover:bg-abismo"
            }`}
          >
            Agendar avaliação
            <Icon name="arrowUpRight" size={16} className="btn-arrow" />
            <span className="sr-only"> (abre o WhatsApp em nova aba)</span>
          </a>

          <button
            ref={toggleRef}
            type="button"
            className={`grid size-11 place-items-center rounded-full border transition-colors xl:hidden ${
              open ? "border-porcelana/30 text-porcelana" : "border-tinta/20 text-tinta"
            }`}
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            onClick={() => (open ? close() : setOpen(true))}
          >
            <span className="relative block h-3 w-5" aria-hidden="true">
              <span
                className={`absolute left-0 h-px w-5 bg-current transition-transform duration-300 ease-out-strong ${
                  open ? "top-1.5 rotate-45" : "top-0.5"
                }`}
              />
              <span
                className={`absolute left-0 h-px w-5 bg-current transition-transform duration-300 ease-out-strong ${
                  open ? "top-1.5 -rotate-45" : "top-2.5"
                }`}
              />
            </span>
          </button>
        </div>
      </div>
    </header>

      {/* Mobile / tablet drawer — a sibling of <header> so its backdrop-filter never becomes the containing block */}
      <div
        id="menu-mobile"
        ref={menuRef}
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        inert={!open}
        className={`on-dark fixed inset-0 z-40 flex flex-col bg-petroleo text-porcelana transition-[opacity,visibility] duration-400 xl:hidden ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <div className="container-page flex flex-1 flex-col justify-between overflow-y-auto pb-10 pt-28">
          <nav aria-label="Menu móvel">
            <ul className="flex flex-col">
              {nav.map((item, i) => (
                <li key={item.id} className="overflow-hidden border-b border-porcelana/10">
                  <SectionLink
                    id={item.id}
                    onHome={onHome}
                    onClick={(e) => goToSection(e, item.id)}
                    className="flex items-baseline justify-between py-3.5 transition-transform duration-500 ease-out-strong"
                    style={{
                      transform: open ? "translateY(0)" : "translateY(110%)",
                      transitionDelay: open ? `${80 + i * 45}ms` : "0ms",
                    }}
                  >
                    <span className="font-serif text-[2.35rem] leading-none tracking-tight sm:text-5xl">{item.label}</span>
                    <span className="eyebrow text-bruma" aria-hidden="true">
                      0{i + 1}
                    </span>
                  </SectionLink>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-10 space-y-6">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn w-full bg-porcelana text-petroleo sm:w-auto"
              onClick={() => close(false)}
            >
              Agendar avaliação pelo WhatsApp
              <Icon name="arrowUpRight" size={18} className="btn-arrow" />
            </a>
            <div className="flex flex-wrap gap-x-8 gap-y-2 text-[0.95rem] text-bruma">
              <a href={site.phone.href} className="link-line">
                {site.phone.display}
              </a>
              <a href={site.instagram.url} target="_blank" rel="noopener noreferrer" className="link-line">
                {site.instagram.handle}
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
