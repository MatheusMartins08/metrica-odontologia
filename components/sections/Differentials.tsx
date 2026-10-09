import Image from "next/image";
import { differentials } from "@/lib/content";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { RevealLines } from "@/components/ui/RevealLines";

export function Differentials() {
  return (
    <section aria-labelledby="diferenciais-title" className="section-y">
      <div className="container-page grid gap-14 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-28">
            <SectionLabel index="06" label="Diferenciais" />
            <RevealLines
              id="diferenciais-title"
              className="display-2 mt-8"
              lines={["Detalhes que", "mudam a", <em key="e" className="italic">experiência.</em>]}
            />
            <div className="relative mt-12 aspect-3/2 overflow-hidden" data-reveal="image">
              <Image
                src={differentials.image.src}
                alt={differentials.image.alt}
                fill
                placeholder="blur"
                sizes="(min-width: 1024px) 38vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <ol className="grid gap-x-10 sm:grid-cols-2 lg:col-span-6 lg:col-start-7 lg:pt-24">
          {differentials.items.map((item, i) => (
            <li key={item.title} className="border-t border-tinta/15 py-8" data-reveal="up">
              <p className="eyebrow text-ardosia" aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-4 font-serif text-[1.75rem] leading-tight tracking-[-0.01em]">{item.title}</h3>
              <p className="mt-3 text-ardosia">{item.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
