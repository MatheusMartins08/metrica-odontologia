import type { StaticImageData } from "next/image";

import heroPortrait from "@/public/images/hero/hero-patient-portrait.webp";
import clinicReception from "@/public/images/clinic/clinic-reception.webp";
import clinicLounge from "@/public/images/clinic/clinic-lounge.webp";
import clinicOperatory from "@/public/images/clinic/clinic-operatory.webp";
import clinicDetails from "@/public/images/clinic/clinic-details.webp";
import clinicEntrance from "@/public/images/clinic/clinic-entrance.webp";
import architectureLight from "@/public/images/clinic/architecture-light.webp";
import architectureArch from "@/public/images/clinic/architecture-arch.webp";
import architectureShadow from "@/public/images/clinic/architecture-shadow.webp";
import consultation3d from "@/public/images/clinic/consultation-3d-planning.webp";
import consultationModel from "@/public/images/clinic/consultation-dental-model.webp";

import draHelena from "@/public/images/team/dra-helena-arantes.webp";
import draBeatriz from "@/public/images/team/dra-beatriz-lemos.webp";
import drRafael from "@/public/images/team/dr-rafael-moura.webp";
import drAndre from "@/public/images/team/dr-andre-salles.webp";
import draLuiza from "@/public/images/team/dra-luiza-campos.webp";

import tClareamento from "@/public/images/treatments/clareamento-dental.webp";
import tLentes from "@/public/images/treatments/lentes-de-contato-dental.webp";
import tImplantes from "@/public/images/treatments/implantes-dentarios.webp";
import tOrtodontia from "@/public/images/treatments/ortodontia-invisivel.webp";
import tLimpeza from "@/public/images/treatments/limpeza-e-prevencao.webp";
import tRestauracoes from "@/public/images/treatments/restauracoes-esteticas.webp";
import tEndodontia from "@/public/images/treatments/endodontia.webp";
import tReabilitacao from "@/public/images/treatments/reabilitacao-oral.webp";
import tHarmonizacao from "@/public/images/treatments/harmonizacao-do-sorriso.webp";

import techModels from "@/public/images/technology/tech-3d-printed-models.webp";
import techCad from "@/public/images/technology/tech-cad-design.webp";

import caseClareamentoAntes from "@/public/images/results/caso-clareamento-antes.webp";
import caseClareamentoDepois from "@/public/images/results/caso-clareamento-depois.webp";
import caseLentesAntes from "@/public/images/results/caso-lentes-de-contato-antes.webp";
import caseLentesDepois from "@/public/images/results/caso-lentes-de-contato-depois.webp";
import caseRestauracoesAntes from "@/public/images/results/caso-restauracoes-esteticas-antes.webp";
import caseRestauracoesDepois from "@/public/images/results/caso-restauracoes-esteticas-depois.webp";
import caseReabilitacaoAntes from "@/public/images/results/caso-reabilitacao-estetica-antes.webp";
import caseReabilitacaoDepois from "@/public/images/results/caso-reabilitacao-estetica-depois.webp";

export interface Picture {
  src: StaticImageData;
  alt: string;
}

/* ------------------------------------------------------------------ */
/* Hero                                                                */
/* ------------------------------------------------------------------ */

export const hero = {
  eyebrow: "Clínica odontológica · Jardins, São Paulo",
  title: ["Cada sorriso", "tem a sua", "medida."],
  subtitle:
    "Estética e reabilitação oral planejadas digitalmente, com o tempo e a calma que um bom tratamento pede.",
  image: {
    src: heroPortrait,
    alt: "Mulher sorrindo de forma natural diante de um fundo bege, com dentes claros e harmoniosos",
  } satisfies Picture,
  caption: "Planejamento estético com simulação digital",
  proof: [
    { value: "4,9", label: "nota média no Google", rating: true },
    { value: "1.200+", label: "avaliações de pacientes" },
    { value: "12 anos", label: "de clínica nos Jardins" },
    { value: "5", label: "especialistas na equipe" },
  ],
  proofNote: "Atendimento particular e convênios selecionados",
};

/* ------------------------------------------------------------------ */
/* Manifesto                                                           */
/* ------------------------------------------------------------------ */

