// Calcule o IMC e determine a categoria

// Escreva um programa que leia o peso (kg) e a altura (m) de uma
// pessoa, calcule o Índice de Massa Corporal (IMC) e use uma estrutura
// if/else para determinar a categoria:
//             Abaixo do peso: IMC < 18.5
//             Peso normal: IMC 18.5 - 24.9
//             Sobrepeso: IMC 25 - 29.9
//             Obesidade grau I: IMC 30 - 34.9
//             Obesidade grau II: IMC 35 - 39.9
//             Obesidade grau III: IMC >= 40
// Dica: O IMC é calculado como peso dividido pela altura ao quadrado (IMC = peso / altura²).

const prompt = require("prompt-sync")();

let peso = Number(prompt("Digite seu peso(kg): "))
let altura = Number(prompt("Digite sua altura(m): "))
let imc = (peso/(altura**2))

if (imc<18.5){
    console.log("Abaixo do peso.")
}else if((imc>=18.5) && (imc<=24.9)){
    console.log("Peso normal.")
}else if((imc>=25) && (imc<=29.9)){
    console.log("Sobrepeso.")
}else if((imc>=30) && (imc<=34.9)){
    console.log("Obesidade grau I.")
}else if((imc>=35) && (imc<=39.9)){
    console.log("Obesidade grau II.")
}else{
    console.log("Obesidade grau III.")
}