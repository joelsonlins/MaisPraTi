const prompt = require("prompt-sync")();

/*
Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar
utilizando uma estrutura de controle if.
*/
let numero = prompt("Digite um número: ");
if (numero % 2 == 0) {
  console.log("O número é par");
} else {
  console.log("O número é ímpar");
}
