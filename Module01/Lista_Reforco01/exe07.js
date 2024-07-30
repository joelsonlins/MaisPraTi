// Calcule o valor de uma expressão matemática simples

// Escreva um programa que leia dois números e um operador (+, -, *,
// /) e use uma estrutura switch para calcular o resultado da operação.
// Imprima o resultado.

// Dica: Utilize os operadores aritméticos em cada caso do switch.

const prompt = require("prompt-sync")();

let num01 = Number(prompt("Digite o primeiro número: "));
let num02 = Number(prompt("Digite o segundo número: "));
console.log("Escolha um dos operadores abaixo: ")
console.log("Adição        -> +")
console.log("Subtração     -> -")
console.log("Multiplicação -> *")
console.log("Divisão       -> /")

let operador = prompt("Digite sua escolha:");

switch (operador) {
  case "+":
    console.log("Resultado: ",num01 + num02);
    break;
  case "-":
    console.log("Resultado: ",num01 - num02);
    break;
  case "*":
    console.log("Resultado: ",num01 * num02);
    break;
  case "/":
    console.log("Resultado: ",num01 / num02);
    break;
  default:
    console.log("Operador inválido!")
}
