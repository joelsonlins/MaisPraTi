const prompt = require("prompt-sync")();
// Conte o número de dígitos de um número

// Escreva um programa que use um loop do while para contar o número de dígitos de um número fornecido (por exemplo, 12345 tem 5 dígitos).

// Dica: Use operações de divisão para reduzir o número até que ele seja zero.

let numero = Number(prompt('Digite um número para contar os dígitos: '));
let digitos = 0;

do {
    
    numero = (numero - (numero % 10)) / 10;
    digitos++;
} while (numero > 0);

console.log('O número de dígitos é:', digitos);
