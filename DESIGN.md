# DESIGN.md — Vortex Rocket Design

Design system completo do site. Todo valor abaixo deve aparecer como **CSS custom property** em `:root` no `style.css`. Nada de magic numbers.

---

## Conceito visual

**Dark, brutalista, técnico.** Tipografia como protagonista. Cores fogo aplicadas com parcimônia — nunca como base, sempre como *evento* (CTA, métrica, link, gradiente em borda). Espaços generosos, hairlines finas (1px), tipografia condensada nos títulos. Inspiração: SpaceX press kits, Linear, Stripe Press, NASA technical reports.

A logo da equipe (espiral branca em fundo preto) já dita o tom: **alto contraste, gestual, simples.** O site é a continuação disso.

Nada de glassmorphism, nada de neumorphism, nada de gradiente em fundo de seção, nada de partículas animadas. Movimento existe — mas nasce do scroll, não de loops decorativos.

---

## Paleta

Roxo elétrico percorrendo até azul puro, sobre fundos em preto arroxeado. Os tokens de acento têm nome
**neutro de tema** (`--accent-*`) justamente para que trocar a cor do site mexa num bloco só.

```css
:root {
  /* Fundos — preto arroxeado */
  --bg:        #0A0710;   /* base */
  --bg-elev:   #130D1C;   /* elevation 1 — nav scrolled, faixa de patrocinadores */
  --bg-card:   #1A1226;   /* elevation 2 — cards */

  /* Acento — violeta */
  --accent-1:  #BB44FF;   /* roxo eletrico — foco, bordas, acentos, texto grande */
  --accent-2:  #7A0FD6;   /* roxo profundo — fundo de CTA, fim do gradiente */
  --accent-3:  #E4B0FF;   /* lilás vivo — texto pequeno em acento, números de métrica */

  /* Texto — brancos e cinzas levemente frios */
  --ink:       #F4F1F8;
  --ink-mut:   #A5A0B0;
  --ink-faint: #837E90;
}
```

### Por que o acento não é um roxo escuro de verdade

Um roxo realmente escuro (ex. `#4C1D95`) dá **1,8:1** sobre o fundo — reprova até para bordas,
que exigem 3:1. O tema é escuro; o *acento* precisa ser claro o bastante para carregar texto e foco.
Quem entrega a leitura "roxo dark" são os fundos (`--bg`, `--bg-elev`, `--bg-card`), não o acento.

O `--accent-2`, esse sim profundo, entra como fundo de botão — onde o contraste é medido contra
o texto branco por cima, não contra o fundo da página.

| Par | Razão | Veredito |
|---|---|---|
| `--ink` / `--bg` | 17,9:1 | AAA |
| `--ink-mut` / `--bg` | 7,9:1 | AAA |
| `--ink-faint` / `--bg` | 5,1:1 | AA |
| `--accent-3` / `--bg` | 11,4:1 | AAA |
| `--accent-1` / `--bg` | 5,1:1 | AA inclusive para texto normal |
| `--accent-blue` / `--bg` | 6,2:1 | AA |
| `--accent-deep` / `--bg` | 4,1:1 | só componentes e texto grande |
| `#fff` / `--accent-2` | 7,3:1 | AAA — é o botão primário |

**Percurso do gradiente:** `#D98CFF -> #BB44FF -> #0066FF`. Matiz viaja de 285° a 216° — 69° de percurso,
mais que o dobro dos 27° do tema laranja original. Cor viva aqui nao custou contraste: subir a
saturacao melhorou os dois acentos principais (5,1:1 e 6,2:1).

`--accent-1` passa AA em qualquer tamanho, diferente do carmim anterior (4,3:1, que era limitado
a texto grande). A troca para roxo melhorou o contraste do acento.

---

## Tipografia

