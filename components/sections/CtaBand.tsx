import Image from "next/image";
import { ctaBand } from "@/lib/content";
import { whatsappLink } from "@/lib/site";
import { ButtonLink } from "@/components/ui/ButtonLink";

export function CtaBand() {
  return (
    <section aria-labelledby="cta-band-title" className="on-dark relative isolate overflow-hidden bg-noite text-linho">
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute inset-x-0 top-[-10%] h-[120%]" data-parallax="0.12">
          <Image src={ctaBand.image.src} alt="" fill sizes="100vw" placeholder="blur" className="object-cover opacity-60" />
        </div>
        <div className="absolute inset-0 bg-linear-to-r from-noite via-noite/75 to-noite/20" />
      </div>

      <div className="container-page flex min-h-[34rem] flex-col justify-center py-24 sm:min-h-[38rem]">
        <h2 id="cta-band-title" className="display-2 max-w-3xl" data-reveal="up">
          {ctaBand.title}
        </h2>
        <p className="lead mt-6 max-w-lg text-salvia" data-reveal="up">
          {ctaBand.text}
        </p>
        <div className="mt-10" data-reveal="up">
          <ButtonLink href={whatsappLink()} variant="light" icon="arrowUpRight">
            Agendar avaliação
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
