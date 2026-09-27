#!/usr/bin/env node

import inquirer from "inquirer";

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
    default: "meu-projeto"
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
      },
    ]
  }
]);

console.log("\nProjeto escolhido:");
console.log("Nome:", respostas.nomeProjeto);
console.log("Tipo:", respostas.tipoProjeto);