export const manifesto = {
  statement:
    "Um sorriso bem tratado não chama atenção para o tratamento. Ele *parece seu* — só que mais saudável, mais leve e em equilíbrio.",
  image: {
    src: architectureLight,
    alt: "Luz natural desenhando linhas de sombra sobre uma parede clara",
  } satisfies Picture,
  principles: [
    {
      title: "Sem frieza",
      text: "Consultório não precisa parecer hospital. Você é recebido pelo nome e tem tempo para conversar antes de qualquer procedimento.",
    },
    {
      title: "Sem artifício",
      text: "Estética que respeita o formato do rosto, a cor natural dos dentes e o jeito como você sorri.",
    },
    {
      title: "Tecnologia a favor do conforto",
      text: "Escaneamos em vez de moldar, simulamos antes de executar e explicamos antes de propor.",
    },
    {
      title: "Saúde, função e beleza",
      text: "Nenhum resultado estético se sustenta sem gengiva saudável, mordida estável e acompanhamento.",
    },
  ],
};

/* ------------------------------------------------------------------ */
/* Tratamentos                                                         */
/* ------------------------------------------------------------------ */

export interface Treatment {
  id: string;
  name: string;
  summary: string;
  detail: string;
  timeline: string;
  image: Picture;
}

export const treatments: Treatment[] = [
  {
    id: "clareamento",
    name: "Clareamento dental",
    summary: "Dentes mais claros, sem aspecto artificial.",
    detail:
      "Combinamos clareamento em consultório e moldeiras de uso caseiro, com gel de baixa sensibilidade. A cor final é definida com você, a partir da escala natural dos seus dentes.",
    timeline: "2 a 3 semanas · 1 a 2 sessões",
    image: { src: tClareamento, alt: "Sorriso com dentes claros e lábios em tom rosado" },
  },
  {
    id: "lentes",
    name: "Lentes de contato dental",
    summary: "Lâminas cerâmicas finas para corrigir forma, cor e proporção.",
    detail:
      "Cada lente é desenhada a partir do planejamento digital do sorriso e testada em boca com um ensaio provisório antes da cimentação. Desgaste mínimo ou nenhum, conforme o caso.",
    timeline: "4 a 6 semanas · 3 a 4 sessões",
    image: { src: tLentes, alt: "Escala de cores de lâminas cerâmicas usada para escolher o tom das lentes" },
  },
  {
    id: "implantes",
    name: "Implantes dentários",
    summary: "Reposição fixa de dentes perdidos, com cirurgia guiada.",
    detail:
      "Planejamento em tomografia 3D e guia cirúrgico impresso: o implante é posicionado com precisão, em um procedimento mais curto e confortável.",
    timeline: "3 a 6 meses · conforme cicatrização",
    image: { src: tImplantes, alt: "Modelo didático de implante dentário entre dois dentes naturais" },
  },
  {
    id: "alinhadores",
    name: "Ortodontia invisível",
    summary: "Alinhadores transparentes, removíveis e discretos.",
    detail:
      "Você vê a simulação completa da movimentação dos dentes antes de começar. Trocas a cada uma ou duas semanas e consultas de acompanhamento a cada seis a oito semanas.",
    timeline: "6 a 18 meses",
    image: { src: tOrtodontia, alt: "Mulher sorrindo enquanto posiciona um alinhador transparente" },
  },
  {
    id: "limpeza",
    name: "Limpeza e prevenção",
    summary: "Profilaxia completa, sem pressa e sem desconforto.",
    detail:
      "Avaliação periodontal, remoção de tártaro, jato de bicarbonato e orientação personalizada de higiene. Recomendada a cada seis meses.",
    timeline: "Sessão de 50 minutos",
    image: { src: tLimpeza, alt: "Paciente sorrindo para o espelho ao lado da dentista após a consulta" },
  },
  {
    id: "restauracoes",
    name: "Restaurações estéticas",
    summary: "Resina de alta performance que se confunde com o dente.",
    detail:
      "Substituímos restaurações antigas e escurecidas e reconstruímos pequenas fraturas com resina em camadas, reproduzindo a cor e a translucidez do esmalte.",
    timeline: "1 sessão por dente, em média",
    image: { src: tRestauracoes, alt: "Escala de cores de dentes em resina sobre a bancada do consultório" },
  },
  {
    id: "endodontia",
    name: "Endodontia",
    summary: "Tratamento de canal com magnificação e anestesia confortável.",
    detail:
      "Localizador apical eletrônico, instrumentação rotatória e magnificação permitem tratamentos mais rápidos, muitas vezes concluídos em uma única sessão.",
    timeline: "1 a 2 sessões",
    image: { src: tEndodontia, alt: "Radiografia panorâmica e cortes tomográficos analisados no monitor" },
  },
  {
    id: "reabilitacao",
    name: "Reabilitação oral",
    summary: "Função e estética de volta quando há perdas ou desgastes amplos.",
    detail:
      "Plano integrado entre especialistas — implantes, próteses, coroas e ajuste de mordida — apresentado em etapas claras, com previsão de prazos e investimento.",
    timeline: "Plano individual",
    image: { src: tReabilitacao, alt: "Próteses dentárias impressas em 3D sobre superfície escura" },
  },
  {
    id: "harmonizacao",
    name: "Harmonização do sorriso",
    summary: "Ajustes finos de gengiva, contorno e proporção.",
    detail:
      "Pequenas correções de contorno gengival, recontorno cosmético e clareamento combinados para equilibrar o sorriso com o rosto, sem excessos.",
    timeline: "1 a 3 sessões",
    image: { src: tHarmonizacao, alt: "Mulher sorrindo com as mãos no rosto sobre fundo bege" },
  },
];

