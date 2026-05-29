# Marcas Representadas — com painel de hover

## Arquivos
- marcas-representadas.html  -> implementação pronta (HTML + CSS + JS puro)
- assets/parceiros/          -> os 10 logos em PNG
- PROMPT-PARA-CLAUDE.txt      -> texto pronto pra pedir ao Claude adaptar

## Como usar como referência pro Claude
1. Abra uma conversa com o Claude (ou Claude Code) dentro do seu projeto.
2. Cole o conteúdo de PROMPT-PARA-CLAUDE.txt.
3. Anexe / cole o conteúdo de marcas-representadas.html como referência.
4. Diga qual framework seu site usa (HTML puro, React, Next, Vue...).

## Como editar as descrições das marcas
No HTML, cada card tem atributos data-*:
  data-name   -> nome da marca
  data-cat    -> categoria (ex: Pneus, Amortecedores)
  data-desc   -> descrição que aparece no painel
  data-tags   -> chips de destaque, separados por | (ex: "Pneus|Nacional|Trail")

As descrições atuais são PLACEHOLDER — ajuste com as informações reais de cada marca.
