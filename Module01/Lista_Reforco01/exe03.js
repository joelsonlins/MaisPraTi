// 3 - Calcule a média de três números e determine o conceito
// Escreva um programa que leia três notas de um aluno, calcule a
// média e use uma estrutura if/else para determinar o conceito (A, B, C,
// D, E, F) baseado na média. Imprima o conceito.

// Dica: A média é a soma das notas dividida por três. Defina os intervalos para cada conceito.

const prompt = require("prompt-sync")();

let nota01 = Number(prompt("Digite a primeira nota: "))
let nota02 = Number(prompt("Digite a segunda nota: "))
let nota03 = Number(prompt("Digite a terceira nota: "))

let media = (nota01 + nota02 + nota03)/3

if (media>=9){
    console.log("Nota Final: A")
}else if(media>=8 && media<=8.9){
    console.log("Nota Final: B")
}else if(media>=7 && media<=7.9){
    console.log("Nota Final: C")
}else if(media>=6 && media<=6.9){
    console.log("Nota Final: D")
}else if(media>=5 && media<=5.9){
    console.log("Nota Final: E")
}else{
    console.log("Nota Final: F")
}
console.log("Média do aluno: "+media)