/* ------------------------------------------------------------------ */
/* Como podemos te ajudar                                              */
/* ------------------------------------------------------------------ */

export interface Need {
  id: string;
  label: string;
  title: string;
  text: string;
  paths: string[];
  firstStep: string;
  message: string;
}

export const needs: Need[] = [
  {
    id: "dor",
    label: "Estou com dor",
    title: "Dor não espera.",
    text: "Reservamos horários diários para urgências. Você é atendido no mesmo dia, entendemos a causa e aliviamos o desconforto antes de falar em qualquer plano.",
    paths: ["Atendimento de urgência", "Endodontia"],
    firstStep: "Chame no WhatsApp e avise que é urgência. Em horário comercial, respondemos em até 30 minutos.",
    message: "Olá! Estou com dor de dente e preciso de um atendimento de urgência.",
  },
  {
    id: "sorriso",
    label: "Quero melhorar meu sorriso",
    title: "Comece pelo que você gosta nele.",
    text: "A primeira conversa é sobre o que incomoda e o que você quer preservar. Depois fotografamos, escaneamos e simulamos o resultado antes de qualquer procedimento.",
    paths: ["Clareamento dental", "Lentes de contato dental", "Harmonização do sorriso"],
    firstStep: "Avaliação estética com planejamento digital, em uma consulta de 60 minutos.",
    message: "Olá! Quero melhorar meu sorriso e gostaria de agendar uma avaliação estética.",
  },
  {
    id: "alinhar",
    label: "Quero alinhar meus dentes",
    title: "Sem bráquetes, com previsão.",
    text: "Alinhadores transparentes resolvem a maioria dos casos de dentes tortos ou espaçados. Você vê a simulação do resultado antes de decidir começar.",
    paths: ["Ortodontia invisível"],
    firstStep: "Escaneamento 3D e simulação do tratamento já na primeira consulta.",
    message: "Olá! Tenho interesse em alinhar meus dentes com alinhadores transparentes.",
  },
  {
    id: "perdi",
    label: "Perdi um dente",
    title: "Quanto antes, mais simples.",
    text: "Planejamos o implante em tomografia 3D e, quando o caso permite, você sai da cirurgia com um dente provisório fixo no mesmo dia.",
    paths: ["Implantes dentários", "Reabilitação oral"],
    firstStep: "Avaliação com tomografia digital para estudar osso e posicionamento.",
    message: "Olá! Perdi um dente e gostaria de avaliar a possibilidade de implante.",
  },
  {
    id: "limpeza",
    label: "Quero fazer uma limpeza",
    title: "Cinquenta minutos, sem pressa.",
    text: "Uma limpeza bem feita leva tempo. Avaliamos gengivas, removemos tártaro e manchas e ajustamos sua rotina de cuidado em casa.",
    paths: ["Limpeza e prevenção"],
    firstStep: "Agendamento direto — normalmente com horários na mesma semana.",
    message: "Olá! Gostaria de agendar uma limpeza.",
  },
  {
    id: "rapido",
    label: "Preciso de atendimento rápido",
    title: "Tem prazo? A gente organiza.",
    text: "Casamento, viagem, uma restauração que quebrou. Concentramos a agenda para resolver o que é possível em poucos dias, sem pular etapas.",
    paths: ["Restaurações estéticas", "Clareamento dental"],
    firstStep: "Fale com a recepção pelo WhatsApp e informe a data que você precisa.",
    message: "Olá! Preciso de um atendimento rápido, tenho um prazo próximo.",
  },
];