### Famílias

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;700&display=swap" rel="stylesheet">
```

```css
:root {
  --font-display: "Bebas Neue", "Impact", sans-serif;
  --font-mono:    "JetBrains Mono", ui-monospace, "SF Mono", Consolas, monospace;
  --font-body:    "Inter", system-ui, -apple-system, "Segoe UI", sans-serif;
}
```

### Escala

```css
:root {
  --fs-h1:      clamp(3rem, 9vw, 7.5rem);     /* Hero H1 — Bebas, line-height 0.92 */
  --fs-h2:      clamp(2rem, 5vw, 4.25rem);    /* Section title — Bebas */
  --fs-h3:      clamp(1.5rem, 2.5vw, 2rem);   /* Card title — Bebas */
  --fs-eyebrow: 0.8125rem;                     /* 13px — JetBrains Mono uppercase */
  --fs-lead:    clamp(1.125rem, 1.6vw, 1.375rem); /* parágrafo de abertura */
  --fs-body:    1.0625rem;                     /* 17px — Inter regular */
  --fs-small:   0.875rem;                      /* 14px — meta, footer */
  --fs-metric:  clamp(3rem, 7vw, 5.5rem);      /* count-up no Hero — Bebas */
}
```

### Tracking + line-height

- Bebas Neue (h1, h2, h3, métricas): `letter-spacing: 0.01em; line-height: 0.92`
- JetBrains Mono (eyebrow, labels): `letter-spacing: 0.18em; text-transform: uppercase; line-height: 1.4`
- Inter (body): `letter-spacing: -0.01em; line-height: 1.6`

---

## Espaçamento

Escala em múltiplos de **4px**:

```css
:root {
  --s-1:  4px;
  --s-2:  8px;
  --s-3:  12px;
  --s-4:  16px;
  --s-5:  24px;   /* gutter padrão */
  --s-6:  40px;
  --s-7:  64px;
  --s-8:  96px;
  --s-9:  128px;  /* section padding-block desktop */
  --s-10: 160px;
}
```

Padding-block padrão de seção:
```css
.section { padding-block: clamp(64px, 10vw, 128px); }
```

---

## Layout

```css
:root {
  --container-max: 1280px;
  --container-pad: 24px;
  --bp-sm: 640px;
  --bp-md: 960px;
  --bp-lg: 1280px;
}

