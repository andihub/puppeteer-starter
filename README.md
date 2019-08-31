# puppeteer-starter

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

### Description

Simple puppeteer starter project with enabled:

- TypeScript
- nodemon
- ts-node
- debugging for Visual Studio Code incl. ts-node debugging

based on [andihub/node-typescript-ts-node-nodemon-vscode-debug-starter](https://github.com/andihub/node-typescript-ts-node-nodemon-vscode-debug-starter)

### Getting started

`git clone --depth=1 git@github.com:andihub/puppeteer-starter.git my-awesome-project`

optional:
cd my-awesome-project
rm -rf .git

### Usage

- `yarn start` compile ts to `dist`folder
- `yarn dev` run nodemon

Debugging in VSCode:

- `Debug build` build (transpile ts to js) and debug `dist`
- `Debug ts-node` debug ts-node
