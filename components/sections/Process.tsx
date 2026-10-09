import Image from "next/image";
import { payment, process } from "@/lib/content";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { RevealLines } from "@/components/ui/RevealLines";

export function Process() {
  return (
    <section aria-labelledby="processo-title" className="section-y">
      <div className="container-page">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-end lg:gap-10">
          <div className="lg:col-span-6">
            <SectionLabel index="10" label="Como funciona" />
            <RevealLines
              id="processo-title"
              className="display-2 mt-8"
              lines={["Do primeiro contato", <>ao <em className="italic">plano pronto.</em></>]}
            />
          </div>
          <div className="relative aspect-3/2 overflow-hidden lg:col-span-5 lg:col-start-8" data-reveal="image">
            <Image
              src={process.image.src}
              alt={process.image.alt}
              fill
              placeholder="blur"
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>

        {/* Steps on a measured line */}
        <ol className="relative mt-20 grid gap-12 md:grid-cols-2 lg:mt-28 lg:grid-cols-4 lg:gap-10">
          <span
            aria-hidden="true"
            className="rule-ticks absolute inset-x-0 top-0 hidden h-1.5 text-grafite/35 lg:block"
            data-reveal="rule"
          />
          {process.steps.map((step, i) => (
            <li key={step.title} className="relative border-t border-grafite/20 pt-8 lg:border-t-0 lg:pt-12" data-reveal="up">
              <span aria-hidden="true" className="absolute -top-[5px] left-0 hidden size-[11px] rounded-full bg-musgo lg:block" />
              <p className="eyebrow text-tinta">Etapa {String(i + 1).padStart(2, "0")}</p>
              <h3 className="mt-4 font-serif text-[1.85rem] leading-tight">{step.title}</h3>
              <p className="mt-3 max-w-xs text-tinta">{step.text}</p>
            </li>
          ))}
        </ol>

        {/* Facilidades */}
        <section aria-labelledby="pagamento-title" className="mt-28 grid gap-10 border-t border-grafite/20 pt-12 lg:mt-36 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-4">
            <h2 id="pagamento-title" className="display-3" data-reveal="up">
              Facilidades de pagamento
            </h2>
            <p className="mt-4 max-w-sm text-tinta" data-reveal="up">
              O plano de tratamento chega com valores fechados por etapa. Você escolhe como prefere pagar.
            </p>
          </div>
          <dl className="grid gap-x-10 sm:grid-cols-2 lg:col-span-7 lg:col-start-6">
            {payment.map((p) => (
              <div key={p.title} className="border-b border-grafite/15 py-5" data-reveal="up">
                <dt className="font-medium">{p.title}</dt>
                <dd className="mt-1 text-[0.98rem] text-tinta">{p.text}</dd>
              </div>
            ))}
          </dl>
        </section>
      </div>
    </section>
  );
}
