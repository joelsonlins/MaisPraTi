// **Verifique se um número é positivo, negativo ou zero**
// Escreva um programa que leia um número e use uma estrutura if
// para verificar se o número é positivo, negativo ou zero. Imprima uma
// mensagem apropriada para cada caso.

const prompt = require("prompt-sync")();
let num = Number(prompt("Digite um número: "))

if (num>0) {
    console.log("O número é positivo!")
}

if (num<0){
    console.log("O número é negativo!")
}

if (num===0){
    console.log("O número é igual a zero!")
}

if (isNaN(num)){
    console.log("Digite um número válido!")
}
