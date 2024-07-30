// Verifique se um número é par ou ímpar
// Escreva um programa que leia um número e use uma estrutura
// if/else para verificar se o número é par ou ímpar. Imprima uma mensagem
// apropriada.

const prompt = require("prompt-sync")();

let num = Number(prompt("Digite um número para definir se é par ou impar: "))

if (num%2===0){
    console.log("o número digitado é par.")
}else{
    console.log("O número digitado é impar.")
}