/* ------------------------------------------------------------------ */
/* Resultados (antes e depois)                                         */
/* ------------------------------------------------------------------ */

export interface ResultCase {
  id: string;
  label: string;
  title: string;
  summary: string;
  facts: { label: string; value: string }[];
  before: Picture;
  after: Picture;
}

export const resultCases: ResultCase[] = [
  {
    id: "clareamento",
    label: "Clareamento",
    title: "Clareamento combinado",
    summary:
      "Paciente de 34 anos, incomodada com o tom amarelado depois de anos de café. Clareamento em consultório associado a moldeiras de uso caseiro.",
    facts: [
      { label: "Duração", value: "3 semanas" },
      { label: "Sessões", value: "2 em consultório" },
      { label: "Escala de cor", value: "A3 → B1" },
    ],
    before: { src: caseClareamentoAntes, alt: "Antes: dentes com tom amarelado" },
    after: { src: caseClareamentoDepois, alt: "Depois: dentes mais claros e uniformes" },
  },
  {
    id: "lentes",
    label: "Lentes",
    title: "Lentes de contato cerâmicas",
    summary:
      "Dentes escurecidos e com pequenas irregularidades de forma. Oito lentes cerâmicas no arco superior, desenhadas no planejamento digital.",
    facts: [
      { label: "Duração", value: "5 semanas" },
      { label: "Sessões", value: "4" },
      { label: "Escopo", value: "8 lentes, arco superior" },
    ],
    before: { src: caseLentesAntes, alt: "Antes: dentes escurecidos e com cor irregular" },
    after: { src: caseLentesDepois, alt: "Depois: dentes claros com forma harmônica após as lentes" },
  },
  {
    id: "restauracoes",
    label: "Restaurações",
    title: "Restaurações em resina",
    summary:
      "Troca de restaurações antigas e manchadas nos dentes anteriores, com resina em camadas para recuperar cor e translucidez.",
    facts: [
      { label: "Duração", value: "2 semanas" },
      { label: "Sessões", value: "3" },
      { label: "Escopo", value: "6 dentes anteriores" },
    ],
    before: { src: caseRestauracoesAntes, alt: "Antes: restaurações antigas com manchas amareladas" },
    after: { src: caseRestauracoesDepois, alt: "Depois: dentes com cor uniforme após novas restaurações" },
  },
  {
    id: "reabilitacao",
    label: "Reabilitação",
    title: "Reabilitação estética",
    summary:
      "Desgaste e alteração de cor em vários dentes. Plano em etapas: clareamento, restaurações e ajuste de contorno.",
    facts: [
      { label: "Duração", value: "4 meses" },
      { label: "Sessões", value: "7" },
      { label: "Escopo", value: "Plano integrado" },
    ],
    before: { src: caseReabilitacaoAntes, alt: "Antes: dentes desgastados e com cor alterada" },
    after: { src: caseReabilitacaoDepois, alt: "Depois: sorriso reabilitado, claro e proporcional" },
  },
];

/* ------------------------------------------------------------------ */
/* Equipe                                                              */
/* ------------------------------------------------------------------ */

export const leadDentist = {
  name: "Dra. Helena Arantes",
  role: "Dentística e prótese",
  registration: "CRO-SP 98.214",
  image: {
    src: draHelena,
    alt: "Dra. Helena Arantes, de uniforme preto, em retrato sobre fundo claro",
  } satisfies Picture,
  bio: [
    "Formada pela Faculdade de Odontologia da USP, Helena passou dez anos dividida entre consultório e sala de aula antes de fundar a Métrica, em 2014.",
    "O trabalho dela parte de uma ideia simples: o melhor resultado estético é o que respeita o rosto, a função e o tempo de cada paciente.",
  ],
  facts: [
    { value: "18", label: "anos de prática clínica" },
    { value: "2.400+", label: "casos estéticos planejados" },
  ],
  education: [
    "Graduação em Odontologia — FOUSP",
    "Especialização em Dentística — FOUSP",
    "Mestrado em Prótese Dentária — Unicamp",
    "Membro da Sociedade Brasileira de Odontologia Estética",
  ],
  quote:
    "Antes de pensar em lentes ou clareamento, quero entender como a pessoa sorri, fala e se sente. A técnica vem depois.",
};

