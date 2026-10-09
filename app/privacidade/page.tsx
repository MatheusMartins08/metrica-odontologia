import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Política de privacidade",
  description: `Como a ${site.legalName} trata os dados pessoais de pacientes e visitantes do site.`,
  alternates: { canonical: "/privacidade" },
};

const sections = [
  {
    title: "Quais dados coletamos",
    text: "Pelo site, não coletamos dados por formulários. Quando você nos chama pelo WhatsApp, telefone ou e-mail, recebemos as informações que você decide compartilhar, como nome, telefone e motivo do contato. Durante o atendimento clínico, registramos os dados necessários ao prontuário odontológico.",
  },
  {
    title: "Para que usamos",
    text: "Usamos seus dados para agendar consultas, prestar o atendimento, emitir documentos fiscais e de reembolso e cumprir obrigações legais e regulatórias, incluindo a guarda do prontuário exigida pelo Conselho Federal de Odontologia.",
  },
  {
    title: "Compartilhamento",
    text: "Não vendemos nem cedemos dados pessoais. O compartilhamento acontece apenas com laboratórios de prótese, operadoras de convênio e parceiros financeiros quando necessário ao seu tratamento e com o seu conhecimento, ou mediante obrigação legal.",
  },
  {
    title: "Imagens clínicas",
    text: "Fotografias e exames são parte do prontuário. Imagens de casos só são publicadas com autorização expressa e por escrito do paciente, que pode ser revogada a qualquer momento.",
  },
  {
    title: "Seus direitos",
    text: "Nos termos da Lei Geral de Proteção de Dados (Lei nº 13.709/2018), você pode solicitar acesso, correção, portabilidade ou eliminação dos seus dados, ressalvadas as informações que a lei nos obriga a manter.",
  },
  {
    title: "Contato",
    text: `Para qualquer solicitação sobre seus dados, escreva para ${site.email} ou fale com a recepção pelo telefone ${site.phone.display}.`,
  },
];

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main id="conteudo" className="container-page pb-28 pt-36 sm:pt-44">
        <p className="eyebrow text-tinta">Documento institucional</p>
        <h1 className="display-2 mt-6 max-w-3xl">Política de privacidade</h1>
        <p className="lead mt-8 max-w-2xl text-tinta">
          A {site.legalName} trata dados pessoais com o mesmo cuidado que dedica aos tratamentos: apenas o necessário,
          pelo tempo necessário.
        </p>
        <div className="mt-16 max-w-3xl border-t border-grafite/20">
          {sections.map((s) => (
            <section key={s.title} className="grid gap-3 border-b border-grafite/15 py-8 sm:grid-cols-[14rem_1fr] sm:gap-10">
              <h2 className="font-medium">{s.title}</h2>
              <p className="text-tinta">{s.text}</p>
            </section>
          ))}
        </div>
        <p className="eyebrow mt-10 text-tinta">Atualizada em agosto de {site.copyrightYear}</p>
      </main>
      <Footer />
    </>
  );
}
