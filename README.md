# 🐉 Tibia Tracker — Diário de Aventuras

Página para gerenciar seu progresso no Tibia. A tela inicial é um mapa ilustrado
com áreas clicáveis que levam a cada seção:

| Área no mapa | Leva para | O que gerencia |
|---|---|---|
| 🏰 Castelo | Visão geral | Resumo do reino (totais e progresso) |
| ⚔ Cavaleiro | Personagens | Seus chars: nome, vocação, nível, mundo |
| 💰 Tesouro | Gold | Saldo, entradas/saídas, conversão gp/pp/cc |
| 🐉 Dragão | Objetivos | Metas e status (não iniciado / em andamento / concluído) |

Os dados são salvos no **seu navegador** (localStorage) — ou seja, ficam no seu
dispositivo, sem servidor de banco de dados.

## Rodar localmente

```bash
npm install
npm start
```

Acesse `http://localhost:3000`.

> Dica: como é um arquivo só, você também pode abrir `public/index.html`
> direto no navegador (clique duplo) que funciona, inclusive salvando os dados.

## Subir no GitHub

Crie um repositório vazio no GitHub (sem README) e rode:

```bash
git init
git add .
git commit -m "primeiro commit: tibia tracker"
git branch -M main
git remote add origin https://github.com/SEU_USUARIO/tibia-tracker.git
git push -u origin main
```

## Publicar no Railway

1. No Railway: **New Project → Deploy from GitHub repo** e escolha este repositório.
2. O Railway detecta o Node automaticamente e roda `npm start`.
3. Em **Settings → Networking → Generate Domain** para ter uma URL pública.

A cada `git push` na branch `main`, o Railway faz um novo deploy sozinho.

## Trocar a imagem do mapa

A imagem está embutida no `public/index.html` (em base64) e também salva em
`public/assets/map.jpg`. Para usar outra imagem, troque o `src` da tag `<img>`
no início do `<body>` por `assets/map.jpg` e ajuste as posições dos `.hotspot`
(valores em % de `left/top/width/height`) para casar com a nova arte.