export const team: { name: string; role: string; registration: string; image: Picture }[] = [
  {
    name: "Dr. Rafael Moura",
    role: "Ortodontia e alinhadores",
    registration: "CRO-SP 112.507",
    image: { src: drRafael, alt: "Dr. Rafael Moura sorrindo no consultório" },
  },
  {
    name: "Dra. Beatriz Lemos",
    role: "Endodontia",
    registration: "CRO-SP 104.391",
    image: { src: draBeatriz, alt: "Dra. Beatriz Lemos de jaleco branco no consultório" },
  },
  {
    name: "Dr. André Salles",
    role: "Implantodontia e cirurgia",
    registration: "CRO-SP 109.846",
    image: { src: drAndre, alt: "Dr. André Salles de braços cruzados ao lado da cadeira odontológica" },
  },
  {
    name: "Dra. Luiza Campos",
    role: "Periodontia e prevenção",
    registration: "CRO-SP 101.273",
    image: { src: draLuiza, alt: "Dra. Luiza Campos de braços cruzados no consultório" },
  },
];

/* ------------------------------------------------------------------ */
/* Diferenciais                                                        */
/* ------------------------------------------------------------------ */

export const differentials = {
  image: {
    src: consultation3d,
    alt: "Dentista apresenta à paciente a simulação 3D do novo sorriso em um monitor",
  } satisfies Picture,
  items: [
    { title: "Diagnóstico digital", text: "Fotografia, escaneamento e radiografia digital em uma única consulta." },
    { title: "Sem moldagem com massa", text: "Um scanner registra seus dentes em 3D em poucos minutos." },
    { title: "Planejamento 3D", text: "Você vê a proposta de resultado antes de iniciar o tratamento." },
    { title: "Agenda pontual", text: "Consultas com horário reservado. O seu tempo também importa." },
    { title: "Ambiente acolhedor", text: "Luz natural, isolamento acústico e salas pensadas para o descanso." },
    { title: "Mínima intervenção", text: "Preservamos o máximo de estrutura dental possível em cada procedimento." },
    { title: "Acompanhamento contínuo", text: "Retornos programados e contato direto com a equipe após cada etapa." },
    { title: "Horários estendidos", text: "Atendimento até as 20h durante a semana e aos sábados pela manhã." },
  ],
};

/* ------------------------------------------------------------------ */
/* Tecnologia                                                          */
/* ------------------------------------------------------------------ */

export const technology = {
  images: [
    { src: techModels, alt: "Modelos dentários impressos em 3D sobre superfície escura" },
    { src: techCad, alt: "Técnico desenha uma prótese em software de modelagem 3D" },
  ] satisfies Picture[],
  specs: [
    {
      name: "Scanner intraoral 3D",
      spec: "precisão de 20 µm",
      text: "Substitui a moldagem convencional por um registro digital rápido e confortável.",
    },
    {
      name: "Radiografia digital",
      spec: "até 80% menos radiação",
      text: "Imagens imediatas, com dose reduzida em relação ao filme convencional.",
    },
    {
      name: "Planejamento digital do sorriso",
      spec: "simulação prévia",
      text: "Projeta o novo sorriso sobre fotos e vídeos do seu rosto antes do tratamento.",
    },
    {
      name: "Fotografia odontológica",
      spec: "protocolo padronizado",
      text: "Registro clínico em alta definição para diagnóstico e acompanhamento de cada etapa.",
    },
    {
      name: "Impressão 3D",
      spec: "resolução de 50 µm",
      text: "Guias cirúrgicos, modelos e provisórios produzidos dentro da própria clínica.",
    },
    {
      name: "Ensaio em boca",
      spec: "teste antes do definitivo",
      text: "Você experimenta o desenho do novo sorriso com material provisório antes da etapa final.",
    },
  ],
};

/* ------------------------------------------------------------------ */
/* O espaço                                                            */
/* ------------------------------------------------------------------ */

