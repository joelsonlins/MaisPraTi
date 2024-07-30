

// Calcule a soma dos dígitos de um número
       
// Escreva um programa que use um loop do while para calcular a soma dos dígitos de um número fornecido (por exemplo, a soma dos dígitos de 1234 é 10).

// Dica: Use operações de módulo para extrair os dígitos e depois some-os.

const prompt = require("prompt-sync")();

let n = Number(prompt('Digite um número para calcular a soma dos dígitos: '));
let sum = 0;

do {
    let digito = n % 10;  
    sum += digito;  
    n = (n - digito) / 10;  
} while (n > 0);

console.log('A soma dos dígitos é:', sum);
