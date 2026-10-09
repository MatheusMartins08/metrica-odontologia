import { resultCases } from "@/lib/content";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { RevealLines } from "@/components/ui/RevealLines";
import { BeforeAfter } from "@/components/interactive/BeforeAfter";

export function Results() {
  return (
    <section id="resultados" aria-labelledby="resultados-title" className="section-y">
      <div className="container-page">
        <div className="mb-12 grid gap-8 lg:mb-16 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <SectionLabel index="04" label="Resultados" />
            <RevealLines
              id="resultados-title"
              className="display-2 mt-8"
              lines={["Resultados que", <em key="e" className="italic">parecem naturais.</em>]}
            />
          </div>
          <p className="max-w-sm text-ardosia lg:col-span-4 lg:pb-2" data-reveal="up">
            Poucos casos, escolhidos com critério. Arraste a linha para comparar o antes e o depois.
          </p>
        </div>

        <BeforeAfter cases={resultCases} />
      </div>
    </section>
  );
}
