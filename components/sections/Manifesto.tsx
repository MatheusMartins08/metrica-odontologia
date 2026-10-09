import Image from "next/image";
import { manifesto } from "@/lib/content";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { withEmphasis } from "@/components/ui/emphasis";

export function Manifesto() {
  return (
    <section aria-labelledby="manifesto-title" className="section-y bg-agua">
      <div className="container-page grid gap-14 lg:grid-cols-12 lg:gap-10">
        <div className="flex flex-col justify-between gap-12 lg:col-span-4">
          <SectionLabel index="01" label="Manifesto" />
          <div className="relative hidden aspect-4/5 w-full max-w-sm overflow-hidden lg:block" data-reveal="image">
            <div className="absolute inset-x-0 top-[-6%] h-[112%]" data-parallax="0.1">
              <Image
                src={manifesto.image.src}
                alt={manifesto.image.alt}
                fill
                placeholder="blur"
                sizes="(min-width: 1024px) 24rem, 0px"
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <div className="lg:col-span-8">
          <h2 id="manifesto-title" className="sr-only">
            Manifesto
          </h2>
          <p
            className="font-serif text-[clamp(2.1rem,1.3rem+2.9vw,4.4rem)] leading-[1.06] tracking-[-0.02em] text-tinta [&_em]:text-teal"
            data-reveal="up"
          >
            {withEmphasis(manifesto.statement)}
          </p>

          <ol className="mt-16 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:mt-24">
            {manifesto.principles.map((p, i) => (
              <li key={p.title} className="border-t border-tinta/20 pt-5" data-reveal="up">
                <p className="eyebrow text-ardosia" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-3 text-[1.2rem] font-medium">{p.title}</h3>
                <p className="mt-2 text-ardosia">{p.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
