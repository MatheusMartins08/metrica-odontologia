import Image from "next/image";
import { contactImage } from "@/lib/content";
import { site, whatsappLink } from "@/lib/site";
import { Icon } from "@/components/ui/Icon";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { RevealLines } from "@/components/ui/RevealLines";

/** Stylised street plan around the clinic — light, static, no third-party map embed. */
function StreetPlan() {
  return (
    <svg viewBox="0 0 640 480" className="h-full w-full" role="img" aria-labelledby="mapa-titulo">
      <title id="mapa-titulo">Mapa da região: Rua Oscar Freire, entre a Rua Haddock Lobo e a Rua Bela Cintra</title>
      <rect width="640" height="480" fill="var(--color-agua)" />
      <g transform="rotate(-24 320 240)" stroke="var(--color-nevoa)" strokeLinecap="square">
        {/* parallel streets */}
        <path d="M-120 70H780M-120 170H780M-120 380H780M-120 470H780" strokeWidth="9" />
        <path d="M-120 275H780" strokeWidth="16" stroke="var(--color-porcelana)" />
        {/* cross streets */}
        <path d="M60 -140V640M215 -140V640M470 -140V640M610 -140V640" strokeWidth="9" />
        <path d="M340 -140V640" strokeWidth="13" stroke="var(--color-porcelana)" />
        {/* blocks detail */}
        <path d="M-120 120H780M-120 330H780" strokeWidth="1" stroke="var(--color-teal)" strokeDasharray="2 10" opacity="0.6" />
      </g>
      <g fontFamily="var(--font-mono)" fontSize="11" letterSpacing="1.6" fill="var(--color-ardosia)">
        <text transform="translate(40 392) rotate(-24)">R. OSCAR FREIRE</text>
        <text transform="translate(338 318) rotate(66)">R. HADDOCK LOBO</text>
        <text transform="translate(512 300) rotate(66)">R. BELA CINTRA</text>
        <text transform="translate(60 214) rotate(-24)">AL. LORENA</text>
      </g>
      {/* clinic marker */}
      <g transform="translate(398 246)">
        <circle r="34" fill="var(--color-petroleo)" opacity="0.08" />
        <circle r="18" fill="var(--color-petroleo)" opacity="0.14" />
        <circle r="7" fill="var(--color-petroleo)" />
        <path d="M0 -60V-14" stroke="var(--color-petroleo)" strokeWidth="1" />
      </g>
      <g transform="translate(398 166)">
        <rect x="-62" y="-22" width="124" height="30" fill="var(--color-petroleo)" />
        <text y="-2" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="11" letterSpacing="2" fill="var(--color-porcelana)">
          MÉTRICA · 1127
        </text>
      </g>
    </svg>
  );
}

export function Contact() {
  const { address } = site;

  return (
    <section id="contato" aria-labelledby="contato-title" className="section-y">
      <div className="container-page">
        <SectionLabel index="12" label="Contato" />
        <RevealLines
          id="contato-title"
          className="display-2 mt-8"
          lines={["Venha conhecer", <>a <em className="italic">clínica.</em></>]}
        />

        <div className="mt-14 grid gap-14 lg:mt-20 lg:grid-cols-12 lg:gap-10">
          <div className="space-y-10 lg:col-span-5">
            <div className="border-t border-tinta/20 pt-6" data-reveal="up">
              <h3 className="eyebrow flex items-center gap-2 text-ardosia">
                <Icon name="pin" size={16} /> Endereço
              </h3>
              <address className="mt-4 text-[1.15rem] not-italic leading-relaxed">
                {address.street}
                <br />
                {address.district} · {address.city} — {address.state}
                <br />
                <span className="text-ardosia">CEP {address.postalCode}</span>
              </address>
              <a
                href={address.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="link-line mt-4 inline-flex items-center gap-2 text-[0.95rem] font-medium text-petroleo"
              >
                Abrir no Google Maps
                <Icon name="arrowUpRight" size={16} />
                <span className="sr-only"> (abre em nova aba)</span>
              </a>
            </div>

            <div className="border-t border-tinta/20 pt-6" data-reveal="up">
              <h3 className="eyebrow flex items-center gap-2 text-ardosia">
                <Icon name="clock" size={16} /> Horário de atendimento
              </h3>
              <dl className="mt-4 space-y-2">
                {site.hours.map((h) => (
                  <div key={h.days} className="flex justify-between gap-6 border-b border-tinta/10 pb-2 text-[1.05rem]">
                    <dt>{h.days}</dt>
                    <dd className="text-ardosia">{h.time}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-3 text-[0.92rem] text-ardosia">Estacionamento com manobrista no edifício.</p>
            </div>

            <div className="border-t border-tinta/20 pt-6" data-reveal="up">
              <h3 className="eyebrow text-ardosia">Fale com a gente</h3>
              <ul className="mt-4 space-y-3 text-[1.05rem]">
                <li>
                  <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-3">
                    <Icon name="whatsapp" size={20} className="text-petroleo" />
                    <span className="link-line">WhatsApp {site.whatsapp.display}</span>
                    <span className="sr-only"> (abre em nova aba)</span>
                  </a>
                </li>
                <li>
                  <a href={site.phone.href} className="inline-flex items-center gap-3">
                    <Icon name="phone" size={20} className="text-petroleo" />
                    <span className="link-line">{site.phone.display}</span>
                  </a>
                </li>
                <li>
                  <a href={site.instagram.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3">
                    <Icon name="instagram" size={20} className="text-petroleo" />
                    <span className="link-line">{site.instagram.handle}</span>
                    <span className="sr-only"> (abre em nova aba)</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="relative lg:col-span-7">
            <div className="relative aspect-4/3 overflow-hidden" data-reveal="image">
              <StreetPlan />
            </div>
            <div
              className="relative -mt-20 ml-auto mr-4 aspect-4/5 w-[38%] overflow-hidden outline outline-8 outline-porcelana sm:-mt-32 sm:mr-8 lg:absolute lg:-bottom-14 lg:left-8 lg:mr-0 lg:mt-0 lg:w-[32%]"
              data-reveal="image"
              data-delay="0.2"
            >
              <Image
                src={contactImage.src}
                alt={contactImage.alt}
                fill
                placeholder="blur"
                sizes="(min-width: 1024px) 20vw, 38vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
