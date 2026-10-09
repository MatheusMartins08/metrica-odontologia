# Métrica — identidade visual

## Conceito

A **linha média** é a primeira referência no planejamento de um sorriso: o eixo vertical que divide o rosto e os dentes em metades simétricas. O símbolo da Métrica é um **M formado por duas metades espelhadas** (haste grossa e diagonal fina), que não se tocam. Entre elas, uma **linha fina** ocupa o eixo central.

A marca fala de proporção, simetria e precisão sem recorrer a dente, sorriso desenhado ou cruz médica.

## Direções exploradas (`concepts/`)

| Direção | Ideia | Por que não / por que sim |
| --- | --- | --- |
| A — Régua | Acento do É como marca de medida, régua graduada sob a assinatura | Clara, porém literal demais |
| **B — Linha Média** | M em duas metades + eixo central | **Escolhida**: conceito próprio da odontologia estética, abstrato e memorável |
| C — Módulo | M construído numa grade 5×5 | Forte como ícone, frio como marca de saúde |

## Sistema

- **Logotipo**: maiúsculas geométricas construídas sobre altura de 24 unidades, traço de 2,4. As diagonais do M param antes do centro, ecoando o símbolo.
- **Assinatura**: “ODONTOLOGIA CONTEMPORÂNEA” em Geist Mono, justificada exatamente à largura do logotipo.
- **Símbolo**: grade de 64×64. Hastes de 7 unidades, diagonais finas e eixo central de 1 unidade (2,6 no favicon, para leitura em 16 px).

## Arquivos (`public/brand/`)

| Arquivo | Uso |
| --- | --- |
| `logo-metrica-primary.svg` | Principal horizontal, fundos claros |
| `logo-metrica-primary-inverse.svg` | Principal sobre fundos escuros |
| `logo-metrica-compact.svg` / `-inverse` | Só o logotipo, para header e espaços estreitos |
| `logo-metrica-secondary.svg` / `-inverse` | Versão vertical: símbolo sobre logotipo e assinatura |
| `logo-metrica-symbol.svg` / `-inverse` | Símbolo isolado: avatar, selo, aplicações pequenas |
| `logo-metrica-mono-black.svg` / `-mono-white.svg` | Monocromáticas, para impressão e gravação |
| `favicon-metrica.svg` | Favicon (também em `app/icon.svg`; `app/apple-icon.png` é a versão 180 px) |

## Uso

- **Área de proteção**: no mínimo a altura do “É” sem acento, em todos os lados.
- **Tamanho mínimo**: 96 px de largura para o logotipo com assinatura; 72 px sem assinatura; 16 px para o símbolo (use o favicon).
- **Cores**: tinta `#14262C` sobre fundos claros ou porcelana `#F6F5F1` sobre fundos escuros. O símbolo colorido usa petróleo `#0F3D47` com eixo em teal `#2C7472`; no favicon e nas versões invertidas, o eixo é menta `#BEDDD4`.
- Não distorcer, não aplicar sombra nem gradiente, não recompor a assinatura com outra fonte.
