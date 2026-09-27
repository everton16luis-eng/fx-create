#!/usr/bin/env node

import inquirer from "inquirer";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log(`
===============================
         FX CREATE
===============================
`);

const respostas = await inquirer.prompt([
  {
    type: "input",
    name: "nomeProjeto",
    message: "Qual o nome do projeto?",
    default: "meu-projeto",

    validate(valor) {
      const nome = valor.trim();

      if (!nome) {
        return "Digite um nome para o projeto.";
      }

      return true;
    }
  },
  {
    type: "select",
    name: "tipoProjeto",
    message: "Qual tipo de projeto deseja criar?",
    choices: [
      {
        name: "Node + Express + PostgreSQL",
        value: "node-postgres"
      },
      {
        name: "HTML + CSS + JS",
        value: "html-basico"
      }
    ]
  }
]);

const nomeProjeto = respostas.nomeProjeto.trim();

const pastaTemplates = path.join(
  __dirname,
  "templates"
);

const origemTemplate = path.join(
  pastaTemplates,
  respostas.tipoProjeto
);

const destinoProjeto = path.join(
  process.cwd(),
  nomeProjeto
);

console.log("\nProjeto escolhido:");
console.log("Nome:", nomeProjeto);
console.log("Tipo:", respostas.tipoProjeto);

// Verifica se o template existe
if (!fs.existsSync(origemTemplate)) {
  console.log(`
Erro: o template "${respostas.tipoProjeto}" não foi encontrado.

Esperado em:
${origemTemplate}
`);

  process.exit(1);
}

// Verifica se o projeto já existe
if (fs.existsSync(destinoProjeto)) {
  console.log(`
Erro: já existe uma pasta chamada "${nomeProjeto}".

Local:
${destinoProjeto}
`);

  process.exit(1);
}

console.log("\nCriando projeto...");

// Copia todo o template
fs.cpSync(
  origemTemplate,
  destinoProjeto,
  {
    recursive: true
  }
);

// ===============================
// ATUALIZA O NOME NO PACKAGE.JSON
// ===============================

const caminhoPackage = path.join(
  destinoProjeto,
  "package.json"
);

if (fs.existsSync(caminhoPackage)) {

  const packageJson = JSON.parse(
    fs.readFileSync(caminhoPackage, "utf8")
  );

  const nomePackage = nomeProjeto
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-_]/g, "");

  packageJson.name = nomePackage;

  fs.writeFileSync(
    caminhoPackage,
    JSON.stringify(packageJson, null, 2)
  );

  console.log(`✓ package.json atualizado`);
  console.log(`✓ Nome do pacote: ${nomePackage}`);
}

console.log(`
===============================
    PROJETO CRIADO!
===============================

Nome:
${nomeProjeto}

Template:
${respostas.tipoProjeto}

Local:
${destinoProjeto}

Para abrir no VS Code:

cd "${nomeProjeto}"
code .
`);