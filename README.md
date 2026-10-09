# Métrica — Odontologia Contemporânea

Landing page de uma clínica odontológica premium, em página única, feita com Next.js 16 (App Router), React 19, Tailwind CSS 4 e GSAP.

## Rodando o projeto

```bash
npm install
npm run dev     # http://localhost:3000
npm run lint
npm run build   # build de produção (todas as rotas são estáticas)
```

## Como personalizar para um cliente

| O que mudar | Onde |
| --- | --- |
| Nome, telefone, WhatsApp, Instagram, endereço, horários, CRO | `lib/site.ts` |
| Textos de todas as seções (tratamentos, casos, equipe, FAQ, depoimentos…) | `lib/content.ts` |
| Fotos | `public/images/{hero,clinic,team,treatments,technology,results}` — substitua mantendo o nome ou atualize o import em `lib/content.ts` |
| Paleta, tipografia e escala | tokens em `app/globals.css` (`@theme`) e fontes em `app/layout.tsx` |
| Logo | `public/brand/` (arquivos finais) e `components/brand/logo-geometry.ts` (versão usada no site). Detalhes em `brand/README.md` |

Os botões de agendamento abrem o WhatsApp com mensagem pré-preenchida (`whatsappLink()` em `lib/site.ts`).

## Estrutura

- `app/` — layout, página, política de privacidade, metadados (ícones, Open Graph, robots, sitemap)
- `components/sections/` — uma seção por arquivo, todas Server Components
- `components/interactive/` — componentes com estado: antes/depois, índice de tratamentos, seletor de necessidades, depoimentos, FAQ
- `components/motion/MotionRoot.tsx` — camada única de animação (GSAP + ScrollTrigger). As seções só declaram atributos `data-reveal`, `data-parallax` e `data-count`
- `components/layout/` — header (menu móvel) e footer

## Animações e acessibilidade

As animações respeitam `prefers-reduced-motion` e o conteúdo permanece visível sem JavaScript. Os estados iniciais ficam em `app/globals.css` e só se aplicam quando o JS está ativo.
