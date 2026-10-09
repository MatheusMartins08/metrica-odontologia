import Image from "next/image";
import { finalCta } from "@/lib/content";
import { site, whatsappLink } from "@/lib/site";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { RevealLines } from "@/components/ui/RevealLines";

export function FinalCta() {
  const [first, second] = finalCta.title;

  return (
    <section aria-labelledby="cta-final-title" className="on-dark relative isolate overflow-hidden bg-musgo text-linho">
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute inset-x-0 top-[-10%] h-[120%]" data-parallax="0.1">
          <Image
            src={finalCta.image.src}
            alt=""
            fill
            placeholder="blur"
            sizes="100vw"
            className="object-cover opacity-30 mix-blend-luminosity"
          />
        </div>
        <div className="absolute inset-0 bg-linear-to-t from-musgo via-musgo/70 to-musgo/40" />
      </div>

      <div className="container-page py-28 text-center sm:py-40">
        <RevealLines
          id="cta-final-title"
          className="display-2 mx-auto max-w-4xl"
          lines={[first, <em key="e" className="italic text-areia">{second}</em>]}
        />
        <p className="lead mx-auto mt-8 max-w-xl text-salvia" data-reveal="up">
          {finalCta.text}
        </p>
        <div className="mt-12 flex flex-wrap justify-center gap-3" data-reveal="up">
          <ButtonLink href={whatsappLink()} variant="light" icon="arrowUpRight">
            Agendar avaliação
          </ButtonLink>
          <ButtonLink
            href={whatsappLink("Olá! Gostaria de tirar uma dúvida com a equipe da Métrica.")}
            variant="outline-light"
            icon="whatsapp"
          >
            Falar no WhatsApp
          </ButtonLink>
        </div>
        <p className="mt-8 text-[0.95rem] text-salvia" data-reveal="fade">
          Prefere ligar?{" "}
          <a href={site.phone.href} className="link-line text-linho">
            {site.phone.display}
          </a>
        </p>
      </div>
    </section>
  );
}
