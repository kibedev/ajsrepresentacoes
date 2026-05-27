# JS Representações — Seção Área de Atuação

## O que tem aqui

- area-de-atuacao.html — arquivo completo, pronto pra abrir no navegador
  ou colar a seção no seu site.

## Como usar no seu site

1. Abra area-de-atuacao.html e copie:
   - Os 2 <link> de fontes do Google (cole no <head> do seu site)
   - O bloco <style> ... </style> inteiro
   - A <section class="area-atuacao"> ... </section>

2. Cole tudo dentro do <body> do seu site, onde quiser que a seção apareça.

## Recursos

- Pure HTML + CSS + SVG. ZERO JavaScript, ZERO imagens.
- Pinos animados (efeito pulse) sobre João Pessoa, Recife e Maceió.
- Responsivo: empilha vertical no mobile abaixo de 880px.
- Cores da marca: verde-lima #b5ee3a sobre fundo escuro #0b0d0a.

## Personalização

Os 3 pinos estão em:
  <g class="pin-group" transform="translate(X, Y)"> ... </g>

Pra adicionar mais cidades, duplique um bloco de pino e ajuste:
  - transform="translate(X, Y)" para a posição no mapa
  - O <text> ao lado, com o nome da cidade

Pra mudar a cor do pino, edite no CSS:
  .pin-dot-outer { fill: #b5ee3a; }
  .pin-pulse { fill: #b5ee3a; }
