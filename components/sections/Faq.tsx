import { faq } from "@/lib/content";
import { whatsappLink } from "@/lib/site";
import { Icon } from "@/components/ui/Icon";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { RevealLines } from "@/components/ui/RevealLines";
import { Accordion } from "@/components/interactive/Accordion";

export function Faq() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <section id="faq" aria-labelledby="faq-title" className="section-y bg-areia">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <div className="container-page grid gap-14 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <SectionLabel index="11" label="Dúvidas" />
            <RevealLines
              id="faq-title"
              className="display-2 mt-8"
              lines={["Perguntas", <em key="e" className="italic">frequentes</em>]}
            />
            <p className="mt-8 max-w-xs text-ardosia" data-reveal="up">
              Não encontrou o que procurava? A recepção responde pelo WhatsApp em poucos minutos.
            </p>
            <a
              href={whatsappLink("Olá! Tenho uma dúvida sobre os tratamentos da Métrica.")}
              target="_blank"
              rel="noopener noreferrer"
              className="link-line mt-5 inline-flex items-center gap-2 text-[0.95rem] font-medium text-petroleo"
              data-reveal="up"
            >
              Enviar uma pergunta
              <Icon name="arrowUpRight" size={16} />
              <span className="sr-only"> (abre o WhatsApp em nova aba)</span>
            </a>
          </div>
        </div>

        <div className="lg:col-span-7 lg:col-start-6">
          <Accordion items={faq} />
        </div>
      </div>
    </section>
  );
}
