import Image from "next/image";
import { technology } from "@/lib/content";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { RevealLines } from "@/components/ui/RevealLines";

export function Technology() {
  const [main, secondary] = technology.images;

  return (
    <section aria-labelledby="tecnologia-title" className="on-dark section-y bg-tinta text-porcelana">
      <div className="container-page">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <SectionLabel index="07" label="Tecnologia" tone="dark" />
            <RevealLines
              id="tecnologia-title"
              className="display-2 mt-8"
              lines={["Precisão que você", <em key="e" className="italic">não precisa sentir.</em>]}
            />
          </div>
          <p className="max-w-md text-bruma lg:col-span-4 lg:col-start-9 lg:pb-2" data-reveal="up">
            Equipamentos digitais encurtam consultas, reduzem desconforto e permitem ver o resultado antes de começar.
          </p>
        </div>

        <div className="mt-16 grid gap-14 lg:mt-24 lg:grid-cols-12 lg:gap-10">
          <div className="relative lg:col-span-5">
            <div className="relative aspect-4/5 w-[82%] overflow-hidden" data-reveal="image">
              <Image src={main.src} alt={main.alt} fill placeholder="blur" sizes="(min-width: 1024px) 32vw, 80vw" className="object-cover" />
            </div>
            <div
              className="relative -mt-24 ml-auto aspect-3/2 w-[62%] overflow-hidden outline outline-8 outline-tinta"
              data-reveal="image"
              data-delay="0.2"
            >
              <Image src={secondary.src} alt={secondary.alt} fill placeholder="blur" sizes="(min-width: 1024px) 25vw, 60vw" className="object-cover" />
            </div>
          </div>

          {/* Spec sheet */}
          <div className="lg:col-span-6 lg:col-start-7">
            <p className="eyebrow flex justify-between border-b border-porcelana/20 pb-4 text-bruma" data-reveal="fade">
              <span>Equipamento</span>
              <span>Especificação</span>
            </p>
            <ul>
              {technology.specs.map((s, i) => (
                <li key={s.name} className="grid grid-cols-[2.25rem_1fr] gap-x-3 border-b border-porcelana/10 py-6" data-reveal="up">
                  <span className="eyebrow pt-1.5 text-bruma" aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                      <h3 className="font-serif text-[1.65rem] leading-tight">{s.name}</h3>
                      <span className="font-mono text-[0.78rem] tracking-[0.06em] text-menta">{s.spec}</span>
                    </div>
                    <p className="mt-2 max-w-md text-[0.98rem] text-bruma">{s.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
