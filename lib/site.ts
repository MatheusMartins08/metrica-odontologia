/**
 * Clinic identity and contact details.
 * Everything a new client usually needs to change lives here.
 */
export const site = {
  name: "Métrica",
  tagline: "Odontologia Contemporânea",
  legalName: "Métrica Odontologia Contemporânea",
  url: "https://metricaodonto.com.br",
  description:
    "Clínica odontológica nos Jardins, em São Paulo. Estética, implantes, alinhadores e reabilitação oral com planejamento digital e atendimento sem pressa.",
  phone: { display: "(11) 3062-4180", href: "tel:+551130624180" },
  whatsapp: { display: "(11) 97452-1380", number: "5511974521380" },
  email: "contato@metricaodonto.com.br",
  instagram: { handle: "@metrica.odonto", url: "https://www.instagram.com/metrica.odonto" },
  address: {
    street: "Rua Oscar Freire, 1127 — 4º andar",
    district: "Jardins",
    city: "São Paulo",
    state: "SP",
    postalCode: "01426-001",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Rua+Oscar+Freire+1127+Jardins+S%C3%A3o+Paulo",
    geo: { lat: -23.5624, lng: -46.6702 },
  },
  hours: [
    { days: "Segunda a sexta", time: "8h às 20h" },
    { days: "Sábado", time: "8h às 14h" },
  ],
  technicalLead: "Dra. Helena Arantes — CRO-SP 98.214",
  foundedYear: 2014,
  copyrightYear: 2026,
} as const;

export const nav = [
  { id: "inicio", label: "Início" },
  { id: "tratamentos", label: "Tratamentos" },
  { id: "resultados", label: "Resultados" },
  { id: "sobre", label: "Sobre" },
  { id: "avaliacoes", label: "Avaliações" },
  { id: "faq", label: "FAQ" },
  { id: "contato", label: "Contato" },
] as const;

export const DEFAULT_WHATSAPP_MESSAGE = "Olá! Gostaria de agendar uma avaliação na Métrica.";

export function whatsappLink(message: string = DEFAULT_WHATSAPP_MESSAGE) {
  return `https://wa.me/${site.whatsapp.number}?text=${encodeURIComponent(message)}`;
}
