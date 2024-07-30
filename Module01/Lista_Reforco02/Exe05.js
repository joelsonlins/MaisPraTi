// Inverta os dígitos de um número


// Escreva um programa que use um loop while para inverter os dígitos de um número fornecido (por exemplo, 1234 deve ser impresso como 4321).

// Dica: Use operações de módulo e divisão para extrair os dígitos.

const prompt = require("prompt-sync")();
let num = Number(prompt('Digite um número para inverter os dígitos: '));
let numInter = 0;

while (num > 0) {
    let digito = num % 10;
    
    numInter = (numInter * 10) + digito;
    
    num = (num - (num % 10)) / 10;
}

console.log('Número invertido:', numInter);
