import Image from "next/image";
import { hero } from "@/lib/content";
import { whatsappLink } from "@/lib/site";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Icon } from "@/components/ui/Icon";
import { RevealLines } from "@/components/ui/RevealLines";
import { SmileAnalysis } from "@/components/brand/SmileAnalysis";

/*
 * Every element carries a `data-intro` step; MotionRoot plays them as one
 * staggered entrance on load: header → eyebrow → headline → text → CTAs →
 * image → proof → smile analysis.
 */
export function Hero() {
  const [l1, l2, l3] = hero.title;

  return (
    <section id="inicio" aria-labelledby="hero-title" className="relative pb-14 pt-28 sm:pt-32 lg:pb-20 lg:pt-36">
      <div className="container-page">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="flex flex-col lg:col-span-7 lg:pt-10">
            <p className="eyebrow text-ardosia" data-reveal="fade" data-intro="eyebrow">
              {hero.eyebrow}
            </p>

            <RevealLines
              as="h1"
              id="hero-title"
              intro="title"
              className="display-1 mt-8 text-tinta"
              lines={[l1, l2, <em key="m" className="italic text-teal">{l3}</em>]}
            />

            <p className="lead mt-10 max-w-md text-ardosia" data-reveal="up" data-intro="text">
              {hero.subtitle}
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-3" data-intro="cta">
              <ButtonLink href={whatsappLink()} icon="arrowUpRight" data-reveal="up">
                Agendar avaliação
              </ButtonLink>
              <ButtonLink href="#tratamentos" variant="outline" icon="arrowRight" data-reveal="up">
                Conhecer tratamentos
              </ButtonLink>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative">
              <figure data-intro="media">
                <div
                  className="relative aspect-4/5 overflow-hidden bg-agua md:max-lg:aspect-square"
                  data-reveal="image"
                >
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
              </figure>

              <SmileAnalysis
                intro
                image={hero.analysis}
                className="relative -mt-20 ml-auto mr-3 w-[66%] outline-[0.375rem] outline-porcelana outline-solid sm:w-[52%] lg:absolute lg:-bottom-12 lg:-left-14 lg:m-0 lg:w-[58%]"
              />
            </div>

          </div>
        </div>

        {/* Immediate social proof, set like a measured scale */}
        <div className="mt-16 lg:mt-24" data-intro="proof">
          <span aria-hidden="true" className="rule-ticks block h-1.5 w-full text-tinta/35" data-reveal="rule" />
          <ul className="grid grid-cols-2 gap-x-6 gap-y-8 pt-8 md:grid-cols-4">
            {hero.proof.map((item) => (
              <li key={item.label} data-reveal="up">
                <p className="flex items-center gap-2 font-serif text-[2.4rem] leading-none tracking-tight sm:text-[2.9rem]">
                  {item.rating && <Icon name="star" filled size={22} className="text-teal" />}
                  {item.value}
                </p>
                <p className="mt-2 text-[0.92rem] text-ardosia">{item.label}</p>
              </li>
            ))}
          </ul>
          <ul className="eyebrow mt-10 flex flex-wrap gap-x-6 gap-y-2 text-petroleo" data-reveal="fade" aria-label="Especialidades">
            {hero.specialties.map((s) => (
              <li key={s} className="flex items-center gap-2.5">
                <span aria-hidden="true" className="size-1 rounded-full bg-teal" />
                {s}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
