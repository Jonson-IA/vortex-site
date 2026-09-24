# CONTENT.md — Vortex Rocket Design

Todo o copy do site, organizado por seção. Texto extraído e refinado dos 3 docx em `assets/docs/`. Sempre que o `index.html` precisar de texto, vir aqui antes.

Tom: **técnico-orgulhoso e institucional.** Frases curtas. Verbos no presente. Números antes de adjetivos. Português formal mas vivo — nada de "transformar sonhos em realidade" ou "rumo às estrelas".

---

## 1. Nav

Links (na ordem):
1. Missão
2. Histórico
3. Projetos
4. Tecnologia
5. Time
6. Patrocínio
7. Contato

---

## 2. Hero

### Eyebrow (acima do H1, JetBrains Mono uppercase)
`UNESP — FACULDADE DE ENGENHARIA DE SÃO JOÃO DA BOA VISTA`

### H1
`FOGUETES PROJETADOS, CONSTRUÍDOS E LANÇADOS POR ESTUDANTES.`

### Subtítulo (Lead)
A Vortex Rocket Design é a equipe de foguetemodelismo da UNESP/FESJ. Desenvolvemos foguetes de propelente sólido, eletrônica embarcada e CanSats — do CAD à rampa de lançamento.

### Métricas (count-up)
- **8º** — `LASC 2023 — categoria 500 m · 21 equipes`
  (o 8º lugar foi **na categoria de 500 m, entre 21 equipes**. Na classificação geral, entre mais
  de 110 equipes, a colocação foi 29º. Rotular o 8º como "entre 110+ equipes" é falso — e o
  próprio Histórico do site diz o número certo.)
- **1 KM** — `Apogeu projetado — Foguete VOID`
- **2** — `Missões aprovadas — LASC 2026`

### CTAs
- Primário: **PATROCINE A VORTEX** → âncora `#patrocinio`
- Secundário: **Conheça os projetos** → âncora `#projetos`

---

## 3. Missão

### Eyebrow
`MISSÃO`

### H2
`ENGENHARIA AEROESPACIAL ESTUDANTIL.`

### Lead
Fundada em 7 de junho de 2019, a Vortex nasceu da iniciativa de discentes dos cursos de Engenharia Aeronáutica e Engenharia Eletrônica e de Telecomunicações para criar um projeto de extensão dedicado ao setor aeroespacial.

### Corpo (2 parágrafos)
O grupo participa de competições de foguetemodelismo, desenvolve satélites de pesquisa (CanSats e CubeSats) e conduz pesquisas tecnológicas com ênfase no setor aeroespacial — um setor estratégico para o avanço tecnológico, econômico e social do Brasil.

Mais do que competir, formamos engenheiros: cada projeto é uma trincheira de aprendizado prático onde teoria de termodinâmica, resistência de materiais, eletrônica embarcada e gestão de projeto encontram a realidade dura de testes estáticos, lançamentos e prazos. A Vortex traduz currículo em hardware que voa.

### Pilares (3 cards curtos)
1. **Competir** — Latin American Space Challenge (LASC) e, em médio prazo, Spaceport America Cup.
2. **Pesquisar** — propulsão SRAD, otimização por algoritmo genético, sistemas embarcados de baixo custo.
3. **Divulgar** — oficinas em escolas públicas, publicação bilíngue, artigos em SBGf e COBENGE.

---

## 4. Histórico

### Eyebrow
`HISTÓRICO`

### H2
`SEIS ANOS, UMA TRAJETÓRIA.`

### Marcos (timeline vertical)

**2019 — Fundação**
A equipe é fundada em 7 de junho por discentes de Engenharia Aeronáutica e Engenharia Eletrônica e de Telecomunicações da UNESP/FESJ. Nasce o projeto de extensão.

**2023 — LASC: estreia com Delta V**
Primeira participação em competição. O foguete Delta V — propelente sólido KNSB, fuselagem em Tritan HT impressa em 3D, eletrônica ESP32 — disputa a categoria de 500 m. Resultado: **8º lugar entre 21 equipes na categoria** e **29º na classificação geral entre mais de 110 equipes**.

**2024 — LASC cancelada**
A edição é cancelada em decorrência das queimadas na região do evento. A equipe redireciona o esforço para o salto seguinte: 1 km de apogeu.

