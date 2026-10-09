import { reviewsSummary, testimonials } from "@/lib/content";
import { site } from "@/lib/site";
import { Icon } from "@/components/ui/Icon";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { RevealLines } from "@/components/ui/RevealLines";
import { TestimonialRail } from "@/components/interactive/TestimonialRail";

export function Testimonials() {
  return (
    <section id="avaliacoes" aria-labelledby="avaliacoes-title" className="section-y overflow-hidden bg-creme">
      <div className="container-page grid gap-14 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-4">
          <SectionLabel index="09" label="Avaliações" />
          <RevealLines
            id="avaliacoes-title"
            className="display-2 mt-8"
            lines={["Quem já", <>passou <em className="italic">por aqui.</em></>]}
          />

          <div className="mt-12 border-t border-grafite/20 pt-8" data-reveal="up">
            <p className="font-serif text-[5.5rem] leading-none tracking-[-0.03em]">{reviewsSummary.rating}</p>
            <div className="mt-3 flex gap-1 text-oliva" role="img" aria-label="Nota 4,9 de 5">
              {Array.from({ length: 5 }, (_, i) => (
                <Icon key={i} name="star" size={18} filled />
              ))}
            </div>
            <p className="mt-3 text-tinta">
              {reviewsSummary.count} no {reviewsSummary.source}
            </p>
            <a
              href={site.address.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="link-line mt-6 inline-flex items-center gap-2 text-[0.95rem] font-medium text-musgo"
            >
              Ver todas no Google
              <Icon name="arrowUpRight" size={16} />
              <span className="sr-only"> (abre em nova aba)</span>
            </a>
          </div>
        </div>

        <div className="min-w-0 lg:col-span-8 lg:pt-28" data-reveal="up">
          <TestimonialRail items={testimonials} />
        </div>
      </div>
    </section>
  );
}
