// Verifique o dia da semana
// Escreva um programa que leia um número de 1 a 7 e use uma
// estrutura switch para imprimir o dia da semana correspondente. (1 =
// Domingo, 2 = Segunda-feira, etc.)

const prompt = require("prompt-sync")();

let diaDaSemana = Number(prompt("Digite o dia da semana(De 1 até 7): "))

switch (diaDaSemana) {
    case 1:
        console.log("Domingo")
        break
    case 2:
        console.log("Segunda-Feira")
        break
    case 3:
        console.log("Terça-Feira")
        break
    case 4:
        console.log("Quarta-Feira")
        break
    case 5:
        console.log("Quinta-Feira")
        break
    case 6:
        console.log("Sexta-Feira")
        break
    case 7:
        console.log("Sábado")
        break
    default:
        console.log("Dia inválido")
}