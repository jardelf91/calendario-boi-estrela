# Calendario Boi Estrela (calendario-boi-estrela)

A project display Google Calendar Events

## Install the dependencies
```bash
yarn
# or
npm install
```

### Start the app in development mode (hot-code reloading, error reporting, etc.)
```bash
quasar dev
```


### Lint the files
```bash
yarn lint
# or
npm run lint
```


### Format the files
```bash
yarn format
# or
npm run format
```



### Build the app for production
```bash
quasar build
```

### Customize the configuration
See [Configuring quasar.config.js](https://v2.quasar.dev/quasar-cli-vite/quasar-config-js).
# calendario-boi-estrela


# Guia Passo a Passo para Atualizar e Publicar no GitHub Pages

Este guia descreve os passos necessários para fazer alterações em seu projeto, fazer o commit dessas alterações e publicá-las no GitHub Pages.

## Passo 1: Fazer Alterações no Código

Faça as alterações desejadas nos arquivos do seu projeto localmente.

## Passo 2: Fazer o Build do Projeto

Execute o comando para fazer o build do seu projeto Quasar:

```bash
quasar build
```

## Passo 3: Adicionar e Fazer o Commit das Alterações
Adicione e faça o commit das alterações utilizando os comandos do Git:

```bash
git add .
git commit -m "Descrição das alterações"
```

## Passo 4: Fazer o Push das Alterações para o GitHub
Faça o push das alterações para o repositório remoto no GitHub:

```bash
git push origin main
```

## Passo 5: Publicar no GitHub Pages
Atualize o GitHub Pages com os novos arquivos gerados pelo build:

```bash
npx gh-pages -d dist/spa
```
