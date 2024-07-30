// **Verifique se um ano é bissexto**
// Escreva um programa que leia um ano e use uma estrutura if para
// verificar se o ano é bissexto. Um ano é bissexto se for divisível por 4,
// mas não por 100, exceto se também for divisível por 400. Imprima uma
// mensagem apropriada.
const prompt = require("prompt-sync")();

let anoBissexto = Number(prompt("Digite o ano escolhido: "))

if (((anoBissexto%4===0) && (anoBissexto%100!==0)) || (anoBissexto%400===0)){
    console.log("O ano é Bissexto!")
}

if (!(((anoBissexto%4===0) && (anoBissexto%100!==0)) || (anoBissexto%400===0))){
    console.log("O ano não é Bissexto!")
}

(5 + 2) + 2