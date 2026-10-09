import { needs } from "@/lib/content";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { RevealLines } from "@/components/ui/RevealLines";
import { NeedsSelector } from "@/components/interactive/NeedsSelector";

export function Needs() {
  return (
    <section aria-labelledby="ajuda-title" className="on-dark section-y bg-musgo text-linho">
      <div className="container-page">
        <div className="mb-14 grid gap-8 lg:mb-20 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <SectionLabel index="03" label="Para você" tone="dark" />
            <RevealLines
              id="ajuda-title"
              className="display-2 mt-8"
              lines={["Como podemos", <>te <em className="italic">ajudar?</em></>]}
            />
          </div>
          <p className="max-w-sm text-salvia lg:col-span-4 lg:col-start-9 lg:pb-2" data-reveal="up">
            Escolha o que mais se parece com o seu momento. A gente indica por onde começar.
          </p>
        </div>

        <NeedsSelector items={needs} />
      </div>
    </section>
  );
}
