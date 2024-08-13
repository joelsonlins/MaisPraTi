const prompt = require("prompt-sync")();
/*
Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e
determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade)
utilizando if-else.
*/
let peso = prompt("Digite o seu peso (em kg): ");
let altura = prompt("Digite a sua altura (em metros): ");
let imc = peso / (altura * altura);
if (imc < 18.5) {
  console.log("Você está com baixo peso.");
} else if (imc < 25) {
  console.log("Você está com peso normal.");
} else if (imc < 30) {
  console.log("Você está com sobrepeso.");
} else {
  console.log("Você está com obesidade.");
}
console.log("Seu IMC é: " + imc.toFixed(2));
