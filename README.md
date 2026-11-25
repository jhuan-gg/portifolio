# Jhuan Gabriel — Portfólio Full Stack

Portfólio estático em HTML, CSS e JavaScript com GSAP 3.13, ScrollTrigger, MotionPathPlugin e animações de notebook em CSS 3D.

## Executar localmente

Abra a pasta no VS Code e use a extensão Live Server ou, com Node.js instalado, execute:

```bash
npx serve .
```

O projeto já contém as bibliotecas GSAP e os ícones SVG. Não há etapa de compilação.

## Editar

- `index.html`: conteúdo, seções, biografia, experiências, competências e contatos.
- `style.css`: layout, tema, geometria do notebook e responsividade.
- `main.js`: animações GSAP, textos do notebook, trajetória, abertura/fechamento e interações.
- `assets/`: fotografia e marca.
- `icons/`: ícones das tecnologias e práticas.
- `vendor/`: bibliotecas de animação locais.

## Hospedar

Publique os arquivos desta pasta em um servidor estático. Na Vercel, use o preset Other, sem comando de build e com diretório de saída na raiz do projeto (`.`). Também é possível servir a pasta diretamente com Nginx.

O conteúdo foi importado do portfólio original fornecido por Jhuan Gabriel. A seção de experiências contém a carreira real. A versão atual inclui a nova foto profissional, animação de ampliação do retrato, giros 3D variados do notebook e 31 competências, incluindo AI-assisted development, programação manual e debugging.
