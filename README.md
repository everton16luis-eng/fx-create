# fx-create

CLI para criação rápida de projetos a partir de templates personalizados.

O objetivo do `fx-create` é facilitar a criação de novos projetos sem precisar montar manualmente toda a estrutura de pastas e arquivos sempre que um projeto é iniciado.

Com ele, você pode manter vários padrões de projeto prontos e reutilizá-los sempre que precisar.

---

## Funcionalidades

- Criação de projetos por linha de comando
- Escolha interativa do nome do projeto
- Escolha do template desejado
- Cópia automática da estrutura de pastas e arquivos
- Suporte a múltiplos templates
- Fácil expansão com novos padrões
- Uso global através do terminal

---

## Estrutura do projeto

```text
fx-create/
├── index.js
├── package.json
├── package-lock.json
├── README.md
├── LICENSE
├── .gitignore
└── templates/
    ├── html-basico/
    ├── node-postgres/
    └── outros...
```

Cada pasta dentro de `templates/` representa um padrão de projeto diferente.

Exemplo:

```text
templates/
├── html-basico/
│   ├── index.html
│   ├── css/
│   │   └── style.css
│   └── js/
│       └── main.js
│
└── node-postgres/
    │
    ├── backend
    │   └── src/
    │       ├── config/
    │       ├── controllers/
    │       ├── models/
    │       ├── routes/
    │       ├── public/
    │       │   ├── assets/
    │       │   └── img/
    │       └── server.js
    └── frontend/
        ├── css/
        ├── script/
        └── index.html

```

---

## Requisitos

Antes de utilizar o projeto, é necessário ter instalado:

- Node.js
- npm
- Git

Para verificar:

```bash
node --version
npm --version
git --version
```

---

## Instalação

Clone o repositório:

```bash
git clone https://github.com/SEU-USUARIO/fx-create.git
```

Entre na pasta:

```bash
cd fx-create
```

Instale as dependências:

```bash
npm install
```

Registre o comando globalmente:

```bash
npm link
```

Depois disso, o comando poderá ser utilizado de qualquer pasta:

```bash
fx-create
```

---

## Como usar

Abra o terminal na pasta onde deseja criar o novo projeto:

```bash
cd C:\Projetos
```

Execute:

```bash
fx-create
```

O CLI perguntará o nome do projeto:

```text
? Qual o nome do projeto?
> meu-projeto
```

Depois será exibida a lista de templates disponíveis:

```text
? Qual template deseja usar?

❯ html-basico
  node-postgres
```

Após escolher o template, o projeto será criado automaticamente.

Exemplo:

```text
C:\Projetos\
└── meu-projeto/
    ├── index.html
    ├── css/
    └── js/
```

---

## Criando novos templates

Para adicionar um novo padrão de projeto, basta criar uma nova pasta dentro de:

```text
templates/
```

Exemplo:

```text
templates/loja-online/
```

Depois coloque dentro dela toda a estrutura que deseja reutilizar:

```text
templates/
└── loja-online/
    ├── index.html
    ├── css/
    │   ├── style.css
    │   └── responsive.css
    ├── js/
    │   ├── app.js
    │   └── api.js
    ├── img/
    └── components/
```

Se o CLI estiver configurado para detectar automaticamente as pastas dentro de `templates`, o novo template aparecerá automaticamente no menu.

Exemplo:

```text
? Qual template deseja usar?

❯ html-basico
  node-postgres
  dashboard
  loja-online
```

---

## Como os templates funcionam

Quando um template é selecionado, o `fx-create` copia todos os arquivos e pastas daquele template para a pasta do novo projeto.

Por exemplo:

```text
templates/dashboard/
```

pode conter:

```text
dashboard/
├── index.html
├── css/
│   ├── style.css
│   └── responsive.css
├── js/
│   ├── app.js
│   └── api.js
└── img/
```

Ao criar:

```text
meu-dashboard
```

o resultado será:

```text
meu-dashboard/
├── index.html
├── css/
│   ├── style.css
│   └── responsive.css
├── js/
│   ├── app.js
│   └── api.js
└── img/
```

---

## Atualizando o CLI

Quando houver novas alterações no repositório:

```bash
git pull
```

Depois atualize as dependências:

```bash
npm install
```

Como o `npm link` aponta para a pasta local do projeto, normalmente não é necessário executá-lo novamente.

---

## Desenvolvimento

Para testar o CLI diretamente sem utilizar o comando global:

```bash
node index.js
```

Para registrar novamente o comando:

```bash
npm link
```

Para verificar onde o comando está instalado:

```bash
where fx-create
```

No PowerShell:

```powershell
Get-Command fx-create
```

---

## package.json

A configuração responsável por transformar o projeto em um comando é:

```json
"bin": {
  "fx-create": "./index.js"
}
```

E o arquivo `index.js` deve começar com:

```javascript
#!/usr/bin/env node
```

---

## Tecnologias

- Node.js
- JavaScript
- Inquirer
- File System (`fs`)
- Path
- Git

---

## Objetivo futuro

O projeto poderá evoluir para incluir:

- criação automática de projetos Node.js
- Express
- PostgreSQL
- React
- FastAPI
- dashboards administrativos
- instalação automática de dependências
- inicialização automática do Git
- criação de arquivos `.env`
- abertura automática do projeto no VS Code
- parâmetros via terminal
- templates personalizados por usuário

Exemplo futuro:

```bash
fx-create sistema-vendas --template node-postgres
```

Ou:

```bash
fx-create meu-site --template html-basico
```

---

## Autor

Everton Luis Vieira

---

## Licença

Este projeto pode ser distribuído sob a licença MIT.