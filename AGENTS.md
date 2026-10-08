<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# PROJECT HARNESS

Este arquivo contém as regras permanentes para qualquer agente de IA que trabalhar neste projeto.

Leia este arquivo completamente antes de analisar, modificar ou criar qualquer código.

Este projeto é uma LANDING PAGE. O foco deve permanecer em:

- frontend;
- design;
- experiência do usuário;
- responsividade;
- animações;
- acessibilidade;
- performance;
- SEO;
- qualidade do código;
- qualidade visual.

Não implemente backend, banco de dados, autenticação, APIs próprias ou infraestrutura desnecessária sem que isso seja solicitado explicitamente no futuro.

---

# 1. PRINCÍPIO FUNDAMENTAL

Antes de alterar qualquer coisa:

1. analise o projeto;
2. entenda sua estrutura;
3. identifique a stack utilizada;
4. leia os arquivos relevantes;
5. identifique componentes existentes;
6. identifique padrões já utilizados;
7. identifique dependências instaladas;
8. identifique skills e instruções disponíveis;
9. entenda a identidade visual atual;
10. somente depois implemente a alteração solicitada.

Nunca faça alterações importantes baseado apenas em suposições.

Não reestruture partes do projeto que não estejam relacionadas à tarefa atual sem necessidade real.

---

# 2. ESCOPO DO PROJETO

Este projeto será uma landing page profissional.

Não existe necessidade atual de:

- backend próprio;
- banco de dados;
- Supabase;
- autenticação;
- login;
- painel administrativo;
- migrations;
- APIs próprias;
- armazenamento de dados;
- lógica de servidor complexa.

O foco deve estar na construção da melhor experiência possível no frontend.

Não adicione complexidade que não seja necessária para uma landing page.

---

# 3. STACK DO PROJETO

Este projeto utiliza principalmente:

- TypeScript
- Node.js
- Next.js
- React
- HTML
- CSS
- JavaScript quando necessário

Outras bibliotecas podem estar presentes.

Sempre confirme através de arquivos como:

- `package.json`
- `tsconfig.json`
- `next.config.*`
- estrutura de `src/`
- estrutura de `app/`
- arquivos de configuração
- dependências instaladas

Não assuma versões de bibliotecas.

Utilize as versões realmente instaladas no projeto.

---

# 4. NEXT.JS

Este projeto pode utilizar uma versão recente do Next.js com diferenças importantes em relação a versões anteriores.

Antes de implementar recursos específicos do Next.js:

1. verifique a versão instalada;
2. consulte a documentação correspondente;
3. respeite avisos de depreciação;
4. não utilize padrões antigos apenas porque são comuns em versões anteriores.

Quando houver documentação disponível em:

`node_modules/next/dist/docs/`

utilize-a como referência para a versão instalada.

Não remova instruções adicionadas automaticamente pelo Next.js ao `AGENTS.md`.

---

# 5. TYPESCRIPT

Priorize TypeScript corretamente tipado.

Evite:

- `any` sem necessidade;
- casts desnecessários;
- tipos genéricos demais;
- ignorar erros de TypeScript;
- `@ts-ignore` para esconder problemas.

Prefira:

- interfaces claras;
- types reutilizáveis;
- inferência quando apropriada;
- componentes corretamente tipados;
- funções previsíveis.

Corrija a causa dos erros de TypeScript, não apenas os sintomas.

---

# 6. ORGANIZAÇÃO DO CÓDIGO

Mantenha a estrutura simples e previsível.

Antes de criar um componente novo, verifique se já existe algo reutilizável.

Evite:

- duplicação;
- componentes gigantes;
- abstrações desnecessárias;
- arquivos sem finalidade clara;
- excesso de helpers;
- arquitetura complexa para problemas simples.

Crie abstrações apenas quando melhorarem:

- reutilização;
- legibilidade;
- manutenção;
- consistência.

---

# 7. COMPONENTIZAÇÃO