**2025 — Projeto VOID (1 km)**
Desenvolvimento do primeiro foguete SRAD da equipe para a categoria de 1 km. KNSB com purificação de KNO₃ em laboratório, fuselagem 100% em fibra de vidro, dual-deploy com ejeção a CO₂ frio, aviônica Teensy 4.1 com barômetros redundantes (BMP390 + MS5611), GPS e telemetria LoRa. Carga útil: dois CanSats.

**2025 — Recuperação a 2.011,78 m**
Após o lançamento, o sistema de recuperação coloca o foguete em descida controlada e o GPS embarcado guia a equipe até o ponto de pouso — a 2.011,78 m do local de lançamento. O sistema de telemetria provou seu valor.

**2026 — Duas missões aceitas + nasce o setor de Satélites**
A organização da LASC 7 confirma a participação da Vortex com duas missões simultâneas: **VOID II** (foguete SRM 1 km) e **ATLAS** (CanSat). Para sustentar a frente dupla, a equipe estrutura um **sexto setor — Satélites** — dedicado ao desenvolvimento do CanSat ATLAS. É a primeira vez que a Vortex opera com foguete e satélite em divisões independentes.

---

## 5. Projetos

### Eyebrow
`PROJETOS`

### H2
`QUATRO PROJETOS. UMA CURVA DE APRENDIZADO.`

### Cards

#### Delta V — 2023 — LASC 500 m
- **Categoria:** 500 m de apogeu
- **Status:** Concluído — 8º/21 na categoria, 29º/110+ no geral
- **Fuselagem:** Tritan HT (impressão 3D)
- **Motor:** SRAD KNSB, grãos BATES (16 mm interno × 35 mm externo × 65 mm)
- **Aviônica:** ESP32 + BMP280/MS5611 + MPU9250
- **Recuperação:** servo + perfuração de cilindro de CO₂ + paraquedas semi-elipsoidal de 36"
- **Marco:** primeira competição da equipe — base de tudo que veio depois.