.container {
  width: 100%;
  max-width: var(--container-max);
  margin-inline: auto;
  padding-inline: var(--container-pad);
}
```

### Grids principais

| Seção | Desktop ≥ 960 | Tablet 640-959 | Mobile < 640 |
|---|---|---|---|
| Projetos (4 cards) | `grid-template-columns: repeat(12, 1fr)` — VOID ocupa 7 colunas, demais 5 cada em rows | 2 cols | 1 col |
| Tecnologia (4 pilares) | 2×2 | 2×2 | 1 col |
| Mídia (vídeo + 3 fotos) | vídeo 7 cols + 3 fotos empilhadas 5 cols | 1 col vídeo + grid 3 fotos | 1 col |
| Time (mosaico) | 3 cols irregulares (CSS grid + spans) | 2 cols | 1 col |
| Histórico (timeline) | 2 cols (par à esquerda, ímpar à direita) com linha central | 1 col com linha à esquerda | 1 col com linha à esquerda |

---

## Componentes

### Nav
- Posição: `position: fixed; top: 0; inset-inline: 0; z-index: 100`
- Altura: 72px (desktop), 64px (mobile)
- Background: transparente até scroll > 24px → `--bg-elev` com `backdrop-filter: blur(12px)`. Borda inferior `1px solid var(--line)` quando scrolled.
- Logo à esquerda (40px), links à direita (8 itens com `gap: 32px`).
- Mobile (< 960): logo + hamburguer; menu abre em painel full-height saindo da direita.

### CTA primário
```
background: var(--fire-1);
color: var(--bg);
font-family: var(--font-mono);
text-transform: uppercase;
letter-spacing: 0.18em;
padding: 16px 28px;
border: 0;
border-radius: 0;     /* sem cantos arredondados — brutalismo */
transition: transform 200ms var(--ease-out), background 200ms var(--ease-out);
hover: background var(--fire-2); transform: translateY(-2px);
```

### CTA secundário
```
background: transparent;
color: var(--ink);
border: 1px solid var(--line-loud);
padding: 15px 27px;     /* 15+1 = 16, mantém alinhamento com primário */
hover: border-color: var(--ink); background: rgba(245,245,247,0.04);
```

### Card de projeto
```
background: var(--bg-elev);
border: 1px solid var(--line);
border-radius: 0;
padding: 32px;
transition: border 200ms, transform 200ms, background 200ms;
hover: border-color: var(--fire-1); background: var(--bg-card); transform: translateY(-4px);
```
Card destaque (VOID) tem: `border-image: var(--grad-fire) 1; border-image-slice: 1;` no topo (apenas) — uma faixa fogo de 3px.

### Métrica do Hero
- Wrapper: `display: flex; gap: 64px;`
- Número: `font-family: var(--font-display); font-size: var(--fs-metric); color: var(--fire-3); line-height: 1;`
- Label: `font-family: var(--font-mono); font-size: var(--fs-eyebrow); color: var(--ink-mut);`
- Separador entre métricas: `1px` vertical em `--line-loud`, ocupando 60% da altura do bloco.

### Faixa de patrocinadores
- Grid `auto-fit` com `minmax(150px, 1fr)` — absorve 3, 4, 5 ou 8 patrocinadores sem alterar CSS. Nunca fixar contagem de colunas.
- Cada item tem altura de caixa constante (96px desktop / 72px mobile) para que logos de proporções diferentes fiquem opticamente alinhados.
- Logo: `max-height: 100%`, `object-fit: contain`, `filter: grayscale(1) brightness(1.8)` no repouso — neutraliza logos coloridos sobre fundo escuro e mantém a seção coesa. No hover/foco: `filter: none` + `translateY(-2px)`.
- **Fallback obrigatório:** o nome em texto (Bebas Neue) fica no DOM sempre. Enquanto não houver arquivo de logo, ele é o que aparece; quando o `<img>` carrega, o texto é ocultado visualmente mas permanece como `alt`. Se o arquivo faltar ou falhar, a seção degrada para o wordmark de texto em vez de quebrar.
- Patrocinador não é link clicável por padrão — vira `<a>` só se a equipe autorizar o site do parceiro.
- Logos coloridos são preferidos aos monocromáticos: o `grayscale` do repouso os iguala visualmente aos brancos, e o hover devolve a cor da marca. Além disso os arquivos coloridos costumam ser bem menores.
- Arte com fundo preto chapado (caso Paulinho Lanches) é tratada com `clip-path` para recortar a marca e `mix-blend-mode: screen` para apagar o preto contra `--bg-elev`. Exige `isolation: isolate` em `.sponsors`. É contorno, não ideal — substituir por PNG transparente assim que houver.

---
### Timeline
- Linha vertical central: `2px` em `--grad-fire`, posicionada absoluta.
- Marcadores: círculo 16px, `background: var(--bg)`, `border: 2px solid var(--fire-1)`.
- Card por marco: alterna esquerda/direita em desktop. Mobile: tudo à direita da linha.

---

## Animações

```css
:root {
  --ease-out:  cubic-bezier(0.16, 1, 0.3, 1);
  --ease-in:   cubic-bezier(0.7, 0, 0.84, 0);
  --t-fast:    160ms;
  --t-med:     320ms;
  --t-slow:    600ms;
}
```

### Reveal on scroll (IntersectionObserver)

Marcar elementos com `data-reveal`. CSS:

```css
[data-reveal] {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity var(--t-slow) var(--ease-out), transform var(--t-slow) var(--ease-out);
  transition-delay: var(--reveal-delay, 0ms);
}
[data-reveal].is-visible {
  opacity: 1;
  transform: translateY(0);
}
```

Stagger via `data-stagger`: JS lê o índice do filho dentro do pai com `data-stagger` e aplica `--reveal-delay: calc(80ms * var(--i))`.

### Count-up (Hero)
Métricas com `data-count="110"` (target) e `data-count-suffix="+"` (opcional). Anima de 0 → target em 1200ms com easing `ease-out`. Roda 1× quando o Hero entra na viewport.

### Parallax (Hero)
Vídeo de fundo recebe `transform: translateY()` proporcional ao scroll, capado em ±60px. Usa `requestAnimationFrame` com throttle. **Desliga** se `prefers-reduced-motion: reduce`.

### Hover global
Todo link, botão, card: `transition: ... var(--t-fast) var(--ease-out)`.

### prefers-reduced-motion
Quando `(prefers-reduced-motion: reduce)`:
- `[data-reveal]` ganha `opacity: 1; transform: none; transition: none;`
- Count-up exibe valor final imediatamente.
- Parallax desabilitado.
- Vídeo do Hero pausado, usa `poster`.

---

## Mapeamento foto → seção (com `object-position`)

Todas as fotos `SaveClip.App_*.jpg` são collages 4-em-1 do Instagram (grid 2×2) ou 2-em-1 (vertical). Estratégia: `object-fit: cover` + `object-position` para revelar o quadrante certo. Onde precisar isolar mais agressivamente, usar `clip-path: inset(top right bottom left)`.

| Foto (sufixo do nome) | Seção | Tratamento |
|---|---|---|
| `logo principal da equipe.jpg` | Nav (40px), Footer (32px), Patrocínio carta (96px) | Sem crop |
| `581186753` (foguete em voo + rastro) | Hero camada decorativa (mobile + desktop) + card VOID em Projetos | `object-position: 50% 50%` — foto inteira já é o foguete |
| `581190099` (rampa em canavial) | Histórico marco 2025 + grid Mídia | `object-position: 50% 30%` |
| `579689055` (equipe na rampa) | grid Mídia | `object-position: 50% 40%` |
| `573573166` (time + foguete) | Time foto principal | É collage 2×2: usar `object-position: 50% 75%` para focar no quadrante inferior (time completo). Em fundo de Missão, `object-position: 50% 75%` + `filter: grayscale(1) brightness(0.4)` |
| `582247912` (celebração + mapa) | Histórico marco "2.011,78 m" | `object-position: 50% 25%` para o quadrante superior (celebração); o mapa aparece como ilustração lateral menor com `object-position: 50% 80%` |
| `580456992` (montagem foguete prata) | Tecnologia → Estruturas | `object-position: 50% 50%` |
| `580509397` (avionics bay close) | Tecnologia → Eletrônica/Recuperação | `object-position: 30% 50%` (foguete está no terço esquerdo) |
| `573698806` (PCBs + paraquedas + laptop) | Tecnologia → Eletrônica (split em 2 imgs) | Quadrante TL (PCBs): `object-position: 25% 25%`. Quadrante TR (paraquedas): `object-position: 75% 25%` |
| `574708270` (oficina) | Tecnologia → Estruturas (bg) | `object-position: 25% 25%` (top-left = oficina coletiva) + `filter: brightness(0.5)` |
| `575622666` (inspeção LASC) | Histórico marco 2025 (alternativa) | `object-position: 50% 35%` |
| `580536512` (camisa patrocinadores) | Patrocínio (referência visual) | `object-position: 50% 50%` |
| `579663515` (mesa LASC) | Time mosaico ou Histórico 2025 | `object-position: 50% 25%` |
| `580568483`, `580901588` | Time mosaico secundário | `object-position: 50% 30%` |
| `660831208` (anúncio LASC 2026) | Histórico marco 2026 | `object-position: 50% 50%` — gráfico institucional |
| `AQNAbi0R-*.mp4` | Hero background | `<video autoplay muted loop playsinline preload="metadata" poster="...">` |
| `AQMkACj6D0W9z7*.mp4` | Mídia "Em ação" | `<video controls preload="metadata" poster="...">` |

Posters dos vídeos: gerar via screenshot do primeiro frame? **Não** — usar uma das fotos de lançamento como poster (`581186753.jpg`).

---

## Iconografia

**Sem ícones de biblioteca.** Onde precisar de glifo, usar:
- Numerais Bebas Neue (etapas da timeline, número do setor).
- Setas em CSS (`::after` com `content: "→"` em JetBrains Mono).
- Hambúrguer: 3 spans com `transition` que viram X no estado aberto.
- Logo Instagram no contato: SVG inline simples (12 linhas).

Justificativa: zero dependência, peso da página minúsculo, estética coesa.

---

## OG / Favicon

```html
<meta property="og:title" content="Vortex Rocket Design — Equipe de foguetemodelismo da UNESP">
<meta property="og:description" content="Estudantes desenvolvendo foguetes de propelente sólido, eletrônica embarcada e CanSats. 8º lugar entre 110+ equipes na LASC 2023. Duas missões aprovadas para LASC 2026.">
<meta property="og:image" content="./assets/fotos/SaveClip.App_581186753_18073336982196024_5743745909866851361_n.jpg">
<meta property="og:type" content="website">
<meta property="og:locale" content="pt_BR">
<meta name="twitter:card" content="summary_large_image">
<meta name="theme-color" content="#080810">
<link rel="icon" href="./assets/fotos/logo principal da equipe.jpg" type="image/jpeg">
```
