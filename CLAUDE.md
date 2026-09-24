# CLAUDE.md — Vortex Rocket Design Site

Documento de governança. Toda assistência de IA neste projeto deve respeitar o que está aqui antes de qualquer outra preferência.

---

## Objetivo do projeto

Construir o site oficial da equipe **Vortex Rocket Design** (UNESP/FESJ — São João da Boa Vista) com três funções:

1. Apresentar o projeto técnico com profundidade que o Instagram não comporta.
2. Atrair patrocinadores — material institucional sólido, com história, conquistas e canais de contato claros.
3. Contar a história da equipe de forma cronológica (2019 → 2026).

A meta é que uma empresa decida abrir uma conversa de patrocínio depois de 30 segundos no Hero.

---

## Stack

- **HTML5** semântico
- **CSS3** puro — zero pré-processador, zero framework, zero PostCSS
- **JavaScript** vanilla ES2020 — zero dependência, zero build
- **Google Fonts** via `<link>` (Bebas Neue, JetBrains Mono, Inter)
- Hospedagem: **GitHub Pages** no repositório `Jonson-IA/vortex-site`, domínio próprio `vortexrocketdesign.space` (arquivo `CNAME` na raiz — não remover).
- Caminhos de asset **relativos** (`./assets/...`). URLs de SEO (`canonical`, `og:url`, `og:image`) **absolutas**, com o domínio — prévia de link exige isso.

Sem `package.json`, sem `node_modules`, sem `dist/`. O site é o repositório.

---

## Estrutura de pastas

```
vortex-site/
├── CLAUDE.md          # este arquivo
├── DESIGN.md          # design system
├── CONTENT.md         # textos prontos por seção
├── index.html         # single-page
├── style.css          # único stylesheet
├── script.js          # IntersectionObserver, smooth-scroll, mobile nav, count-up
└── assets/
    ├── docs/          # docx originais (referência)
    └── fotos/         # imagens + 2 vídeos .mp4
```

Não criar subpastas em `assets/fotos/`. Não renomear arquivos lá dentro — caminhos preservados.

---

## Seções do site (ordem do `index.html`)

1. **Nav fixo** — logo + 7 links + hamburguer < 960px
2. **Hero** — vídeo bg, H1 Bebas, subtítulo Mono, 2 CTAs, 3 métricas (count-up)
3. **Missão** — texto institucional, foto silhueta de fundo
4. **Histórico** — timeline vertical 2019 → 2026 (6 marcos)
5. **Projetos** — grid de 4 cards (Delta V, VOID, VOID II, ATLAS)
6. **Tecnologia** — 4 pilares (Propulsão, Estruturas, Eletrônica/Recuperação, Payload)
7. **Time** — fotos em mosaico + estatísticas + 5 setores
8. **Patrocínio** — "Por que patrocinar" + 4 patrocinadores atuais + CTA Instagram
9. **Mídia / Em ação** — vídeo + grid de 3 fotos de lançamento
10. **Contato + Footer** — Instagram, UNESP-FESJ, ano fundação

---

## Regras invioláveis

### Conteúdo
- Texto **sempre em português brasileiro**.
- Sem dados inventados. Toda métrica/fato vem dos 3 docx em `assets/docs/`.
- Sem emojis em código, em copy, em UI — exceto se o usuário pedir explicitamente.
- Patrocinadores listados: **somente os confirmados pela equipe**. Nenhum nome entra por suposição, por aparecer num docx ou por ter sido citado de passagem — só entra o que a equipe confirmar como patrocinador ativo.
- Base histórica (camisa traseira oficial): PROGRAD/UNESP, SolidWorks, Adriano César. Novos patrocinadores são acrescentados a essa base conforme forem fechados.
- Cada patrocinador é renderizado como **logo em imagem**, com o nome em texto como `alt` e como fallback visível enquanto o arquivo de logo não existir. Nunca remover o texto.
- Logos vivem em `assets/logos/`, em kebab-case (`solidworks.png`, `prograd-unesp.png`). Preferir PNG com fundo transparente ou SVG.

### Código
- Zero framework, zero biblioteca, zero CDN além das Google Fonts.
- Indentação: 2 espaços.
- CSS: usar custom properties em `:root` para todas as cores, espaçamentos e tempos.
- JS: módulo único, IIFE ou top-level — sem `import` de módulos externos.
- IDs apenas para âncoras de navegação. Estilo via classes.
- Nada de `!important` exceto em utilitários de a11y.
- Comentários só onde explicarem um *porquê* não-óbvio. Não documentar o óbvio.

### Acessibilidade (não negociável)
- `<html lang="pt-BR">`.
- Toda imagem com `alt` descritivo (não decorativo? `alt=""` explícito).
- Hierarquia de headings: 1 `<h1>` global, 1 `<h2>` por seção.
- Contraste mínimo AA em todo texto sobre todo fundo.
- Foco visível em todo elemento interativo (`outline` cor fogo, 2px, offset 3px).
- `prefers-reduced-motion: reduce` desliga parallax e count-up.
- Navegação completa via teclado (TAB cobre nav, CTAs, links, vídeo controls).

### Performance
- Imagens com `loading="lazy"` (exceto Hero).
- Vídeo Hero `preload="metadata"`, `playsinline`, `muted`, `autoplay`, `loop` + poster fallback.
- Sem font display blocking — usar `display=swap` na URL do Google Fonts.
- CSS e JS minificados? **Não** — projeto educacional, manter legibilidade.

### SEO
- `<meta name="description">` com até 160 caracteres.
- Tags Open Graph completas (`og:title`, `og:description`, `og:image`, `og:url`, `og:type=website`).
- `<meta name="theme-color" content="#080810">`.
- `<link rel="canonical">`.
- Favicon a partir do logo da equipe.

### Mobile-first
- Breakpoints: **640px (sm)**, **960px (md)**, **1280px (lg)**.
- Nav vira hamburguer < 960px.
- Grids viram 1 coluna < 640px.
- Container tem `max-width: 1280px; margin-inline: auto; padding-inline: 24px;`.
- Toques mínimos 44×44px.

---

## Convenções de nomenclatura

- Classes em **kebab-case** (`hero__title`, `metric-card`, `is-visible`).
- BEM leve: `.bloco`, `.bloco__elemento`, `.bloco--modificador`.
- Atributos de comportamento: `data-reveal`, `data-count`, `data-stagger`.
- Custom properties: `--bg`, `--fire-1`, `--space-4`, `--ease-out` etc.

---

## Workflow de mudança

Mudou conteúdo? → editar `CONTENT.md` primeiro, depois `index.html`.
Mudou aparência? → editar `DESIGN.md` primeiro, depois `style.css`.
Mudou regra estrutural? → editar este `CLAUDE.md` primeiro.

Os 3 `.md` são fonte da verdade. O código deve refleti-los, não o contrário.