export const space = {
  intro:
    "Quatrocentos metros quadrados no quarto andar, com luz natural o dia todo. Projetamos a clínica para que a espera seja descanso — e o consultório, um lugar sem pressa.",
  gallery: [
    { src: clinicReception, alt: "Recepção com balcão claro, painel de madeira e divisórias de vidro", caption: "Recepção" },
    { src: clinicLounge, alt: "Poltrona bege em sala de espera com arcos e paredes claras", caption: "Sala de espera" },
    { src: clinicOperatory, alt: "Consultório com cadeira odontológica, bancada de madeira e janela ampla", caption: "Consultório 02" },
    { src: clinicDetails, alt: "Estante metálica com objetos e prateleiras de madeira separando os ambientes", caption: "Detalhes" },
  ] as (Picture & { caption: string })[],
};

/* ------------------------------------------------------------------ */
/* Números                                                             */
/* ------------------------------------------------------------------ */

export const stats = [
  { value: 3000, prefix: "+", suffix: "", decimals: 0, label: "pacientes atendidos" },
  { value: 12, prefix: "", suffix: "", decimals: 0, label: "anos de clínica" },
  { value: 4.9, prefix: "", suffix: "", decimals: 1, label: "avaliação média" },
  { value: 98, prefix: "", suffix: "%", decimals: 0, label: "recomendam a clínica" },
];

/* ------------------------------------------------------------------ */
/* Avaliações                                                          */
/* ------------------------------------------------------------------ */

export const reviewsSummary = { rating: "4,9", count: "1.200+ avaliações", source: "Google" };

export const testimonials = [
  {
    name: "Mariana T.",
    treatment: "Lentes de contato dental",
    text: "Eu tinha muito receio de ficar com dentes artificiais. A Dra. Helena me mostrou a simulação, ajustamos juntas o formato e o resultado ficou natural. Ninguém pergunta se fiz lentes, só dizem que estou bem.",
  },
  {
    name: "Rodrigo A.",
    treatment: "Implante",
    text: "Perdi um dente num acidente de bicicleta e estava bem ansioso. Explicaram cada etapa com calma, a cirurgia foi rápida e não senti dor no pós. Atendimento muito pontual.",
  },
  {
    name: "Fernanda L.",
    treatment: "Ortodontia invisível",
    text: "Fiz o tratamento com alinhadores em 11 meses. Gostei de ver a simulação antes de começar e de ter resposta rápida pelo WhatsApp sempre que tive dúvida.",
  },
  {
    name: "Paulo H.",
    treatment: "Limpeza",
    text: "Sempre detestei ir ao dentista. Foi a primeira vez que saí de uma limpeza sem sensibilidade. O ambiente é tranquilo, parece mais um estúdio do que um consultório.",
  },
  {
    name: "Carolina M.",
    treatment: "Clareamento",
    text: "Fiz clareamento antes do meu casamento. Me orientaram sobre o prazo ideal, não tive sensibilidade e o tom ficou bonito, sem aquele branco exagerado.",
  },
  {
    name: "Juliana R.",
    treatment: "Tratamento de canal",
    text: "Cheguei com muita dor numa sexta à tarde e fui atendida no mesmo dia. O canal foi feito em uma sessão só. Muito grata à Dra. Beatriz.",
  },
  {
    name: "Eduardo S.",
    treatment: "Reabilitação oral",
    text: "Tratamento longo, mas muito bem organizado. Recebi um plano com todas as etapas e valores desde o início, sem surpresas no caminho.",
  },
  {
    name: "Ana Clara V.",
    treatment: "Restaurações",
    text: "Troquei restaurações antigas que estavam escuras. Não imaginava que daria para ficar tão parecido com o dente. Equipe atenciosa do início ao fim.",
  },
];

/* ------------------------------------------------------------------ */
/* Como funciona                                                       */
/* ------------------------------------------------------------------ */

export const process = {
  image: {
    src: consultationModel,
    alt: "Dentista explica o planejamento à paciente usando um modelo dentário",
  } satisfies Picture,
  steps: [
    { title: "Agende sua avaliação", text: "Pelo WhatsApp ou telefone, no horário que for melhor para você." },
    {
      title: "Diagnóstico completo",
      text: "Conversa, fotos, escaneamento 3D e radiografias digitais em uma consulta de 60 minutos.",
    },
    {
      title: "Plano personalizado",
      text: "Você recebe a proposta com etapas, prazos, simulação e investimento — e decide sem pressa.",
    },
    {
      title: "Início do tratamento",
      text: "Sessões agendadas com antecedência e acompanhamento direto da equipe em cada fase.",
    },
  ],
};

