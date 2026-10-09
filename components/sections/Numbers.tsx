import { stats } from "@/lib/content";
import { DentalArch } from "@/components/brand/DentalArch";

const format = (value: number, decimals: number) =>
  new Intl.NumberFormat("pt-BR", { minimumFractionDigits: decimals, maximumFractionDigits: decimals }).format(value);

export function Numbers() {
  return (
    <section
      aria-label="A clínica em números"
      className="on-dark relative isolate overflow-hidden bg-petroleo py-20 text-porcelana sm:py-28"
    >
      {/* Measured maxillary arch, drawn faintly behind the figures */}
      <DentalArch className="absolute left-1/2 top-6 -z-10 w-[min(72rem,180%)] -translate-x-1/2 text-menta/20" />

      <div className="container-page">
        <ul className="grid grid-cols-2 gap-x-6 gap-y-14 lg:grid-cols-4">
          {stats.map((s) => (
            <li key={s.label} data-reveal="up">
              <span aria-hidden="true" className="rule-ticks block h-1.5 w-full text-porcelana/30" data-reveal="rule" />
              <p className="mt-6 font-serif text-[clamp(3.25rem,2rem+4.2vw,6.25rem)] leading-none tracking-[-0.03em]">
                {s.prefix}
                <span data-count={s.value} data-decimals={s.decimals}>
                  {format(s.value, s.decimals)}
                </span>
                {s.suffix}
              </p>
              <p className="eyebrow mt-4 text-bruma">{s.label}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
