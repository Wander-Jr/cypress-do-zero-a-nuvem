# Cypress do Zero à Nuvem

Este repositório contém o projeto do curso **"Cypress, do Zero à Nuvem"** (Escola Talking About Testing), com exemplos de testes end-to-end em Cypress para uma aplicação web simples.

## Estrutura do repositório

- `cypress-do-zero-a-nuvem/`
  - `package.json` - dependências e scripts do curso
  - `cypress/` - testes, comandos customizados, fixtures, vídeos e downloads
  - `lessons/` - conteúdo do curso, exercícios e documentação didática
  - `src/` - aplicação de exemplo usada nos testes (`index.html`, `privacy.html`, `script.js`, `style.css`)

## Pré-requisitos

- Node.js 18+ e npm
- Git (opcional, para clonar)

## Instalação

1. Entre na pasta do curso:

```bash
cd cypress-do-zero-a-nuvem
```

2. Instale dependências:

```bash
npm install
```

## Scripts úteis

- Abrir Cypress UI:

```bash
npm run cy:open
```

- Executar testes em modo headless:

```bash
npm run cy:run
```

- Abrir Cypress com viewport de mobile:

```bash
npm run cy:open:mobile
```

## Como usar

1. Execute `npm run cy:open` e selecione um teste em `cypress/e2e`.
2. Use o painel do Cypress para inspecionar as ações e debugar.
3. Para CI, execute `npm run cy:run`.

## O que está sendo testado

O projeto contém exemplos de automação para:
- Interação com botões
- Uso de `checkbox`, `radio` e `select`
- Upload de arquivos
- Verificação de textos e links
- Recursos de comandos customizados em `cypress/support/commands.js`

## Referências

- Cypress docs: https://docs.cypress.io
- Curso: "Cypress, do Zero à Nuvem"

---

> Este README foi gerado com base no projeto existente e na estrutura de curso em `cypress-do-zero-a-nuvem/`.
