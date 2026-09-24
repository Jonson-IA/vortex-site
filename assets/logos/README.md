# Logos de patrocinadores

Um arquivo por patrocinador, nomeado em kebab-case pelo nome do patrocinador.

- Formato: **PNG com fundo transparente** ou **SVG**. Sem JPG (fundo branco aparece).
- Altura útil: ~200px para PNG (a caixa no site tem 96px; o dobro cobre telas 2x).
- O site aplica `grayscale` no repouso e devolve a cor no hover — logos coloridos funcionam bem.

Arquivos esperados pelos patrocinadores já listados no site:

- `prograd-unesp.png`
- `solidworks.png`

Já presentes: `ansys.svg`, `jlcpcb.svg`, `easyeda.png`, `paulinho-lanches.png`.

Enquanto um arquivo não existir, aquele patrocinador aparece como wordmark de texto.
Isso é comportamento previsto, não um defeito.

## Para adicionar um patrocinador

1. Coloque o arquivo de logo aqui.
2. Em `index.html`, dentro de `.sponsors__list`, acrescente o bloco do patrocinador
   (há um modelo comentado logo abaixo do último `.sponsor`).
3. Registre o patrocinador em `CONTENT.md`, na tabela da seção 8.
