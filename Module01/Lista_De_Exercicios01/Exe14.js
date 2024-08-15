/*
Crie um programa que calcula o fatorial de um número fornecido pelo usuário
utilizando um loop for ou while.
*/
let numero = Number(prompt("Digite um número: "));
let resultado = 1;
for (let i = 1; i <= numero; i++) {
  resultado *= i;
}
console.log(`O fatorial de ${numero} é ${resultado}.`);
