# MOVA STUDIO® — site editável

## Estrutura
- `index.html`: conteúdo, textos, seções e portfólio.
- `style.css`: cores, fontes, layout, animações e versão mobile.
- `script.js`: menu mobile, carrossel, ano automático e WhatsApp.
- `images/`: coloque aqui suas fotos e artes.

## Como usar
1. Extraia o ZIP.
2. Abra `index.html` no navegador para visualizar.
3. Edite com VS Code, Notepad++ ou outro editor de código.

## Personalizar cores
No início de `style.css`, edite `:root`: `--green`, `--cream`, `--paper` e `--lime`.

## Trocar uma arte por imagem
No HTML, substitua o conteúdo de um bloco `.tile` por:
```html
<article class="tile image-tile">
  <img src="images/minha-arte.jpg" alt="Descrição da arte">
</article>
```
E acrescente ao final de `style.css`:
```css
.image-tile { padding: 0; }
.image-tile img { width: 100%; height: 100%; object-fit: cover; display: block; }
```
Use o mesmo princípio para trocar as artes `.art` do portfólio.

## WhatsApp
No início de `script.js`, altere `WHATSAPP_NUMBER` para seu número com país e DDD, sem espaços nem símbolos. Exemplo fictício: `5511999999999`.

As artes atuais são exemplos conceituais: troque-as pelos trabalhos reais antes de publicar.
