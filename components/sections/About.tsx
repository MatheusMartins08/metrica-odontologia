import Image from "next/image";
import { leadDentist, team } from "@/lib/content";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { RevealLines } from "@/components/ui/RevealLines";

export function About() {
  const d = leadDentist;

  return (
    <section id="sobre" aria-labelledby="sobre-title" className="section-y bg-creme">
      <div className="container-page">
        {/* Lead dentist */}
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <div className="relative aspect-4/5 overflow-hidden bg-areia lg:sticky lg:top-28" data-reveal="image">
              <Image
                src={d.image.src}
                alt={d.image.alt}
                fill
                placeholder="blur"
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover object-top"
              />
            </div>
          </div>

          <div className="lg:col-span-6 lg:col-start-7 lg:pt-6">
            <SectionLabel index="05" label="Sobre a clínica" />
            <RevealLines id="sobre-title" className="display-2 mt-8" lines={["Dra. Helena", <em key="a" className="italic">Arantes</em>]} />
            <p className="eyebrow mt-6 text-tinta" data-reveal="fade">
              {d.role} · {d.registration} · Fundadora
            </p>

            <div className="mt-10 space-y-5 text-[1.08rem]" data-reveal="up">
              {d.bio.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>

            <ul className="mt-12 grid grid-cols-2 gap-6 border-t border-grafite/20 pt-8">
              {d.facts.map((f) => (
                <li key={f.label} data-reveal="up">
                  <p className="font-serif text-[3rem] leading-none tracking-tight">{f.value}</p>
                  <p className="mt-2 text-[0.92rem] text-tinta">{f.label}</p>
                </li>
              ))}
            </ul>

            <div className="mt-12" data-reveal="up">
              <h3 className="eyebrow text-tinta">Formação</h3>
              <ul className="mt-4 border-t border-grafite/15">
                {d.education.map((e) => (
                  <li key={e} className="border-b border-grafite/15 py-3 text-[0.98rem]">
                    {e}
                  </li>
                ))}
              </ul>
            </div>

            <figure className="mt-14 border-l border-oliva pl-6" data-reveal="up">
              <blockquote className="font-serif text-[1.65rem] italic leading-[1.25] sm:text-[1.9rem]">
                <p>“{d.quote}”</p>
              </blockquote>
              <figcaption className="eyebrow mt-4 text-tinta">— Helena Arantes</figcaption>
            </figure>
          </div>
        </div>

        {/* Team */}
        <div className="mt-28 lg:mt-40">
          <div className="grid gap-6 border-t border-grafite/20 pt-10 lg:grid-cols-12">
            <h3 className="display-3 lg:col-span-5" data-reveal="up">
              A equipe
            </h3>
            <p className="max-w-lg text-tinta lg:col-span-6 lg:col-start-7" data-reveal="up">
              Cinco especialistas que discutem cada plano entre si antes de apresentá-lo a você. Ortodontia, endodontia,
              implantes e periodontia sob o mesmo teto — e com o mesmo método.
            </p>
          </div>

          <ul className="mt-12 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 lg:grid-cols-4">
            {team.map((m, i) => (
              <li key={m.name} className={`group ${i % 2 === 1 ? "lg:mt-16" : ""}`} data-reveal="up">
                <div className="relative aspect-4/5 overflow-hidden bg-areia">
                  <Image
                    src={m.image.src}
                    alt={m.image.alt}
                    fill
                    placeholder="blur"
                    sizes="(min-width: 1024px) 22vw, 50vw"
                    className="object-cover object-top grayscale sepia-[0.18] transition-[transform,filter] duration-[1.2s] ease-out-strong group-hover:scale-[1.04] group-hover:grayscale-0 group-hover:sepia-0"
                  />
                </div>
                <p className="mt-4 font-serif text-[1.35rem] leading-tight sm:text-[1.5rem]">{m.name}</p>
                <p className="mt-1 text-[0.92rem] text-tinta">{m.role}</p>
                <p className="eyebrow mt-2 text-[0.66rem] text-tinta">{m.registration}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