#### VOID — 2025 — LASC 1 km — DESTAQUE
- **Categoria:** 1 km de apogeu
- **Status:** Concluído
- **Fuselagem:** fibra de vidro com lay-up úmido em mandril, ogiva Von Kármán, aletas Selig S1012 clipped delta (4 unidades)
- **Motor:** SRAD K-class — Ø 6,35 cm × 51 cm, ~1517 N·s de impulso teórico, propelente KNSB
- **Aviônica:** Teensy 4.1, barômetros redundantes BMP390 + MS5611, IMU MPU9250, GPS BE-880, telemetria LoRa RA-02, bateria LiPo 3S 850 mAh
- **Recuperação:** dual-deploy — drogue 16" no apogeu, principal 72" a baixa altitude. **Ejeção por gás frio CO₂** desenhada pela equipe — sem pólvora quente, sem risco de queimar paraquedas.
- **Payload:** dois CanSats — incluindo o Vortex CanSat (#249), prova de conceito TRL-3 de EPS com baterias de íon-sódio e algoritmo de navegação tolerante a falhas.
- **Marco:** primeiro foguete completo SRAD da equipe — propulsão, aerostrutura e aviônica todas in-house.

#### VOID II — 2026 — LASC 1 km
- **Categoria:** SRM 1 km
- **Status:** Em desenvolvimento — missão aceita pela LASC 7
- **Plataforma:** evolução do VOID com lições aprendidas em manufatura, integração e telemetria.

#### ATLAS — 2026 — CanSat
- **Categoria:** CanSat
- **Status:** Em desenvolvimento — missão aceita pela LASC 7
- **Foco:** carga útil completa com sensores embarcados, transmissão de dados e recuperação independente.

---

## 6. Tecnologia

### Perfil de voo (diagrama)

Diagrama SVG inline na seção Tecnologia. Todos os números vêm do `75_Mission Report`:

| Evento | Valor | Fonte |
|---|---|---|
| Aceleração máxima | ~95 m/s² | Mission Report, seção de simulação |
| Queima do motor | ~1,4 s | idem |
| Velocidade máxima (burnout) | 100 m/s | idem |
| Apogeu | 1.220 m aos ~18 s | idem |
| Drogue | aberto no apogeu | idem |
| Duração total do voo | ~100 s | idem |
| Distância do pouso | 2.011,78 m do ponto de lançamento | relatório da equipe |

Razão de existir: os dados técnicos do foguete estavam em lista de bullets. Para um patrocinador
folheando a página, o perfil comunica competência de engenharia em segundos onde a lista leva
meio minuto. É o argumento mais forte do site e estava enterrado.

### Eyebrow
`TECNOLOGIA`

### H2
`O QUE COMPÕE UM FOGUETE VORTEX.`

### Lead
Tudo é projetado, fabricado e testado nas dependências da UNESP/FESJ — do propelente à PCB. Quatro pilares técnicos sustentam cada missão.

### Pilares (4 cards)

#### Propulsão e Propelente
- Propelente **KNSB** — nitrato de potássio + sorbitol — não-tóxico e de fabricação interna.
- **Purificação de KNO₃** por recristalização em laboratório universitário, removendo umidade e impurezas.
- Câmara de combustão usinada em alumínio 6063-T5; tubeira e anteparo em aço 1045 com vedação por anéis de borracha.
- **Algoritmo genético em Python** otimiza geometria do grão e diâmetro de garganta — milhares de candidatos avaliados por geração.
- Teste estático full-scale para validar curva de empuxo e impulso total antes de cada missão.

#### Estruturas e Aerodinâmica
- Fuselagem em **fibra de vidro** com lay-up úmido (epóxi + tecido 330 g) sobre mandril de PVC.
- Ogiva **Von Kármán** moldada em molde fêmea bipartido FDM em ABS.
- Aletas **clipped delta com perfil Selig S1012**, em sandwich fibra-epóxi sobre núcleo ABS impresso em 3D.
- Couplers de alumínio com 8 parafusos M4 garantem rigidez modular.
- Análise por **OpenRocket, SolidWorks e Ansys** — margem de estabilidade entre 1,5 e 4 calibres.

#### Eletrônica e Recuperação
- Microcontrolador **Teensy 4.1** com cartão MicroSD onboard.
- Barômetros redundantes **BMP390 + MS5611** com filtro de média móvel para detecção de apogeu.
- IMU **MPU9250** (giroscópio + acelerômetro + magnetômetro) para ângulos de Euler.
- GPS **BE-880** + magnetômetro **HMC5883L** para localização e heading.
- Telemetria **LoRa RA-02** — link em tempo real com a estação de solo.
- **Sistema de ejeção a CO₂ frio** — uma carga pirotécnica perfura o cilindro, gás expandido cisalha parafusos de náilon e libera o paraquedas. Sem gases quentes, sem dano aos paraquedas, sem necessidade de wadding.

#### Payload — CanSat
- Vortex CanSat (ID #249), parceria UNESP × IFSP.
- **EPS (Electrical Power System)** com bateria de **íon-sódio** — proof of concept TRL-3.
- **Sistema de navegação tolerante a falhas** com sensores inerciais e magnetômetro.
- Switch limitado por corrente em high-side como kill-switch por software.

---

## 7. Time

### Eyebrow
`TIME`

### H2
`27 ESTUDANTES. SEIS SETORES.`

### Lead
A Vortex opera com 27 membros distribuídos em seis setores especializados. Cada subsistema do foguete e do satélite tem dono — e cada dono carrega o hardware pela rampa.

### Setores (cards com ícone-numeral)

1. **Estruturas e Aerodinâmica** — projeto da fuselagem, simulações CFD/FEA, manufatura de compostos.
2. **Propulsão e Propelente** — formulação química, testes estáticos, manufatura de motores.
3. **Eletrônica e Recuperação** — sistemas embarcados, telemetria, ejeção e paraquedas.
4. **Satélites** — desenvolvimento de CanSats e CubeSats. Setor criado em 2026 para sustentar a missão ATLAS.
5. **Administração** — gestão, cronograma, documentação técnica e relatórios oficiais.
6. **Marketing e Compras** — divulgação institucional, captação de patrocínio, aquisição de materiais.

### Stats
- **27** — membros ativos
- **6** — setores
- **2** — instituições parceiras (UNESP/FESJ + IFSP)
- **6** — anos de atividade

---

## 8. Patrocínio

### Eyebrow
`PATROCÍNIO`

### H2
`COLOCA SUA MARCA NA RAMPA.`

### Lead
Patrocinar a Vortex é financiar engenharia real — feita por estudantes que projetam, fabricam, testam e lançam. Sua marca vai para a camisa que cruza a LASC, o relatório técnico oficial e o foguete que decola.

### Por que patrocinar (4 bullets curtos)
- **Visibilidade técnica** — material institucional, mídia em rede, presença em eventos universitários e congressos como SBGf e COBENGE.
- **Formação de talento** — apoie a próxima geração de engenheiros aeroespaciais brasileiros.
- **Internacionalização** — competições e publicações bilíngues amplificam alcance fora do Brasil.
- **Impacto social** — oficinas em escolas públicas e divulgação científica de base.

### Patrocinadores atuais
Renderizados como logo em imagem, com o nome em texto como fallback/`alt`.

| Patrocinador | Texto de fallback | Arquivo | Estado |
|---|---|---|---|
| PROGRAD — Pró-Reitoria de Graduação / UNESP | `PROGRAD` + `UNESP` | `assets/logos/prograd-unesp.png` | logo pendente — exibe wordmark |
| SolidWorks — software de CAD e simulação | `SOLIDWORKS` | `assets/logos/solidworks.png` | logo pendente — exibe wordmark |
| Ansys (part of Synopsys) — simulação CFD/FEA | `ANSYS` | `assets/logos/ansys.svg` | ativo |
| JLCPCB — fabricação de PCB | `JLCPCB` | `assets/logos/jlcpcb.svg` | ativo |
| EasyEDA — projeto de PCB | `EASYEDA` | `assets/logos/easyeda.png` | ativo |
| Paulinho Lanches — desde 1990, São João da Boa Vista | `PAULINHO LANCHES` | `assets/logos/paulinho-lanches.png` | ativo — arte recortada via CSS |

Enquanto o arquivo não existir, o item aparece como wordmark de texto — comportamento previsto, não um defeito.

### Novos patrocinadores
Para cada um: nome exato, arquivo de logo (PNG transparente ou SVG) e confirmação de que o patrocínio está ativo. Nada entra nesta lista sem os três.

### CTA
**QUERO PATROCINAR** → abre Instagram em nova aba: `https://www.instagram.com/vortexrocketdesign`

---

## 9. Mídia / Em ação

### Eyebrow
`EM AÇÃO`

### H2
`HARDWARE QUE VOA.`

### Lead
Os ensaios em solo terminam quando o motor pega fogo. O resto é vento, gravidade e o que a equipe construiu para resistir aos dois.

### Conteúdo
- Vídeo principal embedado (`AQMkACj6D0W9z7*.mp4`) com `controls` + poster de lançamento.
- Grid de 3 fotos: foguete em pleno voo (`581186753`), foguete na rampa em canavial (`581190099`), equipe na rampa de lançamento (`579689055`).

---

## 10. Contato + Footer

### Eyebrow
`CONTATO`

### H2
`FALA COM A GENTE.`

### Bloco principal
- **Instagram:** `@vortexrocketdesign` → `https://www.instagram.com/vortexrocketdesign`
- **Instituição:** Faculdade de Engenharia de São João da Boa Vista — FESJ / UNESP
- **Local:** São João da Boa Vista, SP — Brasil
- **Desde:** 7 de junho de 2019

### Footer
- Logo Vortex
- Linha: `Vortex Rocket Design — UNESP/FESJ — São João da Boa Vista, SP`
- Linha: `Site construído pela equipe — 2026`
- Sem links de redes sociais duplicados (já estão no contato).

---

## Microcopy técnico

- Todos os títulos de seção em **CAIXA ALTA** com Bebas Neue.
- Todos os "eyebrow" em **CAIXA ALTA** com JetBrains Mono e tracking 0.18em.
- Decimais em padrão brasileiro: `2.011,78 m` (não `2,011.78 m`).
- Unidades sempre com espaço fino: `1 km`, `850 mAh`, `6,35 cm`.
- Aspas em diálogos/citações: `"texto"` (typographic), nunca `"texto"`.
- Hífens não-quebráveis em nomes próprios técnicos: `KNO₃`, `Selig S1012`.

---

## Termos a NÃO usar

- "Pioneiro", "revolucionário", "inovador", "disruptivo" — clichês.
- "Rumo ao espaço", "alcançar as estrelas" — emocional vazio.
- Emojis no copy.
- Anglicismos quando há equivalente em português direto: usar "carga útil" ao lado de "payload" na primeira menção; "fuselagem", "tubeira", "anteparo".
- Negrito para ênfase emocional. Negrito só para tokens técnicos e métricas.