Evite colocar toda a landing page dentro de um único componente gigantesco.

Divida a página de forma lógica.

Exemplos:

- `Header`
- `Hero`
- `SocialProof`
- `Services`
- `BeforeAfter`
- `About`
- `Team`
- `Technology`
- `Testimonials`
- `FAQ`
- `Contact`
- `Footer`

Não é obrigatório utilizar exatamente esses nomes.

Organize conforme a necessidade real do projeto.

Ao mesmo tempo, não transforme cada pequeno elemento visual em um componente isolado sem necessidade.

Busque equilíbrio.

---

# 8. SERVER E CLIENT COMPONENTS

Respeite corretamente a arquitetura do Next.js.

Não adicione:

`"use client"`

automaticamente em todos os componentes.

Use Client Components apenas quando houver necessidade real, como:

- estado;
- eventos;
- animações dependentes do navegador;
- APIs do navegador;
- interatividade.

Mantenha Server Components quando possível.

Reduza JavaScript enviado ao navegador sempre que fizer sentido.

---

# 9. DEPENDÊNCIAS

Antes de instalar qualquer pacote:

1. verifique se uma solução já existe no projeto;
2. veja se uma dependência existente resolve;
3. avalie se realmente é necessária.

Não instale bibliotecas para resolver problemas triviais.

Evite aumentar desnecessariamente o tamanho do projeto.

Nunca remova dependências sem verificar onde são utilizadas.

---

# 10. GERENCIADOR DE PACOTES

Utilize o gerenciador já utilizado pelo projeto.

Exemplos:

- `package-lock.json` → npm
- `pnpm-lock.yaml` → pnpm
- `yarn.lock` → yarn

Não troque de gerenciador durante uma tarefa comum.

---

# 11. SKILLS

Antes de tarefas relacionadas a:

- design;
- animação;
- UI;
- UX;
- arquitetura;
- implementação especializada;

procure skills existentes dentro do projeto.

Leia os arquivos `SKILL.md` relevantes antes de implementar.

Se houver skills relacionadas à tarefa:

- entenda as recomendações;
- aplique os padrões adequados;
- adapte-os ao projeto.

Não apenas reconheça que elas existem.

Use-as quando forem relevantes.

---

# 12. IDENTIDADE VISUAL

Este projeto deve possuir aparência profissional e autoral.

Não deve parecer:

- template genérico;
- landing page pronta;
- site produzido automaticamente;
- combinação aleatória de componentes.

Antes de alterar o design:

1. analise o visual existente;
2. identifique a linguagem da marca;
3. identifique tipografia;
4. identifique paleta;
5. identifique espaçamentos;
6. identifique estilo de imagens;
7. identifique linguagem de animações;
8. preserve consistência.

Não altere elementos que já estejam bem resolvidos sem necessidade.

---

# 13. EVITAR "CARA DE IA"

Evite padrões excessivamente comuns em sites gerados automaticamente.

Não utilize sem justificativa:

- dezenas de cards iguais;
- gradientes aleatórios;
- glassmorphism excessivo;
- ícones decorativos em todas as seções;
- textos genéricos;
- títulos previsíveis;
- elementos flutuantes sem função;
- brilho excessivo;
- sombras exageradas;
- border radius em absolutamente tudo;
- layouts repetitivos;
- grids perfeitamente iguais em todas as seções;
- excesso de pequenos badges;
- componentes que parecem copiados de bibliotecas sem adaptação.

O design deve parecer intencional.

Cada elemento precisa ter uma razão para existir.

---

# 14. HIERARQUIA VISUAL

Toda página deve possuir hierarquia clara.

Considere:

- tamanho dos títulos;
- peso tipográfico;
- largura de texto;
- contraste;
- espaçamento;
- ritmo entre seções;
- áreas de descanso visual;
- imagens;
- CTAs;
- conteúdo primário e secundário.

Evite seções onde todos os elementos possuem a mesma importância visual.

