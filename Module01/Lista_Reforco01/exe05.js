// Verifique a categoria de um nadador

// Escreva um programa que leia a idade de um nadador e use uma estrutura
// if/else para determinar a categoria do nadador de acordo com a idade:
//             Infantil A: 5 - 7 anos
//             Infantil B: 8 - 10 anos
//             Juvenil A: 11 - 13 anos
//             Juvenil B: 14 - 17 anos
//             Adulto: 18 anos ou mais

const prompt = require("prompt-sync")();

let idade = Number(prompt("Informe a idade do nadador: "));
let categoria;
if (idade >= 18) {
  categoria = "Adulto";
} else if (idade >= 14 && idade <= 17) {
  categoria = "Juvenil B";
} else if (idade >= 11 && idade <= 13) {
  categoria = "Juvenil A";
} else if (idade >= 8 && idade <= 10) {
  categoria = "Infantil B";
} else {
  categoria = "Infantil A";
}

if (idade >= 5) {
  console.log("O nadador com idade ", idade, " esta na categoria" + categoria);
} else {
  console.log("Idade impossibilitada de competir");
}
