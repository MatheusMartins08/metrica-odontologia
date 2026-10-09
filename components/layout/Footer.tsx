import { Logo } from "@/components/brand/Logo";
import { nav, site, whatsappLink } from "@/lib/site";
import { SectionLink } from "@/components/ui/SectionLink";

export function Footer({ onHome = false }: { onHome?: boolean }) {
  const { address } = site;

  return (
    <footer className="on-dark bg-noite text-linho">
      <div className="container-page pt-20 sm:pt-28">
        <div className="grid gap-14 border-b border-linho/10 pb-16 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-4">
            <Logo variant="symbol" title="" className="h-14 w-14 text-linho" />
            <p className="mt-8 max-w-xs text-[0.95rem] leading-relaxed text-salvia">
              Odontologia estética e funcional, planejada com precisão e feita sem pressa. Jardins, São Paulo.
            </p>
          </div>

          <nav aria-label="Rodapé" className="md:col-span-2">
            <h2 className="eyebrow mb-5 text-salvia">Navegação</h2>
            <ul className="space-y-2.5 text-[0.95rem]">
              {nav.map((item) => (
                <li key={item.id}>
                  <SectionLink id={item.id} onHome={onHome} className="link-line">
                    {item.label}
                  </SectionLink>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-3">
            <h2 className="eyebrow mb-5 text-salvia">Contato</h2>
            <ul className="space-y-2.5 text-[0.95rem]">
              <li>
                <a href={site.phone.href} className="link-line">
                  {site.phone.display}
                </a>
              </li>
              <li>
                <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="link-line">
                  WhatsApp {site.whatsapp.display}
                </a>
              </li>
              <li>
                <a href={site.instagram.url} target="_blank" rel="noopener noreferrer" className="link-line">
                  Instagram {site.instagram.handle}
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="link-line">
                  {site.email}
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h2 className="eyebrow mb-5 text-salvia">Endereço</h2>
            <address className="text-[0.95rem] not-italic leading-relaxed">
              {address.street}
              <br />
              {address.district}, {address.city} — {address.state}
              <br />
              CEP {address.postalCode}
            </address>
            <ul className="mt-6 space-y-1 text-[0.95rem] text-salvia">
              {site.hours.map((h) => (
                <li key={h.days}>
                  {h.days}: <span className="text-linho">{h.time}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Logo variant="full" className="mt-16 h-auto w-full text-linho/90" />

        <div className="flex flex-col gap-3 py-10 text-[0.8rem] text-salvia sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {site.copyrightYear} {site.legalName}. Responsável técnica: {site.technicalLead}.
          </p>
          <a href="/privacidade" className="link-line w-fit">
            Política de privacidade
          </a>
        </div>
      </div>
    </footer>
  );
}