/* ------------------------------------------------------------------ */
/* Facilidades                                                         */
/* ------------------------------------------------------------------ */

export const payment = [
  { title: "Pix", text: "5% de desconto em pagamentos à vista." },
  { title: "Cartões de crédito", text: "Parcelamento em até 12x sem juros nas principais bandeiras." },
  { title: "Financiamento", text: "Tratamentos em até 24x com parceiros financeiros, sujeito a análise." },
  { title: "Atendimento particular", text: "Recibo e relatório para reembolso junto ao seu plano de saúde." },
  { title: "Convênios selecionados", text: "Consultas, prevenção e tratamentos básicos. Confirme a cobertura com a recepção." },
];

/* ------------------------------------------------------------------ */
/* FAQ                                                                 */
/* ------------------------------------------------------------------ */

export const faq = [
  {
    q: "Vocês atendem convênio?",
    a: "Atendemos alguns convênios odontológicos para consultas, prevenção e tratamentos básicos. Para os demais planos, emitimos recibo e relatório para reembolso. Fale com a recepção para confirmar a cobertura do seu plano.",
  },
  {
    q: "A avaliação é paga?",
    a: "Sim. A avaliação inclui conversa, exame clínico, fotografias e escaneamento 3D, e dura cerca de 60 minutos. Se você iniciar o tratamento em até 30 dias, o valor é abatido do plano.",
  },
  {
    q: "Como funciona a primeira consulta?",
    a: "Começamos ouvindo o que trouxe você até aqui. Depois fazemos o exame clínico, as fotos e o escaneamento digital. Você sai com um diagnóstico claro, e o plano completo é apresentado em uma segunda conversa, com simulação e valores.",
  },
  {
    q: "Posso parcelar o tratamento?",
    a: "Pode. Parcelamos em até 12x sem juros no cartão e oferecemos financiamento em até 24x com parceiros. No Pix, à vista, há 5% de desconto.",
  },
  {
    q: "Quanto tempo dura uma consulta?",
    a: "Depende do procedimento: avaliações levam 60 minutos, limpezas cerca de 50 e sessões de tratamento entre 40 minutos e 2 horas. Sempre informamos a duração prevista no agendamento.",
  },
  {
    q: "Vocês atendem urgências?",
    a: "Sim. Reservamos horários diários para dor, fraturas ou perda de restaurações. Pelo WhatsApp, avise que é urgência para ser atendido com prioridade.",
  },
  {
    q: "Clareamento dói?",
    a: "Algumas pessoas sentem uma sensibilidade leve e passageira nos primeiros dias. Usamos géis de baixa concentração e dessensibilizantes para reduzir esse efeito, e ajustamos o protocolo se for preciso.",
  },
  {
    q: "Como funciona o tratamento com alinhadores?",
    a: "Escaneamos seus dentes e planejamos digitalmente toda a movimentação. Você recebe uma sequência de alinhadores transparentes, troca cada um a cada uma ou duas semanas e volta à clínica a cada seis a oito semanas para acompanhamento.",
  },
  {
    q: "Lentes de contato estragam os dentes?",
    a: "Quando bem indicadas, as lentes exigem desgaste mínimo ou nenhum. Por isso a avaliação é decisiva: em alguns casos, clareamento e resina resolvem com menos intervenção — e nós vamos dizer isso a você.",
  },
];

/* ------------------------------------------------------------------ */
/* Faixas de chamada                                                   */
/* ------------------------------------------------------------------ */

export const ctaBand = {
  title: "Pronto para uma experiência diferente no dentista?",
  text: "A primeira conversa é sem pressa: entendemos o que você procura e mostramos os caminhos possíveis.",
  image: {
    src: architectureShadow,
    alt: "Luz do fim de tarde entrando por janelas e projetando sombras em um corredor",
  } satisfies Picture,
};

export const finalCta = {
  title: ["Comece pela avaliação.", "O resto, planejamos com você."],
  text: "Atendemos de segunda a sábado, nos Jardins. Respondemos pelo WhatsApp em poucos minutos durante o horário comercial.",
  image: {
    src: architectureArch,
    alt: "Parede clara com arco e luz natural desenhando faixas de sol",
  } satisfies Picture,
};

export const contactImage: Picture = {
  src: clinicEntrance,
  alt: "Entrada da clínica com balcão de madeira, janela em arco e luz natural",
};

