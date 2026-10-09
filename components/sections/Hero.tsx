import Image from "next/image";
import { hero } from "@/lib/content";
import { whatsappLink } from "@/lib/site";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Icon } from "@/components/ui/Icon";
import { RevealLines } from "@/components/ui/RevealLines";

export function Hero() {
  const [l1, l2, l3] = hero.title;

  return (
    <section id="inicio" aria-labelledby="hero-title" className="relative pb-14 pt-28 sm:pt-32 lg:pb-20 lg:pt-36">
      <div className="container-page">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="flex flex-col lg:col-span-7 lg:pt-10">
            <p className="eyebrow text-tinta" data-reveal="fade">
              {hero.eyebrow}
            </p>

            <RevealLines
              as="h1"
              id="hero-title"
              className="display-1 mt-8 text-grafite"
              lines={[l1, l2, <em key="m" className="italic text-musgo">{l3}</em>]}
            />

            <p className="lead mt-10 max-w-md text-tinta" data-reveal="up" data-delay="0.35">
              {hero.subtitle}
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-3" data-reveal="up" data-delay="0.45">
              <ButtonLink href={whatsappLink()} icon="arrowUpRight">
                Agendar avaliação
              </ButtonLink>
              <ButtonLink href="#tratamentos" variant="outline" icon="arrowRight">
                Conhecer tratamentos
              </ButtonLink>
            </div>
          </div>

          <figure className="lg:col-span-5">
            <div className="relative aspect-4/5 overflow-hidden bg-creme md:max-lg:aspect-square" data-reveal="image" data-delay="0.15">
              <div className="absolute inset-x-0 top-[-5%] h-[110%]" data-parallax="0.08">
                <Image
                  src={hero.image.src}
                  alt={hero.image.alt}
                  fill
                  preload
                  quality={85}
                  placeholder="blur"
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover object-top"
                />
              </div>
            </div>
            <figcaption className="eyebrow mt-4 flex items-center justify-between gap-4 text-tinta" data-reveal="fade">
              <span>Fig. 01</span>
              <span className="text-right">{hero.caption}</span>
            </figcaption>
          </figure>
        </div>

        {/* Immediate social proof, set like a measured scale */}
        <div className="mt-16 lg:mt-20">
          <span aria-hidden="true" className="rule-ticks block h-1.5 w-full text-grafite/35" data-reveal="rule" />
          <ul className="grid grid-cols-2 gap-x-6 gap-y-8 pt-8 md:grid-cols-4">
            {hero.proof.map((item) => (
              <li key={item.label} data-reveal="up">
                <p className="flex items-center gap-2 font-serif text-[2.4rem] leading-none tracking-tight sm:text-[2.9rem]">
                  {item.rating && <Icon name="star" filled size={22} className="text-oliva" />}
                  {item.value}
                </p>
                <p className="mt-2 text-[0.92rem] text-tinta">{item.label}</p>
              </li>
            ))}
          </ul>
          <p className="eyebrow mt-10 text-tinta" data-reveal="fade">
            {hero.proofNote}
          </p>
        </div>
      </div>
    </section>
  );
}