---

# 15. ESPAÇAMENTO

Utilize espaçamentos consistentes.

Considere:

- espaçamento interno;
- distância entre elementos;
- espaço entre seções;
- largura máxima do conteúdo;
- respiro ao redor de títulos;
- relação entre texto e imagem.

Evite:

- grandes buracos sem intenção;
- elementos apertados;
- seções visualmente desconectadas;
- mudanças arbitrárias de padding.

---

# 16. TIPOGRAFIA

A tipografia deve fazer parte da identidade.

Mantenha:

- hierarquia consistente;
- line-height adequado;
- legibilidade;
- comprimentos de linha confortáveis;
- contraste correto entre títulos e corpo;
- consistência em tamanhos e pesos.

Evite utilizar muitos estilos tipográficos diferentes.

Não reduza excessivamente textos no mobile apenas para fazer caber.

---

# 17. RESPONSIVIDADE

Toda alteração visual deve ser considerada em:

- desktop;
- notebook;
- tablet;
- celular.

Não trate mobile como desktop simplesmente reduzido.

Quando necessário:

- reorganize grids;
- empilhe conteúdos;
- reposicione elementos;
- ajuste tipografia;
- ajuste espaçamentos;
- altere crop das imagens;
- simplifique interações;
- adapte animações;
- preserve CTAs importantes.

Nunca finalize uma alteração visual relevante sem considerar mobile.

---

# 18. MOBILE FIRST NA EXPERIÊNCIA

Mesmo quando o layout for desenvolvido inicialmente em desktop, a experiência mobile deve receber o mesmo cuidado.

Verifique principalmente:

- header;
- menu;
- hero;
- títulos grandes;
- botões;
- imagens;
- carrosséis;
- before/after;
- accordions;
- footer;
- espaçamento entre seções.

Não permita:

- overflow horizontal;
- texto cortado;
- botões pequenos demais;
- elementos sobrepostos;
- imagens deformadas.

---

# 19. ACESSIBILIDADE

Preserve boas práticas.

Sempre que aplicável:

- HTML semântico;
- `alt` em imagens;
- navegação por teclado;
- focus states;
- contraste adequado;
- labels;
- atributos ARIA quando realmente necessários;
- botões para ações;
- links para navegação.

Não transforme tudo em `div` clicável.

Considere também usuários com preferência por movimento reduzido.

---

# 20. ANIMAÇÕES

Animações devem melhorar a experiência.

Priorize:

- fade;
- fade-up;
- reveal;
- stagger;
- clip reveal;
- pequenas transformações;
- microinterações;
- transições naturais;
- scroll interactions discretas;
- hover refinado.

Evite:

- movimentos exagerados;
- animações sem propósito;
- efeitos excessivamente futuristas;
- delays longos;
- animações que atrapalhem leitura;
- excesso de parallax;
- animações diferentes em cada seção sem consistência.

Se houver skills específicas de animação, leia-as antes de implementar.

---

# 21. PADRÃO DAS ANIMAÇÕES

O projeto deve possuir uma linguagem consistente de movimento.

Não crie um efeito completamente diferente para cada elemento.

Defina padrões como:

- entrada de títulos;
- entrada de textos;
- entrada de imagens;
- hover de links;
- hover de botões;
- transição de imagens;
- comportamento dos accordions.

Reutilize esses padrões ao longo da página.

---

# 22. MICROINTERAÇÕES

Trabalhe cuidadosamente:

- hover de links;
- hover de CTAs;
- estados ativos;
- menu mobile;
- accordions;
- sliders;
- before/after;
- carrosséis;
- navegação por âncoras;
- transições;
- focus states.

Pequenos detalhes devem contribuir para a percepção de qualidade.

Não adicione efeitos apenas porque são visualmente interessantes.

---

# 23. PERFORMANCE

A landing page deve ser visualmente rica sem ficar pesada.

Considere:

- quantidade de JavaScript;
- tamanho das imagens;
- quantidade de fontes;
- bibliotecas instaladas;
- quantidade de Client Components;
- animações;
- carregamento inicial.

Evite:

- imagens gigantes;
- scripts desnecessários;
- dependências pesadas;
- efeitos React desnecessários;
- re-renders evitáveis;
- animações custosas;
- vídeos pesados sem otimização.

---

# 24. IMAGENS

Utilize imagens de qualidade e consistentes com a identidade visual.

Quando utilizar imagens externas temporariamente:

- escolha fontes adequadas;
- garanta qualidade;
- preserve coerência visual;
- evite stock photos excessivamente artificiais.

Quando fizer sentido, salve os assets localmente no projeto.

Organize-os adequadamente.

---

# 25. ORGANIZAÇÃO DE ASSETS

Mantenha os arquivos organizados.

Exemplo:

`/public/images/clinic/`

`/public/images/team/`

`/public/images/services/`

`/public/images/results/`

`/public/icons/`

`/public/brand/`

Use nomes intuitivos.

Evite:

`image1.png`

`foto-final2.jpg`

`teste.png`

Prefira:

`clinic-reception.webp`

`dentist-consultation.webp`

`intraoral-scanner.webp`

`doctor-ana-silva.webp`

---

# 26. OTIMIZAÇÃO DE IMAGENS

Quando possível:

- use formatos modernos;
- utilize dimensões adequadas;
- comprima imagens;
- evite arquivos muito maiores do que serão exibidos;
- utilize mecanismos do Next.js quando apropriado;
- mantenha boa qualidade visual.

Não sacrifique a qualidade estética com compressão exagerada.

---

# 27. ÍCONES

Mantenha um padrão.

Não misture aleatoriamente:

- SVG local;
- emojis;
- diferentes bibliotecas;
- PNG;
- ícones remotos.

Se utilizar ícones locais:

- organize em pasta própria;
- use nomes intuitivos;
- mantenha estilo consistente.

Ícones devem complementar o design, não dominar a interface.

---

# 28. CONTEÚDO

Textos devem parecer escritos por uma pessoa.

Evite:

- frases genéricas;
- excesso de adjetivos;
- linguagem artificial;
- repetição;
- slogans clichês;
- frases típicas de IA;
- parágrafos apenas para preencher espaço.

O conteúdo deve ser:

- claro;
- natural;
- comercial;
- humano;
- coerente com a marca.

---

# 29. CONTEÚDO DE TEMPLATE

Este projeto pode utilizar informações fictícias.

Nesse caso, utilize informações plausíveis como se fossem reais.

Nunca coloque textos visíveis como:

- “conteúdo fictício”;
- “demonstração”;
- “placeholder”;
- “imagem ilustrativa”;
- “substitua aqui”;
- “informações demonstrativas”;
- “links a configurar”;
- “valores fictícios”;
- “feito com IA”.

O objetivo é que o template pareça um site real pronto para apresentação.

---

# 30. LINKS EXTERNOS E CTAS

Se informações reais ainda não existirem, não crie integrações complexas.

Para o template, CTAs podem apontar para:

- seções da própria página;
- links temporários bem organizados;
- WhatsApp fictício;
- telefone fictício;
- formulários meramente visuais apenas se o comportamento estiver claro.

Não implemente backend apenas para demonstrar um CTA.

---

# 31. FORMULÁRIOS

Se houver formulário apenas como parte visual da landing page:

- mantenha o frontend organizado;
- implemente validação básica de interface quando necessário;
- não crie banco ou backend apenas por causa dele;
- não finja que dados estão sendo enviados se não existir integração real.

Se o projeto não precisar de formulário, prefira CTAs simples como:

- WhatsApp;
- telefone;
- agendamento externo;
- contato.

---

# 32. SEO

A landing page deve possuir estrutura adequada para SEO.

Preserve ou implemente corretamente:

- title;
- meta description;
- headings;
- H1 único quando apropriado;
- H2/H3 organizados;
- HTML semântico;
- alt text;
- metadata do Next.js;
- Open Graph quando aplicável;
- favicon;
- informações de marca.

Não coloque palavras-chave de forma artificial.

O conteúdo deve permanecer natural.

---

# 33. ESTRUTURA SEMÂNTICA

Use elementos apropriados quando fizer sentido:

- `header`
- `nav`
- `main`
- `section`
- `article`
- `footer`
- `button`
- `a`

Evite excesso de `div` quando existe elemento semântico mais adequado.

---

# 34. HEADER

O header deve ser analisado cuidadosamente.

Verifique:

- logo;
- tamanho;
- alinhamento;
- navegação;
- CTA;
- comportamento ao scroll;
- mobile menu;
- contraste sobre o hero.

Não deixe o header visualmente desconectado da landing page.

---

# 35. NAVEGAÇÃO POR ÂNCORAS

Como este projeto é uma landing page, priorize navegação dentro da própria página.

Quando houver menu:

- utilize âncoras;
- implemente scroll suave quando apropriado;
- garanta IDs claros;
- não crie páginas adicionais sem necessidade.

A experiência deve parecer contínua.

---

# 36. FOOTER

O footer deve encerrar visualmente a experiência.

Não trate o footer apenas como uma área onde links são jogados.

Cuide de:

- hierarquia;
- logo;
- informações;
- espaçamento;
- contraste;
- links;
- redes sociais;
- copyright.

---

# 37. COMPONENTES INTERATIVOS

Todo elemento que pareça interativo deve funcionar.

Teste:

- botões;
- links;
- menu;
- menu mobile;
- accordions;
- sliders;
- before/after;
- carrosséis;
- navegação por âncoras.

Não deixe elementos importantes sem comportamento.

---

# 38. BEFORE / AFTER

Se existir componente before/after:

- deve funcionar bem com mouse;
- deve funcionar com touch;
- deve ser responsivo;
- não deve quebrar o layout;
- deve ter boa performance;
- deve manter proporção das imagens.

Não utilize solução excessivamente pesada para um componente simples.

---

# 39. CARROSSÉIS

Não utilize carrossel automaticamente em toda seção.

Só use quando realmente melhorar:

- depoimentos;
- resultados;
- equipe;
- imagens.

No mobile, garanta boa experiência de swipe quando aplicável.

---

# 40. GIT

Antes de alterações importantes:

`git status`

Respeite alterações existentes.

Não apague trabalho não commitado.

Nunca execute comandos destrutivos sem necessidade, como:

`git reset --hard`

`git clean -fd`

Não faça force push sem instrução explícita.

---

# 41. COMMITS

Quando solicitado a realizar commit:

1. veja o que mudou;
2. não inclua arquivos desnecessários;
3. utilize mensagem clara;
4. prefira mensagens curtas em inglês.

Exemplos:

`feat: implement dental landing page`

`feat: add premium landing page sections`

`style: refine responsive layout`

`style: improve animations and visual consistency`

`fix: resolve mobile navigation issues`

`refactor: improve component structure`

Não faça commit automaticamente se não houver instrução para isso.

---

# 42. NÃO REVERTER TRABALHO EXISTENTE

Se encontrar alterações que não foram feitas por você:

- preserve-as;
- analise-as;
- trabalhe ao redor delas quando necessário.

Nunca assuma que código não commitado pode ser descartado.

---

# 43. NÃO REESCREVER O PROJETO SEM NECESSIDADE

Não faça grandes reescritas para resolver problemas pequenos.

Se o problema estiver em:

- um componente;
- uma animação;
- uma seção;
- um comportamento;

corrija esse ponto.

Não recrie toda a landing page sem motivo.

---

# 44. NÃO INVENTAR IMPLEMENTAÇÕES

Antes de usar:

- componente;
- hook;
- biblioteca;
- arquivo;
- configuração;
- asset;
- função;

verifique se realmente existe.

Não programe baseado em recursos imaginários.

---

# 45. INVESTIGAÇÃO DE ERROS

Quando houver erro:

1. leia a mensagem completa;
2. entenda onde ocorre;
3. identifique a causa;
4. analise os arquivos relacionados;
5. corrija a causa;
6. execute novamente a validação.

Não faça mudanças aleatórias até o erro desaparecer.

---

# 46. VALIDAÇÃO OBRIGATÓRIA

Depois de alterações relevantes, analise os scripts existentes no `package.json`.

Quando estiverem disponíveis, execute os adequados, como:

`npm run lint`

`npm run typecheck`

`npm run build`

Não invente scripts que não existem.

Uma alteração relevante não deve ser considerada concluída se o build estiver quebrado por causa dela.

---

# 47. BUILD

O build de produção é uma validação importante.

Quando a tarefa envolver mudanças relevantes no site, execute o build quando apropriado.

Se houver erro:

- investigue;
- descubra se foi causado pelas alterações atuais;
- corrija quando for responsabilidade da tarefa.

Não esconda erros.

---

# 48. ERROS PREEXISTENTES

Se encontrar erro que claramente já existia antes:

- não esconda;
- não atribua à alteração nova;
- informe ao final.

Se a alteração atual causou o problema, corrija-o.

---

# 49. LIMPEZA

Depois da implementação:

- remova imports não utilizados;
- remova código morto criado durante a tarefa;
- remova `console.log` temporário;
- remova componentes abandonados;
- remova assets novos não utilizados;
- remova arquivos temporários.

Não faça grandes limpezas em áreas não relacionadas.

---

# 50. ARQUIVOS E ASSETS NÃO UTILIZADOS

Durante refinamentos maiores, identifique assets claramente abandonados.

Só remova arquivos quando houver segurança de que não estão sendo utilizados.

Não altere a estrutura principal apenas para “organizar melhor” sem necessidade.

---

# 51. QUALIDADE VISUAL

Depois de implementar uma tarefa visual, faça uma segunda revisão pensando apenas como designer.

Pergunte:

- a hierarquia está boa?
- o site possui personalidade?
- os espaçamentos estão coerentes?
- existem cards demais?
- existem bordas demais?
- alguma seção parece genérica?
- as imagens conversam entre si?
- os títulos possuem ritmo?
- os CTAs estão claros?
- o mobile ficou bom?
- as animações seguem um padrão?
- existe alguma coisa claramente com “cara de IA”?

Corrija problemas encontrados antes de finalizar.

---

# 52. REVISÃO POR SEÇÃO

Analise a landing page de cima para baixo.

Observe a transição entre:

- header;
- hero;
- primeira prova social;
- conteúdo;
- serviços;
- resultados;
- sobre;
- depoimentos;
- FAQ;
- contato;
- footer.

Não avalie cada seção isoladamente.

A página inteira deve parecer uma única experiência.

---

# 53. RITMO DA LANDING PAGE

Evite uma página onde todas as seções tenham:

- o mesmo fundo;
- o mesmo grid;
- quatro cards;
- título centralizado;
- texto;
- botão.

Alterne de forma intencional:

- escala;
- alinhamento;
- densidade;
- imagens;
- tipografia;
- espaço negativo;
- fundos;
- composição.

Sem perder consistência.

---

# 54. PRESERVAÇÃO DA IDENTIDADE

Quando a identidade estiver definida, não mude arbitrariamente:

- paleta;
- fontes;
- estilo dos botões;
- linguagem de animação;
- espaçamentos;
- tratamento de imagens;
- border radius;
- composição visual.

Mudanças significativas devem respeitar o conceito existente.

---

# 55. DECISÕES AUTÔNOMAS

Quando houver mais de uma solução razoável, escolha a melhor abordagem utilizando:

- contexto do projeto;
- código existente;
- identidade visual;
- boas práticas;
- objetivo comercial;
- experiência do usuário.

Não interrompa o trabalho para perguntar detalhes triviais que podem ser inferidos.

---

# 56. ESCOPO

Faça completamente aquilo que foi solicitado.

Não adicione grandes funcionalidades extras apenas porque parecem interessantes.

Se encontrar uma melhoria futura relevante:

- pode mencioná-la ao final;
- não implemente automaticamente se estiver fora do escopo.

---

# 57. FLUXO PADRÃO DE TRABALHO

Para qualquer tarefa significativa, siga aproximadamente este fluxo:

## Etapa 1 — Contexto

Leia:

- `AGENTS.md`;
- `package.json`;
- arquivos relevantes;
- skills relevantes;
- documentação local necessária.

## Etapa 2 — Investigação

Entenda:

- implementação atual;
- componentes;
- dependências;
- identidade visual;
- comportamento responsivo;
- impacto da alteração.

## Etapa 3 — Implementação

Faça alterações:

- consistentes;
- tipadas;
- organizadas;
- proporcionais à tarefa;
- alinhadas à identidade.

## Etapa 4 — Revisão visual

Analise:

- design;
- hierarquia;
- responsividade;
- animações;
- imagens;
- espaçamentos;
- UX.

## Etapa 5 — Verificação

Execute quando aplicável:

- lint;
- typecheck;
- build.

## Etapa 6 — Limpeza

Remova:

- código temporário;
- imports não utilizados;
- arquivos abandonados;
- assets inutilizados criados durante a tarefa.

## Etapa 7 — Resultado

Informe:

- o que foi feito;
- principais arquivos modificados;
- decisões importantes;
- validações executadas;
- qualquer problema relevante encontrado.

---

# 58. REGRA DE CONCLUSÃO

Não considere uma tarefa concluída apenas porque visualmente parece funcionar.

Uma tarefa só deve ser considerada concluída quando:

- a implementação estiver completa;
- os componentes importantes funcionarem;
- TypeScript estiver correto;
- não houver erros introduzidos;
- a página estiver responsiva;
- as principais interações tiverem sido testadas;
- o código estiver organizado;
- a solução estiver coerente com o restante do projeto.

---

# 59. CONTEXTO DE FREELANCE

Este projeto faz parte de um fluxo de criação de websites e templates profissionais destinados a trabalhos freelance.

Portanto, priorize:

- aparência comercial;
- identidade forte;
- qualidade visual;
- código profissional;
- facilidade de manutenção;
- facilidade de personalização;
- reutilização;
- performance;
- responsividade;
- experiência do usuário.

O template deve ser fácil de adaptar futuramente para um cliente real.

Informações como:

- nome;
- telefone;
- endereço;
- textos;
- imagens;
- serviços;
- profissionais;
- redes sociais;

devem poder ser alteradas com facilidade.

---

# 60. FOCO DESTE PROJETO

Este projeto é uma landing page.

A prioridade é:

**design + frontend + experiência + conversão + qualidade visual.**

Não transforme a solução em uma aplicação complexa sem necessidade.

Se algo puder ser resolvido elegantemente apenas no frontend, prefira essa abordagem.

---

# 61. REGRA FINAL

Em caso de dúvida entre:

**fazer rápido**

e

**fazer corretamente seguindo o projeto**

prefira fazer corretamente.

Em caso de dúvida entre:

**adicionar complexidade**

e

**manter uma solução simples e robusta**

prefira a solução simples e robusta.

Em caso de dúvida entre:

**seguir um padrão genérico**

e

**preservar a identidade visual**

preserve a identidade.

Em caso de dúvida entre:

**criar mais funcionalidade**

e

**refinar melhor aquilo que já existe**

para este projeto, normalmente prefira o refinamento.

Sempre:

**analise antes de alterar, implemente com intenção, revise visualmente e valide antes de concluir.**
