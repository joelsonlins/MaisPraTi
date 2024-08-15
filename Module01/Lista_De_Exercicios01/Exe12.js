/*
Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a
10) utilizando um loop for.
*/
const prompt = require("prompt-sync")();
let numero = Number(prompt("Digite um número de 1 a 10: "));
let resultado = 0;
for (let i = 1; i <= 10; i++) {
  resultado = numero * i;
  console.log(`${numero} x ${i} = ${resultado}`);
};
