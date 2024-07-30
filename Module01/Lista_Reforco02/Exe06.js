const prompt = require("prompt-sync")();
// 6 - Verifique se um número é palíndromo

// Escreva um programa que use um loop while para verificar se um número 
// fornecido (por exemplo, 121) é um palíndromo. Um número é palíndromo se ele é igual ao seu reverso

let num = Number(prompt('Digite um número para inverter os dígitos: '));
let numInter = 0;
let palindromo = num
while (num > 0) {
    let digito = num % 10;
    
    numInter = (numInter * 10) + digito;
    
    num = (num - (num % 10)) / 10;
}

if (palindromo==numInter){
    console.log("O número é um palíndromo")
}else{
    console.log("O número não é um palíndromo")
}

