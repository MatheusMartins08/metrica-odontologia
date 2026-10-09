import { treatments } from "@/lib/content";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { RevealLines } from "@/components/ui/RevealLines";
import { TreatmentIndex } from "@/components/interactive/TreatmentIndex";

export function Treatments() {
  return (
    <section id="tratamentos" aria-labelledby="tratamentos-title" className="section-y">
      <div className="container-page">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <SectionLabel index="02" label="Tratamentos" />
            <RevealLines
              id="tratamentos-title"
              className="display-2 mt-8"
              lines={["Tratamentos com começo,", <>meio e <em className="italic">medida.</em></>]}
            />
          </div>
          <p className="max-w-md text-tinta lg:col-span-4 lg:col-start-9 lg:pb-2" data-reveal="up">
            Da prevenção à reabilitação completa. Todo tratamento parte do mesmo método: diagnóstico digital, plano
            claro e execução sem pressa.
          </p>
        </div>

        <div className="mt-14 lg:mt-20">
          <TreatmentIndex items={treatments} />
        </div>
      </div>
    </section>
  );
}
